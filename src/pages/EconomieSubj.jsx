import React from 'react';
import styled from 'styled-components';
import Background from '../components/background/Background';
import { MathematiqueField, EconomieField, GestionField, HistGeoField, InformatiqueField, ArabeField, FrancaisField, AnglaisField, PhilosophieField, SportField, OptionField } from '../components/constants/NoteField';
import Button from '@mui/material/Button';
import { EconomieData } from '../components/constants/Subjects';
import LastScore from '../components/constants/LastScore';


function EconomieSubj() {
  {EconomieData.subjects.map((sub, index) => {
    localStorage.setItem(`${sub}Coeficient`, JSON.stringify(EconomieData.coeficient[index]))
  })};
  
  return (
    <div>
        <Background />
           <Container>
              <MathematiqueField />
              <EconomieField />
              <GestionField />
              <HistGeoField />
              <InformatiqueField />
              <ArabeField />
              <FrancaisField />
              <AnglaisField />
              <PhilosophieField />
              <SportField />
              <OptionField />
              <Button className='calcBtn' variant="contained" size="large" onClick={LastScore}>CALCULER</Button>
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

export default EconomieSubj