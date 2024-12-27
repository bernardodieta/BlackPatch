import mongoose from 'mongoose';

const iPadSchema = new mongoose.Schema({
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
  network: {
    type: String, 
    required: false 
  },
  batteryLife: {
    type: String,
    required: false 
  }
});


const IPadModel = mongoose.model('IPad', iPadSchema);

export default IPadModel;
