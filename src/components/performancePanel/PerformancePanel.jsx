import {
  compose,
  withProps,
  branch,
  renderComponent,
} from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as R from 'ramda';
import moment from 'moment';

import PerformancePanelComponent from './PerformancePanelComponent';


const GET_ACCOUNT_PERFORMANCE = gql`
  query performance_and_campaigns($from: Date, $to: Date){
    accountPerformance(from: $from, to: $to){
      budget
      impressions
      clicks
      ctr
      spend
      cpc
      orders
      revenue
      acos
      absoluteRevenue
      absoluteAcos
      date
    }
  }
`;

const addProps = withProps(({ data  }) => {
  const { accountPerformance } = data;
  //  total data to display in metric selector
  const reduced = {
    budget: R.pipe(R.map(R.prop('budget')), R.sum)(accountPerformance),
    impressions: R.pipe(R.map(R.prop('impressions')), R.sum)(accountPerformance),
    clicks: R.pipe(R.map(R.prop('clicks')), R.sum)(accountPerformance),
    ctr: R.pipe(R.map(R.prop('ctr')), R.mean)(accountPerformance),
    spend: R.pipe(R.map(R.prop('spend')), R.sum)(accountPerformance),
    cpc: R.pipe(R.map(R.prop('cpc')), R.mean)(accountPerformance),
    orders: R.pipe(R.map(R.prop('orders')), R.sum)(accountPerformance),
    revenue: R.pipe(R.map(R.prop('revenue')), R.sum)(accountPerformance),
    acos: R.pipe(R.map(R.prop('acos')), R.mean)(accountPerformance),
    absoluteRevenue: R.pipe(R.map(R.prop('absoluteRevenue')), R.sum)(accountPerformance),
    absoluteAcos: R.pipe(R.map(R.prop('absoluteAcos')), R.mean)(accountPerformance),
  };
  return {
    accountPerformance,
    totaledAccountPerformance: reduced,
    loading: false,
    dateFrom: data.variables.from,
    dateTo: data.variables.to,
    handleDateRangeChange: ({ dateFrom, dateTo }) => data.refetch({ from: dateFrom, to: dateTo }),
  };
});

const waitWhileLoading = (component, propName = 'data') => branch(
  props => props[propName] && props[propName].loading,
  renderComponent(component),
);

const setLoadingFalse = withProps(() => ({
  loading: false,
}));

export default compose(
  graphql(GET_ACCOUNT_PERFORMANCE, {
    options: {
      variables: {
        from: moment(moment.now()).subtract(60, 'days'),
        to: moment(moment.now()),
      },
    },
  }),
  waitWhileLoading(PerformancePanelComponent),
  addProps,
  setLoadingFalse,
)(PerformancePanelComponent);
