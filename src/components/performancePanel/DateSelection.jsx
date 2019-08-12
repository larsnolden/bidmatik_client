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

const DateSelection = ({ dateFrom, dateTo, handleDateRangeChange }) => {
  const [focusedInput, setFocusedInput] = useState('startDate');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateFromLocal, setDateFromLocal] = useState(dateFrom);

  const handleShowCalendarChange = (state) => {
    if (dateFromLocal.isBefore(dateTo)) {
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
          <Date id="date_selector">{moment(dateFromLocal).format('D MMM YYYY')}</Date>
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
          <Date id="date_selector">{moment(dateTo).format('D MMM YYYY')}</Date>
        </DateSelector>
      </Dates>
      <Calendar>
        {
          showCalendar && (
            <DayPickerRangeController
              startDate={dateFromLocal}
              endDate={dateTo}
              onDatesChange={
                ({ startDate, endDate }) => {
                  setDateFromLocal(startDate);

                  //  new date range selected
                  if (startDate.isBefore(endDate) && endDate !== dateTo) { 
                    setShowCalendar(false);
                    handleDateRangeChange({ dateFrom: moment(startDate), dateTo: moment(endDate) });
                  }
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
  dateFrom: moment(),
  dateTo: moment(),
  handleDateRangeChange: () => { },
};

DateSelection.propTypes = {
  dateFrom: momentPropTypes.momentObj,
  dateTo: momentPropTypes.momentObj,
  handleDateRangeChange: propTypes.func,
};

export default DateSelection;
