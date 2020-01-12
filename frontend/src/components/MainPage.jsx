import React, { Component } from 'react';
import WeekCalendar from './calendar/WeekCalendar';
import ToolsList from './toolsList/ToolsList';

class MainPage extends Component {
  render() {
    return (
      <div>
        <WeekCalendar />
      </div>
    );
  }
}

export default MainPage;
