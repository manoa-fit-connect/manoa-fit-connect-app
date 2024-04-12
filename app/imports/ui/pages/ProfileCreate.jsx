import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Profiles } from '../../api/profile/Profiles';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  image: String,
  age: {
    type: Number,
    optional: true,
  },
  gender: {
    type: String,
    optional: true,
  },
  position: {
    type: String,
    optional: true,
  },
  level: String,
  roles: {
    type: Array,
    optional: true,
  },
  'roles.$': String,
  goals: String,
  styles: String,
  sports: {
    type: Array,
    optional: true,
  },
  'sports.$': String,
  hobbies: {
    type: Array,
    optional: true,
  },
  'hobbies.$': String,
  major: {
    type: String,
    optional: true,
  },
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const ProfileCreate = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, image, age, gender, position, level, roles, goals, styles, sports, hobbies, major } = data;
    const owner = Meteor.user().username;
    Profiles.collection.insert(
      { firstName, lastName, image, age, gender, position, level, roles, goals, styles, sports, hobbies, major, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
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
                  <Col><TextField name="firstName" /></Col>
                  <Col><TextField name="lastName" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="age" /></Col>
                  <Col><TextField name="gender" /></Col>
                  <Col><TextField name="position" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="level" /></Col>
                  <Col><TextField name="roles" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="goals" /></Col>
                  <Col><TextField name="styles" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="sports" /></Col>
                  <Col><TextField name="hobbies" /></Col>
                </Row>
                <Row>
                  <Col><TextField name="major" /></Col>
                  <Col><TextField name="image" /></Col>
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
