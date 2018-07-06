import IceCreamApp from './IceCreamApp';
import { connect } from 'react-redux';
import { addFlavorToList } from '../../redux/actions/FlavorListActions';

// mapping the global state to the IceCreamApp component's props
const mapStateToProps = state => (state.flavors);

// mapping dispatch to the action functions. The action functions are imported
// together and passed to bindActionCreators
const mapDispatchToProps = (dispatch) => {
  return {
    addFlavorToList: (flavor) => {
      dispatch({
        type: "ADD_FLAVOR",
        flavor: flavor,
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IceCreamApp);
