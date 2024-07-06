import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Remidies.css'

const data = [
    {
        image: 'tornado.jpg',
        title: 'Tornado',
        description: 'Effective tornado management encompasses preparedness, response, and recovery. Preparedness involves educating the community about tornado safety, constructing storm shelters, and ensuring households have emergency kits. Implementing early warning systems is crucial for alerting residents of imminent tornadoes. During the response phase, emergency teams are deployed for immediate assistance, conducting search and rescue operations, and managing evacuations. Clear communication channels between emergency services and the public are essential.higher ground, stay informed via emergency alerts, and do not return until authorities declare it safe.'
    },
    {
        image: 'tsunami.jpg',
        title: 'Tsunami',
        description: 'Managing tsunamis involves installing early warning systems, developing and regularly updating evacuation plans, and educating the public about tsunami risks and safety measures. Infrastructure in coastal areas must be designed to withstand tsunamis. In the response phase, immediate evacuations to higher ground are crucial, followed by search and rescue operations and providing medical assistance. Clear communication with the public is vital. Recovery efforts include detailed damage assessments, reconstruction of homes and infrastructure to be more resilient, and offering financial aid and psychological support to affected individuals and communities.'
    },
    {
        image: 'earthquake.jpg',
        title: 'Earthquake',
        description: 'An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth\'s lithosphere. Drop, cover, and hold on during the shaking, and be prepared for aftershocks. Have an emergency kit ready and know your evacuation routes.'
    }
];

const Dashboard = () => {
    const [selectedDisaster, setSelectedDisaster] = useState(data[0]);

    const handleImageClick = (index) => {
        setSelectedDisaster(data[index]);
    };

    return (
        <div className="dashboard">
            <div className="description-container">
                
                <div>
                    <h3>{selectedDisaster.title}</h3>
                    <p>{selectedDisaster.description}</p>
                </div>
            </div>
            <div className="carousel-container">
                <Carousel showThumbs={false} onClickItem={handleImageClick}>
                    {data.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} alt={item.title} />
                            <p className="legend">{item.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Dashboard;
