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

export const Profile = () =>
  <Col className="Profile" lg={3} md={6} sm={4}>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://avatars2.githubusercontent.com/u/1128312?v=4"
        alt="Profile Description"
      />
      <CardBlock>
        <CardTitle>User Name</CardTitle>
        <CardSubtitle>URLs for User</CardSubtitle>
        <CardText>Followers, Starred, Orgs.</CardText>
        <Button>Learn More</Button>
      </CardBlock>
    </Card>
  </Col>;
