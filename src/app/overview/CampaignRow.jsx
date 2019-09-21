import React, { Fragment, useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import styled from '@emotion/styled';
import { createFragmentContainer } from 'react-relay';
import { Link } from 'react-router-dom';
import Chevron from 'components/Chevron';
import ChangePill from 'components/ChangePill';

const CenterTd = styled.td`
  text-align: center;
`;

const Tr = styled.tr`
  background: ${props =>
    props.activeBg ? 'rgba(220, 238, 251, 1)' : props.darkBg ? '#F2F7FA' : '#FFF'};
  height: 48px;
  user-select: none;
`;

const ParentTr = styled(Tr)`
  cursor: pointer;
`;

const ChildTr = styled.tr`
  background: rgba(220, 238, 251, 0.5);
  height: 48px;
`;

const CellContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #627d98;
`;

const deleteFloats = change => Number(change).toFixed(0);

const ChildRow = ({ columns, sample }) => (
  <ChildTr>
    <CenterTd>
      <Link to={`adGroup/${sample.id}`}> view</Link>
    </CenterTd>
    {columns.map(col => (
      <td>
        <CellContent>
          {col.format ? col.format(sample[col.key]) : sample[col.key]}
          {sample.change && sample.change[col.key] && (
            <ChangePill change={deleteFloats(sample.change[col.key])} />
          )}
        </CellContent>
      </td>
    ))}
  </ChildTr>
);

const CampaignRow = ({ campaign, columns, darkBg }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const sample = {
    ...campaign,
    ...campaign.CampaignPerformanceReduced,
    change: campaign.CampaignPerformanceDelta,
    children: campaign.AdGroups.map(adGroup => ({
      ...adGroup,
      ...adGroup.AdGroupPerformanceReduced,
      change: adGroup.AdGroupPerformanceDelta
    }))
  };

  const ParentRow = () => (
    <ParentTr darkBg={darkBg} activeBg={isExpanded} onClick={toggleIsExpanded}>
      <CenterTd>
        <Chevron pointDown={!isExpanded} color="#aaa" width="15" height="15" />
      </CenterTd>
      {columns.map(col => (
        <td>
          <CellContent>
            {col.format ? col.format(sample[col.key]) : sample[col.key]}
            {sample.change && sample.change[col.key] && (
              <ChangePill change={deleteFloats(sample.change[col.key])} />
            )}
          </CellContent>
        </td>
      ))}
    </ParentTr>
  );
  if (!isExpanded) return <ParentRow />;

  return (
    <Fragment>
      <ParentRow />
      {sample.children.map(childSample => (
        <ChildRow columns={columns} sample={childSample} />
      ))}
    </Fragment>
  );
};

export default createFragmentContainer(CampaignRow, {
  campaign: graphql`
    #<ComponentFileName>_<propName>
    fragment CampaignRow_campaign on Campaign {
      id
      name
      CampaignPerformanceReduced(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
      CampaignPerformanceDelta(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
      AdGroups {
        name
        id
        AdGroupPerformanceReduced(from: $from, to: $to) {
          acos
          impressions
          clicks
          ctr
          spend
          revenue
        }
        AdGroupPerformanceDelta(from: $from, to: $to) {
          acos
          impressions
          clicks
          ctr
          spend
          revenue
        }
      }
    }
  `
});
