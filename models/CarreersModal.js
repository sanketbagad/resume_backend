import mongoose from 'mongoose';

const carreersSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
});

const CarreersModal = mongoose.model('Carreers', carreersSchema);

export default CarreersModal;