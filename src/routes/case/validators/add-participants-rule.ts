import * as Joi from 'joi';
import { RequestHandler } from 'express';
// tslint:disable:variable-name
export const participantRuleSchema = Joi.object().keys({
  caseId: Joi.string().required(),
  status: Joi.string()
    .trim()
    .required(),
  statusDiv: Joi.string()
    .trim()
    .optional(),
  party: Joi.string()
    .trim()
    .required(),
  partyDiv: Joi.string()
    .trim()
    .optional(),
  role: Joi.string()
    .trim()
    .required(),
  id: Joi.string().optional(),
});

export const caseParticipantRules: RequestHandler = (req, res, next) => {
  Joi.validate(
    req.body,
    participantRuleSchema,
    { stripUnknown: true },
    (err: any) => {
      if (err) {
        return res.status(422).send({
          success: false,
          msg: err,
        });
      }
      next();
    },
  );
};
