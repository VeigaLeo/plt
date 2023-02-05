# Architecture

![architecture](https://user-images.githubusercontent.com/38594457/216830010-0b3018b0-8b7c-4ce1-8697-63cab8107d8e.jpg)

# SQS

## Listing SQS queue

```bash
aws --endpoint-url http://localhost:4566 sqs list-queues
```

## Sending messages to SQS queues

```bash
aws --endpoint-url http://localhost:4566/ sqs send-message --queue-url http://localhost:4566/000000000000/sqs-1 --message-body test
```
