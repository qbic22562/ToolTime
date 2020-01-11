import React, { Component } from 'react';
import WeekCalendar from './WeekCalendar';
import moment from 'moment';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      singleReservation: {
        since: '',
        until: '',
        user: '',
        tool: ''
      },
      reservations: []
    };
  }

  componentDidMount() {
    this.insertHours();
  }

  insertHours = () => {
    let baseHour = new Date('2020-01-10T00:00:00');
    let endHour = new Date('2020-01-10T23:30:00');

    while (!moment(baseHour).isSame(moment(endHour))) {
      let newDateObj = moment(baseHour)
        .add(30, 'm')
        .toDate();
      console.log(`${newDateObj.getHours()}:${newDateObj.getMinutes()}`);
    }
  };

  render() {
    return <div className='d-flex flex-flow-column'>{this.state.name}</div>;
  }
}

export default Day;
