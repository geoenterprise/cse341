const express = require('express');
const router = express.Router();
const validateContact = require('../validation/validation');
const errorHandler = require('../middleware/validation');

const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);

router.get('/:id', contactsController.getSingle);

router.post(
  '/',
  validateContact,
  errorHandler,
  contactsController.createContact
);

router.put(
  '/:id',
  validateContact,
  errorHandler,
  contactsController.updateContact
);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;
