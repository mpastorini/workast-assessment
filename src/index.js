import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import {API_CONFIG, ROUTES} from "app/constants";
import { protectedRouter, publicRouter } from "app/routers";
import { replace } from "ramda";
import { loggerMiddleware, exceptionMiddleware } from "app/middlewares";
import mongoose from "mongoose";

const app = express();

const serverStartCallback = () => console.log(replace(API_CONFIG.STARTING_MESSAGE.REPLACEMENTS.PORT, 
  API_CONFIG.SERVER_PORT, API_CONFIG.STARTING_MESSAGE.TEXT));

mongoose.connect(API_CONFIG.MONGOOSE_URL, { useNewUrlParser: true });

app
  .use(compression())
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(loggerMiddleware)
  .use(ROUTES.API.SUBROUTES.PUBLIC.ROUTE, publicRouter)
  .use(ROUTES.API.SUBROUTES.PROTECTED.ROUTE, protectedRouter)
  .use(exceptionMiddleware)
  .listen(API_CONFIG.SERVER_PORT, serverStartCallback);

export default app;