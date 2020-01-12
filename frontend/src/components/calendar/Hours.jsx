import React, { Component } from 'react';
import moment from 'moment';
import ReservationData from '../reservation/ReservationData';

class Hours extends Component {
  state = {
    hours: []
  };

  componentDidMount() {
    this.insertHours();
    this.printHours();
  }

  extractHour = dateObj => {
    return `${dateObj.getHours()}:${
      dateObj.getMinutes().toString(10).length === 1
        ? dateObj.getMinutes() + '0'
        : dateObj.getMinutes()
    }`;
  };

  insertHours = () => {
    let baseHour = moment(new Date('2020-01-10T07:00:00'));
    let endHour = moment(new Date('2020-01-10T18:00:00'));
    let hoursExtracted = [];
    while (!baseHour.isSame(endHour)) {
      baseHour = baseHour.add(60, 'm').toDate();
      hoursExtracted.push(this.extractHour(baseHour));
      baseHour = moment(baseHour);
    }
    this.setState({ hours: hoursExtracted });
  };

  printHours = () => {
    // hour: HH:MM
    return this.state.hours.map(hour => {
      return (
        <div key={hour} className='d-flex p-2 bg-primary text-white'>
          {hour}
        </div>
      );
    });
  };

  render() {
    return (
      <div className='d-flex flex-md-column justify-content-center'>
        {this.printHours()}
      </div>
    );
  }
}

export default Hours;
