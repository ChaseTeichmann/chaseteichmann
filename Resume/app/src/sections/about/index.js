import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a Full Stack Engineer</h3>
                            <div className="separator" />
                            <p>I graduated from York College of Pennsylvania in 2020 with a Bachelors in Computer Science and Minors in Marketing and Mathematics </p>
                            <p>I'm currently employed with ReturnLogic, which focuses on optimizing the returns management process for e-commerce retailers. I specialize in new feature development to provide stream-lined experiences and robust workflows for Shoppers and our Retail partners.</p>
                            <p>My hobbies outside of work include Aquarium Designing, Selling Aquatic Plants, Cooking/Grilling, Watching Basketball and Football</p>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Web Design" value={100} text={4} delay={800} />
                                <Progress name="AngularJS" value={95} text={3} delay={800} />
                                <Progress name="React" value={50} text={1} delay={800} />
                                <Progress name="Angular" value={60} text={1} delay={800} />
                                <Progress name="TypeScript" value={90} text={3} delay={800} />
                                <Progress name="React-Native" value={50} text={1} delay={800} />
                                <Progress name="AWS" value={90} text={3} delay={800} />
                                <Progress name="JavaScript" value={95} text={3} delay={800}/>
                                <Progress name="CSS" value={100} text={4} delay={800} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero