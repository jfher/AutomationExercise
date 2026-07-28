import { ApiClient } from "../client/api-client";
import { ProductsResponse, SearchProductsRequest } from "../models/product";

export class ProductsApi extends ApiClient {
    async getProducts(): Promise<ProductsResponse> {
        const response = await this.get("/productsList");
        return this.parse<ProductsResponse>(response);
    }

    async searchProducts(request: SearchProductsRequest): Promise<ProductsResponse> {
        const response = await this.post("/searchProduct", request);
        return this.parse<ProductsResponse>(response);
    }
}
