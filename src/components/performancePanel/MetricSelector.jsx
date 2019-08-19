/* eslint-disable no-nested-ternary */
/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import propTypes from 'prop-types';

import { formatNumber } from 'helper/format';
import {
  ACOS,
  REVENUE,
  CLICKS,
  SPEND,
  ABSOLUTEACOS,
  ABSOLUTEREVENUE,
  IMPRESSIONS,
} from 'metricConstants';


const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #FFF;
  padding: 16px 32px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const Item = styled.div`
  background: ${props => props.active ? '#F0F4F8' : 'none'};
  justify-content: center;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: ${props => props.active ? '#243B53' : '#829AB1'};
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  padding: 8px 24px;
  margin: 0 8px 0 8px;

  &:hover {
    background: ${props => props.active ? '#F0F4F8' : 'rgba(240, 244, 248, 0.7)'};
  }

  ${props => props.loading && '-webkit-filter: blur(1px);'}
`;

const Metric = styled.div`
  font-weight: bold;
  font-size: 28px;
  color: ${props => props.active ? props.primary ? '#DE911D' : '#62B0E8' : '#486581'}
`;

const MetricSelector = ({
  acos,
  revenue,
  clicks,
  spend,
  absoluteAcos,
  absoluteRevenue,
  impressions,
  selectedMetrics,
  handleMetricsChange,
  loading,
}) => {
  const [primaryLastSelected, setPrimaryLastSelected] = useState(false);
  const handleSelectMetric = (metric) => {
    if (primaryLastSelected) {
      handleMetricsChange({
        ...selectedMetrics,
        secondary: metric,
      });
    } else {
      handleMetricsChange({
        ...selectedMetrics,
        primary: metric,
      });
    }
    setPrimaryLastSelected(!primaryLastSelected);
  };

  const isActive = metric => Object.values(selectedMetrics).includes(metric);
  const isPrimary = metric => selectedMetrics.primary === metric;

  return (
    <Container>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(ACOS.apiName)}
        active={isActive(ACOS.apiName)}
      >
        acos
        <Metric
          active={isActive(ACOS.apiName)}
          primary={isPrimary(ACOS.apiName)}
        >
          {Number(acos).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(REVENUE.apiName)}
        active={isActive(REVENUE.apiName)}
      >
        revenue
        <Metric
          active={isActive(REVENUE.apiName)}
          primary={isPrimary(REVENUE.apiName)}
        >
          {formatNumber(revenue)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(CLICKS.apiName)}
        active={isActive(CLICKS.apiName)}
      >
        clicks
        <Metric
          active={isActive(CLICKS.apiName)}
          primary={isPrimary(CLICKS.apiName)}
        >
          {formatNumber(clicks)}
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(SPEND.apiName)}
        active={isActive(SPEND.apiName)}
      >
        spend
        <Metric
          active={isActive(SPEND.apiName)}
          primary={isPrimary(SPEND.apiName)}
        >
          {formatNumber(spend)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(ABSOLUTEACOS.apiName)}
        active={isActive(ABSOLUTEACOS.apiName)}
      >
        total acos
        <Metric
          active={isActive(ABSOLUTEACOS.apiName)}
          primary={isPrimary(ABSOLUTEACOS.apiName)}
        >
          {Number(absoluteAcos).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(ABSOLUTEREVENUE.apiName)}
        active={isActive(ABSOLUTEREVENUE.apiName)}
      >
        total revenue
        <Metric
          active={isActive(ABSOLUTEREVENUE.apiName)}
          primary={isPrimary(ABSOLUTEREVENUE.apiName)}
        >
          {formatNumber(absoluteRevenue)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(IMPRESSIONS.apiName)}
        active={isActive(IMPRESSIONS.apiName)}
      >
        impressions
        <Metric
          active={isActive(IMPRESSIONS.apiName)}
          primary={isPrimary(IMPRESSIONS.apiName)}
        >
          {formatNumber(impressions)}
        </Metric>
      </Item>
    </Container>
  );
};

MetricSelector.defaultProps = {
  acos: 0,
  revenue: 0,
  clicks: 0,
  spend: 0,
  absoluteAcos: 0,
  absoluteRevenue: 0,
  impressions: 0,
  selectedMetrics: () => {},
  handleMetricsChange: () => { },
  loading: true,
};

MetricSelector.propTypes = {
  acos: propTypes.number,
  revenue: propTypes.number,
  clicks: propTypes.number,
  spend: propTypes.number,
  absoluteAcos: propTypes.number,
  absoluteRevenue: propTypes.number,
  impressions: propTypes.number,
  selectedMetrics: propTypes.func,
  handleMetricsChange: propTypes.func,
  loading: propTypes.bool,
};

export default MetricSelector;
