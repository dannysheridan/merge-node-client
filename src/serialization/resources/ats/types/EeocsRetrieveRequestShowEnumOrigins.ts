/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const EeocsRetrieveRequestShowEnumOrigins: core.serialization.Schema<
    serializers.ats.EeocsRetrieveRequestShowEnumOrigins.Raw,
    Merge.ats.EeocsRetrieveRequestShowEnumOrigins
> = core.serialization.enum_([
    "disability_status",
    "disability_status,gender",
    "disability_status,gender,race",
    "disability_status,gender,race,veteran_status",
    "disability_status,gender,veteran_status",
    "disability_status,race",
    "disability_status,race,veteran_status",
    "disability_status,veteran_status",
    "gender",
    "gender,race",
    "gender,race,veteran_status",
    "gender,veteran_status",
    "race",
    "race,veteran_status",
    "veteran_status",
]);

export declare namespace EeocsRetrieveRequestShowEnumOrigins {
    type Raw =
        | "disability_status"
        | "disability_status,gender"
        | "disability_status,gender,race"
        | "disability_status,gender,race,veteran_status"
        | "disability_status,gender,veteran_status"
        | "disability_status,race"
        | "disability_status,race,veteran_status"
        | "disability_status,veteran_status"
        | "gender"
        | "gender,race"
        | "gender,race,veteran_status"
        | "gender,veteran_status"
        | "race"
        | "race,veteran_status"
        | "veteran_status";
}
