import express from "express";
import authCtrl from '../controllers/auth.controller';

const router = express.Router()

router.route('/auth/signin')
    .post(authCtrl.signin) //to authenticate user w email/pass
router.route('/auth/signout')
    .get(authCtrl.signout) // to clear cookie containing JWT set on res after signin

export default router