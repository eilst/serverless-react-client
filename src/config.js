const dev = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-k16tjyqpkhbp"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://0olqpqhmy5.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_baNR3tS9q",
        APP_CLIENT_ID: "2luhmalm2grk3luijtgivadsv6",
        IDENTITY_POOL_ID: "us-east-1:46d9d735-1d72-44d1-ba29-af7a57bca9c3"
    },
    STRIPE_KEY: "pk_test_QNzDUAphLVzv7eUQWigVWH5T",

};

const prod = {
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-k16tjyqpkhbp"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://0olqpqhmy5.execute-api.us-east-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_baNR3tS9q",
        APP_CLIENT_ID: "2luhmalm2grk3luijtgivadsv6",
        IDENTITY_POOL_ID: "us-east-1:46d9d735-1d72-44d1-ba29-af7a57bca9c3"
    },
    STRIPE_KEY: "pk_test_QNzDUAphLVzv7eUQWigVWH5T",

};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {

    MAX_ATTACHMENT_SIZE: 5000000,
    ...config


};
