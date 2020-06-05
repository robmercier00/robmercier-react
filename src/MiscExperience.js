import React from 'react';

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

export default MiscExperience;