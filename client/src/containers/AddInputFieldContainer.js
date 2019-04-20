import { connect } from 'react-redux';

import { addInputField } from '../actions';
import AddInputField from '../components/AddInputField';

const mapStateToProps = (state) => ({
  formData: state.healthForm.formData || [],
});

const mapDispatchToProps = (dispatch) => ({
  addInputField: (id, styles) => dispatch(addInputField(id, styles)),
});

/*
  Interesting splitting up the component w/ their connection to the redux store. Have you seen a benefit in doing this in past projects?
  I've generally found that the two are so interconnected that it makes sense to couple them in the same file, but that might not always be the case
*/

const AddInputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddInputField);

export default AddInputFieldContainer;
