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
            value: "Home"
        };
    }

    setDropdownOpen = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }

    select(event, item) {
        console.log(item)
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        });
    }

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.setDropdownOpen}>
                <DropdownToggle caret>{this.state.name}</DropdownToggle>
                <DropdownMenu>
                    {this.state.items.map(item => {
                        if(this.state.type === 'tools'){
                            return <DropdownItem key={Math.random()}
                                          onClick={(event) => this.select(event, item)}>{item.name}</DropdownItem>
                        } else{
                            return <DropdownItem key={Math.random()}
                                          onClick={(event) => this.select(event, item)}>{item}</DropdownItem>
                        }

                    })}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default Example