/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAssociationList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedAssociationList.Raw,
    Merge.crm.PaginatedAssociationList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.Association))
        .optional(),
});

export declare namespace PaginatedAssociationList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.crm.Association.Raw[] | null;
    }
}
