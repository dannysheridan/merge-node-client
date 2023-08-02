/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ScorecardsRetrieveRequestExpand: core.serialization.Schema<
    serializers.ats.ScorecardsRetrieveRequestExpand.Raw,
    Merge.ats.ScorecardsRetrieveRequestExpand
> = core.serialization.enum_([
    "application",
    "application,interview",
    "application,interview,interviewer",
    "application,interviewer",
    "interview",
    "interview,interviewer",
    "interviewer",
]);

export declare namespace ScorecardsRetrieveRequestExpand {
    type Raw =
        | "application"
        | "application,interview"
        | "application,interview,interviewer"
        | "application,interviewer"
        | "interview"
        | "interview,interviewer"
        | "interviewer";
}
