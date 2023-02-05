import * as aws from "@pulumi/aws";
import { lambda1, lambda2 } from "./lambda";
import { sqs1, sqs2 } from "./sqs";

// Triggers
new aws.lambda.EventSourceMapping("lambda1-sqs-trigger", {
  eventSourceArn: sqs1.arn,
  functionName: lambda1.name,
});

new aws.lambda.EventSourceMapping("lambda2-sqs-trigger", {
  eventSourceArn: sqs2.arn,
  functionName: lambda2.name,
});

// Output strings
export const sqs1Id = sqs1.id;
export const sqs2Id = sqs2.id;
