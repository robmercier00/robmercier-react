import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="App-header"></div>
        <div className="App-header-text">
          <h1>Rob Mercier</h1>
          <div className="subhead">
            Solutions Architect, LAMP stack development, CMS integration, API programming, Team Leader
          </div>
          <div className="media-object">
            <div id="aboutme">
              I've been a musician, a teacher, an email marketer, a photographer, a hockey player, a web developer, and a solutions architect.<br />
              Through each of those endeavors I've learned teamwork, leadership, the importance of asking questions, and listening. Every voice is relevant, and every perspective is important.<br />
              I've developed on Windows 7 & 10, Ubuntu, Fedora, and MacOS; using native development tools, Hyper-V, VirtualBox, and Docker. Overall, I prefer a Mac.<br />
              It bridges the gap nicely between the software availability of Windows and the ease of use and bash/zsh command line that I love in a *nix box.<br />
              I'm excited to see the development of Windows 10's WSL2, though. It looks like it could be a game changer for a lot of developers.
              <div className="social media-objects">
                <img id="imgme" className="img-responsive" src="rob2.jpg" alt="rob" />
                <a rel="noopener noreferrer" id="LinkedIn" href="https://www.linkedin.com/in/robmercier/" target="_blank">
                  <img src="basic_social/colored/32/circle/linkedin.png" alt="https://www.linkedin.com/in/robmercier/" />
                </a>
                <a rel="noopener noreferrer" id="CodePen" href="https://codepen.io/robmercier00" target="_blank">
                  <img src="basic_social/colored/32/circle/codepen.png" alt="https://codepen.io/robmercier00" />
                </a>
                <a rel="noopener noreferrer" id="GitHub" href="https://github.com/robmercier00" target="_blank">
                  <img src="basic_social/colored/32/circle/github_alt.png" alt="https://github.com/robmercier00" />
                </a>
                <a id="resume" href="RobMercierResume2020.docx">
                  Download my Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;