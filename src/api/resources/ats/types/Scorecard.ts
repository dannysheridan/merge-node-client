/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Scorecard Object
 * ### Description
 * The `Scorecard` object is used to represent an interviewer's candidate recommendation based on a particular interview.
 * ### Usage Example
 * Fetch from the `LIST Scorecards` endpoint and filter by `application` to show all scorecard for an applicant.
 */
export interface Scorecard {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The application being scored. */
    application?: string;
    /** The interview being scored. */
    interview?: string;
    /** The interviewer doing the scoring. */
    interviewer?: string;
    /** When the third party's scorecard was created. */
    remoteCreatedAt?: string;
    /** When the scorecard was submitted. */
    submittedAt?: string;
    /**
     * The inteviewer's recommendation.
     *
     * * `DEFINITELY_NO` - DEFINITELY_NO
     * * `NO` - NO
     * * `YES` - YES
     * * `STRONG_YES` - STRONG_YES
     * * `NO_DECISION` - NO_DECISION
     */
    overallRecommendation?: Merge.ats.ScorecardOverallRecommendation;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.ats.RemoteData[];
}
