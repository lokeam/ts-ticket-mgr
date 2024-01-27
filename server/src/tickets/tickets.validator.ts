import { body, ValidationChain } from "express-validator";
import { Priority } from "../enums/Priority";
import { Status } from "../enums/Status";

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Ticket field is mandatory')
    .trim()
    .isString()
    .withMessage('Your title needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('You must include a task date')
    .isString()
    .withMessage('The date needs to be in a valid format'),
  body('description')
    .trim()
    .isString()
    .withMessage('Description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.low, Priority.normal, Priority.high])
    .withMessage('Priority may only be low, normal or high'),
  body('status')
    .trim()
    .isIn([Status.todo, Status.inProgress, Status.completed])
    .withMessage('Status may only be todo, in progress or completed'),
];

export const updateValidator = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('You need to include an id')
    .trim()
    .isString()
    .withMessage('Your id must be within valid uuid format'),
  body('status')
    .trim()
    .isIn([
      Status.todo,
      Status.inProgress,
      Status.completed
    ])
    .withMessage('Status may only be todo, in progress or completed'),
];