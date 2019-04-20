import { connect } from 'react-redux';

import { fetchFormData, customHandleBlur } from '../actions';
import HealthForm from '../components/HealthForm';

const mapStateToProps = (state) => ({
  formData: state.healthForm.formData || [],
});

const mapDispatchToProps = (dispatch) => ({
  fetchFormData: () => dispatch(fetchFormData()),
  // You might want to consider naming this something along the lines of what it's meant to do (save user input)
  // Only the input component itself is concerned with the fact that a blur action takes place
  customHandleBlur: (e, id) => dispatch(customHandleBlur(e, id)),
});

const HealthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HealthForm);

export default HealthFormContainer;
