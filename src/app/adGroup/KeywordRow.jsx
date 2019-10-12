import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import styled from '@emotion/styled';
import { createFragmentContainer } from 'react-relay';
import ChangePill from 'components/ChangePill';
import pauseIconPath from 'assets/icons/pause.svg';
import playIconPath from 'assets/icons/play.svg';
import playButtonIconPath from 'assets/icons/playButton.svg';
import pauseButtonIconPath from 'assets/icons/pauseButton.svg';

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

const CellContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #627d98;
`;

const PlayPauseIcon = styled.img``;

const BidPlayPauseIcon = styled.img`
  margin-left: 12px;
`;

const BidInput = styled.input`
  background: ${props => (props.automated ? 'rgba(98, 125, 152, 0.15)' : '#FFF')};
  border: ${props => (props.automated ? '1px solid #627D98' : '1px solid rgba(98, 125, 152, 0.5)')};
  color: ${props => (props.automated ? 'rgba(98, 125, 152, 0.5)' : '#627D98')};
  border-radius: 3px;
  padding: 2px 3px;
  margin: 2px 3px;
  font-size: 14px;
  width: 57px;
`;

const deleteFloats = change => Number(change).toFixed(0);

export const KeywordRow = ({ keyword, columns, darkBg }) => {
  const sample = {
    ...keyword,
    ...keyword.KeywordPerformanceReduced,
    change: keyword.KeywordPerformanceDelta
  };

  //  debug
  sample.automated = false;
  const isActive = keyword.state === 'enabled';

  return (
    <ParentTr darkBg={darkBg}>
      <CenterTd>
        <PlayPauseIcon src={isActive ? pauseIconPath : playIconPath} />
      </CenterTd>
      {columns
        .filter(k => k.key !== 'bid')
        .map(col => (
          <td key={col.key}>
            <CellContent>
              {col.format ? col.format(sample[col.key]) : sample[col.key]}
              {sample.change && sample.change[col.key] && (
                <ChangePill change={deleteFloats(sample.change[col.key])} />
              )}
            </CellContent>
          </td>
        ))}
      <td>
        <CellContent>
          <BidInput value={`$ ${sample.bid}`} automated={sample.automated} />
          <BidPlayPauseIcon src={sample.automated ? pauseButtonIconPath : playButtonIconPath} />
        </CellContent>
      </td>
    </ParentTr>
  );
};

export default createFragmentContainer(KeywordRow, {
  keyword: graphql`
    fragment KeywordRow_keyword on Keyword {
      id
      term
      bid
      matchType
      state
      KeywordPerformanceDelta(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
      KeywordPerformanceReduced(from: $from, to: $to) {
        acos
        impressions
        clicks
        ctr
        spend
        revenue
      }
    }
  `
});
