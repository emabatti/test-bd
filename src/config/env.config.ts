import * as Joi from 'joi';

export default Joi.object({
  HOST: Joi.string().default('localhost'),
  PORT: Joi.number().default(3000),
  DEBUG: Joi.boolean().default(true),
  THROTTLE_LIMIT: Joi.number().default(60),
  THROTTLE_TTL: Joi.number().default(60),
});
