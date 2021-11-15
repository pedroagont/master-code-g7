// Paquete Celebrate middleware/intermediario para validar las peticiones: https://www.npmjs.com/package/celebrate
// Paquete Joi validación del schema (propiedades): https://joi.dev
// Referencia RegEx: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
const { celebrate, Joi, Segments } = require('celebrate');

const UsersValidator = celebrate({
  [Segments.BODY]: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/) //1 letra + 1 dígito + 1 caracter especial
      .required()
  })
});

module.exports = UsersValidator;
