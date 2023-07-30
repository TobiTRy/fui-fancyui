import React from 'react'

import FancySearchBar from '../../Components/UI/Organisms/FancySearchBar/FancySearchBar'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'


const users = [
  {
      name: "John Doe",
      username: "johnD123",
      profilePictureURL: "https://example.com/images/johnD123.jpg"
  },
  {
      name: "Jane Smith",
      username: "janeS456",
      profilePictureURL: "https://example.com/images/janeS456.jpg"
  },
  {
      name: "Alice Brown",
      username: "aliceB789",
      profilePictureURL: "https://example.com/images/aliceB789.jpg"
  },
  {
      name: "Bob White",
      username: "bobW012",
      profilePictureURL: "https://example.com/images/bobW012.jpg"
  },
  {
      name: "Charlie Green",
      username: "charlieG345",
      profilePictureURL: "https://example.com/images/charlieG345.jpg"
  }
];


export default function FancySearchBarRoute() {
  return (
    <DesignWrapper>
      <DesignArea title='Fancy Search Bar'>
        <FancySearchBar/>
      </DesignArea>
    </DesignWrapper>
  )
}
