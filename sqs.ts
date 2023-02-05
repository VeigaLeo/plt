import * as aws from "@pulumi/aws";
import * as AWS from "aws-sdk";

// SQS global config
export const sqs = new AWS.SQS({
  endpoint: "http://localstack:4566",
  region: "us-east-1",
  accessKeyId: "fakeAccessKey",
  secretAccessKey: "fakeSecretKey",
});

// SQS 1
export const sqs1 = new aws.sqs.Queue("sqs-1", {
  visibilityTimeoutSeconds: 300,
});

// SQS 2
export const sqs2 = new aws.sqs.Queue("sqs-2", {
  visibilityTimeoutSeconds: 300,
});
