/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PaginatedVendorCreditList: core.serialization.ObjectSchema<
    serializers.accounting.PaginatedVendorCreditList.Raw,
    Merge.accounting.PaginatedVendorCreditList
> = core.serialization.object({
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.VendorCredit))
        .optional(),
});

export declare namespace PaginatedVendorCreditList {
    interface Raw {
        next?: string | null;
        previous?: string | null;
        results?: serializers.accounting.VendorCredit.Raw[] | null;
    }
}
