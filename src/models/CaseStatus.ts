/* tslint:disable:variable-name */
import { model as mongooseModel, Schema } from 'mongoose';

export const description = 'Stores case status and details';

export const definitions = {
  caseStatus: { type: String, required: true, unique: true },
  isDelete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
};

const caseStatusSchema: Schema = new Schema(definitions);

export const CaseStatus = mongooseModel('CaseStatus', caseStatusSchema);
