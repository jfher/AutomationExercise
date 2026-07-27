import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiClient {

    constructor(
        protected readonly request: APIRequestContext
    ) { }

    protected async get(endpoint: string): Promise<APIResponse> {
        return this.request.get(endpoint);
    }

    protected async post(endpoint: string, data?: unknown): Promise<APIResponse> {
        return this.request.post(endpoint, {
            form: data as any
        });
    }

    protected async delete(endpoint: string, data?: unknown): Promise<APIResponse> {
        return this.request.delete(endpoint, {
            form: data as any
        });
    }

    protected async parse<T>(response: APIResponse): Promise<T> {
        return response.json();
    }
}