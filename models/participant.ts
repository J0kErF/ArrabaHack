import { Schema, model, models } from "mongoose";

const participantSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    city: String,
    degree: String,
    institute: String,
    hasTeam: Boolean,
    leaderPhone: String,
  },
  { timestamps: true }
);

export default models.Participant || model("Participant", participantSchema);
export type Participant = {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  city?: string;
  degree?: string;
  institute?: string;
  hasTeam?: boolean;
  leaderPhone?: string;
  createdAt: Date;
  updatedAt: Date;
};