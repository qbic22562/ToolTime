import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Example = ({ items, name }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{name}</DropdownToggle>
      <DropdownMenu>
        {items.map(item => {
          return <DropdownItem key={Math.random()}>{item.name}</DropdownItem>;
        })}
      </DropdownMenu>
    </Dropdown>
  );
};

export default Example;
