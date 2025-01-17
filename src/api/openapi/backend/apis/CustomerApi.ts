/* tslint:disable */
/* eslint-disable */
/**
 * Car Repair Register API
 * Evidence of customers and vehicles for small workshops.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Customer,
  CustomerCreate,
  CustomerPagedModel,
  CustomerUpdate,
  ErrorMessage,
} from '../models/index';
import {
    CustomerFromJSON,
    CustomerToJSON,
    CustomerCreateFromJSON,
    CustomerCreateToJSON,
    CustomerPagedModelFromJSON,
    CustomerPagedModelToJSON,
    CustomerUpdateFromJSON,
    CustomerUpdateToJSON,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
} from '../models/index';

export interface CustomerApiCreateCustomerRequest {
    customerCreate: CustomerCreate;
}

export interface CustomerApiDeleteCustomerByIdRequest {
    id: number;
}

export interface CustomerApiFindCustomersRequest {
    page?: number;
    size?: number;
    sort?: Array<string>;
    query?: string;
}

export interface CustomerApiGetCustomerByIdRequest {
    id: number;
}

export interface CustomerApiUpdateCustomerRequest {
    id: number;
    customerUpdate: CustomerUpdate;
}

/**
 * 
 */
export class CustomerApi extends runtime.BaseAPI {

    /**
     * Create new customer.
     */
    async createCustomerRaw(requestParameters: CustomerApiCreateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['customerCreate'] == null) {
            throw new runtime.RequiredError(
                'customerCreate',
                'Required parameter "customerCreate" was null or undefined when calling createCustomer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerCreateToJSON(requestParameters['customerCreate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Create new customer.
     */
    async createCustomer(customerCreate: CustomerCreate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.createCustomerRaw({ customerCreate: customerCreate }, initOverrides);
        return await response.value();
    }

    /**
     * Delete customer with all his vehicles and records.
     */
    async deleteCustomerByIdRaw(requestParameters: CustomerApiDeleteCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteCustomerById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete customer with all his vehicles and records.
     */
    async deleteCustomerById(id: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteCustomerByIdRaw({ id: id }, initOverrides);
    }

    /**
     * Find customers by query string and pageable.
     */
    async findCustomersRaw(requestParameters: CustomerApiFindCustomersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerPagedModel>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['query'] != null) {
            queryParameters['query'] = requestParameters['query'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerPagedModelFromJSON(jsonValue));
    }

    /**
     * Find customers by query string and pageable.
     */
    async findCustomers(page?: number, size?: number, sort?: Array<string>, query?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerPagedModel> {
        const response = await this.findCustomersRaw({ page: page, size: size, sort: sort, query: query }, initOverrides);
        return await response.value();
    }

    /**
     * Get customer by id.
     */
    async getCustomerByIdRaw(requestParameters: CustomerApiGetCustomerByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCustomerById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Get customer by id.
     */
    async getCustomerById(id: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.getCustomerByIdRaw({ id: id }, initOverrides);
        return await response.value();
    }

    /**
     * Update existing customer.
     */
    async updateCustomerRaw(requestParameters: CustomerApiUpdateCustomerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Customer>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling updateCustomer().'
            );
        }

        if (requestParameters['customerUpdate'] == null) {
            throw new runtime.RequiredError(
                'customerUpdate',
                'Required parameter "customerUpdate" was null or undefined when calling updateCustomer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerUpdateToJSON(requestParameters['customerUpdate']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerFromJSON(jsonValue));
    }

    /**
     * Update existing customer.
     */
    async updateCustomer(id: number, customerUpdate: CustomerUpdate, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Customer> {
        const response = await this.updateCustomerRaw({ id: id, customerUpdate: customerUpdate }, initOverrides);
        return await response.value();
    }

}
