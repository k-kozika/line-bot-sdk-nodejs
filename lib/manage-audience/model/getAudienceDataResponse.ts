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
import { AudienceGroup } from './audienceGroup';
import { AudienceGroupJob } from './audienceGroupJob';


/**
* Get audience data
*/
export type GetAudienceDataResponse =  { 
    /**
    */
    'audienceGroup'?: AudienceGroup/**/;
    /**
    * An array of jobs. This array is used to keep track of each attempt to add new user IDs or IFAs to an audience for uploading user IDs. Empty array is returned for any other type of audience. Max: 50 
    */
    'jobs'?: Array<AudienceGroupJob>/**/;
}

