import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sections from './components/scores/Sections';
import Navigation from './components/navigation/Navigation';
import Mathematique from './components/sections/Mathematique';
import Sciences from './components/sections/Sciences';
import Technique from './components/sections/Technique';
import Economie from './components/sections/Economie';
import Informatique from './components/sections/Informatique';
import Lettre from './components/sections/Lettre';
import Sport from './components/sections/Sport';
import MathematiqueSubj from './pages/MathematiqueSubj';
import SciencesSubj from './pages/SciencesSubj';
import TechniqueSubj from './pages/TechniqueSubj';
import EconomieSubj from './pages/EconomieSubj';
import InformatiqueSubj from './pages/InformatiqueSubj';
import LettreSubj from './pages/LettreSubj';
import SportSubj from './pages/SportSubj';

const App = () => (
    <div>
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="news" element={<Home />} />
                <Route path="dates" element={<Home />} />
                <Route path="scores" element={<Sections />} />
                <Route path="games" element={<Home />} />
                <Route path="scores/mathematique" element={<Mathematique />} />
                <Route path="scores/sciences" element={<Sciences />} />
                <Route path="scores/technique" element={<Technique />} />
                <Route path="scores/economie" element={<Economie />} />
                <Route path="scores/informatique" element={<Informatique />} />
                <Route path="scores/lettre" element={<Lettre />} />
                <Route path="scores/sport" element={<Sport />} />
                <Route path="scores/mathematique/principale" element={<MathematiqueSubj />} />
                <Route path="scores/sciences/principale" element={<SciencesSubj />} />
                <Route path="scores/technique/principale" element={<TechniqueSubj />} />
                <Route path="scores/economie/principale" element={<EconomieSubj />} />
                <Route path="scores/informatique/principale" element={<InformatiqueSubj />} />
                <Route path="scores/lettre/principale" element={<LettreSubj />} />
                <Route path="scores/sport/principale" element={<SportSubj />} />
            </Routes>  
        </BrowserRouter> 
    </div>
);

export default App;
