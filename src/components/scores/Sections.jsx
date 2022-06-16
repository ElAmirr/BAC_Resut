import React from 'react';
import './ScoresStyles.css'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { section } from '../constants/section';
import Background from '../background/Background';


function Sections() {
  return (
    <div>
      <Background />
      <SectionsContainer>
          {section.map((sect, index) => (
            <Item key={index}>
              <Link to={sect.toLowerCase()}>
                {sect}
                {window.localStorage.clear()}
              </Link>
            </Item>
          ))}
      </SectionsContainer>
    </div>
  )
}


const SectionsContainer = styled.div`
    z-index: 4;
    margin-top: 20vh;
    height: 70vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0
`;

const Item = styled.div`
    width: 50%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #a9a6eb;
    cursor: pointer;
`

export default Sections