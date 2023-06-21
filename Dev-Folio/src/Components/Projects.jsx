/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'

export default function Projects({color, bgColor}) {
  const toolDivStyle = {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    top: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const skillDivStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
  }

  const bodyStyle = {
    position: 'relative',
    top: '15vh',
    width: '80vw',
  }

  const colorChange = {
    color: color,
  }

  return (
    <div className="tools-div" style={toolDivStyle}>
      <div className="tools-body" style={bodyStyle}>
        <div className="tools-title top">
          <h1>&lt;div id='tools'&gt;</h1>
        </div>
        <div className="skills-div" style={skillDivStyle}>
          <div className="project">
            <h1 className="frontend-title">TripItEasy</h1>
            <div className="frontend-list">
              <img src="https://i.imgur.com/5Z3ZQ8X.png" alt="TripItEasy" />
              <p>Travel App that allows users to create trips and add activities to their trips. Users can also view other users trips and activities.</p>
              </div>
          </div>
        </div>
        <div className="tools-title bottom">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
