import React from 'react';
import styled from '@emotion/styled';
import { DayPickerRangeController } from 'react-dates';
import moment from 'moment';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';

import Chevron from 'components/Chevron';


const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dates = styled.div`
  border-radius: 4px 4px 0 0;
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
  filter: ${props => props.loading ? 'blur(4px)' : 'none'};
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
  z-index: 2;
  position: absolute;
  margin-top: 48px;
  align-self: center;

  .DayPicker {
    font-family: Roboto;
  }

  .CalendarDay__selected_span {
    background: #84C5F4;
    border: 1px double #62B0E8;
  }

  .CalendarDay__selected {
    background: #186FAF;
    border: 1px double #186FAF;
  }
`;

const DateSelectionComponent = ({
  handleDateFromClick,
  handleDateToClick,
  showCalendar,
  handleNewDatesSelect,
  focusedInput,
  handleShowCalendarChange,
  setFocusedInput,
  loading = true,
  from,
  to,
}) => (
  <Container>
    <Dates>
      <DateSelector
        id="date_selector"
        onClick={handleDateFromClick}
      >
        <ChevronStyled id="date_selector" color="#BCCCDC" width={10} height={8} />
        <Date loading={loading} id="date_selector">{from.format('D MMM YYYY')}</Date>
      </DateSelector>
      <To>
        TO
      </To>
      <DateSelector
        id="date_selector"
        onClick={handleDateToClick}
      >
        <ChevronStyled id="date_selector" color="#BCCCDC" width={10} height={8} />
        <Date loading={loading} id="date_selector">{to.format('D MMM YYYY')}</Date>
      </DateSelector>
    </Dates>
    <Calendar>
      {
        showCalendar && (
          <DayPickerRangeController
            startDate={from}
            endDate={to}
            onDatesChange={handleNewDatesSelect}
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

DateSelectionComponent.defaultProps = {
  handleDateFromClick: () => { },
  handleDateToClick: () => { },
  from: moment(moment.now()),
  to: moment(moment.now()),
  showCalendar: false,
  handleNewDatesSelect: () => { },
  focusedInput: () => { },
  handleShowCalendarChange: () => { },
  setFocusedInput: () => { },
  loading: true,
};

DateSelectionComponent.propTypes = {
  handleDateFromClick: propTypes.func,
  handleDateToClick: propTypes.func,
  from: momentPropTypes.momentObj,
  to: momentPropTypes.momentObj,
  showCalendar: propTypes.bool,
  handleNewDatesSelect: propTypes.func,
  focusedInput: propTypes.string,
  handleShowCalendarChange: propTypes.func,
  setFocusedInput: propTypes.func,
  loading: propTypes.bool,
};

export default DateSelectionComponent;
