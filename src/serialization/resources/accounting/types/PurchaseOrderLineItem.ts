/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const PurchaseOrderLineItem: core.serialization.ObjectSchema<
    serializers.accounting.PurchaseOrderLineItem.Raw,
    Merge.accounting.PurchaseOrderLineItem
> = core.serialization.object({
    remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
    description: core.serialization.string().optional(),
    unitPrice: core.serialization.property("unit_price", core.serialization.number().optional()),
    quantity: core.serialization.number().optional(),
    item: core.serialization
        .lazy(async () => (await import("../../..")).accounting.PurchaseOrderLineItemItem)
        .optional(),
    account: core.serialization.string().optional(),
    trackingCategory: core.serialization.property("tracking_category", core.serialization.string().optional()),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization.list(core.serialization.string())
    ),
    taxAmount: core.serialization.property("tax_amount", core.serialization.string().optional()),
    totalLineAmount: core.serialization.property("total_line_amount", core.serialization.string().optional()),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.PurchaseOrderLineItemCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    company: core.serialization.string().optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
    modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
});

export declare namespace PurchaseOrderLineItem {
    interface Raw {
        remote_id?: string | null;
        description?: string | null;
        unit_price?: number | null;
        quantity?: number | null;
        item?: serializers.accounting.PurchaseOrderLineItemItem.Raw | null;
        account?: string | null;
        tracking_category?: string | null;
        tracking_categories: string[];
        tax_amount?: string | null;
        total_line_amount?: string | null;
        currency?: serializers.accounting.PurchaseOrderLineItemCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: string | null;
        remote_was_deleted?: boolean | null;
        created_at?: string | null;
        modified_at?: string | null;
    }
}
