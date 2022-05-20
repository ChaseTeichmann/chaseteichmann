import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faShieldAlt,
  faSmileBeam,
  faBoxes,
  faShippingFast,
  faCode,
  faGem,
  faQrcode,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Work Experience</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do at ReturnLogic"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h4>TypeScript API</h4>
              <p>
                Migrated existing codebase from a micro-service architecture to TypeScript API with OpenAPI standards
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAngular} style={{ color: `white` }}/>
              </div>
              <h4>Angular Web App</h4>
              <p>
                Developed features that provided additional functionality for retailers to create a robust returns policy
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} />
              </div>
              <h4>AWS Management</h4>
              <p>
                Our application is hosted through AWS EC2 instances with several Lambda webhooks for Shopify Data ingestion</p>
              <p>I built a deployment process for our public API Documentation with AWS S3, CloudFront, and Bitbucket. Most of the tickets I worked with utilized S3 Buckets
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faQrcode} className="solid"  style={{ color: `white` }}/>
              </div>
              <h4>Printerless Returns</h4>
              <p>
               One major request from our client base was the ability to offer shoppers printerless returns. I took ownership of that feature and used our EasyPost integration with the FetchAPI to generate and store a QR code in an S3 Bucket
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>UI/UX Design</h4>
              <p>
                I've worked closely with the Design Team to help provide technical insight on the wireframes. I'm often tasked with design tickets because I have a keen eye for balance/spacing and best practices.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faShieldAlt} className="solid"  style={{ color: `white` }}/>
              </div>
              <h4>Security </h4>
              <p>
              Following a security audit by CrowdStrike, I worked on several upgrades to our platforms security such as: Enforcing User Roles across the application, JSON Web Tokens (JWT), Reset Password Tokens, Prevent Cross Site Scripting Attacks (XSS)
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={150}
                text="Happy Clients"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faBoxes}
                value={1750000}
                text="Returns Created"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                  icon={faGem}
                  value={15}
                  text="Major Releases"
                  symbol="+"
                  duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={270}
                text="Tickets completed"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
