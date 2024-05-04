import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => (
  <Container className="trans-black-bg py-5" id="AboutUS-Page">
    <div className="d-flex justify-content-center">
      <Image src="/images/WRC.jpg" />
    </div>
    <Row className="mb-5">
      <Col xs={1} />
      <Col>
        <h1 className="pfpText">About Us</h1>
        <p className="pfpText">We are a group of ICS students hoping to help other college students feel more comfortable about fitness.
          We have developed an app for our campus gym that provides information about gym equipment, workouts, and connects individuals to workout buddies with similar interests. We would love for you to try our app!
        </p>
        <h1 className="pfpText">The problem</h1>
        <p className="pfpText">
          For many UHM students the gym can seem like an intimidating place and going alone can feel daunting.
          It’s not just about the lack of motivation but also the uncertainty about how to use the equipment effectively and the idea of taking on a new venture alone.
        </p>
        <h1 className="pfpText">Our Solution</h1>
        <p className="pfpText">
          On our app Manoa Fit Connect, we’re all about making fitness fun, accessible, and supportive for every student.
          We’ve created a platform that connects you with gym buddies and provides the knowledge you need to feel confident in the gym environment.
        </p>
        <h1 className="pfpText"> App Features</h1>
        <p>
          <ul className="pfpText">
            <li>Friends</li>
            <p>See who is online and working out and match people with similar interests</p>
            <li>Equipment</li>
            <p>See what equipment is available in the gym and get tips on how to use them</p>
            <li>Progress Tracker</li>
            <p>Track personal best and how your work outs have been going</p>
            <li>Workouts</li>
            <p>Choose from an array of workouts, perfectly organized by category and difficulty with option to randomly select a workout</p>
            <li>Events</li>
            <p>See what events are happening</p>
          </ul>
        </p>
      </Col>
    </Row>
    <div className="d-flex justify-content-center">
      <h1 className="pfpText">The Team</h1>
    </div>

    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Victoria Valverde</h3>
        <Row>
          <Link to="https://www.linkedin.com/in/victoriavalverde/">LinkedIn</Link>
        </Row>
        <Image src="images/victoria.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">As a Junior at UH Manoa studying for a BS in Computer Science, I&apos;ve had the opportunity to work on various projects, but none quite like this website development endeavor.
          Being in charge of creating the equipment and workout pages was both challenging and rewarding.
          It allowed me to dive into the design process, ensuring that users could easily access and understand our fitness resources.
          Alongside this, contributing to the user guide, initial calendar, and website style has been a valuable learning experience.
          Despite not having prior experience in designing websites with a team, I found immense enjoyment in the
          collaborative process.
          It was gratifying to see our ideas come to life and witness the project evolve from concept to completion.
          As I reflect on my role in this project, I&apos;ve come to appreciate the importance of teamwork and effective communication.
          Each step of the design process presented its own set of challenges, but overcoming them together only
          strengthened our project and our bonds as a team.

          While my journey as a student will soon reach its culmination with graduation in Fall 2024, I&apos;m proud of the skills I&apos;ve developed and the contributions I&apos;ve made to this project.
          Looking back, I can confidently say that I&apos;ve enjoyed every moment
          of the design process and am eager to apply what I&apos;ve learned to future endeavors.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Jerald Cascayan</h3>
        <Row>
          <Link to="https://www.linkedin.com/in/jeraldy-cascayan-695112190/">LinkedIn</Link>
        </Row>
        <Image src="images/jerald.png" className="pfp" />
      </Col>
      <Col md={5}>
        {/* eslint-disable-next-line max-len */}
        <p className="pfpText">I am currently an undergrad senior @ UH MANOA. I am pursuing a B.Sc in Computer Sciences, and have experience in Software Engineering in Industry (startups), TA @ AI4ALL, and volunteer teaching research @
          SCIMI. Currently interested in game development such as Gameplay Engineering and Game Engine Development. Looking forward for the epic coding collab sessions!
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>

        <Row><h3 className="pfpText">Hayden Bireley</h3></Row>
        <Row>
          <Link to="https://www.linkedin.com/in/hayden-bireley/">LinkedIn</Link>
        </Row>
        <Image src="images/hayden.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">I am currently a Junior at UH Manoa, studying Computer Science.
          I have worked on independent projects but this was my first time working as a team making a website or application.
          I was in charge of the Progressive Tracker page and the user landing page. The making of those pages was challenging and rewarding at the same time. It allowed my to express my creative side as well as making it easy to use for users.
          As a result of making this app, I learned the importance of teamwork and good communication with your teammate. Without it nothing would be do or done poorly and acceptable for the user.
          Also I learned that you have to respect your team time and work around their blockers.
          I am looking forward to applying the skills I have learned in this team to my next projects in the future. I have learned a lot of valuable skills in making this app.
        </p>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col xs={2} />
      <Col md={3}>
        <h3 className="pfpText">Brandon Tabios</h3>
        <Row>
          <Link to="https://www.linkedin.com/in/brandon-tabios-4aa0782aa/">LinkedIn</Link>
        </Row>
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
        <Row>
          <Link to="https://www.linkedin.com/in/sidneygills/">LinkedIn</Link>
        </Row>
        <Image src="images/sidney.png" className="pfp" />
      </Col>
      <Col md={5}>
        <p className="pfpText">I&apos;m currently a junior majoring in Computer Science at UH Manoa. My experience includes small, individual-based projects and I&apos;m excited to apply what I&apos;ve learned towards this team-based
          application.
        </p>
      </Col>
    </Row>
  </Container>
);

export default AboutUs;
