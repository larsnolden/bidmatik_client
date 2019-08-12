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
  BLENDEDACOS,
  TOTALREVENUE,
  IMPRESSIONS,
} from './constants';


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
  totalAcos,
  totalRevenue,
  impressions,
  selectedMetrics,
  handleMetricsChange,
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
      <Item onClick={() => handleSelectMetric(ACOS)} active={isActive(ACOS)}>
        acos
        <Metric active={isActive(ACOS)} primary={isPrimary(ACOS)}>
          {Number(acos * 100).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(REVENUE)} active={isActive(REVENUE)}>
        revenue
        <Metric active={isActive(REVENUE)} primary={isPrimary(REVENUE)}>
          {formatNumber(revenue)}
          $
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(CLICKS)} active={isActive(CLICKS)}>
        clicks
        <Metric active={isActive(CLICKS)} primary={isPrimary(CLICKS)}>
          {formatNumber(clicks)}
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(SPEND)} active={isActive(SPEND)}>
        spend
        <Metric active={isActive(SPEND)} primary={isPrimary(SPEND)}>
          {formatNumber(spend)}
          $
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(BLENDEDACOS)} active={isActive(BLENDEDACOS)}>
        blended acos
        <Metric active={isActive(BLENDEDACOS)} primary={isPrimary(BLENDEDACOS)}>
          {Number(totalAcos * 100).toFixed(2)}
          %
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(TOTALREVENUE)} active={isActive(TOTALREVENUE)}>
        total revenue
        <Metric active={isActive(TOTALREVENUE)} primary={isPrimary(TOTALREVENUE)}>
          {formatNumber(totalRevenue)}
          $
        </Metric>
      </Item>
      <Item onClick={() => handleSelectMetric(IMPRESSIONS)} active={isActive(IMPRESSIONS)}>
        impressions
        <Metric active={isActive(IMPRESSIONS)} primary={isPrimary(IMPRESSIONS)}>
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
  totalAcos: 0,
  totalRevenue: 0,
  impressions: 0,
  selectedMetrics: () => {},
  handleMetricsChange: () => {},
};

MetricSelector.propTypes = {
  acos: propTypes.number,
  revenue: propTypes.number,
  clicks: propTypes.number,
  spend: propTypes.number,
  totalAcos: propTypes.number,
  totalRevenue: propTypes.number,
  impressions: propTypes.number,
  selectedMetrics: propTypes.func,
  handleMetricsChange: propTypes.func,
};

export default MetricSelector;
