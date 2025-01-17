/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ContactsListRequest {
    /**
     * If provided, will only return contacts with this account.
     */
    accountId?: string;
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: Date;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: Date;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * If provided, will only return contacts matching the email addresses; multiple email_addresses can be separated by commas.
     */
    emailAddresses?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: "account";
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * Whether to include all remote fields, including fields that Merge did not map to common models, in a normalized format.
     */
    includeRemoteFields?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: Date;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: Date;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * If provided, will only return contacts matching the phone numbers; multiple phone numbers can be separated by commas.
     */
    phoneNumbers?: string;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
}
