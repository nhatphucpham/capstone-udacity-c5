import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'
import 'source-map-support'
import * as AWS from 'aws-sdk'

const dbcClient = new AWS.DynamoDB.DocumentClient();

const connectionTable = process.env.CONNECTION_TABLE;

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
    const connectionId = event.requestContext.connectionId;
    
    
    return {
        statusCode: 200,
        body: ''
    }
}