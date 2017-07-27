import React from 'react';
import { Profile } from '../components/Profile';
import { Row } from 'reactstrap';
import './Dashboard.css';

const Dashboard = ({ id, profiles }) => {
  console.log('Profiles', profiles, id);
  return (
    <div className="Dashboard">
      <Row>
        {profiles.map((profile, index) => {
          return <Profile key={index} profile={profile} />;
        })}
      </Row>
    </div>
  );
};

export default Dashboard;
