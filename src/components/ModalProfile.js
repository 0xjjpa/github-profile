import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from 'reactstrap';
import Profile from './Profile';

const ModalProfile = ({ profile }) => {
  return (
    <div className="ModalProfile">
      <Modal isOpen={true}>
        <ModalHeader>Profile title</ModalHeader>
        <ModalBody>
          <Row>
            <Col className="Profile" lg={6} md={6} sm={12}>
              <Profile profile={profile} isInsideModal={true} />
            </Col>
            <Col className="Profile" lg={6} md={6} sm={12}>
              <h2>
                {profile.name}
              </h2>
              <p>
                🏢 {profile.company ? profile.company : 'No company'}
              </p>
              <p>
                🖋 {profile.blog ? profile.blog : 'No blog'}
              </p>
              <p>
                🌎 {profile.location ? profile.location : 'No location'}
              </p>
              <h3>
                {profile.bio ? profile.bio : 'No biography'}
              </h3>
              <pre>
                👤 {profile.followers}
                📦 {profile.public_repos}
              </pre>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary">Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
