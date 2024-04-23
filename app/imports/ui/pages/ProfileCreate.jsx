import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import Form from 'react-bootstrap/Form';
import { Profiles } from '../../api/profile/Profiles';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true },
    status: { type: String, required: true },
    level: { type: String, required: true },
    goals: { type: String, required: true, custom() {
      if (!this.value || this.value.length < 1) {
        return 'required';
      }
    } },
    styles: { type: String, required: true, custom() {
      if (!this.value || this.value.length < 1) {
        return 'required';
      }
    } },
  },
  {
    clean: {
      autoConvert: true,
      extendAutoValueContext: {},
      filter: false,
      getAutoValues: true,
      removeEmptyStrings: true,
      removeNullsFromArrays: true,
      trimStrings: true,
    },
    humanizeAutoLabels: true,
    requiredByDefault: false,
  },
);

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const ProfileCreate = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { firstName, lastName, image, status, level, goals, styles } = data;
    const owner = Meteor.user().username;
    Profiles.collection.insert(
      { firstName, lastName, image, status, level, goals, styles, owner },
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
                  <Col><TextField name="firstName" label="First Name" /></Col>
                  <Col><TextField name="lastName" label="Last Name" /></Col>
                  <Col><TextField name="image" label="Image URL" /></Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="status" className="mb-0">
                      <Form.Label className="mb-0">University Status</Form.Label>
                      <Form.Select name="status">
                        <option value="">Select Status</option>
                        <option value="Undergraduate Student">Undergraduate Student</option>
                        <option value="Graduate Student">Graduate Student</option>
                        <option value="Faculty/Staff">Faculty/Staff</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="level" className="mb-0">
                      <Form.Label className="mb-0">Proficiency Level</Form.Label>
                      <Form.Select name="level">
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Novice">Novice</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                      </Form.Select>
                    </Form.Group>

                  </Col>
                </Row>
                <Row>
                  <Col><TextField name="goals" /></Col>
                  <Col><TextField name="styles" /></Col>
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
