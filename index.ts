import * as aws from "@pulumi/aws";
import { lambda1 } from "./lambda";
import { sqs1, sqs2 } from "./sqs";

// Triggers
const lambda1Trigger = new aws.lambda.EventSourceMapping(
  "lambda1-sqs-trigger",
  {
    eventSourceArn: sqs1.arn,
    functionName: lambda1.name,
  }
);

// Output strings
export const sqs1Id = sqs1.id;
export const sqs2Id = sqs2.id;
