import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import HealthFormContainer from '../containers/HealthFormContainer';

// Seems like this file should go in the containers folder
 class App extends Component {
  render() {
    return (<HealthFormContainer />);
  }
}

 export default App;
