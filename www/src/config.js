// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "mj9hu7v4nrmtsu12cispl3rt2",     // CognitoClientID
  "api_base_url": "https://1wopya7y2m.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-lambda-refarch-webapp2.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1c5ljh39h40j4.amplifyapp.com"                                      // AmplifyURL
};

export default config;
