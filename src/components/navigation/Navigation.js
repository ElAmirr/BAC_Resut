import React from 'react';
import styled from 'styled-components';
import '../../pages/styles.css';
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavContainer>
        <ul>
            <Link to='/'>Home</Link>
            <Link to='news'>News</Link>
            <Link to='dates'>Dates</Link>
            <Link to='scores'>Scores</Link>
            <Link to='games'>Game</Link>
        </ul>
    </NavContainer>
  )
}

const NavContainer = styled.div`
    height: 8vh;
    width: 100vw;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
`;

export default Navigation