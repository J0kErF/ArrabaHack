import { Schema, model, models } from "mongoose";

const sponsorSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    company: String,
    role: String,
    message: String,
  },
  { timestamps: true }
);

export default models.Sponsor || model("Sponsor", sponsorSchema);
export type Sponsor = {
  _id: string;
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  role?: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
};