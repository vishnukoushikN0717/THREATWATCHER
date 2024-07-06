import React, { useState } from 'react';
import { motion } from "framer-motion";
import dashboardImage from '../assests/dashboard1.jpg';
import dashboardImagetwo from '../assests/dashboard2.jpg';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ incidents, addIncident }) => {
  const navigate = useNavigate();

  const handleReportIncident = () => {
    navigate('/report');
  };

  return (
    <>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="text-3xl md:text-7xl font-bold dark:text-white text-center"
          style={{ marginBottom: '15px' }}
        >
          Emergency Response Dashboard
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-extralight text-base md:text-4xl dark:text-neutral-200"
          style={{ marginBottom: '10px' }}
        >
          Monitoring and managing incidents effectively.
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="button"
          onClick={handleReportIncident}
          style={{ marginTop: '10px' }}
        >
          Report Incident
        </motion.button>
      </div>

      <div className="dashboard-container">
        <div className="incidents-list">
          <h2>Dashboard</h2>
          <p className='heading-2'>CURRENT INCIDENTS OVERVIEW:</p>
          <ul className='ol'>
            {incidents.map((incident, index) => (
              <li key={index} className='description'>
                {incident.description} - {incident.location} ({incident.severity})
              </li>
            ))}
          </ul>
        </div>
        <div className="app-info">
          <div className="about-section">
            <div className="about-text">
              <div className="about-images-1">
                <img src={dashboardImage} alt="Incident Reporting" className="about-image" />
                <p>
                  Report incidents and view real-time data on a centralized dashboard, providing crucial information at a glance.
                </p>
              </div>
              <div className="about-images-1">
                <p>
                  A searchable database of emergency contacts, and disaster prediction based on live data.
                </p>
                <img src={dashboardImagetwo} alt="Contacts from Database" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
