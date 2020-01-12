import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = {
      items: props.items,
      name: props.name,
      type: props.type,
      dropdownOpen: false,
      reservations: [
        {
          id: 1,
          since: '2020-01-14T11:00:00.283000+01:00',
          until: '2020-01-14T15:00:00.283000+01:00',
          user: 1,
          tool: 1
        },
        {
          id: 2,
          since: '2020-01-13T13:00:00.283000+01:00',
          until: '2020-01-13T17:00:00.283000+01:00',
          user: 1,
          tool: 1
        },
        {
          id: 3,
          since: '2020-01-11T08:00.283000+01:00',
          until: '2020-01-11T12:00:00.283000+01:00',
          user: 1,
          tool: 1
        }
      ],
      value: '',
      selectedDay: props.selectedDay
    };
  }

  setDropdownOpen = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };

  sendData = () => {
    this.props.parentCallback(this.state.reservations);
  };

  select(event, item) {
    console.log(item);
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
    // if(this.state.type === 'tools'){
    //     fetch('http://34.89.239.19:8000/api/rentals/'+item.id, {
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     }).then(res => {
    //         return res.json();
    //     }).then(json => {
    //         this.setState({
    //             reservations: json,
    //         })
    //     });
    // }
    this.sendData();
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.setDropdownOpen}>
        <DropdownToggle caret>{this.state.name}</DropdownToggle>
        <DropdownMenu>
          {this.state.items.map(item => {
            if (this.state.type === 'tools') {
              return (
                <DropdownItem
                  key={Math.random()}
                  onClick={event => this.select(event, item)}
                >
                  {item.name}
                </DropdownItem>
              );
            } else {
              return (
                <DropdownItem
                  key={Math.random()}
                  onClick={event => this.select(event, item)}
                >
                  {item}
                </DropdownItem>
              );
            }
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Example;
