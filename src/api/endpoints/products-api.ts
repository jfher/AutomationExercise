import { ApiClient } from "../client/api-client";
import { ProductsResponse } from "../models/product";

export class ProductsApi extends ApiClient {
    async getProducts(): Promise<ProductsResponse> {
        const res = await this.get("/api/productsList");
        return this.parse<ProductsResponse>(res);
    }
}
