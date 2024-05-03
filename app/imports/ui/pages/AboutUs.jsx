import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';

const AboutUs = () => (
  <Container className="trans-black-bg py-5">
    <Row className="mb-5">
      <Col xs={1} />
      <Col>
        <h1 className="pfpText">About Us</h1>
        <p className="pfpText">We are a group of ICS students hoping to help other college students feel more comfortable about fitness.
          We have developed an app for our campus gym that provides information about gym equipment, workouts, and connects individuals to workout buddies with similar interests. We would love for you to try our app!
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Victoria Valverde</h3>
        <Image src="images/victoria.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">As a Junior at UH Manoa studying for a BS in Computer Science, I've had the opportunity to work on various projects, but none quite like this website development endeavor.
          Being in charge of creating the equipment and workout pages was both challenging and rewarding.
          It allowed me to dive into the design process, ensuring that users could easily access and understand our fitness resources.

          {/* eslint-disable-next-line max-len */}
          Alongside this, contributing to the user guide, initial calendar, and website style has been a valuable learning experience. Despite not having prior experience in designing websites with a team, I found immense enjoyment in the collaborative process.
          It was gratifying to see our ideas come to life and witness the project evolve from concept to completion.

          {/* eslint-disable-next-line max-len,react/no-unescaped-entities */}
          As I reflect on my role in this project, I've come to appreciate the importance of teamwork and effective communication. Each step of the design process presented its own set of challenges, but overcoming them together only strengthened our project and our bonds as a team.

          While my journey as a student will soon reach its culmination with graduation in Fall 2024, I'm proud of the skills I've developed and the contributions I've made to this project.
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Looking back, I can confidently say that I've enjoyed every moment of the design process and am eager to apply what I've learned to future endeavors.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Jerald Cascayan</h3>
        <Image src="images/jerald.png" className="pfp" />
      </Col>
      <Col md={5}>
        {/* eslint-disable-next-line max-len */}
        <p className="pfpText">I am currently an undergrad senior @ UH MANOA. I am pursuing a B.Sc in Computer Sciences, and have experience in Software Engineering in Industry (startups), TA @ AI4ALL, and volunteer teaching research @ SCIMI. Currently interested in game development such as Gameplay Engineering and Game Engine Development. Looking forward for the epic coding collab sessions!</p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Hayden Bireley</h3>
        <Image src="images/hayden.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">I am currently a Junior at UH Manoa, studying Computer Science.
          I have worked on independent projects but on a team making a website or application. I am looking forward to applying the skills I have learned in a team to make a good website or application.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Brandon Tabios</h3>
        <Image src="images/brandon.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">I am a Junior at UH Manoa, double majoring in both Computer Science and German.
          I have experience doing many team based activities and working on many different projects. I am excited to learn more, and use what I learn into my future career.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Sidney Gills</h3>
        <Image src="images/sidney.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">I&apos;m currently a junior majoring in Computer Science at UH Manoa. My experience includes small, individual-based projects and I&apos;m excited to apply what I&apos;ve learned towards this team-based application.</p>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
