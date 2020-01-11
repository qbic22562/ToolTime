import React, { Component } from 'react';
import moment from 'moment';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      // singleReservation: {
      //   since: '',
      //   until: '',
      //   user: '',
      //   tool: ''
      // },
      reservations: [
        {
          "id": 1,
          "since": "2020-01-14T11:00:00.283000+01:00",
          "until": "2020-01-14T15::00.283000+01:00",
          "user": 1,
          "tool": 1
        },
        {
          "id": 2,
          "since": "2020-01-13T13:00:00.283000+01:00",
          "until": "2020-01-13T17:00:00.283000+01:00",
          "user": 1,
          "tool": 1
        },
        {
          "id": 3,
          "since": "2020-01-11T08:00.283000+01:00",
          "until": "2020-01-11T12:00:00.283000+01:00",
          "user": 1,
          "tool": 1
        }
      ],
      hours: []
    };
  }

  componentDidMount() {
    // tu trzeba podac id narzedzia

    // fetch('http://34.89.239.19:8000/api/rentals/1', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then(res => {
    //   return res.json();
    // }).then(json => {n
    //   this.setState({
    //     reservations: json,
    //   })
    // });

    // {tools.map(item => {
    //   return <DropdownItem>{item.name}</DropdownItem>
    // })}
    // this.insertHours();

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

  // z backendu dla konkretnego narzedzia

  insertHours = () => {
    this.state.reservations.map((item)=>{
      let baseHour = moment(new Date(item.since));
      let endHour = moment(new Date(item.until));
      let hoursExtracted = [];
      do {
        baseHour = baseHour.add(60, 'm').toDate();
        hoursExtracted.push(this.extractHour(baseHour));
        baseHour = moment(baseHour);
      } while (!baseHour.isSame(endHour));
      this.setState({ hours: hoursExtracted });
      console.log(hoursExtracted)
    });


  };

  printHours = () => {
    // hour: HH:MM
    return this.state.hours.map(hour => {
      return (
        <div key={hour} className='d-flex p-2 bg-light '>
          {hour}
        </div>
      );
    });
  };

  render() {
    return <div className='d-flex flex-md-column'>{this.printHours()}</div>;
  }
}

export default Day;
