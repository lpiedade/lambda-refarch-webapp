// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "pq0469afi4bgj25f4nhef9sr0",     // CognitoClientID
  "api_base_url": " https://x5cuha0b9k.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-lambda-refarch-webapp3.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d19s2oxdvwo6an.amplifyapp.com"                                      // AmplifyURL
};

export default config;
