/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { isEqual } from 'lodash';
import { useState } from 'react';
import type { MetricsExplorerMetric } from '../../../../common/http_api/metrics_explorer';

export interface MetricThresholdPrefillOptions {
  groupBy: string | string[] | undefined;
  filterQuery: string | undefined;
  metrics: MetricsExplorerMetric[];
}

export const useMetricThresholdAlertPrefill = () => {
  const [prefillOptionsState, setPrefillOptionsState] = useState<MetricThresholdPrefillOptions>({
    groupBy: undefined,
    filterQuery: undefined,
    metrics: [],
  });

  const { groupBy, filterQuery, metrics } = prefillOptionsState;

  return {
    groupBy,
    filterQuery,
    metrics,
    setPrefillOptions(newState: MetricThresholdPrefillOptions) {
      if (!isEqual(newState, prefillOptionsState)) setPrefillOptionsState(newState);
    },
  };
};
