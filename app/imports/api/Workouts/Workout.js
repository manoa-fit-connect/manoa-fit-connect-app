import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
 */
class WorkoutsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'WorkoutsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      date: Date,
      highlight: String,
      rating: {
        type: Number,
        allowedValues: [1, 2, 3, 4, 5],
      },
      difficulty: {
        type: Number,
        allowedValues: [1, 2, 3, 4, 5],
      },
      owner: String,
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the StuffsCollection.
 * @type {WorkoutsCollection}
 */
export const Workouts = new WorkoutsCollection();
