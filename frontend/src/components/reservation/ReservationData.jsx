import React, { Component } from 'react';
import ReservationBtn from './ReservationBtn';
import Example from '../toolsList/Example';

class ReservationData extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      days: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      chosenDay: 'Monday',
      startHour: '0:00',
      endHour: '23:30'
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='d-flex flex-row'>
          <Example
            items={this.state.days}
            name='Day of week'
            type='reservation'
            onClick={this.handleDayChange}
          />
        </div>
        <div className='d-flex flex-row'>
          <Example
            items={this.state.hours}
            name='Start time'
            type='reservation'
          />
        </div>
        <div className='d-flex flex-row'>
          <Example
            items={this.state.hours}
            name='End time'
            type='reservation'
          />
        </div>
        <ReservationBtn />
      </React.Fragment>
    );
  }
}

export default ReservationData;
