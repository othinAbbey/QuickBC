import { validateService } from '../services/validationService.js';

const validate= (req, res) => {
  const { token } = req.body;

  const response = validateService(token);
  res.json(response);
};

export { validate };
// export default validate;
