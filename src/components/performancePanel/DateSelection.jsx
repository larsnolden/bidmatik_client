import React, { useState } from 'react';
import moment from 'moment';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer, commitMutation } from 'react-relay';
import environment from 'environment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import propTypes from 'prop-types';

import DateSelectionComponent from './DateSelectionComponent';
import BranchRenderOnLoading from 'helper/BranchRenderOnLoading';


const dateSelectionMutation = graphql`
  mutation DateSelectionMutation($input: UserFilterDatesInput!) {
    SetUserFilterDates(input: $input) {
      id
      from
      to
    }
  }
`;

function commitDateSelection({
  from,
  to,
}) {
  return commitMutation(
    environment,
    {
      mutation: dateSelectionMutation,
      variables: {
        input: {
          from,
          to,
        },
      },
    },
  );
}

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
    setDateFromLocal(startDate);
    if (startDate.isBefore(endDate) && endDate !== to) {
      //  new date range selected
      setShowCalendar(false);
      commitDateSelection({ from: startDate.format('YYYYMMDD'), to: endDate.format('YYYYMMDD') });
      handleDateRangeChange({ from: startDate.format('YYYYMMDD'), to: endDate.format('YYYYMMDD') });
    }
  };

  return (
    <DateSelectionComponent
      handleDateFromClick={handleDateFromClick}
      handleDateToClick={handleDateToClick}
      showCalendar={showCalendar}
      handleNewDatesSelect={handleNewDatesSelect}
      focusedInput={focusedInput}
      handleShowCalendarChange={handleShowCalendarChange}
      setFocusedInput={setFocusedInput}
      from={dateFromLocal}
      to={to}
      loading={false}
    />
  );
};

export default createFragmentContainer(
  BranchRenderOnLoading(DateSelectionComponent, DateSelectionContainer),
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

DateSelectionContainer.defaultProps = {
  userFilterDates: {
    from: '',
    to: '',
  },
  handleDateRangeChange: () => {},
};

DateSelectionContainer.propTypes = {
  userFilterDates: propTypes.shape({
    from: propTypes.string,
    to: propTypes.string,
  }),
  handleDateRangeChange: propTypes.func,
};
