import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
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
    const { firstName, lastName, age, gender, position, level, roles, goals, styles, sports, hobbies, major, image, availability, description } = data;
    Profiles.collection.update(_id, { $set: { firstName, lastName, age, gender, position, level, roles, goals, styles, sports, hobbies, major, image, availability, description } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={10}>
          <Col className="text-center"><h2>Edit Profile</h2></Col>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
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