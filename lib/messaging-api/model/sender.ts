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
* Change icon and display name
*/
export type Sender =  { 
    /**
    * Display name. Certain words such as `LINE` may not be used.
    */
    'name'?: string/**/;
    /**
    * URL of the image to display as an icon when sending a message
    */
    'iconUrl'?: string/**/;
}

