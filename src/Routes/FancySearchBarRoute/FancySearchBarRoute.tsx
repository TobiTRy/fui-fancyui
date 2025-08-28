import React, { useEffect, useState } from 'react';

import FancySearchBar from '../../components/organisms/FancySearchBar/FancySearchBar';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { styled } from 'styled-components';
import { Card } from '@/components/molecules/Card';

// User data for search examples
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

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  // Legacy search handler for backward compatibility demo
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
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
    <Card externalStyle={{ width: '100%', height: '1000px' }}>
      <DesignWrapper>
        <DesignArea
          title="Fancy Search Bar - Different Sizes"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Different size examples */}
          <div>
            <h3>Small Size</h3>
            <FancySearchBar onChange={searchHandler} value={searchValue} sizeC="sm">
              <ListWrapper>
                {searchedUsers.map((user, index) => (
                  <UserWrapper key={index}>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </UserWrapper>
                ))}
              </ListWrapper>
            </FancySearchBar>
          </div>

          <div>
            <h3>Medium Size</h3>
            <FancySearchBar onChange={searchHandler} value={searchValue} sizeC="md">
              <ListWrapper>
                {searchedUsers.map((user, index) => (
                  <UserWrapper key={index}>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </UserWrapper>
                ))}
              </ListWrapper>
            </FancySearchBar>
          </div>

          <div>
            <h3>Large Size</h3>
            <FancySearchBar onChange={searchHandler} value={searchValue} sizeC="lg">
              <ListWrapper>
                {searchedUsers.map((user, index) => (
                  <UserWrapper key={index}>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </UserWrapper>
                ))}
              </ListWrapper>
            </FancySearchBar>
          </div>

          {/* Original example */}
          <div style={{ marginTop: '40px' }}>
            <h3>🔧 Original Example</h3>
            <FancySearchBar onChange={searchHandler} value={searchValue}>
              <ListWrapper>
                {searchedUsers.map((user, index) => (
                  <UserWrapper key={index}>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                  </UserWrapper>
                ))}
              </ListWrapper>
            </FancySearchBar>
          </div>
        </DesignArea>
      </DesignWrapper>
    </Card>
  );
}
