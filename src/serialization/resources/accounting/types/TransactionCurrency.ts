/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TransactionCurrency: core.serialization.Schema<
    serializers.accounting.TransactionCurrency.Raw,
    Merge.accounting.TransactionCurrency
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).accounting.CurrencyEnum),
    core.serialization.string(),
]);

export declare namespace TransactionCurrency {
    type Raw = serializers.accounting.CurrencyEnum.Raw | string;
}
