/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface CreditNotesListRequest {
    /**
     * If provided, will only return credit notes for this company.
     */
    companyId?: string;
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: string;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: string;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.accounting.CreditNotesListRequestExpand;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, only objects synced by Merge after this date time will be returned.
     */
    modifiedAfter?: string;
    /**
     * If provided, only objects synced by Merge before this date time will be returned.
     */
    modifiedBefore?: string;
    /**
     * Number of results to return per page.
     */
    pageSize?: number;
    /**
     * Deprecated. Use show_enum_origins.
     */
    remoteFields?: Merge.accounting.CreditNotesListRequestRemoteFields;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * Which fields should be returned in non-normalized form.
     */
    showEnumOrigins?: Merge.accounting.CreditNotesListRequestShowEnumOrigins;
    /**
     * If provided, will only return objects created after this datetime.
     */
    transactionDateAfter?: string;
    /**
     * If provided, will only return objects created before this datetime.
     */
    transactionDateBefore?: string;
}
