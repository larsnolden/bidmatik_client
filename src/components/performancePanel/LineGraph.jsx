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


const Container = styled.div`
  background: #FFF;
  border-radius: 0 0 4px 4px;
`;

const CrosshairWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #486581;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 10px 8px 10px;
  width: 90px;
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
          Loading
        </Container>
      );
    }
    //  get the Maximum Y values
    const yMaxPrimary = R.pipe(R.map(R.prop('y')), x => Math.max(...x))(this.props.linePrimary.data);
    const yMaxSecondary = R.pipe(R.map(R.prop('y')), x => Math.max(...x))(this.props.lineSecondary.data);
    const ySecondaryFactor = yMaxPrimary / yMaxSecondary;

    console.log(this.props)
    return (
      <Container>
        <FlexibleWidthXYPlot
          onMouseLeave={() => this.setState({ crosshairValues: [] })}
          height={300}
        >
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis
            tickTotal={10}
            tickFormat={tickFormatX}
          />
          <YAxis />
          <YAxis
            position="start"
            orientation="right"
            left={800}
            tickFormat={tick => Math.floor(tick * ySecondaryFactor)}
            style={{
              line: { stroke: '#b6e0fe' }
            }}
          />
          <LineSeries
            data={this.props.linePrimary.data}
            onNearestX={(value, { index }) =>
              this.setState({ hoverValuesPrimary: this.props.linePrimary.data[index] })
            }
            color={"#DE911D"}
          />
          <LineSeries
            data={this.props.lineSecondary.data.map(({ x, y }) => ({
              x,
              y: y * ySecondaryFactor,
            }))}
            color={"#4098D7"}
            onNearestX={(value, { index }) => { 
              this.setState({ hoverValuesSecondary: this.props.lineSecondary.data[index] })
            }
            }
          />
          {this.state.hoverValuesPrimary && (
            <MarkSeries color={"#DE911D"} data={[this.state.hoverValuesPrimary]} />
          )}
          {this.state.hoverValuesSecondary && (
            <MarkSeries color={"#4098D7"} data={[{ x: this.state.hoverValuesSecondary.x , y: this.state.hoverValuesSecondary.y * ySecondaryFactor }]} />
          )}
          {this.state.hoverValuesPrimary && this.state.hoverValuesPrimary.x && (
            <Crosshair
              values={[this.state.hoverValuesPrimary]}
              style={{
                line: {
                  background: "#FFF",
                  width: "0px",
                  outlineStyle: "dashed",
                  outlineWidth: "1px"
                }
              }}
            >
              <CrosshairWrapper>
                <CrosshairDate>
                  {moment(this.state.hoverValuesPrimary.x).format("D MMM YYYY")}
                </CrosshairDate>
                  <div>
                  <CrosshairMetricTitle>{this.props.linePrimary.metricName}</CrosshairMetricTitle>
                    <CrosshairMetricOne>
                    {this.state.hoverValuesPrimary.y}
                    xx
                    {this.props.linePrimary.metricSymbol}
                    </CrosshairMetricOne>
                  </div>
                  <div>
                    <CrosshairMetricTitle>{this.props.lineSecondary.metricName}</CrosshairMetricTitle >
                    <CrosshairMetricTwo>
                    {this.state.hoverValuesSecondary.y}
                    {this.props.linePrimary.metricSymbol + ''}
                    </CrosshairMetricTwo>
                  </div>
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
  },
  lineSecondary: {
    data: [{
      x: 0,
      y: 0,
    }],
    metricName: '',
  },
};

LineGraph.propTypes = {
  linePrimary: propTypes.objectOf({
    data: propTypes.objectOf([{
      x: propTypes.number,
      y: propTypes.number,
    }]),
    metricName: propTypes.string,
  }),
  lineSecondary: propTypes.objectOf({
    data: propTypes.objectOf([{
      x: propTypes.number,
      y: propTypes.number,
    }]),
    metricName: propTypes.string,
  }),
};
