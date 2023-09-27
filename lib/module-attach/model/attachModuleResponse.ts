/**
 * LINE Messaging API
 * This document describes LINE Messaging API.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Attach by operation of the module channel provider
*/
export type AttachModuleResponse =  { 
    /**
    * User ID of the bot on the LINE Official Account.
    */
    'botId': string/**/;
    /**
    * Permissions (scope) granted by the LINE Official Account admin.
    */
    'scopes': Array<string>/**/;
}

