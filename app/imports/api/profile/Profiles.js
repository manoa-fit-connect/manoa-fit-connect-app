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
    this.schema = new SimpleSchema(
      {
        firstName: String,
        lastName: String,
        image: String,
        status: {
          type: String,
          allowedValues: ['Undergraduate Student', 'Graduate Student', 'Faculty/Staff'],
        },
        level: {
          type: String,
          allowedValues: ['Beginner', 'Novice', 'Intermediate', 'Advanced', 'Expert'],
        },
        goals: {
          type: String,
          allowedValues: ['Strength', 'Cardio', 'Weight Loss', 'Exercise'],
        },
        styles: {
          type: String,
          allowedValues: ['Weight Lifting', 'Powerlifting', 'Olympic Weightlifting', 'Bodybuilding', 'Calisthenics', 'Plyometrics', 'Aerobic Exercise', 'HIIT', 'Circuit Training', 'Sports'],
        },
        owner: { type: String },
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
      },
    );
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
