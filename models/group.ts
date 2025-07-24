// models/group.ts
import { Schema, model, models, Types } from "mongoose";
import type { Participant } from "./participant"; // ✅ import only the type

const groupSchema = new Schema(
  {
    name: { type: String, required: true },
    note: { type: String },
    participants: [{ type: Types.ObjectId, ref: "Participant" }],
  },
  { timestamps: true }
);

export default models.Group || model("Group", groupSchema);

export type Group = {
  _id: string;
  name: string;
  note?: string;
  participants: (Types.ObjectId | Participant)[];
  createdAt: Date;
  updatedAt: Date;
};
