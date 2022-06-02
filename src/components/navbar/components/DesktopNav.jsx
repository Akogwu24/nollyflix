import { Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const DesktopNav = () => {
  return (
    <UnorderedList className='nav-list'>
      <ListItem>
        <Link>Home</Link>
      </ListItem>
      <ListItem>
        <Link>Trending</Link>
      </ListItem>
      <ListItem>
        <Link>My list</Link>
      </ListItem>
    </UnorderedList>
  );
};

export default DesktopNav;
