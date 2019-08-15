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
        onClick={() => handleSelectMetric(ACOS)}
        active={isActive(ACOS)}
      >
        acos
        <Metric
          active={isActive(ACOS)}
          primary={isPrimary(ACOS)}
        >
          {Number(acos).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(REVENUE)}
        active={isActive(REVENUE)}
      >
        revenue
        <Metric
          active={isActive(REVENUE)}
          primary={isPrimary(REVENUE)}
        >
          {formatNumber(revenue)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(CLICKS)}
        active={isActive(CLICKS)}
      >
        clicks
        <Metric
          active={isActive(CLICKS)}
          primary={isPrimary(CLICKS)}
        >
          {formatNumber(clicks)}
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(SPEND)}
        active={isActive(SPEND)}
      >
        spend
        <Metric
          active={isActive(SPEND)}
          primary={isPrimary(SPEND)}
        >
          {formatNumber(spend)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(ABSOLUTEACOS)}
        active={isActive(ABSOLUTEACOS)}
      >
        total acos
        <Metric
          active={isActive(ABSOLUTEACOS)}
          primary={isPrimary(ABSOLUTEACOS)}
        >
          {Number(absoluteAcos).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(ABSOLUTEREVENUE)}
        active={isActive(ABSOLUTEREVENUE)}
      >
        total revenue
        <Metric
          active={isActive(ABSOLUTEREVENUE)}
          primary={isPrimary(ABSOLUTEREVENUE)}
        >
          {formatNumber(absoluteRevenue)}
          $
        </Metric>
      </Item>
      <Item
        loading={loading}
        onClick={() => handleSelectMetric(IMPRESSIONS)}
        active={isActive(IMPRESSIONS)}
      >
        impressions
        <Metric
          active={isActive(IMPRESSIONS)}
          primary={isPrimary(IMPRESSIONS)}
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
