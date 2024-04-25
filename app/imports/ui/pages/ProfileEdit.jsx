import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profile/Profiles';

const bridge = new SimpleSchema2Bridge(Profiles.schema);

/* Renders the EditStuff page for editing a single document. */
const ProfileEdit = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Profiles.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Profiles.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { firstName, lastName, image, status, level, goals, styles } = data;
    Profiles.collection.update(_id, { $set: { firstName, lastName, image, status, level, goals, styles } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3" id="EditProfile-Page">
      <Row className="justify-content-center">
        <Col xs={10}>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Title>
                <Col className="text-center mt-4">
                  <h2>Edit Profile</h2>
                </Col>
              </Card.Title>
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
                <HiddenField name="owner" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ProfileEdit;
