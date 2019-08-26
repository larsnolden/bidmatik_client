import React, { useState, useMemo, useEffect } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import Chevron from 'components/Chevron';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerRangeController } from 'react-dates';


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

const USER_FILTER_DATES__QUERY = gql`
  query {
    UserFilterDates {
      id
      from
      to
    }
  }
`;

const USER_FILTER_DATES__MUTATION = gql`
  mutation user_filter_dates($input: UserFilterDatesInput!) {
    SetUserFilterDates(input: $input) {
      id
      from
      to
    }
  }
`;

const DateSelection = ({
  data,
  handleDateRangeChange: handleDateRangeChangeDataFetch,
}) => {
  const { loading } = data;

  const dateFrom = useMemo(
    () => (loading ? moment() : moment(data.UserFilterDates.from)), [loading, data.UserFilterDates],
  );
  const dateTo = useMemo(
    () => (loading ? moment() : moment(data.UserFilterDates.to)), [loading, data.UserFilterDates],
  );

  const [focusedInput, setFocusedInput] = useState('startDate');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateFromLocal, setDateFromLocal] = useState(dateFrom);

  //  update localDateFrom when actual date was fetched from server
  useEffect(
    () => setDateFromLocal(dateFrom),
    [loading, dateFrom],
  );

  const handleShowCalendarChange = (state) => {
    if (dateFromLocal.isBefore(dateTo)) {
      setShowCalendar(state);
    }
  };
  const [mutateUserFilterDates] = useMutation(USER_FILTER_DATES__MUTATION);
  const handleDateRangeChange = ({ from, to }) => {
    //  save new selected date on server
    mutateUserFilterDates({
      variables: {
        input: {
          from,
          to,
        },
      },
    });
    //  refetch data in Overview Query
    handleDateRangeChangeDataFetch({
      from,
      to,
    });
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
                    handleDateRangeChange({ from: moment(startDate).format('YYYYMMDD'), to: moment(endDate).format('YYYYMMDD') });
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
  data: {
    loading: true,
    UserFilterDates: {
      from: moment(),
      to: moment(),
    },
  },
  handleDateRangeChange: () => { },
};

DateSelection.propTypes = {
  data: propTypes.shape({
    loading: propTypes.bool,
    UserFilterDates: propTypes.shape({
      from: momentPropTypes.string,
      to: momentPropTypes.string,
    }),
  }),
  handleDateRangeChange: propTypes.func,
};

export default graphql(USER_FILTER_DATES__QUERY)(DateSelection);
