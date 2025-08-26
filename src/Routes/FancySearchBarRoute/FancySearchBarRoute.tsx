import React, { useEffect, useState } from 'react';

import FancySearchBar from '../../components/organisms/FancySearchBar/FancySearchBar';
import { TSearchBarItem } from '../../components/organisms/FancySearchBar';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { styled } from 'styled-components';
import { Card } from '@/components/molecules/Card';

// Transform data to TSearchBarItem format for new DRY usage
const searchItems: TSearchBarItem[] = [
  {
    id: 1,
    title: 'John Doe',
    description: '@johnD123',
    image: 'https://example.com/images/johnD123.jpg',
  },
  {
    id: 2,
    title: 'Jane Smith',
    description: '@janeS456',
    image: 'https://example.com/images/janeS456.jpg',
  },
  {
    id: 3,
    title: 'Alice Brown',
    description: '@aliceB789',
    image: 'https://example.com/images/aliceB789.jpg',
  },
  {
    id: 4,
    title: 'Bob White',
    description: '@bobW012',
    image: 'https://example.com/images/bobW012.jpg',
  },
  {
    id: 5,
    title: 'Charlie Green',
    description: '@charlieG345',
    image: 'https://example.com/images/charlieG345.jpg',
  },
];

// Legacy data structure for backward compatibility demo
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

  // New DRY approach - item selection handler
  const handleItemSelect = (item: TSearchBarItem) => {
    console.log('Selected item:', item);
    // Handle item selection logic here
  };

  useEffect(() => {
    setSearchValue('Bob');
  }, []);

  return (
    <Card externalStyle={{ width: '100%', height: '1000px' }}>
      <DesignWrapper>
        <DesignArea
          title="Fancy Search Bar - New DRY Approach"
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* NEW DRY APPROACH: Using items array for automatic rendering */}
          <div>
            <h3>✨ New DRY Approach (Recommended)</h3>
            <FancySearchBar
              placeholder="Search users..."
              items={searchItems}
              onItemSelect={handleItemSelect}
              openListWhenFocused={true}
              sizeC="sm"
              noItemsText="No users found"
            />
          </div>

          <div>
            <FancySearchBar
              placeholder="Search users..."
              items={searchItems}
              onItemSelect={handleItemSelect}
              openListWhenFocused={true}
              sizeC="md"
              noItemsText="No users found"
            />
          </div>

          <div>
            <FancySearchBar
              placeholder="Search users..."
              items={searchItems}
              onItemSelect={handleItemSelect}
              openListWhenFocused={true}
              sizeC="lg"
              noItemsText="No users found"
            />
          </div>

          {/* LEGACY APPROACH: Using children pattern for backward compatibility */}
          <div style={{ marginTop: '40px' }}>
            <h3>🔧 Legacy Approach (Still Supported)</h3>
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
