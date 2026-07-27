import { ApiClient } from "@api/client/api-client";
import { CreateAccountRequest, DeleteAccountRequest, VerifyLoginRequest, Response } from "../models/login";

export class AuthApi extends ApiClient {

    async verifyLogin(request: VerifyLoginRequest): Promise<Response> {
        const response = await this.post("/verifyLogin", request);
        return this.parse<Response>(response);
    }

    async createAccount(request: CreateAccountRequest): Promise<Response> {
        const response = await this.post("/createAccount", request);
        return this.parse<Response>(response);
    }

    async deleteAccount(request: DeleteAccountRequest): Promise<Response> {
        const response = await this.delete("/deleteAccount", request);
        return this.parse<Response>(response);
    }
}