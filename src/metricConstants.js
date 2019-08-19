import {
  formatPercentage,
  formatNumber,
} from 'helper/format';

// export const metricSymbols = {
//   acos: '%',
//   revenue: '$',
//   clicks: '',
//   spend: '$',
//   absoluteAcos: '%',
//   impressions: '',
//   absoluteRevenue: '$',
// };
// export const metricNames = {
//   acos: 'ACoS',
//   revenue: 'Revenue',
//   clicks: 'Clicks',
//   spend: 'Spend',
//   absoluteAcos: 'Total ACoS',
//   impressions: 'Impressions',
//   absoluteRevenue: 'Total Revenue',
// };


export const ACOS = {
  displayName: 'ACoS',
  symbol: '%',
  apiName: 'acos',
  format: x => formatPercentage(x) + ACOS.symbol,
};
export const REVENUE = {
  displayName: 'Revenue',
  symbol: '$',
  apiName: 'revenue',
  format: x => REVENUE.symbol + formatNumber(x),
};
export const CLICKS = {
  displayName: 'Clicks',
  symbol: '',
  apiName: 'clicks',
  format: x => formatNumber(x),
};
export const SPEND = {
  displayName: 'Spend',
  symbol: '$',
  apiName: 'spend',
  format: x => SPEND.symbol + formatNumber(x),
};
export const ABSOLUTEACOS = {
  displayName: 'Total Acos',
  symbol: '%',
  apiName: 'absoluteAcos',
  format: x => formatPercentage(x) + ABSOLUTEACOS.symbol,
};
export const ABSOLUTEREVENUE = {
  displayName: 'Total Revenue',
  symbol: '$',
  apiName: 'absoluteRevenue',
  format: x => ABSOLUTEREVENUE.symbol + formatNumber(x),
};
export const IMPRESSIONS = {
  displayName: 'Impressions',
  symbol: '',
  apiName: 'impressions',
  format: x => formatNumber(x),
};

const allConstants = [ACOS, REVENUE, CLICKS, SPEND, ABSOLUTEACOS, ABSOLUTEREVENUE, IMPRESSIONS];

export const findConstant = apiName => allConstants
  .filter(constant => constant.apiName === apiName)[0];
