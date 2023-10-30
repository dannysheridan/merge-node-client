/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Invoice: core.serialization.ObjectSchema<serializers.accounting.Invoice.Raw, Merge.accounting.Invoice> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceType).optional(),
        contact: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceContact).optional(),
        number: core.serialization.string().optional(),
        issueDate: core.serialization.property("issue_date", core.serialization.date().optional()),
        dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
        paidOnDate: core.serialization.property("paid_on_date", core.serialization.date().optional()),
        memo: core.serialization.string().optional(),
        company: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceCompany).optional(),
        currency: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceCurrency).optional(),
        exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
        totalDiscount: core.serialization.property("total_discount", core.serialization.number().optional()),
        subTotal: core.serialization.property("sub_total", core.serialization.number().optional()),
        status: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceStatusEnum).optional(),
        totalTaxAmount: core.serialization.property("total_tax_amount", core.serialization.number().optional()),
        totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
        balance: core.serialization.number().optional(),
        remoteUpdatedAt: core.serialization.property("remote_updated_at", core.serialization.date().optional()),
        trackingCategories: core.serialization.property(
            "tracking_categories",
            core.serialization
                .list(
                    core.serialization
                        .lazy(async () => (await import("../../..")).accounting.InvoiceTrackingCategoriesItem)
                        .optional()
                )
                .optional()
        ),
        payments: core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.InvoicePaymentsItem)
                    .optional()
            )
            .optional(),
        lineItems: core.serialization.property(
            "line_items",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.InvoiceLineItem))
                .optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        accountingPeriod: core.serialization.property(
            "accounting_period",
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.InvoiceAccountingPeriod)
                .optional()
        ),
        purchaseOrders: core.serialization.property(
            "purchase_orders",
            core.serialization
                .list(
                    core.serialization
                        .lazy(async () => (await import("../../..")).accounting.InvoicePurchaseOrdersItem)
                        .optional()
                )
                .optional()
        ),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.RemoteData))
                .optional()
        ),
    });

export declare namespace Invoice {
    interface Raw {
        id?: string | null;
        type?: serializers.accounting.InvoiceType.Raw | null;
        contact?: serializers.accounting.InvoiceContact.Raw | null;
        number?: string | null;
        issue_date?: string | null;
        due_date?: string | null;
        paid_on_date?: string | null;
        memo?: string | null;
        company?: serializers.accounting.InvoiceCompany.Raw | null;
        currency?: serializers.accounting.InvoiceCurrency.Raw | null;
        exchange_rate?: string | null;
        total_discount?: number | null;
        sub_total?: number | null;
        status?: serializers.accounting.InvoiceStatusEnum.Raw | null;
        total_tax_amount?: number | null;
        total_amount?: number | null;
        balance?: number | null;
        remote_updated_at?: string | null;
        tracking_categories?: (serializers.accounting.InvoiceTrackingCategoriesItem.Raw | null | undefined)[] | null;
        payments?: (serializers.accounting.InvoicePaymentsItem.Raw | null | undefined)[] | null;
        line_items?: serializers.accounting.InvoiceLineItem.Raw[] | null;
        remote_was_deleted?: boolean | null;
        accounting_period?: serializers.accounting.InvoiceAccountingPeriod.Raw | null;
        purchase_orders?: (serializers.accounting.InvoicePurchaseOrdersItem.Raw | null | undefined)[] | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
