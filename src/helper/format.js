import * as R from 'ramda';

export const formatNumber = R.compose(
  R.reverse,
  R.join(','),
  R.splitEvery(3),
  R.reverse,
  String,
);

export const formatPercentage = (n, toN = 2) => Number(n).toFixed(toN);
