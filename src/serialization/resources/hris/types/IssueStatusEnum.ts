/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const IssueStatusEnum: core.serialization.Schema<
    serializers.hris.IssueStatusEnum.Raw,
    Merge.hris.IssueStatusEnum
> = core.serialization.enum_(["ONGOING", "RESOLVED"]);

export declare namespace IssueStatusEnum {
    type Raw = "ONGOING" | "RESOLVED";
}
