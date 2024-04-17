import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, HiddenField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Workouts } from '../../api/Workouts/Workout';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  name: String,
  highlight: String,
  rating: {
    type: Number,
    allowedValues: [1, 2, 3, 4, 5],
  },
  difficulty: {
    type: Number,
    allowedValues: [1, 2, 3, 4, 5],
  },
  date: Date,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddStuff page for adding a document. */
const AddWorkout = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { name, highlight, rating, difficulty, date } = data;
    const owner = Meteor.user().username;
    Workouts.collection.insert(
      { name, highlight, rating, difficulty, date, owner },
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
        <Col xs={5}>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <Col className="text-center"><h2>Add Workout</h2></Col>
                <TextField name="name" />
                <SelectField name="rating" />
                <SelectField name="difficulty" />
                <LongTextField name="highlight" />
                <SubmitField value="Submit" />
                <ErrorsField />
                <HiddenField name="date" value={new Date()} />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddWorkout;
