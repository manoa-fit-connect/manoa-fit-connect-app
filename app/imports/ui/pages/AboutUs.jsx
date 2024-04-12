import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const AboutUs = () => (
  <Container>
    <Row>
      <Col xs={1} />
      <Col>
        <h1 className="pfpText">About Us</h1>
        <p className="pfpText">We are a group of students looking to help other students with finding someone with a partner. This project allows students to work together and accomplish
          fitness goals.
        </p>
      </Col>
      <hr />
      <Col xs={2} />
      <Col md={3}>
        <h1 className="pfpText">Victoria Valverde</h1>
        <Image src="images/victoria.png" className="pfp" />
      </Col>
      <Col md={5}>
        <br />
        <br />
        <p className="pfpText"> I am currently a Junior at UH Manoa, studying Computer Science. I have worked on independent projects
          but on a team making a website or application. I am looking forward to applying the skills
          I have learned in a team to make a good website or application.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={2} />
      <Col md={3}>
        <h1 className="pfpText">Jerald Cascayan</h1>
        <Image src="images/jerald.png" className="pfp" />
      </Col>
      <Col md={5}>
        <br />
        <br />
        <p className="pfpText"> I am currently an undergrad senior @ UH MANOA. I am pursuing a B.Sc in Computer Sciences, and have
          experience in Software Engineering in Industry (startups), TA @ AI4ALL, and volunteer teaching research
          @ SCIMI.
          Currently interested in game development such as Gameplay Engineering and Game Engine Development.
          Looking forward for the epic coding collab sessions!
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={2} />
      <Col md={3}>
        <h1 className="pfpText">Hayden Bireley</h1>
        <Image src="images/hayden.png" className="pfp" />
      </Col>
      <Col md={5}>
        <br />
        <br />
        <p className="pfpText"> I am currently a Junior at UH Manoa, studying Computer Science. I have worked on independent projects
          but on a team making a website or application. I am looking forward to
          applying the skills I have learned in a team to make a good website or application.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={2} />
      <Col md={3}>
        <h1 className="pfpText">Brandon Tabios</h1>
        <Image src="images/brandon.png" className="pfp" />
      </Col>
      <Col md={5}>
        <br />
        <br />
        <p className="pfpText"> I am a Junior at UH Manoa, double majoring in both Computer Science and German. I have experience
          doing many team based activities and working on many different projects.
          I am excited to learn more, and use what I learn into my future career.
        </p>
      </Col>
    </Row>
    <Row>
      <Col xs={2} />
      <Col md={3}>
        <h1 className="pfpText">Sidney Gills</h1>
        <Image src="images/sidney.png" className="pfp" />
      </Col>
      <Col md={5}>
        <br />
        <br />
        <p className="pfpText"> I&apos;m currently a junior majoring in Computer Science at UH Manoa. My experience includes small,
          individual-based projects
          and I&apos;m excited to apply what I&apos;ve learned towards this team-based application.
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
