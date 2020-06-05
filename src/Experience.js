import React from 'react';

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

export default Experience;