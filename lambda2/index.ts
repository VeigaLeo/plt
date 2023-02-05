import { SQSEvent } from "aws-lambda";

export const lambda2Handler = async (event: SQSEvent) => {
  event.Records.forEach(({ body }) => {
    console.log(`Consumed message: ${body}`);
  });

  return {
    statusCode: 200,
  };
};
