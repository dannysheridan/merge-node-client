/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The User Object
 * ### Description
 * The `User` object is used to represent a user within the File Storage account.
 * ### Usage Example
 * Fetch from the `GET /api/filestorage/v1/users` endpoint and view their users.
 */
export interface User {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The user's name. */
    name?: string;
    /** The user's email address. This is typically used to identify a user across linked accounts. */
    emailAddress?: string;
    /** Whether the user is the one who linked this account. */
    isMe?: boolean;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: (Record<string, unknown> | undefined)[];
}
