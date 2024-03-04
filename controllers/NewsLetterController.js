import NewsLetterModal from "../models/NewsLetterModal.js";

const createNewsLetter = async (req, res) => {
  const { email } = req.body;
  const newsLetter = await NewsLetterModal.findOne({ email });

  if (newsLetter) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const newNewsLetter = new NewsLetterModal(req.body);

  try {
    await newNewsLetter.save();
    res.status(201).json(newNewsLetter);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { createNewsLetter };
