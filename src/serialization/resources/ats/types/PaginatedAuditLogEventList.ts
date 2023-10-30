/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAuditLogEventList: core.serialization.ObjectSchema<
    serializers.ats.PaginatedAuditLogEventList.Raw,
    Merge.ats.PaginatedAuditLogEventList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.AuditLogEvent))
        .optional(),
});

export declare namespace PaginatedAuditLogEventList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.ats.AuditLogEvent.Raw[] | null;
    }
}
