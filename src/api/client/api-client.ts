import { Environment } from "@config/environment";
import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiClient {

    private baseURL = Environment.apiBaseUrl;

    constructor(
        protected readonly request: APIRequestContext
    ) { }

    protected async get(endpoint: string): Promise<APIResponse> {
        return this.request.get(`${this.baseURL}/${endpoint}`);
    }

    protected async post(endpoint: string, data?: unknown): Promise<APIResponse> {
        return this.request.post(`${this.baseURL}/${endpoint}`, {
            form: data as any
        });
    }

    protected async delete(endpoint: string, data?: unknown): Promise<APIResponse> {
        return this.request.delete(`${this.baseURL}/${endpoint}`, {
            form: data as any
        });
    }

    protected async parse<T>(response: APIResponse): Promise<T> {
        return response.json();
    }
}