import React, { Component } from 'react';
import Calendar from 'react-calendar';
import WeekCalendar from './calendar/WeekCalendar';
import ToolsList from './toolsList/ToolsList';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = { tools: [] };
  }

  render() {
    return (
      <div>
        {/* <Calendar onClickDay={this.onClickDay} value={this.state.date} /> */}
        <ToolsList />
        <WeekCalendar />
      </div>
    );
  }
}

export default MainPage;
