/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedAccountList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedAccountList.Raw,
    Merge.accounting.PaginatedAccountList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.Account))
        .optional(),
});

export declare namespace PaginatedAccountList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.accounting.Account.Raw[] | null;
    }
}
