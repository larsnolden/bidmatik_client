import * as R from 'ramda';

export const formatNumber = R.compose(
  R.reverse,
  R.join(','),
  R.splitEvery(3),
  R.reverse,
  String,
  x => x.toFixed(0),
  Number,
);

export const formatPercentage = (n, toN = 2) => Number(n * 100).toFixed(toN);
