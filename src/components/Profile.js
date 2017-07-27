import * as React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle
} from 'reactstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Profile.css';

export const Profile = ({ profile, onProfileClick }) =>
  <Card className="Profile">
    <CardImg top width="100%" src={profile.avatar_url} />
    <CardBlock>
      <CardTitle>
        {profile.login}
      </CardTitle>
      <CardSubtitle>
        ID - {profile.id}
      </CardSubtitle>
      <CardText>
        Type - {profile.type}
      </CardText>
      <Link
        onClick={() => onProfileClick(profile.login)}
        className="Profile__link"
        to={`/profile/${profile.login}`}
      >
        <Button bsStyle="link">Learn More</Button>
      </Link>
    </CardBlock>
  </Card>;
