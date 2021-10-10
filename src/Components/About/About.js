import React from 'react'
import './About.css'
import selfAvatar from '../../image/zayed-non-bg-square.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFileDownload,
  faEye,
  faCode,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { Button, ButtonGroup } from '@material-ui/core'
import Slide from 'react-reveal/Reveal'
const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='page-title text-white'>About Me</h1>
          </div>
        </div>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-md-6 border-end pt-5 pb-5'>
            <div className='avatarSelf'>
              <img src={selfAvatar} alt='' className='img-fluid' />
            </div>

            <h3 className='text-white mt-5'>
              <span>I'm</span>{' '}
              <span className='brand-color'>Zayed Ibn Ibrahim.</span>
            </h3>

            <p className='text-white'>
              Enthusiastic React.js developer with broad expertise in
              Javascript/ES6 and willing to learn and master Back-end
              Development. Looking for a challenging yet exciting career with a
              progressive company that will provide development opportunities.
            </p>
            <div className='row pt-5 d-flex'>
              <div className='col-md-6'>
                <a
                  className='resumeButton'
                  rel='noreferrer'
                  target='_blank'
                  href='https://drive.google.com/file/d/1JKinWM2-0BOgHfZc3gLr4YBjBC07iBRg/view?usp=sharing'
                >
                  <span className='button-text'>View Resume</span>
                  <span className='button-icon'>
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </a>
              </div>
              <div className='col-md-6'>
                <a
                  className='resumeButton'
                  href='https://drive.google.com/uc?export=download&id=1JKinWM2-0BOgHfZc3gLr4YBjBC07iBRg'
                >
                  <span className='button-text'>Download Resume</span>
                  <span className='button-icon'>
                    <FontAwesomeIcon icon={faFileDownload} />
                  </span>
                </a>
              </div>
            </div>
            <div className='social-link d-flex'>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/in/zayed-ibn-ibrahim-b51477189/'
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://github.com/zayedibnibrahim'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='https://join.skype.com/invite/vjeiFuRXxnvK'
              >
                <FontAwesomeIcon icon={faSkype} />
              </a>
              <a
                rel='noreferrer'
                target='_blank'
                href='mailto:zayed.ibn@gmail.com'
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>

          <div className='col-md-6 pt-5 pb-5'>
            <Slide right>
              <h3 className='text-white'>
                <FontAwesomeIcon icon={faCode} /> Programming Skills
              </h3>
              <div className='skillForDesk'>
                <div className='skill'>
                  <h4 className='brand-color'>Expertise:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Javascript</Button>
                    <Button>ES6</Button>
                    <Button>React</Button>
                    <Button>Rest API</Button>
                    <Button>Next</Button>
                    <Button>Redux</Button>
                    <Button>Express</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Front End:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>React js</Button>
                    <Button>HTML</Button>
                    <Button>CSS</Button>
                    <Button>SCSS</Button>
                    <Button>Material UI</Button>
                    <Button>Bootstrap</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Back End:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Node js</Button>
                    <Button>Express js</Button>
                    <Button>Strapi</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Database:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>MongoDB</Button>
                    <Button>MySQL</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Tools:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Git</Button>
                    <Button>NPM</Button>
                    <Button>MySQL</Button>
                    <Button>VSCode</Button>
                    <Button>Firebase</Button>
                    <Button>Netlify</Button>
                    <Button>Chrome dev tool</Button>
                    <Button>Heroku</Button>
                    <Button>Vercel</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Familiar:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Typescript</Button>
                    <Button>React Native</Button>
                  </ButtonGroup>
                </div>
              </div>

              <div className='skillForMob'>
                <div className='skill'>
                  <h4 className='brand-color'>Expertise:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Javascript</Button>
                    <Button>ES6</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>React</Button>
                    <Button>Rest API</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Next</Button>
                    <Button>Redux</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Express</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Front End:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>React js</Button>
                    <Button>HTML</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>CSS</Button>
                    <Button>SCSS</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Material UI</Button>
                    <Button>Bootstrap</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Back End:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Node js</Button>
                    <Button>Express js</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Strapi</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Database:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>MongoDB</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Tools:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Git</Button>
                    <Button>NPM</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>MySQL</Button>
                    <Button>VSCode</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Firebase</Button>
                    <Button>Netlify</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Chrome dev tool</Button>
                    <Button>Heroku</Button>
                  </ButtonGroup>
                  <br />
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Vercel</Button>
                  </ButtonGroup>
                </div>
                <div className='skill'>
                  <h4 className='brand-color'>Familiar:</h4>
                  <ButtonGroup
                    color='primary'
                    aria-label='outlined primary button group'
                  >
                    <Button>Typescript</Button>
                    <Button>React Native</Button>
                  </ButtonGroup>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
