import { Router } from 'express';
import authController from './controller/auth.controller';
import { signupSchema, signinSchema } from './auth.schema';
import { validateBody } from '@middleware/functions/validate-schema';

const router = Router();

router.post('/signup', validateBody(signupSchema), authController.signup);
router.post('/signin', validateBody(signinSchema), authController.signin);

module.exports = router;
