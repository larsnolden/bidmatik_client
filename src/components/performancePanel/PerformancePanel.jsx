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


const GET_CAMPAIGNS_AND_PERFORMANCE = gql`
  query performance_and_campaigns($from: Date, $to: Date){
    campaigns(from: $from, to: $to){
      id
      name
      type
      targeting
      budget
      impressions
      clicks
      ctr
      spend
      cpc
      orders
      revenue
      acos
      portfolio
    }
    accountPerformance {
      totalRevenue
      totalAcos
    }
  }
`;

const addProps = withProps(({ data  }) => {
  const { campaigns, accountPerformance } = data;
  const reduced = {
    acos: R.pipe(R.map(R.prop('acos')), R.mean)(campaigns),
    budget: R.pipe(R.map(R.prop('budget')), R.sum)(campaigns),
    clicks: R.pipe(R.map(R.prop('clicks')), R.sum)(campaigns),
    cpc: R.pipe(R.map(R.prop('cpc')), R.mean)(campaigns),
    ctr: R.pipe(R.map(R.prop('ctr')), R.mean)(campaigns),
    impressions: R.pipe(R.map(R.prop('impressions')), R.sum)(campaigns),
    orders: R.pipe(R.map(R.prop('orders')), R.sum)(campaigns),
    revenue: R.pipe(R.map(R.prop('revenue')), R.sum)(campaigns),
    spend: R.pipe(R.map(R.prop('spend')), R.sum)(campaigns),
    totalAcos: accountPerformance.totalAcos,
    totalRevenue: accountPerformance.totalRevenue,
  };
  return {
    metrics: reduced,
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
  graphql(GET_CAMPAIGNS_AND_PERFORMANCE, {
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
