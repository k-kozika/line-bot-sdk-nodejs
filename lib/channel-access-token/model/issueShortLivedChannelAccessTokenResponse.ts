/**
 * Channel Access Token API
 * This document describes Channel Access Token API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Issued short-lived channel access token
*/
export type IssueShortLivedChannelAccessTokenResponse =  { 
    /**
    * A short-lived channel access token. Valid for 30 days. Note: Channel access tokens cannot be refreshed. 
    */
    'accessToken': string/**/;
    /**
    * Time until channel access token expires in seconds from time the token is issued.
    */
    'expiresIn': number/**/;
    /**
    * Token type. The value is always `Bearer`.
    */
    'tokenType': string/* = 'Bearer'*/;
}

