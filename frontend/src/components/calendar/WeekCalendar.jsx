import React, { Component } from 'react';
import Day from './Day';
import moment from 'moment';
import '../../styles/main-page.css';
import Hours from './Hours';
import ReservationBtn from '../reservation/ReservationBtn';
import Fragment from 'react';

class WeekCalendar extends Component {
  constructor() {
    super();
    this.state = {
      weekdayshort: moment.weekdaysShort(),
      selectedDay: ''
    };
  }

  displayWeekdaysShort = () => {
    return this.state.weekdayshort.map(day => {
      return (
        <button
          key={day}
          className='btn btn-default btn-lg mg-2 navbar-buttons'
        >
          {day}
        </button>
      );
    });
  };

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className='d-flex flex-flow-row justify-content-center container-fluid'>
          <Hours />
          <Day name='Monday' />
          <Day name='Tuesday' />
          <Day name='Wednesday' />
          <Day name='Thursday' />
          <Day name='Friday' />
          <Day name='Saturday' />
          <Day name='Sunday' />
        </div>
      </React.Fragment>
    );
  }
}

export default WeekCalendar;
