import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from 'reactstrap';

import './Profile.css';

export const Profile = ({ profile }) =>
  <Col className="Profile" lg={3} md={4} sm={4}>
    <Card>
      <CardImg
        top
        width="100%"
        src={profile.avatar_url}
        alt="Profile Description"
      />
      <CardBlock>
        <CardTitle>
          {profile.login}{' '}
        </CardTitle>
        <CardSubtitle>
          ID - {profile.id}
        </CardSubtitle>
        <CardText>
          Type - {profile.type}
        </CardText>
        <Button>Learn More</Button>
      </CardBlock>
    </Card>
  </Col>;
