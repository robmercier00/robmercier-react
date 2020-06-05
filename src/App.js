import React from 'react';
import Header from './Header.js';
import Experience from './Experience.js';
import Expertise from './Expertise.js';
import Skills from './Skills.js';
import Education from './Education.js';
import MiscExperience from './MiscExperience.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <Experience />
          <Expertise />
          <Skills />
          <Education />
          <MiscExperience />
          <Footer />
        </div>
    );
  }
}

export default App;
