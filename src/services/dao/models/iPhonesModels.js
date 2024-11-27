import mongoose, { mongo } from "mongoose";

const iphonesCollection = 'iphones'

const mongoose = require('mongoose');

const iPhoneSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    introductionDate: {
        type: String,
        required: true
    },
    discontinuationDate: {
        type: String, 
        required: true
    },
    orderNumber: {
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
    identifier: {
        type: String,
        required: true
    },
    voiceUse: {
        type: String, 
        required: false 
    },
    musicUse: {
        type: String,
        required: false
    }
});


const IPhone = mongoose.model(iphonesCollection, iPhoneSchema);

module.exports = IPhone;
