/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ExpenseLineRequestTrackingCategory: core.serialization.Schema<
    serializers.accounting.ExpenseLineRequestTrackingCategory.Raw,
    Merge.accounting.ExpenseLineRequestTrackingCategory
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.TrackingCategory),
]);

export declare namespace ExpenseLineRequestTrackingCategory {
    type Raw = string | serializers.accounting.TrackingCategory.Raw;
}