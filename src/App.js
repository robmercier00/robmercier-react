import React from 'react';
import reactLogo from './logo.svg';
import { render } from '@testing-library/react';

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
                <a id="resume" href="/docs/RobMercierResume2020.docx">
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

class Experience extends React.Component {
  render() {
    return (
      <div className="modules" id="experience">
        <div className="modules-left">
          Experience
        </div>
        <div className="modules-right">
          <div>
            <span className="jobtitle">Web Developer & Solutions Architect</span>
            <span className="company">Pure Incubation</span>
            <span className="location">Topsfield and Danvers, MA</span>
            <span className="dates">July 2014 – Present</span>
            <div className="explist">
              <ul>
                <li>LAMP stack development for user-facing public web applications, internal administration consoles, and internal/client-facing dashboards</li>
                <li>API integration with 3rd-party CMS & ESP (Email Service Provider) systems. Client and partner communication for inter-system integrations</li>
                <li>Team lead for internal-facing and public-facing applications</li>
                <li>Mentor development teams for new technology adoption, coding best practices, and whole-business application integration</li>
                <li>Guide architecture and development solution for enhancement requests and new features</li>
                <li>Create proof-of-concept applications using new technologies (microservices concepts, Docker, AWS)</li>
                <li>Create developer and management guidelines for application re-architecture and maintenance</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="jobtitle">Junior Developer</span>
            <span className="company">Pure Incubation</span>
            <span className="location">Topsfield, MA</span>
            <span className="dates">July 2013 – July 2014</span>
            <div className="explist">
              <ul>
                <li>Develop/debug web applications</li>
                <li>Technical integrations with external systems</li>
                <li>Business guidance for offshore teams</li>
                <li>Develop solutions for new business ventures</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="jobtitle">Content & Social Marketing Manager</span>
            <span className="company">Pure Incubation</span>
            <span className="location">Topsfield, MA</span>
            <span className="dates">June 2011 – July 2013</span>
            <div className="explist">
              <ul>
                <li>Grow revenue using data-driven email marketing best practices</li>
                <li>Daily campaign planning, content selection, and newsletter production</li>
                <li>Social Media Marketing</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="jobtitle">Community Specialist</span>
            <span className="company">Sermo</span>
            <span className="location">Cambridge, MA</span>
            <span className="dates">January 2011 – June 2011</span>
            <div className="explist">
              <ul>
                <li>Coordinate and execute email marketing programs to physician community</li>
                <li>Develop, track, and report performance measurements for community moderation and support</li>
                <li>Take in and resolve incoming day-to-day email and phone support requests from members of the physician community</li>
                <li>Stay connected to member satisfaction levels. Proactively work with the necessary departments to improve overall satisfaction</li>
              </ul>
            </div>
          </div>
          <div>
            <span className="jobtitle">Associate Manager of Lead Generation Programs</span>
            <span className="company">Ziff Davis Enterprise</span>
            <span className="dates">April 2008 – December 2010</span>
            <span className="location">Topsfield, MA</span>
            <div className="explist">
              <ul>
                <li className="subspecs">Lead Generation
                  <ul>
                    <li>Created & edited content for business-to-business marketing newsletters</li>
                    <li>Created & edited HTML & text templates for newsletters</li>
                    <li>Designed newsletter/Website functionality that immediately increased lead conversions by 50%</li>
                  </ul>
                </li>
                <li className="subspecs">E-mail Marketing
                  <ul>
                    <li>Implemented global redesign of all Web Buyer's Guide newsletters</li>
                    <li>Created new design for 4 additional Web Buyer's Guide newsletters</li>
                    <li>Improved IP sender reputation for Web Buyer's Guide brand newsletters to an average of 95%</li>
                    <li>Maintained exceptionally low spam/abuse complaint levels for Web Buyer's Guide newsletters</li>
                  </ul>
                </li>
                <li className="subspecs">Social Media
                  <ul>
                    <li>Increased Web Buyer's Guide Twitter followers by approximately 32% per month</li>
                    <li>Implemented plan to increase Web Buyer's Guide presence across various social media networks</li>
                    <li>Implemented social media marketing along with newsletter marketing initiatives</li>
                    <li>Utilized various tracking and social marketing tools to further Web Buyer's Guide lead generation and demand generation initiatives</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Expertise extends React.Component {
  render() {
    return (
      <div className="modules" id="expertise">
        <div className="modules-left">
          Expertise
        </div>
        <div className="modules-right">
          <div className="tech">PHP 5.x-7.x</div>
          <div className="tech">MySQL</div>
          <div className="tech">jQuery/JavaScript</div>
          <div className="tech">HTML/HTML5</div>
          <div className="tech">CSS/SCSS</div>
          <div className="tech">Linux (Ubuntu, Fedora, CentOS)</div>
          <div className="tech">REST APIs</div>
          <div className="tech">CRM integration</div>
          <div className="tech">Docker</div>
          <div className="tech">Azure</div>
          <div className="tech">Amazon Web Services (AWS)</div>
          <div className="tech">Apache</div>
          <div className="tech">Nginx/PHP-FPM</div>
          <div className="tech">Git</div>
          <div className="tech">NodeJS</div>
          <div className="tech">Vue</div>
          <div className="tech">Angular</div>
        </div>
      </div>
    )
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="modules" id="skills">
        <div className="modules-left">
          Key Skills
        </div>
        <div className="modules-right">
          <div className="tech">Leadership</div>
          <div className="tech">Management</div>
          <div className="tech">Server Maintenance</div>
          <div className="tech">Solutions Architecture</div>
          <div className="tech">Business Rules Integration</div>
          <div className="tech">Troubleshooting and Debugging</div>
          <div className="tech">Programming and Coding</div>
          <div className="tech">Learning and Applying New Technologies</div>
        </div>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="modules" id="education">
        <div className="modules-left">
          Education
          <div className="uml">
            <img src="uml_logo_stacked.jpg" alt="University of Massachusetts - Lowell" />
          </div>
        </div>
        <div className="modules-right">
          University of Massachusetts-Lowell - 2000<br />
          <em>Bachelor of Music</em> - Sound Recording Technology<br />
          <em>Cum Laude</em><br />
          <em>President</em> - Audio Engineering Society Student Chapter
        </div>
      </div>
    )
  }
}

class MiscExperience extends React.Component {
  render() {
    return (
      <div className="modules" id="misc-experience">
        <div className="modules-left">
          Misc Experience
        </div>
        <div className="modules-right">
          <div className="misc-exp-listing">
            <span className="misc-jobtitle">Owner, Instructor</span><br />
            <span className="misc-company">All4Strings</span>
            <span className="misc-location">Woburn, MA</span><br />
            <span className="misc-dates">January 2003 – April 2008</span>
            <div className="misc-explist">
              <ul>
                <li>Instruct students in electric and acoustic guitar, music theory, audio recording</li>
                <li>Responsible for all business activities, including marketing, invoicing, accounting, Website design and maintenance</li>
                <li>Provide a yearly student recital, including booking the recital hall, providing all sound reinforcement equipment and services and setting up post-recital reception</li>
              </ul>
            </div>
          </div>
          <div className="misc-exp-listing">
            <span className="misc-jobtitle">Assistant Manager</span><br />
            <span className="misc-company">FYE</span>
            <span className="misc-location">Medford, MA</span><br />
            <span className="misc-dates">November 2005 – April 2006</span>
          </div>
          <div className="misc-exp-listing">
            <span className="misc-jobtitle">Head Technician</span><br />
            <span className="misc-company">Alactronics</span>
            <span className="misc-location">Wellesley, MA</span><br />
            <span className="misc-dates">September 2000 – December 2002</span>
          </div>
          <div>
            <span className="misc-jobtitle">Assistant Manager</span><br />
            <span className="misc-company">Record Town</span>
            <span className="misc-location">Nashua, NH</span><br />
            <span className="misc-dates">May 1994 – September 1999</span>
          </div>
        </div>
      </div>
    )
  }
}

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
  /*<img src={reactLogo} className="App-logo" alt="React logo" />*/
}

export default App;
