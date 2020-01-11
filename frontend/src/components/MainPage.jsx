import React, { Component } from 'react';
import Calendar from 'react-calendar';
import * as moment from 'moment';
import WeekCalendar from './WeekCalendar';

class MainPage extends Component {
  state = {
    date: new Date()
  };

  onClickDay = date => {
    console.log(date);
  };

  render() {
    return (
      <div>
        {/* <Calendar onClickDay={this.onClickDay} value={this.state.date} /> */}
        <WeekCalendar />
      </div>
    );
  }
}

export default MainPage;
