import { Schema, model, models } from "mongoose";

const volunteerSchema = new Schema(
  {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    email: String,
    address: String,
    age: Number,
  },
  { timestamps: true }
);

export default models.Volunteer || model("Volunteer", volunteerSchema);
export type Volunteer = {
  _id: string;
  fullName: string;
  phone: string;
  email?: string;
  address?: string;
  age?: number;
  createdAt: Date;
  updatedAt: Date;
};