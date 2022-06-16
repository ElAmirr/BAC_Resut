import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import './Subjects';


export function MathematiqueField() {
    const [value, setValue] = useState(10);

    const upMathematique = () =>{
        setValue(value + 1) ;
    }
    const downMathematique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('MathematiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downMathematique}>-</Button>
            <TextField id="filled-basic" label="Mathematique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upMathematique}>+</Button>
        </ContainerScores>
    )
};

export function PhysiqueField() {
    const [value, setValue] = useState(10);

    const upPhysique = () =>{
        setValue(value + 1) ;
    }
    const downPhysique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('PhysiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downPhysique}>-</Button>
            <TextField id="filled-basic" label="Physique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upPhysique}>+</Button>
        </ContainerScores>
    )
};

export function SciencesField() {
    const [value, setValue] = useState(10);

    const upSciences = () =>{
        setValue(value + 1) ;
    }
    const downSciences = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('SciencesNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downSciences}>-</Button>
            <TextField id="filled-basic" label="Sciences" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upSciences}>+</Button>
        </ContainerScores>
    )
};

export function InformatiqueField() {
    const [value, setValue] = useState(10);

    const upInformatique = () =>{
        setValue(value + 1) ;
    }
    const downInformatique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('InformatiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downInformatique}>-</Button>
            <TextField id="filled-basic" label="Informatique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upInformatique}>+</Button>
        </ContainerScores>
    )
};

export function ArabeField() {
    const [value, setValue] = useState(10);

    const upArabe = () =>{
        setValue(value + 1) ;
    }
    const downArabe = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('ArabeNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downArabe}>-</Button>
            <TextField id="filled-basic" label="Arabe" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upArabe}>+</Button>
        </ContainerScores>
    )
};

export function FrancaisField() {
    const [value, setValue] = useState(10);

    const upFrancais = () =>{
        setValue(value + 1) ;
    }
    const downFrancais = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('FrancaisNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downFrancais}>-</Button>
            <TextField id="filled-basic" label="Francais" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upFrancais}>+</Button>
        </ContainerScores>
    )
};

export function AnglaisField() {
    const [value, setValue] = useState(10);

    const upAnglais = () =>{
        setValue(value + 1) ;
    }
    const downAnglais = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('AnglaisNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downAnglais}>-</Button>
            <TextField id="filled-basic" label="Anglais" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upAnglais}>+</Button>
        </ContainerScores>
    )
};

export function PhilosophieField() {
    const [value, setValue] = useState(10);

    const upPhilosophie = () =>{
        setValue(value + 1) ;
    }
    const downPhilosophie = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('PhilosophieNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downPhilosophie}>-</Button>
            <TextField id="filled-basic" label="Philosophie" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upPhilosophie}>+</Button>
        </ContainerScores>
    )
};

export function SportField() {
    const [value, setValue] = useState(10);

    const upSport = () =>{
        setValue(value + 1) ;
    }
    const downSport = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('SportNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downSport}>-</Button>
            <TextField id="filled-basic" label="Sport" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upSport}>+</Button>
        </ContainerScores>
    )
};

export function OptionField() {
    const [value, setValue] = useState(10);

    const upOption = () =>{
        setValue(value + 1) ;
    }
    const downOption = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('OptionNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downOption}>-</Button>
            <TextField id="filled-basic" label="Option" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upOption}>+</Button>
        </ContainerScores>
    )
};

export function TechnologieField() {
    const [value, setValue] = useState(10);

    const upTechnologie = () =>{
        setValue(value + 1) ;
    }
    const downTechnologie = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('TechnologieNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downTechnologie}>-</Button>
            <TextField id="filled-basic" label="Technologie" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upTechnologie}>+</Button>
        </ContainerScores>
    )
};

export function TechnologieTPField() {
    const [value, setValue] = useState(10);

    const upTechnologieTP = () =>{
        setValue(value + 1) ;
    }
    const downTechnologieTP = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('TechnologieTPNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downTechnologieTP}>-</Button>
            <TextField id="filled-basic" label="Technologie TP" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upTechnologieTP}>+</Button>
        </ContainerScores>
    )
};

