import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The StuffsCollection. It encapsulates state and variable values for stuff.
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
      age: String,
      gender: {
        type: String,
        // allowedValues: ['Female', 'Male', 'Transgender', 'Non-binary', 'Other', 'None', 'Prefer not to say'],
      },
      position: {
        type: String,
        // allowedValues: ['Undergraduate', 'Postgraduate', 'Faculty/Staff'],
      },
      level: {
        type: String,
        // allowedValues: ['Beginner', 'Intermediate', 'Advanced'],
      },
      roles: {
        type: String,
        // allowedValues: ['Partner', 'Spotter', 'Mentor', 'Mentee', 'Motivator (will hype you up)', 'Motivatee (would like to be hyped up)'],
      },
      goals: {
        type: String,
        // allowedValues: ['strength', 'cardio', 'weight loss', 'exercise', 'explosiveness', 'agility', 'speed', 'endurance', 'wellness', 'flexibility'],
      },
      styles: {
        type: String,
        // allowedValues: ['weightlifting', 'olympic weightlifting', 'powerlifting', 'bodybuilding', 'calisthenics', 'plyometrics', 'circuit training', 'high-intensity interval training', 'yoga'],
      },
      sports: String,
      hobbies: String,
      major: String,
      image: String,
      availability: String,
      description: String,
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
 * @type {ProfilesCollection}
 */
export const Profiles = new ProfilesCollection();
