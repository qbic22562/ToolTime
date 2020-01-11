import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const ReservationDropdown = ({ items, name }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{name}</DropdownToggle>
      <DropdownMenu>
        {items.map(item => {
          return <DropdownItem>{item.name}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ReservationDropdown;
