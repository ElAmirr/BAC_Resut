import React from 'react';
import styled from 'styled-components';
import Principale from '../sessions/Principale';
import Controle from '../sessions/Controle';
import { Link } from "react-router-dom";
import Background from '../background/Background';

function Informatique() {
  return (
    <div>
      <Background />
      <ContainerSection>
        <Link to={'principale'}>
          <Principale />
        </Link>
        <Link to={'controle'}>
          <Controle />
        </Link>
      </ContainerSection>
    </div>
  )
}

const ContainerSection = styled.div`
  margin-top: 20vh;
  height: 70vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0
`;

export default Informatique;