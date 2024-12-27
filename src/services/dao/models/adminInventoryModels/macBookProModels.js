import mongoose from 'mongoose';

const macbookProCollection = 'macbookpro'

const macBookProSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  intro: {
    type: String,
    required: true
  },
  disc: {
    type: String,
    required: true
  },
  order: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  ident: {
    type: String,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  vram: {
    type: String,
    required: true
  },
  storage: {
    type: String,
    required: true
  },
  optical: {
    type: String,
    required: true
  }
});


const MacBookProModel = mongoose.model('macbookpros', macBookProSchema);

export default MacBookProModel;
