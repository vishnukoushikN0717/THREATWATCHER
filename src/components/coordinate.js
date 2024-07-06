import React, { useState } from 'react';
import '../styles/coordinate.css';

const helplineData = {
    fire: {
        number: '23434324345402384',
        tips: 'Stay calm, evacuate the building, and call the fire department immediately. Use a fire extinguisher if you can.'
    },
    ambulance: {
        number: '123456345',
        tips: 'Provide the address and nature of the emergency. Stay on the line until help arrives.'
    },
    police: {
        number: '911',
        tips: 'Report the crime or emergency. Stay on the line to provide details and follow instructions.'
    },
    poisonControl: {
        number: '8002221222',
        tips: 'Describe the substance ingested and follow the operator\'s instructions. Do not induce vomiting unless told to do so.'
    },
    disasterDistress: {
        number: '18009855990',
        tips: 'Call for emotional support during a disaster. It\'s available 24/7 for counseling and support.'
    },
    nationalSuicidePrevention: {
        number: '18002738255',
        tips: 'Call if you or someone you know is in emotional distress or suicidal crisis. Confidential help is available 24/7.'
    },
    floodEmergency: {
        number: '112',
        tips: 'Move to higher ground immediately. Avoid walking or driving through floodwaters.'
    },
    earthquake: {
        number: '112',
        tips: 'Drop, Cover, and Hold On. Stay indoors until the shaking stops, then evacuate safely.'
    },
    tsunami: {
        number: '112',
        tips: 'Move to higher ground immediately if you feel an earthquake or see a rapid rise or fall in coastal waters.'
    },
    hurricane: {
        number: '112',
        tips: 'Evacuate if instructed to do so. Stay indoors away from windows, and listen to official updates.'
    },
    tornado: {
        number: '112',
        tips: 'Take shelter in a basement or an interior room on the lowest floor. Avoid windows and cover your head.'
    },
    heatWave: {
        number: '112',
        tips: 'Stay hydrated, avoid strenuous activities, and seek air-conditioned environments.'
    },
    wildfire: {
        number: '112',
        tips: 'Evacuate immediately if advised. Close all windows and doors to prevent embers from entering your home.'
    },
    avalanche: {
        number: '112',
        tips: 'Move to higher ground and avoid the avalanche path. Call for help and use an avalanche beacon if available.'
    }
};


const Coordinate = () => {
    const [inputValue, setInputValue] = useState('');
    const [helplineInfo, setHelplineInfo] = useState(null);

    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setInputValue(value);
        setHelplineInfo(helplineData[value]);
    };

    return (
        <div className="coordinate-container">
            <h1>Emergency Coordination</h1>
            <input
                type="text"
                placeholder="Type emergency service (e.g., fire, ambulance)"
                value={inputValue}
                onChange={handleChange}
                className="coordinate-input"
            />
            {helplineInfo && (
                <div className="helpline-info">
                    <p><strong>Helpline Number:</strong> {helplineInfo.number}</p>
                    <p><strong>Emergency Tips:</strong> {helplineInfo.tips}</p>
                </div>
            )}
        </div>
    );
};

export default Coordinate;
