import { Schema, model, models } from "mongoose";

const mentorSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    role: String,
    yearsExp: Number,
    mentorshipType: String,
  },
  { timestamps: true }
);

export default models.Mentor || model("Mentor", mentorSchema);
export type Mentor = {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  role?: string;
  yearsExp?: number;
  mentorshipType?: string;
  createdAt: Date;
  updatedAt: Date;
};