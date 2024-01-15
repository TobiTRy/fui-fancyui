import React, { useEffect, useState } from 'react';

import FancySearchBar from '../../components/organisms/FancySearchBar/FancySearchBar';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { styled } from 'styled-components';
import { Card } from '@/components/molecules/Card';

const users = [
  {
    name: 'John Doe',
    username: 'johnD123',
    profilePictureURL: 'https://example.com/images/johnD123.jpg',
  },
  {
    name: 'Jane Smith',
    username: 'janeS456',
    profilePictureURL: 'https://example.com/images/janeS456.jpg',
  },
  {
    name: 'Alice Brown',
    username: 'aliceB789',
    profilePictureURL: 'https://example.com/images/aliceB789.jpg',
  },
  {
    name: 'Bob White',
    username: 'bobW012',
    profilePictureURL: 'https://example.com/images/bobW012.jpg',
  },
  {
    name: 'Charlie Green',
    username: 'charlieG345',
    profilePictureURL: 'https://example.com/images/charlieG345.jpg',
  },
];

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
  gap: 10px;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  div {
    padding: 0;
  }
`;

export default function FancySearchBarRoute() {
  const [searchValue, setSearchValue] = useState('Bob');
  const [searchedUsers, setSearchedUsers] = useState(users);

  const searchHandler = (searchValue: string) => {
    const lowerSearchValue = searchValue.toLowerCase();
    const getUser = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearchValue) || user.username.toLowerCase().includes(lowerSearchValue)
    );
    setSearchValue(searchValue);
    setSearchedUsers(getUser);
  };

  useEffect(() => {
    setSearchValue('Bob');
  }, []);

  return (
    <Card>
      <DesignWrapper>
        <DesignArea title="Fancy Search Bar">
          <FancySearchBar handlerSearchValue={searchHandler} searchValue={searchValue}>
            <ListWrapper>
              {searchedUsers.map((user, index) => (
                <UserWrapper key={index}>
                  <div>{user.name}</div>
                  <div>{user.username}</div>
                </UserWrapper>
              ))}
            </ListWrapper>
          </FancySearchBar>
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
