import React from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './DetailedProfile.css';

export const DetailedProfile = ({ profile, onCloseProfile }) => {
  return (
    <div className="DetailedProfile">
      <Row>
        <Col lg={6} md={6} sm={12}>
          <h2>
            {profile.name}
          </h2>
          <h5>
            {profile.bio ? profile.bio : 'No biography'}
          </h5>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="DetailedProfile__info">
            <p>
              <span role="img" aria-label="office">
                🏢
              </span>{' '}
              {profile.company ? profile.company : 'No company'}
            </p>
            <p>
              <span role="img" aria-label="blog">
                🖋
              </span>{' '}
              {profile.blog ? profile.blog : 'No blog'}
            </p>
            <p>
              <span role="img" aria-label="location">
                🌎
              </span>{' '}
              {profile.location ? profile.location : 'No location'}
            </p>
            <p>
              <span role="img" aria-label="followers">
                👤
              </span>{' '}
              {profile.followers}
            </p>
            <p>
              <span role="img" aria-label="repositories">
                📦
              </span>{' '}
              {profile.public_repos}
            </p>
            <Link
              onClick={onCloseProfile}
              className="DetailedProfile__link"
              to={`/`}
            >
              <Button bsStyle="success">Close Profile</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};
