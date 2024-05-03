import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, DateField, ErrorsField, LongTextField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Events } from '../../api/event/Event';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  eventName: String,
  image: String,
  date: Date,
  description: String,
  locationFound: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddEvent = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { eventName, image, description, date, locationFound } = data;
    const owner = Meteor.user().username;
    const interest = 0;
    Events.collection.insert(
      { eventName, image, interest, description, date, owner, locationFound },
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
        <Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Col className="text-center"><h2>Add Event</h2></Col>
                <TextField name="eventName" />
                <DateField name="date" type="date" />
                <TextField name="image" />
                <TextField name="locationFound" />
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

export default AddEvent;
