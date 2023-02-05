# SQS

## Listing sqs

```bash
aws --endpoint-url http://localhost:4566 sqs list-queues
```

## Sending messages

```bash
aws --endpoint-url http://localhost:4566/ sqs send-message --queue-url http://localhost:4566/000000000000/{sqs-name} --message-body test
```
