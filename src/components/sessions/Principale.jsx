import React from 'react';
import styled from 'styled-components';

function Principale() {
  return (
    <Item>PRINCIPALE</Item>
  )
}

const Item = styled.div`
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #C06C84;
    cursor: pointer;
`

export default Principale