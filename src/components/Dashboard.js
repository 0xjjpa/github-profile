import React from 'react';
import { Profile } from '../components/Profile';
import { Row, Col } from 'reactstrap';
import './Dashboard.css';

const Dashboard = ({ id, profiles, onProfileClick, profile }) => {
  console.log('Profiles', profiles, id, profile);
  return (
    <div className="Dashboard">
      <Row>
        {profiles.map((profile, index) => {
          return (
            <Col key={index} className="Profile" lg={3} md={4} sm={4}>
              <Profile
                key={index}
                profile={profile}
                onProfileClick={onProfileClick}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
