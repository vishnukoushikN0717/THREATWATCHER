import React, { useState } from 'react';
import '../styles/prediction.css';

const Prediction = () => {
    const [disaster, setDisaster] = useState('');
    const [location, setLocation] = useState('');
    const [reports, setReports] = useState([]);

    const handleDisasterChange = (e) => {
        setDisaster(e.target.value);
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handlePredict = async () => {
        try {
            const response = await fetch(`https://api.reliefweb.int/v1/reports?appname=REPLACE-WITH-A-DOMAIN-OR-APP-NAME&query[value]=${disaster}`);
            const data = await response.json();

            // Log the response data to debug
            console.log('API Response:', data);

            // Check if data and data.data are valid
            if (data && Array.isArray(data.data)) {
                setReports(data.data);
            } else {
                setReports([]);
                console.error("Unexpected API response format");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setReports([]);
        }
    };

    return (
        <div className="prediction-container">
            <h2>Prediction</h2>
            <div>
                <label>Disaster:</label>
                <select value={disaster} onChange={handleDisasterChange}>
                    <option value="">Select</option>
                    <option value="earthquake">Earthquake</option>
                    <option value="flood">Flood</option>
                    <option value="fire">Fire</option>
                    <option value="typhoon">Typhoon</option>
                </select>
            </div>
            <br />
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={handleLocationChange} />
            </div>
            <br />
            <button onClick={handlePredict}>Predict</button>
            {reports.length > 0 && (
                <div>
                    <h3>Reports</h3>
                    <ul>
                        {reports.map((report) => {
                            console.log(report);  // Log each report object
                            return (
                                <li key={report.id}>
                                    <a href={report.fields.url} target="_blank" rel="noopener noreferrer">
                                        {report.fields.title}
                                    </a>
                                    <p>{report.fields.body}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Prediction;
