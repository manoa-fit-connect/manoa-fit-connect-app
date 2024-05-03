import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class EventsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'EventsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      eventName: String,
      image: String,
      date: Date,
      interest: Number,
      description: String,
      locationFound: String,
    });

    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.userPublicationName = `${this.name}.publication.user`;
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the EquipmentItemsCollection.
 * @type {EquipmentItemsCollection}
 */
export const events = new EventsCollection();
