import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, NumField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Profiles } from '../../api/profile/Profiles';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  age: String,
  gender: String,
  position: String,
  level: String,
  roles: String,
  goals: String,
  styles: String,
  sports: String,
  hobbies: String,
  major: String,
  image: String,
  availability: String,
  description: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const ProfileCreate = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, age, gender, position, level, roles, goals, styles, sports, hobbies, major, image, availability, description } = data;
    const owner = Meteor.user().username;
    Profiles.collection.insert(
      { firstName, lastName, age, gender, position, level, roles, goals, styles, sports, hobbies, major, image, availability, description, owner },
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
                <LongTextField name="availability" />
                <LongTextField name="description" />
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
