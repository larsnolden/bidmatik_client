import React, { useState, useLayoutEffect, useEffect } from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import gql from 'graphql-tag';
import { DayPickerRangeController } from 'react-dates';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, commitMutation } from 'react-relay';
import environment from 'environment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import DateSelectionComponent from './DateSelectionComponent';

const dateSelectionMutation = graphql`
  mutation DateSelectionMutation($input: UserFilterDatesInput!) {
    SetUserFilterDates(input: $input) {
      id
      from
      to
    }
  }
`;

const createOptimisticResponse = (from, to) => ({
  UserFilterDates: {
    id: "1",
    from,
    to,
  }
})

function commitDateSelection({
  from,
  to,
}) {
  console.log('commitDateSelection', from, to);
  console.log('environment', environment);
  return commitMutation(
    environment,
    {
      mutation: dateSelectionMutation,
      optimisticResponse: createOptimisticResponse(from, to),
      variables: {
        input: {
          from,
          to,
        },
      },
    },
  );
}

const branchOnLoading = (loadingComponent, notLoadingComponent) => ({ loading, ...props }) => {
  console.log('branchOnLoading', loading, props)
  return loading ? loadingComponent : notLoadingComponent(props);
};

const DateSelectionContainer = ({
  userFilterDates,
  handleDateRangeChange,
}) => {
  const from = moment(userFilterDates.from);
  const to = moment(userFilterDates.to);

  const [focusedInput, setFocusedInput] = useState('startDate');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateFromLocal, setDateFromLocal] = useState(from);

  const handleShowCalendarChange = (state) => {
    if (dateFromLocal.isBefore(to)) {
      setShowCalendar(state);
    }
  };

  const handleDateFromClick = () => {
    handleShowCalendarChange(!showCalendar);
    setFocusedInput('startDate');
  };

  const handleDateToClick = () => {
    handleShowCalendarChange(!showCalendar);
    setFocusedInput('endDate');
  };

  const handleNewDatesSelect = ({ startDate, endDate }) => {
    console.log('handleNewDatesSelect', startDate, endDate);
    setDateFromLocal(startDate);
    //  new date range selected
    if (startDate.isBefore(endDate) && endDate !== to) {
      setShowCalendar(false);
      commitDateSelection({ from: startDate.format('YYYYMMDD'), to: endDate.format('YYYYMMDD') });
      handleDateRangeChange({ from: startDate.format('YYYYMMDD'), to: endDate.format('YYYYMMDD') });
    }
  };

  return (
    <DateSelectionComponent
      handleDateFromClick={handleDateFromClick}
      handleDateToClick={handleDateToClick}
      dates={{ from, to }}
      showCalendar={showCalendar}
      handleNewDatesSelect={handleNewDatesSelect}
      focusedInput={focusedInput}
      handleShowCalendarChange={handleShowCalendarChange}
      setFocusedInput={setFocusedInput}
    />
  );
};

export default createFragmentContainer(
  branchOnLoading(DateSelectionComponent, DateSelectionContainer),
  {
    userFilterDates: graphql`
      fragment DateSelection_userFilterDates on UserFilterDates {
        id
        from
        to
     }
   `,
  },
);
