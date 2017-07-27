import React from 'react';
import { Profile } from '../components/Profile';
import { DetailedProfile } from '../components/DetailedProfile';
import { Row, Col } from 'reactstrap';
import './Dashboard.css';

export default class Dashboard extends React.Component {
  componentDidMount() {
    const { id, onProfileClick, profile } = this.props;
    id && !profile && onProfileClick(id);
  }
  render() {
    const { id, profiles, onProfileClick, profile } = this.props;

    const isDetailedView = id && profile;
    const loadingProfiles = profiles.length === 0;

    return (
      <div className="Dashboard">
        {isDetailedView
          ? <DetailedProfile profile={profile} />
          : <Row>
              {loadingProfiles
                ? <Col lg={12} md={12} sm={12}>
                    <h1> Loading... </h1>
                  </Col>
                : profiles.map((profile, index) => {
                    return (
                      <Col key={index} lg={3} md={4} sm={4}>
                        <Profile
                          key={index}
                          profile={profile}
                          onProfileClick={onProfileClick}
                        />
                      </Col>
                    );
                  })}
            </Row>}
      </div>
    );
  }
}
