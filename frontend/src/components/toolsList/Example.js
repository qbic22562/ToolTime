import React, {useState} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

const Example = ({tools}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Choose your tool
            </DropdownToggle>
            <DropdownMenu>
                {tools.map(item=> {
                    return <DropdownItem>{item.name}</DropdownItem>
                })}
            </DropdownMenu>
        </Dropdown>
    );
};

export default Example;