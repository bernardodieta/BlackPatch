import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema({
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
  storage: {
    type: String, 
    required: true
  },
  batteryLife: {
    type: String, 
    required: false 
  }
});


const IwatchModels = mongoose.model('watches', watchSchema);

export default IwatchModels;
