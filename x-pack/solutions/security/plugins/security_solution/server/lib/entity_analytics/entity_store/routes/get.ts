/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { IKibanaResponse, Logger } from '@kbn/core/server';
import { buildSiemResponse } from '@kbn/lists-plugin/server/routes/utils';
import { transformError } from '@kbn/securitysolution-es-utils';
import { buildRouteValidationWithZod } from '@kbn/zod-helpers';

import { EntityType } from '../../../../../common/search_strategy';
import type { GetEntityEngineResponse } from '../../../../../common/api/entity_analytics/entity_store/engine/get.gen';
import { GetEntityEngineRequestParams } from '../../../../../common/api/entity_analytics/entity_store/engine/get.gen';
import { API_VERSIONS, APP_ID } from '../../../../../common/constants';
import type { EntityAnalyticsRoutesDeps } from '../../types';

export const getEntityEngineRoute = (
  router: EntityAnalyticsRoutesDeps['router'],
  logger: Logger
) => {
  router.versioned
    .get({
      access: 'public',
      path: '/api/entity_store/engines/{entityType}',
      security: {
        authz: {
          requiredPrivileges: ['securitySolution', `${APP_ID}-entity-analytics`],
        },
      },
    })
    .addVersion(
      {
        version: API_VERSIONS.public.v1,
        validate: {
          request: {
            params: buildRouteValidationWithZod(GetEntityEngineRequestParams),
          },
        },
      },

      async (context, request, response): Promise<IKibanaResponse<GetEntityEngineResponse>> => {
        const siemResponse = buildSiemResponse(response);

        try {
          const secSol = await context.securitySolution;
          const body = await secSol
            .getEntityStoreDataClient()
            .get(EntityType[request.params.entityType]);

          return response.ok({ body });
        } catch (e) {
          logger.error('Error in GetEntityEngine:', e);
          const error = transformError(e);
          return siemResponse.error({
            statusCode: error.statusCode,
            body: error.message,
          });
        }
      }
    );
};
