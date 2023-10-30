/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const JournalEntryAccountingPeriod: core.serialization.Schema<
    serializers.accounting.JournalEntryAccountingPeriod.Raw,
    Merge.accounting.JournalEntryAccountingPeriod
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).accounting.AccountingPeriod),
]);

export declare namespace JournalEntryAccountingPeriod {
    type Raw = string | serializers.accounting.AccountingPeriod.Raw;
}
