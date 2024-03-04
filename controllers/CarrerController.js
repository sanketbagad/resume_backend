import CarreersModal from '../models/CarreersModal.js';

const createCarreer = async (req, res) => {
    //first check if jobTitle and email already exists
    const { email, jobTitle } = req.body;
    const carreer = await CarreersModal.findOne({ email, jobTitle });
    if (carreer) {
        return res.status(400).json({ message: "Job Title and Email already exists" });
    }
    const newCarreer = new CarreersModal(req.body);
    try {
        await newCarreer.save();
        res.status(201).json(newCarreer);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export { createCarreer };