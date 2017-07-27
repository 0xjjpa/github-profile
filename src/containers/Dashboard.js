import Dashboard from '../components/Dashboard';
import { connect } from 'react-redux';

export function mapStateToProps({ profiles }) {
  return {
    profiles
  };
}

export default connect(mapStateToProps)(Dashboard);
