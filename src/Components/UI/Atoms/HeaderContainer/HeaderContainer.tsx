import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #282c34;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 15px;
  }
`;

interface Props {
  title: string;
  links: string[];
}

const HeaderContainer: React.FC<Props> = ({ title, links }) => {
  return (
    <HeaderWrapper>
      <Logo>{title}</Logo>
      <Navigation>
        {links.map((link, index) => (
          <div key={index}>{link}</div>
        ))}
      </Navigation>
    </HeaderWrapper>
  );
};

export default HeaderContainer;
