import * as aws from "@pulumi/aws";
import { SQSEvent } from "aws-lambda";
import { sqs2Id } from ".";
import { sqs, SQS2Params } from "./sqs";

// Create a Lambda Function that consumes messages from sqs-1 and sends another message to sqs-2
export const lambda1 = new aws.lambda.CallbackFunction("lambda1", {
  environment: {
    variables: {
      QUEUE_URL: `http://localstack:4566/000000000000/${SQS2Params.name}`,
    },
  },
  callback: async (_event: SQSEvent) => {
    // TODO move code to a specific function file

    // Send a message to another SQS queue when triggered
    try {
      const params = {
        MessageBody: "test message",
        QueueUrl: process.env.QUEUE_URL || "",
      };

      await sqs.sendMessage(params).promise();

      console.log("Message sent to SQS queue", sqs2Id);
    } catch (error) {
      console.error(error);
    }

    return {
      statusCode: 200,
      body: "Message sent to next queue.",
    };
  },
});

// Create a lambda function that consumes messages from sqs-2
export const lambda2 = new aws.lambda.CallbackFunction("lambda2", {
  callback: async (event: SQSEvent) => {
    // TODO move code to a specific function file
    event.Records.forEach(({ body }) => {
      console.log(`Consumed message: ${body}`);
    });

    return {
      statusCode: 200,
    };
  },
});
