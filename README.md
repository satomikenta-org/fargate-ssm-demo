# fargate-ssm-demo
Demo for AWS Fargate and SSM parameter store 


Requirements.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ssm:GetParameters"
            ],
            "Resource": "*"
        }
    ]
}
```

For getting value from parameter store, Need to attach AmazonECSTaskExecutionRolePolicy with above policy.
( in 'タスクの実行 IAM ロール').

In the task def setting, "add container" => "environment variables" =>  "valueFrom" = "<Parameter store's Parameter Name>".

