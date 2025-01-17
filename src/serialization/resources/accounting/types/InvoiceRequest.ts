/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const InvoiceRequest: core.serialization.ObjectSchema<
    serializers.accounting.InvoiceRequest.Raw,
    Merge.accounting.InvoiceRequest
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceRequestType).optional(),
    contact: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceRequestContact)
        .optional(),
    number: core.serialization.string().optional(),
    issueDate: core.serialization.property("issue_date", core.serialization.date().optional()),
    dueDate: core.serialization.property("due_date", core.serialization.date().optional()),
    paidOnDate: core.serialization.property("paid_on_date", core.serialization.date().optional()),
    memo: core.serialization.string().optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).accounting.InvoiceRequestStatus).optional(),
    company: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceRequestCompany)
        .optional(),
    currency: core.serialization
        .lazy(async () => (await import("../../..")).accounting.InvoiceRequestCurrency)
        .optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    totalDiscount: core.serialization.property("total_discount", core.serialization.number().optional()),
    subTotal: core.serialization.property("sub_total", core.serialization.number().optional()),
    totalTaxAmount: core.serialization.property("total_tax_amount", core.serialization.number().optional()),
    totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
    balance: core.serialization.number().optional(),
    payments: core.serialization
        .list(
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.InvoiceRequestPaymentsItem)
                .optional()
        )
        .optional(),
    trackingCategories: core.serialization.property(
        "tracking_categories",
        core.serialization
            .list(
                core.serialization
                    .lazy(async () => (await import("../../..")).accounting.InvoiceRequestTrackingCategoriesItem)
                    .optional()
            )
            .optional()
    ),
    lineItems: core.serialization.property(
        "line_items",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("../../..")).accounting.InvoiceLineItemRequest)
            )
            .optional()
    ),
    integrationParams: core.serialization.property(
        "integration_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
    linkedAccountParams: core.serialization.property(
        "linked_account_params",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace InvoiceRequest {
    interface Raw {
        type?: serializers.accounting.InvoiceRequestType.Raw | null;
        contact?: serializers.accounting.InvoiceRequestContact.Raw | null;
        number?: string | null;
        issue_date?: string | null;
        due_date?: string | null;
        paid_on_date?: string | null;
        memo?: string | null;
        status?: serializers.accounting.InvoiceRequestStatus.Raw | null;
        company?: serializers.accounting.InvoiceRequestCompany.Raw | null;
        currency?: serializers.accounting.InvoiceRequestCurrency.Raw | null;
        exchange_rate?: string | null;
        total_discount?: number | null;
        sub_total?: number | null;
        total_tax_amount?: number | null;
        total_amount?: number | null;
        balance?: number | null;
        payments?: (serializers.accounting.InvoiceRequestPaymentsItem.Raw | null | undefined)[] | null;
        tracking_categories?:
            | (serializers.accounting.InvoiceRequestTrackingCategoriesItem.Raw | null | undefined)[]
            | null;
        line_items?: serializers.accounting.InvoiceLineItemRequest.Raw[] | null;
        integration_params?: Record<string, unknown> | null;
        linked_account_params?: Record<string, unknown> | null;
    }
}
