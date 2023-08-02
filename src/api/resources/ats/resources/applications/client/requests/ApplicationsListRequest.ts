/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../../../../..";

export interface ApplicationsListRequest {
    /**
     * If provided, will only return applications for this candidate.
     */
    candidateId?: string;
    /**
     * If provided, will only return objects created after this datetime.
     */
    createdAfter?: string;
    /**
     * If provided, will only return objects created before this datetime.
     */
    createdBefore?: string;
    /**
     * If provided, will only return applications credited to this user.
     */
    creditedToId?: string;
    /**
     * If provided, will only return applications at this interview stage.
     */
    currentStageId?: string;
    /**
     * The pagination cursor value.
     */
    cursor?: string;
    /**
     * Which relations should be returned in expanded form. Multiple relation names should be comma separated without spaces.
     */
    expand?: Merge.ats.ApplicationsListRequestExpand;
    /**
     * Whether to include data that was marked as deleted by third party webhooks.
     */
    includeDeletedData?: boolean;
    /**
     * Whether to include the original data Merge fetched from the third-party to produce these models.
     */
    includeRemoteData?: boolean;
    /**
     * If provided, will only return applications for this job.
     */
    jobId?: string;
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
     * If provided, will only return applications with this reject reason.
     */
    rejectReasonId?: string;
    /**
     * The API provider's ID for the given object.
     */
    remoteId?: string;
    /**
     * If provided, will only return applications with this source.
     */
    source?: string;
}
