import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import '../styles/IncidentReport.css'; // Import the CSS file

const LocationMarker = ({ setPosition }) => {
    useMapEvents({
        click(e) {
            setPosition(e.latlng);
        },
    });
    return null;
};

const IncidentReport = ({ addIncident }) => {
    const [incident, setIncident] = useState({ description: '', location: '', severity: '' });
    const [position, setPosition] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setIncident((prevIncident) => ({
            ...prevIncident,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (position) {
            const locationString = `${position.lat}, ${position.lng}`;
            addIncident({ ...incident, location: locationString });
        } else {
            addIncident(incident);
        }
        setIncident({ description: '', location: '', severity: '' });
        setPosition(null);
        navigate('/');
    };

    return (
        <div className="incident-report">
            <h2>Report Incident</h2>
            <form onSubmit={handleSubmit} className="incident-form">
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={incident.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={incident.location || (position ? `${position.lat}, ${position.lng}` : '')}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="severity">Severity:</label>
                    <select name="severity" id="severity" value={incident.severity} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Report</button>
            </form>
            <div className="map-container">
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '200px', width: '100%' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {position && <Marker position={position}></Marker>}
                    <LocationMarker setPosition={setPosition} />
                </MapContainer>
            </div>
        </div>
    );
};

export default IncidentReport;
