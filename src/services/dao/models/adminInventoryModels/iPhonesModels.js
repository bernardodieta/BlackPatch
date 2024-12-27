import mongoose from "mongoose";

const iphonesCollection = 'iphones'

const iPhoneSchema = new mongoose.Schema({
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
    voice_use: {
        type: String, 
        required: false 
    },
    music_use: {
        type: String,
        required: false
    }
});


const iPhonesModels = mongoose.model(iphonesCollection, iPhoneSchema);

export default iPhonesModels
