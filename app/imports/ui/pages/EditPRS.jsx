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

const EditPRS = () => {
  const { _id } = useParams();
  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(PRS.userPublicationName);
    const document = PRS.collection.findOne(_id);
    if (document && typeof document.date === 'string') {
      document.date = new Date(document.date);
    }
    return {
      doc: document,
      ready: subscription.ready(),
    };
  }, [_id]);

  const submit = (data) => {
    PRS.collection.update(_id, { $set: data }, (error) => {
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

  if (!ready) return <div>Loading...</div>;

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <AutoForm schema={bridge} onSubmit={submit} model={doc}>
            <Card>
              <Card.Body>
                <Col className="text-center"><h2>Edit PR</h2></Col>
                <TextField name="exercise" />
                <NumField name="weight" decimal={false} />
                <NumField name="repsOrDist" decimal={false} />
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
