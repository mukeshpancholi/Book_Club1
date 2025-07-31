import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // fixed typo
  },
  description: {
    type: String,
    required: true, // fixed typo
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// fixed model creation: mongoose.model('ModelName', schema)
const Notes = mongoose.model("Notes", notesSchema);

export default Notes;
