import { SQSEvent } from "aws-lambda";
import { sqs2Id } from "..";
import { sqs } from "../sqs";

export const lambda1Handler = async (_event: SQSEvent) => {
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
};
