/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AuditLogEventEventType: core.serialization.Schema<
    serializers.ats.AuditLogEventEventType.Raw,
    Merge.ats.AuditLogEventEventType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.EventTypeEnum),
    core.serialization.string(),
]);

export declare namespace AuditLogEventEventType {
    type Raw = serializers.ats.EventTypeEnum.Raw | string;
}