export function EconomieField() {
    const [value, setValue] = useState(10);

    const upEconomie = () =>{
        setValue(value + 1) ;
    }
    const downEconomie = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('EconomieNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downEconomie}>-</Button>
            <TextField id="filled-basic" label="Economie" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upEconomie}>+</Button>
        </ContainerScores>
    )
};

export function GestionField() {
    const [value, setValue] = useState(10);

    const upGestion = () =>{
        setValue(value + 1) ;
    }
    const downGestion = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('GestionNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downGestion}>-</Button>
            <TextField id="filled-basic" label="Gestion" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upGestion}>+</Button>
        </ContainerScores>
    )
};

export function HistGeoField() {
    const [value, setValue] = useState(10);

    const upHistGeo = () =>{
        setValue(value + 1) ;
    }
    const downHistGeo = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('HistGeoNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downHistGeo}>-</Button>
            <TextField id="filled-basic" label="Hist/Geo" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upHistGeo}>+</Button>
        </ContainerScores>
    )
};

export function AlgorithmeField() {
    const [value, setValue] = useState(10);

    const upAlgorithme = () =>{
        setValue(value + 1) ;
    }
    const downAlgorithme = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('AlgorithmeNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downAlgorithme}>-</Button>
            <TextField id="filled-basic" label="Algorithme" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upAlgorithme}>+</Button>
        </ContainerScores>
    )
};

export function BaseField() {
    const [value, setValue] = useState(10);

    const upBase = () =>{
        setValue(value + 1) ;
    }
    const downBase = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('BaseNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downBase}>-</Button>
            <TextField id="filled-basic" label="Base" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upBase}>+</Button>
        </ContainerScores>
    )
};

export function TicField() {
    const [value, setValue] = useState(10);

    const upTic = () =>{
        setValue(value + 1) ;
    }
    const downTic = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('TicNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downTic}>-</Button>
            <TextField id="filled-basic" label="Tic" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upTic}>+</Button>
        </ContainerScores>
    )
};

export function PnseIslamiqueField() {
    const [value, setValue] = useState(10);

    const upPnseIslamique = () =>{
        setValue(value + 1) ;
    }
    const downPnseIslamique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('PnsIslamiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downPnseIslamique}>-</Button>
            <TextField id="filled-basic" label="Pnse Islamique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upPnseIslamique}>+</Button>
        </ContainerScores>
    )
};

export function ScBiologiqueField() {
    const [value, setValue] = useState(10);

    const upScBiologique = () =>{
        setValue(value + 1) ;
    }
    const downScBiologique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('ScBiologiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downScBiologique}>-</Button>
            <TextField id="filled-basic" label="Sc Biologique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upScBiologique}>+</Button>
        </ContainerScores>
    )
};

export function SportPratiqueField() {
    const [value, setValue] = useState(10);

    const upSportPratique = () =>{
        setValue(value + 1) ;
    }
    const downSportPratique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('SportPratiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downSportPratique}>-</Button>
            <TextField id="filled-basic" label="Sport Pratique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upSportPratique}>+</Button>
        </ContainerScores>
    )
};

export function SportTheoriqueField() {
    const [value, setValue] = useState(10);

    const upSportTheorique = () =>{
        setValue(value + 1) ;
    }
    const downSportTheorique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('SportTheoriqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downSportTheorique}>-</Button>
            <TextField id="filled-basic" label="Sport Theorique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upSportTheorique}>+</Button>
        </ContainerScores>
    )
};

export function EducationPhysiqueField() {
    const [value, setValue] = useState(10);

    const upEducationPhysique = () =>{
        setValue(value + 1) ;
    }
    const downEducationPhysique = () =>{
        setValue(value - 1)
    }
    localStorage.setItem('EducationPhysiqueNote', JSON.stringify(value));
  return (
        <ContainerScores>
            <Button variant='contained' onClick={downEducationPhysique}>-</Button>
            <TextField id="filled-basic" label="Education Physique" variant="filled" value={value} pattern="[0-9]*" />
            <Button variant='contained' onClick={upEducationPhysique}>+</Button>
        </ContainerScores>
    )
};

const ContainerScores = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50vw;
    height: 70vh;
`;
