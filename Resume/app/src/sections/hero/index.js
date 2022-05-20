import React from 'react'
import './styles.scss'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col } from 'react-bootstrap'
import Glitch from 'components/glitch'
import Typewriter from 'typewriter-effect'
import ThemeContext from '../../context'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
class Hero extends React.Component {

  static contextType = ThemeContext

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="hero"
        style={{ height: this.context.height }}
      >
        <Row>
          <Col className="content">
            <div className="content-text">
              <Glitch text="Chase Teichmann" />
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Engineer',
                    'UI/UX Designer',
                    'Back-End Engineer',
                    'Front-End Engineer',
                    'Web Developer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              <div className="icon-home">
                <FontAwesomeIcon icon={faReact} />
                <h4 className="margin-left-10">Developed in React</h4>
              </div>
              {/*<button className="hover-button">*/}
              {/*    <span>View Resume</span>*/}
              {/*</button>*/}
            </div>
            {this.icons()}
          </Col>
          {/*<Col md={4} className="img">*/}
          {/*  <img*/}
          {/*    src={this.props.mainImg.childImageSharp.fluid.src}*/}
          {/*    alt="person"*/}
          {/*  />*/}
          {/*</Col>*/}
        </Row>
      </section>
    )
  }

  icons() {
    return this.props.icons.edges.map((value, index) => {
      return (
        <img
          src={value.node.childImageSharp.fluid.src}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${Math.random() *
              (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)}%`,
          }}
          alt="shape"
          key={index}
        />
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "icons" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
)
