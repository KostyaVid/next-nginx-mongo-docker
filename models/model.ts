import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.models.Pet || mongoose.model('Pet', PetSchema);
