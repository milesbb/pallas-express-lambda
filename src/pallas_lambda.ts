import { Server } from "http";
import { createServer, proxy } from "aws-serverless-express";
import expressApp from "./server";

let server: Server | undefined = undefined;

const pallasHandler = async (event: any, context: any) => {
  if (!server) {
    server = createServer(expressApp, undefined);
  }
  const response = await proxy(server, event, context, "PROMISE").promise;

  return response;
};

export const handler = pallasHandler;
