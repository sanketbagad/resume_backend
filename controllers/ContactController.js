import ContactModal from "../models/ContactModal.js";

const createContact = async (req, res) => {
    // direct create contact
    const newContact = new ContactModal(req.body);

    try {
        await newContact.save();
        res.status(201).json(newContact);
    }
    catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export { createContact };