import React, { Component } from 'react';
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

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <Col xs={12} md={4}>
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
        </Col>
      </div>
    );
  }
}
