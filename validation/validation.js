const { check } = require('express-validator');

const validateContact = [
  check('firstName')
    .notEmpty()
    .withMessage('First name is required')
    .isAlpha()
    .withMessage('First name must contain only letters')
    .isLength({ min: 3 })
    .withMessage('First name must be at least 3 characters long'),

  check('lastName')
    .notEmpty()
    .withMessage('Last name is required')
    .isAlpha()
    .withMessage('Last name must contain only letters')
    .isLength({ min: 3 })
    .withMessage('Last name must be at least 3 characters long'),

  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is not valid'),

  check('favoriteColor')
    .notEmpty()
    .withMessage('Favorite color is required')
    .isLength({ min: 3 })
    .withMessage('Favorite color must be at least 3 characters long'),

  check('birthday')
    .notEmpty()
    .withMessage('Birthday is required')
    .isISO8601()
    .withMessage('Birthday must be a valid date'),
];

module.exports = validateContact;
