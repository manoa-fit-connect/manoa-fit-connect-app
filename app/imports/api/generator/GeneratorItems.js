import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

class GeneratorItemsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'GeneratorItemsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      name: String,
      category: {
        type: String,
        allowedValues: ['Strength', 'Cardio', 'Flexibility', 'Warm-up', 'Upper Body', 'Lower Body', 'Abs'],
      },
      image: String,
      time: {
        type: String,
        allowedValues: ['15 minutes', '30 minutes', '45 minutes', '60 minutes'],
      },
      description: String,
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
 * @type {GeneratorItemsCollection}
 */
export const GeneratorItems = new GeneratorItemsCollection();
