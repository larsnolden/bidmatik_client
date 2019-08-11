import { compose, withProps, branch, renderComponent} from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import * as R from 'ramda';

import PerformancePanelComponent from './PerformancePanelComponent';


const GET_ALL_CAMPAIGNS = gql`
  query {
    campaigns{
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
      sales
      acos
      portfolio
    }
  }
`;

const addSummedProps = withProps(({ data }) => {
  const { campaigns } = data;
  const reduced = {
    acos: R.pipe(R.map(R.prop('acos')), R.mean)(campaigns),
    budget: R.pipe(R.map(R.prop('budget')), R.sum)(campaigns),
    clicks: R.pipe(R.map(R.prop('clicks')), R.sum)(campaigns),
    cpc: R.pipe(R.map(R.prop('cpc')), R.mean)(campaigns),
    ctr: R.pipe(R.map(R.prop('ctr')), R.mean)(campaigns),
    impressions: R.pipe(R.map(R.prop('impressions')), R.sum)(campaigns),
    orders: R.pipe(R.map(R.prop('orders')), R.sum)(campaigns),
    sales: R.pipe(R.map(R.prop('sales')), R.sum)(campaigns),
    spend: R.pipe(R.map(R.prop('spend')), R.sum)(campaigns),
  };
  return {
    metrics: reduced,
    loading: false,
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
  graphql(GET_ALL_CAMPAIGNS),
  waitWhileLoading(PerformancePanelComponent),
  addSummedProps,
  setLoadingFalse,
)(PerformancePanelComponent);
