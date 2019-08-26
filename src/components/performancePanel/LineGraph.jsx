/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  Crosshair,
  MarkSeries,
} from 'react-vis';
import 'react-vis/dist/style.css';
import propTypes from 'prop-types';
import * as R from 'ramda';
import { formatNumber } from 'helper/format';


const Container = styled.div`
  background: #FFF;
  border-radius: 0 0 4px 4px;
  height: 350px;
`;

const CrosshairWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #486581;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 10px 8px 10px;
  width: 120px;
  opacity: 0.95;
`;

const CrosshairDate = styled.div`
  font-size: 12px;
  letter-spacing: 0.1px;
  line-height: 20px;
  text-transform: uppercase;
  color: #d9e2ec;
  display: inline;
`;

const CrosshairMetricTitle = styled.div`
  margin-top: 4px;
  font-size: 12px;
  line-height: 14px;
  color: #D9E2EC;
  font-weight: 600;
  text-transform: uppercase;
`;

const CrosshairMetricOne = styled.div`
  font-weight: 800;
  margin-top: 1px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #f0b429;
`;

const CrosshairMetricTwo = styled(CrosshairMetricOne)`
  color: #B6E0FE;
`;

const tickFormatX = d => moment(d).format('D MMM');

export default class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverValuesPrimary: {},
      hoverValuesSecondary: {},
    };
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return (
        <Container>
          <FlexibleWidthXYPlot
            height={350}
            margin={{
              left: 60, right: 60, top: 0, bottom: 45,
            }}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
          </FlexibleWidthXYPlot>
        </Container>
      );
    }

    const {
      linePrimary,
      lineSecondary,
    } = this.props;
    console.log('linePrimary', linePrimary);
    console.log('lineSecondary', lineSecondary);

    const lineEquals = linePrimary.metricName === lineSecondary.metricName;
    //  get the Maximum Y values
    const yMaxPrimary = R.pipe(R.map(R.prop('y')), x => Math.max(...x))(linePrimary.data);
    const yMaxSecondary = R.pipe(R.map(R.prop('y')), x => Math.max(...x))(lineSecondary.data);
    const ySecondaryFactor = yMaxPrimary / yMaxSecondary;
    return (
      <Container>
        <FlexibleWidthXYPlot
          onMouseLeave={() => this.setState({
            hoverValuesPrimary: {},
            hoverValuesSecondary: {},
          })}
          height={350}
          margin={
            {
              left: 70, right: 70, top: 5, bottom: 45,
            }
          }
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            tickTotal={7}
            tickFormat={tickFormatX}
          />
          <YAxis
            position="end"
            tickTotal={4}
            style={{
              line: { stroke: '#f0b429' },
            }}
            tickFormat={tick => linePrimary.metricSymbol === '%' ? Number(tick).toFixed(0) + linePrimary.metricSymbol : formatNumber(Number(tick).toFixed(0)) + linePrimary.metricSymbol || ''}
          />
          <YAxis
            position="end"
            orientation="right"
            tickTotal={4}
            tickFormat={tick => lineSecondary.metricSymbol === '%' ? Number(tick / ySecondaryFactor).toFixed(0) + lineSecondary.metricSymbol : formatNumber(Number(tick / ySecondaryFactor).toFixed(0)) + lineSecondary.metricSymbol || ''}
            style={{
              line: { stroke: '#b6e0fe' },
            }}
          />
          <LineSeries
            data={linePrimary.data}
            onNearestX={
              (_, { index }) => this.setState({ hoverValuesPrimary: linePrimary.data[index] })
            }
            color="#DE911D"
          />
          <LineSeries
            data={lineSecondary.data.map(({ x, y }) => ({
              x,
              y: y * ySecondaryFactor,
            }))}
            color="#4098D7"
            onNearestX={(value, { index }) => {
              this.setState({ hoverValuesSecondary: lineSecondary.data[index] });
            }}
            opacity={lineEquals ? 0 : 1}
          />
          {this.state.hoverValuesPrimary && this.state.hoverValuesPrimary.x && (
            <MarkSeries color="#DE911D" data={[this.state.hoverValuesPrimary]} />
          )}
          {!lineEquals && this.state.hoverValuesSecondary && this.state.hoverValuesSecondary.x && (
            <MarkSeries color="#4098D7" data={[{ x: this.state.hoverValuesSecondary.x, y: this.state.hoverValuesSecondary.y * ySecondaryFactor }]} />
          )}
          {this.state.hoverValuesPrimary && this.state.hoverValuesPrimary.x && (
            <Crosshair
              values={[this.state.hoverValuesPrimary]}
              style={{
                line: {
                  background: '#FFF',
                  width: '0px',
                  outlineStyle: 'dashed',
                  outlineWidth: '1px',
                },
              }}
            >
              <CrosshairWrapper>
                <CrosshairDate>
                  {moment(this.state.hoverValuesPrimary.x).format('D MMM YYYY')}
                </CrosshairDate>
                <div>
                  <CrosshairMetricTitle>{linePrimary.metricName}</CrosshairMetricTitle>
                  <CrosshairMetricOne>
                    {linePrimary.metricSymbol === '%' ? Number(this.state.hoverValuesPrimary.y).toFixed(2) : formatNumber(this.state.hoverValuesPrimary.y)}
                    {linePrimary.metricSymbol}
                  </CrosshairMetricOne>
                </div>
                {
                  !lineEquals && (
                    <div>
                      <CrosshairMetricTitle>{lineSecondary.metricName}</CrosshairMetricTitle>
                      <CrosshairMetricTwo>
                        {lineSecondary.metricSymbol === '%' ? Number(this.state.hoverValuesSecondary.y).toFixed(2) : formatNumber(this.state.hoverValuesSecondary.y)}
                        {lineSecondary.metricSymbol}
                      </CrosshairMetricTwo>
                    </div>
                  )
                }
              </CrosshairWrapper>
            </Crosshair>
          )}
        </FlexibleWidthXYPlot>
      </Container>
    );
  }
}

LineGraph.defaultProps = {
  linePrimary: {
    data: [{
      x: 0,
      y: 0,
    }],
    metricName: '',
    metricSymbol: '',
  },
  lineSecondary: {
    data: [{
      x: 0,
      y: 0,
    }],
    metricName: '',
    metricSymbol: '',
  },
  loading: true,
};

LineGraph.propTypes = {
  linePrimary: propTypes.shape({
    data: propTypes.arrayOf(propTypes.objectOf(propTypes.number)),
    metricName: propTypes.string,
    metricSymbol: propTypes.string,
  }),
  lineSecondary: propTypes.shape({
    data: propTypes.arrayOf(propTypes.objectOf(propTypes.number)),
    metricName: propTypes.string,
    metricSymbol: propTypes.string,
  }),
  loading: propTypes.bool,
};
