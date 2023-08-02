/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Job Object
 * ### Description
 * The `Job` object can be used to track any jobs that are currently or will be open/closed for applications.
 * ### Usage Example
 * Fetch from the `LIST Jobs` endpoint to show all job postings.
 */
export interface Job {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The job's name. */
    name?: string;
    /** The job's description. */
    description?: string;
    /** The job's code. Typically an additional identifier used to reference the particular job that is displayed on the ATS. */
    code?: string;
    /**
     * The job's status.
     *
     * * `OPEN` - OPEN
     * * `CLOSED` - CLOSED
     * * `DRAFT` - DRAFT
     * * `ARCHIVED` - ARCHIVED
     * * `PENDING` - PENDING
     */
    status?: Merge.ats.JobStatus;
    jobPostingUrls?: Merge.ats.Url[];
    /** When the third party's job was created. */
    remoteCreatedAt?: string;
    /** When the third party's job was updated. */
    remoteUpdatedAt?: string;
    /** Whether the job is confidential. */
    confidential?: boolean;
    /** IDs of `Department` objects for this `Job`. */
    departments?: (string | undefined)[];
    /** IDs of `Office` objects for this `Job`. */
    offices?: (string | undefined)[];
    /** IDs of `RemoteUser` objects that serve as hiring managers for this `Job`. */
    hiringManagers?: (string | undefined)[];
    /** IDs of `RemoteUser` objects that serve as recruiters for this `Job`. */
    recruiters?: (string | undefined)[];
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
