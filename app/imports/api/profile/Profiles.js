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
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        image: { type: String, required: true },
        status: { type: String, required: true },
        level: { type: String, required: true },
        goals: { type: String, required: true, custom() {
          if (!this.value || this.value.length < 1) {
            return 'required';
          }
        } },
        styles: { type: String, required: true, custom() {
          if (!this.value || this.value.length < 1) {
            return 'required';
          }
        } },
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
        requiredByDefault: false,
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
