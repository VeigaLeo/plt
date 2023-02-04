# Docker
up:
	docker-compose up -d

down:
	docker-compose down

# Pulumi
pulumi-local-up:
	pulumi --stack=localstack up -y

pulumi-local-destroy:
	pulumi --stack=localstack destroy -y
