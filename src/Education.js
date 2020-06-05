import React from 'react';

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

export default Education;