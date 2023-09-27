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


export type NarrowcastProgressResponse =  { 
    /**
    * The current status. One of:  `waiting`: Messages are not yet ready to be sent. They are currently being filtered or processed in some way. `sending`: Messages are currently being sent. `succeeded`: Messages were sent successfully. This may not mean the messages were successfully received. `failed`: Messages failed to be sent. Use the failedDescription property to find the cause of the failure. 
    */
    'phase': NarrowcastProgressResponse.PhaseEnum/**/;
    /**
    * The number of users who successfully received the message.
    */
    'successCount'?: number/**/;
    /**
    * The number of users who failed to send the message.
    */
    'failureCount'?: number/**/;
    /**
    * The number of intended recipients of the message.
    */
    'targetCount'?: number/**/;
    /**
    * The reason the message failed to be sent. This is only included with a `phase` property value of `failed`.
    */
    'failedDescription'?: string/**/;
    /**
    * Error summary. This is only included with a phase property value of failed. One of:  `1`: An internal error occurred. `2`: An error occurred because there weren\'t enough recipients. `3`: A conflict error of requests occurs because a request that has already been accepted is retried. 
    */
    'errorCode'?: number/**/;
    /**
    * Narrowcast message request accepted time in milliseconds.  Format: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z) Timezone: UTC 
    */
    'acceptedTime': Date/**/;
    /**
    * Processing of narrowcast message request completion time in milliseconds. Returned when the phase property is succeeded or failed.  Format: ISO 8601 (e.g. 2020-12-03T10:15:30.121Z) Timezone: UTC 
    */
    'completedTime'?: Date/**/;
}

export namespace NarrowcastProgressResponse {
    export type PhaseEnum = 
            | 'waiting'
            | 'sending'
            | 'succeeded'
            'failed'
    ;
}
