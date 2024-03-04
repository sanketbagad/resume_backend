import mongoose from "mongoose";

const newsLetterSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
});

const NewsLetterModal = mongoose.model("NewsLetter", newsLetterSchema);

export default NewsLetterModal;