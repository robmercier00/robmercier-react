import React from 'react';
import reactLogo from './logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="footer-left">
          &copy;&nbsp;{new Date().getFullYear()}&nbsp;Rob Mercier
        </div>
        <div id="footer-right">
          <span>Made with React</span> <img src={reactLogo} className="App-logo" alt="React logo" />
        </div>
      </footer>
    )
  }
}

export default Footer;