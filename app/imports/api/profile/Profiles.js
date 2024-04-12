import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The ProfilesCollection. It encapsulates state and variable values for stuff.
 */
class ProfilesCollection {
  constructor() {
    // The name of this collection.
    this.name = 'ProfilesCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
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
      goals: Array,
      'goals.$': String,
      styles: Array,
      'styles.$': String,
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
 * The singleton instance of the ProfilesCollection.
 * @type {ProfilesCollection}
 */
export const Profiles = new ProfilesCollection();
