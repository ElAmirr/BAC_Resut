import React from 'react';
import styled from 'styled-components';
import Background from '../components/background/Background';
import { ScBiologiqueField, SportPratiqueField, SportTheoriqueField, EducationPhysiqueField, MathematiqueField, PhysiqueField, FrancaisField, AnglaisField, PhilosophieField, OptionField } from '../components/constants/NoteField';
import Button from '@mui/material/Button';
import { SportData } from '../components/constants/Subjects';
import LastScore from '../components/constants/LastScore';


function SportSubj() {
  {SportData.subjects.map((sub, index) => {
    localStorage.setItem(`${sub}Coeficient`, JSON.stringify(SportData.coeficient[index]))
  })}
  return (
    <div>
        <Background />
           <Container>
              <ScBiologiqueField />
              <SportPratiqueField />
              <SportTheoriqueField />
              <EducationPhysiqueField />
              <MathematiqueField />
              <PhysiqueField />
              <FrancaisField />
              <AnglaisField />
              <PhilosophieField />
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

export default SportSubj