import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Profiles } from '../../api/profile/Profiles';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema(
  {
    firstName: String,
    lastName: String,
    image: String,
    status: {
      type: String,
      allowedValues: ['Undergraduate Student', 'Graduate Student', 'Faculty/Staff'],
    },
    level: {
      type: String,
      allowedValues: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'],
    },
    goals: {
      type: String,
      allowedValues: ['Strength', 'Cardio', 'Weight Loss', 'Exercise'],
    },
    styles: {
      type: String,
      allowedValues: ['Weight Lifting', 'Powerlifting', 'Olympic Weightlifting', 'Bodybuilding', 'Calisthenics', 'Plyometrics', 'Aerobic Exercise', 'HIIT', 'Circuit Training', 'Sports'],
    },
  },
);

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const ProfileCreate = () => {

  // On submit, insert the data.
  const submit = (data) => {
    const { firstName, lastName, image, status, level, goals, styles } = data;
    const owner = Meteor.user().username;
    Profiles.collection.insert(
      { firstName, lastName, image, status, level, goals, styles, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Profile Created', 'success').then((value) => {
            if (value) {
              window.location.href = '/userprofile';
            }
          });
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Create Profile</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Row>
                  <Col><TextField name="firstName" label="First Name" /></Col>
                  <Col><TextField name="lastName" label="Last Name" /></Col>
                  <Col><TextField name="image" label="Image URL" /></Col>
                </Row>
                <Row>
                  <Col>
                    <SelectField name="status" label="University Status" />
                  </Col>
                  <Col>
                    <SelectField name="level" label="Proficiency Level" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <SelectField name="goals" label="Fitness Goals" />
                  </Col>
                  <Col>
                    <SelectField name="styles" label="Workout Styles" />
                  </Col>
                </Row>
                <SubmitField value="Submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileCreate;
