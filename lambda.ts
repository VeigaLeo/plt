import * as aws from "@pulumi/aws";
import { SQS2Params } from "./sqs";
import { lambda2Handler } from "./lambda2";
import { lambda1Handler } from "./lambda1";

// Create a Lambda Function that consumes messages from sqs-1 and sends another message to sqs-2
export const lambda1 = new aws.lambda.CallbackFunction("lambda1", {
  // Looks like NodeJS18dX doesn't work really well
  runtime: aws.lambda.Runtime.NodeJS16dX,
  environment: {
    variables: {
      QUEUE_URL: `http://localstack:4566/000000000000/${SQS2Params.name}`,
    },
  },
  callback: lambda1Handler,
});

// Create a lambda function that consumes messages from sqs-2
export const lambda2 = new aws.lambda.CallbackFunction("lambda2", {
  runtime: aws.lambda.Runtime.NodeJS16dX,
  callback: lambda2Handler,
});
