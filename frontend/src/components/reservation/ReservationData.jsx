import React, { Component } from 'react';
import ReservationBtn from './ReservationBtn';
import ReservationDropdown from './ReservationDropdown';

class ReservationData extends Component {
  state = {
    hours: this.props.hours
  };

  componentDidMount() {
    this.setState({
      hours: this.state.hours.map(hour => {
        return { name: hour };
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        {console.log(this.state.hours)}
        <div className='d-flex flex-row'>
          <ReservationDropdown
            key={0}
            items={this.state.hours}
            name='Godzina rozpoczecia rezerwacji'
          ></ReservationDropdown>
          <ReservationDropdown
            key={1}
            items={this.state.hours}
            name='Godzina zakonczenia rezerwacji'
          ></ReservationDropdown>
          <ReservationBtn />
        </div>
      </React.Fragment>
    );
  }
}

export default ReservationData;
