import React, { useState } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import Chevron from 'components/Chevron';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;


const Dates = styled.div`
  background: #102A43;
  height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Date = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  letter-spacing: 0.01em;
  color: #E0FCFF;
`;

const DateSelector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 100%;
`;

const ChevronStyled = styled(Chevron)`
  margin-right: 8px;
`;

const To = styled.div`
  text-transform: uppercase;
  color: #BCCCDC;
  font-weight: 600;
  font-size: 12px;
  margin: 0 24px 0 24px;
`;

const Calendar = styled.div`
  position: absolute;
  margin-top: 48px;
  align-self: center;

  .CalendarDay__selected_span {
    background: #84C5F4;
    border: 1px double #62B0E8;
  }

  .CalendarDay__selected {
    background: #186FAF;
    border: 1px double #186FAF;
  }
`;

const DateSelection = ({ dateRange, handleDateRangeChange }) => {
  const [focusedInput, setFocusedInput] = useState('startDate');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleShowCalendarChange = (state) => {
    if (dateRange.from.isBefore(dateRange.to)) {
      setShowCalendar(state);
    }
  };

  return (
    <Container>
      <Dates>
        <DateSelector
          id="date_selector"
          onClick={() => {
            handleShowCalendarChange(!showCalendar);
            setFocusedInput('startDate');
          }}
        >
          <ChevronStyled id="date_selector" color="#BCCCDC" width={10} height={8} />
          <Date id="date_selector">{moment(dateRange.from).format('D MMM YYYY')}</Date>
        </DateSelector>
        <To>
          TO
        </To>
        <DateSelector
          id="date_selector"
          onClick={() => {
            handleShowCalendarChange(!showCalendar);
            setFocusedInput('endDate');
          }}
        >
          <ChevronStyled id="date_selector" color="#BCCCDC" width={10} height={8} />
          <Date id="date_selector">{moment(dateRange.to).format('D MMM YYYY')}</Date>
        </DateSelector>
      </Dates>
      <Calendar>
        {
          showCalendar && (
            <DayPickerRangeController
              startDate={dateRange.from}
              endDate={dateRange.to}
              onDatesChange={
                ({ startDate, endDate }) => {
                  //  auto close when new date range detected
                  if (startDate.isBefore(endDate) && endDate !== dateRange.to) setShowCalendar(false);
                  handleDateRangeChange({ from: moment(startDate), to: moment(endDate) })
                }
              }
              keepOpenOnDateSelect={false}
              focusedInput={focusedInput}
              onFocusChange={focus => setFocusedInput(focus || 'startDate')}
              onOutsideClick={(click) => {
                if (click.target.id !== 'date_selector') handleShowCalendarChange(false);
              }}
              numberOfMonths={2}
              hideKeyboardShortcutsPanel
            />
          )
          }
      </Calendar>
    </Container>
  );
};

DateSelection.defaultProps = {
  dateRange: {
    from: moment(),
    to: moment(),
  },
  handleDateRangeChange: () => { },
};

DateSelection.propTypes = {
  dateRange: propTypes.objectOf({
    from: momentPropTypes.momentObj,
    to: momentPropTypes.momentObj,
  }),
  handleDateRangeChange: propTypes.func,
};

export default DateSelection;
