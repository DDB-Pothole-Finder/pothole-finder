import { Router } from 'express'
import {togglePotholeVerificationController,
        getAllPotholeVerificationController,
        getPotholeVerificationByPotholeVerificationProfileIdController } from './pothole-verification.controller'
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller'
import {isLoggedIn} from '../../utils/controllers/isLoggedIn.controller'
import { check, checkSchema } from 'express-validator'
import { potholeVerificationValidator } from "./pothole-verification.validator"

export const potholeVerificationRoute = Router()

potholeVerificationRoute.route('/')
    .get(getAllPotholeVerificationController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(potholeVerificationValidator)), togglePotholeVerificationController)

potholeVerificationRoute.route('/pv-profileId/:potholeVerificationProfileId')
    .get(asyncValidatorController([check('potholeVerificationProfileId', 'Enter a valid profile ID for the pothole verification.').isUUID()]), getPotholeVerificationByPotholeVerificationProfileIdController)