import Dashboard from '../components/Dashboard';
import { LOAD_PROFILE } from '../constants/actions';
import { connect } from 'react-redux';

const mapStateToProps = ({ profiles, profile }) => {
  return {
    profiles,
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onProfileClick: id => dispatch({ type: LOAD_PROFILE, id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
