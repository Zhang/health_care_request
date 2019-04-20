import React, { Component } from 'react';
import AddInputFieldContainer from '../containers/AddInputFieldContainer';
import TextInput from './TextInput';

import { pdf_1_url } from '../config/pdf_url';

const pdfStyles = {
  backgroundImage: `url(${pdf_1_url})`,
  backgroundSize: 'contain',
  height: '1600px',
  width: '1200px',
  margin: '0 auto',
}

class HealthForm extends Component {
  componentDidMount() {
    this.props.fetchFormData();
  }

  render() {
    let { formData, customHandleBlur } = this.props;
    return (
      <div style={pdfStyles}>
      {
        Object.keys(formData).map(id => (
          <TextInput
            style={formData[id]}
            id={id}
            key={id}
            customHandleBlur={customHandleBlur}
          />
        ))
      }
      <AddInputFieldContainer />
      </div>
    );
  }
}

export default HealthForm;
