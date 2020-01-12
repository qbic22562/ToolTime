import React, { Component } from 'react';
import Day from './Day';
import '../../styles/main-page.css';
import Hours from './Hours';
import ReservationData from '../reservation/ReservationData';
import Example from '../toolsList/Example';

class WeekCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [
        { id: 1, name: 'hammer', amount: 3 },
        { id: 2, name: 'cos tam', amount: 3 },
        {
          id: 3,
          name: 'narzedzie',
          amount: 3
        }
      ],
      reservations: [],
      mondayReservations: [],
      tuesdayReservations: [],
      wednesdayReservations: [],
      thursdayReservations: [],
      fridayReservations: [],
      saturdayReservations: [],
      sundayReservations: []
    };
  }

  callbackFunction = childData => {
    this.setState({ reservations: childData });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <Example
            parentCallback={this.callbackFunction}
            items={this.state.tools}
            name='Choose your tool'
            type='tools'
          />
        </div>
        {console.log(this.state.reservations)}
        <div className='d-flex flex-flow-row justify-content-center container-fluid'>
          <Hours hours={this.state.hours} />
          <Day name='Monday' reservations={this.state.mondayReservations} />
          <Day name='Tuesday' reservations={this.state.tuesdayReservations} />
          <Day
            name='Wednesday'
            reservations={this.state.wednesdayReservations}
          />
          <Day name='Thursday' reservations={this.state.thursdayReservations} />
          <Day name='Friday' reservations={this.state.fridayReservations} />
          <Day name='Saturday' reservations={this.state.saturdayReservations} />
          <Day name='Sunday' reservations={this.state.sundayReservations} />
        </div>
        <div>
          <ReservationData hours={this.state.hours} />
        </div>
      </React.Fragment>
    );
  }
}

export default WeekCalendar;
