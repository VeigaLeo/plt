import * as aws from "@pulumi/aws";
import { SQSEvent } from "aws-lambda";
import { sqs2Id } from ".";
import { sqs } from "./sqs";

// Create a Lambda Function
export const lambda1 = new aws.lambda.CallbackFunction("lambda1", {
  callback: async (_event: SQSEvent) => {
    // Send a message to another SQS queue when triggered
    try {
      const params = {
        MessageBody: "test message",
        QueueUrl: `http://localstack:4566/000000000000/sqs-2-e8d874f`, // TODO find out why the sqs name (sqs2.name) output does work here
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
