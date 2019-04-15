import express from "express";
require("express-async-errors"); // Technical Debt 
import ROUTES from "app/constants/routes";
import { statusController } from "app/controllers";
const router = express.Router();
router.get(ROUTES.API.SUBROUTES.PUBLIC.SUBROUTES.STATUS.ROUTE, statusController);
/**
 * @description Public resources router
 */
export default router;