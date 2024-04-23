import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, DateField, ErrorsField, NumField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { useParams } from 'react-router';
import { useTracker } from 'meteor/react-meteor-data';
import { PRS } from '../../api/PRS/prs';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  exercise: String,
  weight: Number,
  repsOrDist: String,
  date: Date,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const EditPRS = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditStuff', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(PRS.userPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = PRS.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditStuff', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { exercise, weight, date, owner } = data;
    PRS.collection.update(_id, { $set: { exercise, weight, date, owner } }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Personal Record updated successfully', 'success').then((value) => {
          if (value) {
            window.location.href = '/progress';
          }
        });
      }
    });
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Card>
              <Card.Body>
                <Col className="text-center"><h2>Edit PR</h2></Col>
                <TextField name="exercise" />
                <NumField name="weight" decimal={null} />
                <NumField name="repsOrDist" decimal={null} />
                <DateField name="date" type="date" />
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

export default EditPRS;
