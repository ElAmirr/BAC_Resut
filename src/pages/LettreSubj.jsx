import React from 'react';
import styled from 'styled-components';
import Background from '../components/background/Background';
import { PnseIslamiqueField, HistGeoField, InformatiqueField, ArabeField, FrancaisField, AnglaisField, PhilosophieField, SportField, OptionField } from '../components/constants/NoteField';
import Button from '@mui/material/Button';
import { LettreData } from '../components/constants/Subjects';
import LastScore from '../components/constants/LastScore';


function LettreSubj() {
  {LettreData.subjects.map((sub, index) => {
    localStorage.setItem(`${sub}Coeficient`, JSON.stringify(LettreData.coeficient[index]))
  })}
  return (
    <div>
        <Background />
           <Container>
              <PnseIslamiqueField />
              <HistGeoField />
              <InformatiqueField />
              <ArabeField />
              <FrancaisField />
              <AnglaisField />
              <PhilosophieField />
              <SportField />
              <OptionField />
              <Button variant="contained" size="large" onClick={LastScore}>CALCULER</Button>
           </Container>
    </div>
  )
}

const Container = styled.div`
    margin-top: 12vh;
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
`;

export default LettreSubj