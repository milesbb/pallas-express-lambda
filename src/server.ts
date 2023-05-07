import express from "express";
import cors from "cors";
import { eventContext } from "aws-serverless-express/middleware";

const applyMiddleware = (app: express.Express) => {
  app.use(eventContext());
  app.disable("x-powered-by");
  app.use(cors({ origin: "*" }));

  return app;
};

export default applyMiddleware(express());
