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
  sign: '%',
  apiName: 'acos',
};
export const REVENUE = {
  displayName: 'Revenue',
  sign: '$',
  apiName: 'revenue',
};
export const CLICKS = {
  displayName: 'Clicks',
  sign: '',
  apiName: 'clicks',
};
export const SPEND = {
  displayName: 'Spend',
  sign: '$',
  apiName: 'spend',
};
export const ABSOLUTEACOS = {
  displayName: 'Total Acos',
  sign: '%',
  apiName: 'absoluteAcos',
};
export const ABSOLUTEREVENUE = {
  displayName: 'Total Revenue',
  sign: '$',
  apiName: 'absoluteRevenue',
};
export const IMPRESSIONS = {
  displayName: 'Impressions',
  sign: '',
  apiName: 'impressions',
};

const allConstants = [ACOS, REVENUE, CLICKS, SPEND, ABSOLUTEACOS, ABSOLUTEREVENUE, IMPRESSIONS];

export const findConstant = apiName => allConstants
  .filter(constant => constant.apiName === apiName)[0];
