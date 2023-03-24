export interface AppAuthErrorResponse {
    status:number;
    message:string;
}

export interface AppAuthValidResponse {
    access_token:string;
}

export type AppAuthResponse = AppAuthErrorResponse | AppAuthValidResponse;