import * as aws from "@pulumi/aws";

// SQS global config
export const sqs = new aws.sdk.SQS({
  endpoint: "http://localstack:4566",
  region: "us-east-1",
  accessKeyId: "fakeAccessKey",
  secretAccessKey: "fakeSecretKey",
});

// SQS 1
export const SQS1Params = {
  name: "sqs-1",
  visibilityTimeoutSeconds: 300,
};

export const sqs1 = new aws.sqs.Queue("sqs-1", SQS1Params);

// SQS 2
export const SQS2Params = {
  name: "sqs-2",
  visibilityTimeoutSeconds: 300,
};

export const sqs2 = new aws.sqs.Queue("sqs-2", SQS2Params);
