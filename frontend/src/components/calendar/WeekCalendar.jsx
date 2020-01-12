import React, {Component} from 'react';
import Day from './Day';
import '../../styles/main-page.css';
import Hours from './Hours';
import ReservationData from "../reservation/ReservationData";

class WeekCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [
                {
                    "id": 1,
                    "since": "2020-01-14T11:00:00.283000+01:00",
                    "until": "2020-01-14T15:00:00.283000+01:00",
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
            hours: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
        };
    }



    componentDidMount() {
        console.log(new Date(this.state.reservations[0].since).getDay())
        console.log(new Date(this.state.reservations[0].since).getHours())
        console.log(new Date(this.state.reservations[0].until).getHours())
    }



        // let hoursList = this.state.reservations.map((item)=>{
        //     day:new Date(item.since).getDay();
        //     since:new Date(item.since).getHours();
        //     until:new Date(item.until).getHours();
        // });
        // this.setState({hours:hoursList})


        // cors policy
        // fetch('http://34.89.239.19:8000/api/rentals/1', {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        // }).then(res => {
        //     return res.json();
        // }).then(json => {
        //     this.setState({
        //         reservations: json,
        //     })
        // });


    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-flow-row justify-content-center container-fluid'>
                    <Hours hours={this.state.hours}/>
                    <Day name='Monday'/>
                    <Day name='Tuesday'/>
                    <Day name='Wednesday'/>
                    <Day name='Thursday'/>
                    <Day name='Friday'/>
                    <Day name='Saturday'/>
                    <Day name='Sunday'/>
                </div>
                <div>
                    <ReservationData hours={this.state.hours} />
                </div>
            </React.Fragment>

        );
    }
}

export default WeekCalendar;
