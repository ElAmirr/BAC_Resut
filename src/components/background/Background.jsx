import React from 'react';
import styled from 'styled-components';
import './styles.css';

function Background() {
  return (
    <div>
        <Bbackground className="background">
            <Cube className="cube"></Cube>
            <Cube className="cube"></Cube>
            <Cube className="cube"></Cube>
            <Cube className="cube"></Cube>
            <Cube className="cube"></Cube>
        </Bbackground>
        
    </div>
  )
}

const Bbackground = styled.div`
    background: linear-gradient(132deg, #355C7D, #6C5B7B, #C06C84);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    padding:0;
    margin:0px;
`
const Cube = styled.div`
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border: solid 1px #D7D4E4;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;
`

export default Background