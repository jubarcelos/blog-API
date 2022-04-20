const validInputs = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = validInputs;
