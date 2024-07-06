import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import IncidentReport from './components/IncidentReport';
import Prediction from './components/Prediction';
import Remedies from './components/Remidies';
import Coordinate from './components/coordinate'
import './styles/App.css';



const App = () => {
    const [incidents, setIncidents] = useState([]);
    const [helplines] = useState([
        { type: 'Fire', number: '123-456-7890' },
        { type: 'Medical', number: '098-765-4321' },
        { type: 'Police', number: '111-222-3333' },
    ]);

    const addIncident = (incident) => {
        setIncidents(prevIncidents => [...prevIncidents, incident]);
    };
    console.log(incidents);

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard incidents={incidents} />} />
                    <Route path="/report" element={<IncidentReport addIncident={addIncident} />} />
                    <Route path="/Coordinate" element={<Coordinate helplines={helplines} />} />
                    <Route path="/predict" element={<Prediction />} />
                    <Route path="/Remedies" element={<Remedies />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
