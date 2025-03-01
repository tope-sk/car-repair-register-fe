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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VehicleCreate
 */
export interface VehicleCreate {
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    registrationPlate: string;
    /**
     * 
     * @type {number}
     * @memberof VehicleCreate
     */
    customerId: number;
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    vin: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    engineCode: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    fuelType: string | null;
    /**
     * 
     * @type {number}
     * @memberof VehicleCreate
     */
    enginePower: number | null;
    /**
     * 
     * @type {number}
     * @memberof VehicleCreate
     */
    engineVolume: number | null;
    /**
     * 
     * @type {number}
     * @memberof VehicleCreate
     */
    batteryCapacity: number | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    brand: string | null;
    /**
     * 
     * @type {string}
     * @memberof VehicleCreate
     */
    model: string | null;
    /**
     * 
     * @type {number}
     * @memberof VehicleCreate
     */
    yearOfManufacture: number | null;
}

/**
 * Check if a given object implements the VehicleCreate interface.
 */
export function instanceOfVehicleCreate(value: object): value is VehicleCreate {
    if (!('registrationPlate' in value) || value['registrationPlate'] === undefined) return false;
    if (!('customerId' in value) || value['customerId'] === undefined) return false;
    if (!('vin' in value) || value['vin'] === undefined) return false;
    if (!('engineCode' in value) || value['engineCode'] === undefined) return false;
    if (!('fuelType' in value) || value['fuelType'] === undefined) return false;
    if (!('enginePower' in value) || value['enginePower'] === undefined) return false;
    if (!('engineVolume' in value) || value['engineVolume'] === undefined) return false;
    if (!('batteryCapacity' in value) || value['batteryCapacity'] === undefined) return false;
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('model' in value) || value['model'] === undefined) return false;
    if (!('yearOfManufacture' in value) || value['yearOfManufacture'] === undefined) return false;
    return true;
}

export function VehicleCreateFromJSON(json: any): VehicleCreate {
    return VehicleCreateFromJSONTyped(json, false);
}

export function VehicleCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): VehicleCreate {
    if (json == null) {
        return json;
    }
    return {
        
        'registrationPlate': json['registrationPlate'],
        'customerId': json['customerId'],
        'vin': json['vin'],
        'engineCode': json['engineCode'],
        'fuelType': json['fuelType'],
        'enginePower': json['enginePower'],
        'engineVolume': json['engineVolume'],
        'batteryCapacity': json['batteryCapacity'],
        'brand': json['brand'],
        'model': json['model'],
        'yearOfManufacture': json['yearOfManufacture'],
    };
}

  export function VehicleCreateToJSON(json: any): VehicleCreate {
      return VehicleCreateToJSONTyped(json, false);
  }

  export function VehicleCreateToJSONTyped(value?: VehicleCreate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'registrationPlate': value['registrationPlate'],
        'customerId': value['customerId'],
        'vin': value['vin'],
        'engineCode': value['engineCode'],
        'fuelType': value['fuelType'],
        'enginePower': value['enginePower'],
        'engineVolume': value['engineVolume'],
        'batteryCapacity': value['batteryCapacity'],
        'brand': value['brand'],
        'model': value['model'],
        'yearOfManufacture': value['yearOfManufacture'],
    };
}

