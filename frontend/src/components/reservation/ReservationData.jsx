import React, {Component} from 'react';
import ReservationBtn from './ReservationBtn';
import ReservationDropdown from "./ReservationDropdown";
import moment from "moment";

class ReservationData extends Component {
    constructor() {
        super();
        this.state = {
            hours: [],
            days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        }
    }

    extractHour = dateObj => {
        return `${dateObj.getHours()}:${
            dateObj.getMinutes().toString(10).length === 1
                ? dateObj.getMinutes() + '0'
                : dateObj.getMinutes()
        }`;
    };

    componentDidMount() {
        let baseHour = moment(new Date('2020-01-10T07:00:00'));
        let endHour = moment(new Date('2020-01-10T18:00:00'));
        let hoursExtracted = [];
        while (!baseHour.isSame(endHour)) {
            baseHour = baseHour.add(60, 'm').toDate();
            hoursExtracted.push(this.extractHour(baseHour));
            baseHour = moment(baseHour);
        }
        this.setState({hours: hoursExtracted});
    }

    render() {
        return (
            <React.Fragment>
                <div className='d-flex flex-row'>
                    <ReservationDropdown
                        items={this.state.days}
                        name='Day of week'
                    />
                </div>
                <div className='d-flex flex-row'>
                    <ReservationDropdown
                        items={this.state.hours}
                        name='Start time'
                    />
                </div>
                <div>
                    <ReservationDropdown
                        items={this.state.hours}
                        name='End time'
                    />
                    <ReservationBtn/>
                </div>
            </React.Fragment>
        );
    }
}

export default ReservationData;
