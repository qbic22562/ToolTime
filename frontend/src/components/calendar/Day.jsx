import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      hours: [
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00'
      ]
    };
    // this.printHours = this.printHours.bind(this);
  }

  // extractHour = dateObj => {
  //     return `${dateObj.getHours()}:${
  //         dateObj.getMinutes().toString(10).length === 1
  //             ? dateObj.getMinutes() + '0'
  //             : dateObj.getMinutes()
  //     }`;
  // };
  //
  // insertHours = () => {
  //     let baseHour = moment(new Date('2020-01-10T07:00:00'));
  //     let endHour = moment(new Date('2020-01-10T18:00:00'));
  //     let hoursExtracted = [];
  //     do {
  //         baseHour = baseHour.add(60, 'm').toDate();
  //         hoursExtracted.push(this.extractHour(baseHour));
  //         baseHour = moment(baseHour);
  //     } while (!baseHour.isSame(endHour));
  //     this.setState({hours: hoursExtracted});
  // };

  printHours = () => {
    // hour: HH:MM
    return this.state.hours.map(hour => {
      return (
        <div key={hour} className='d-flex p-3 bg-light justify-content-center'>
          wolne
        </div>
      );
    });
  };

  render() {
    return (
      <div className='d-flex flex-md-column'>
        <div className='p-3 btn btn-secondary'> {this.state.name}</div>
        {this.printHours()}
      </div>
    );
  }
}

export default Day;
