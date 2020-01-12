import React, {Component} from 'react';

class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
        };
    }

    componentDidMount() {
        this.printHours();
    }


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
