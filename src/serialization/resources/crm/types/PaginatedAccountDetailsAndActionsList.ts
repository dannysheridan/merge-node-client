/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAccountDetailsAndActionsList: core.serialization.ObjectSchema<
    serializers.crm.PaginatedAccountDetailsAndActionsList.Raw,
    Merge.crm.PaginatedAccountDetailsAndActionsList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).crm.AccountDetailsAndActions))
        .optional(),
});

export declare namespace PaginatedAccountDetailsAndActionsList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.crm.AccountDetailsAndActions.Raw[] | null;
    }
}
