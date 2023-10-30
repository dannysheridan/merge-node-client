/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Expense: core.serialization.ObjectSchema<serializers.accounting.Expense.Raw, Merge.accounting.Expense> =
    core.serialization.object({
        transactionDate: core.serialization.property("transaction_date", core.serialization.date().optional()),
        remoteCreatedAt: core.serialization.property("remote_created_at", core.serialization.date().optional()),
        account: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseAccount).optional(),
        contact: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseContact).optional(),
        totalAmount: core.serialization.property("total_amount", core.serialization.number().optional()),
        subTotal: core.serialization.property("sub_total", core.serialization.number().optional()),
        totalTaxAmount: core.serialization.property("total_tax_amount", core.serialization.number().optional()),
        currency: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseCurrency).optional(),
        exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
        company: core.serialization.lazy(async () => (await import("../../..")).accounting.ExpenseCompany).optional(),
        memo: core.serialization.string().optional(),
        lines: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).accounting.ExpenseLine))
            .optional(),
        trackingCategories: core.serialization.property(
            "tracking_categories",
            core.serialization
                .list(
                    core.serialization
                        .lazy(async () => (await import("../../..")).accounting.ExpenseTrackingCategoriesItem)
                        .optional()
                )
                .optional()
        ),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        accountingPeriod: core.serialization.property(
            "accounting_period",
            core.serialization
                .lazy(async () => (await import("../../..")).accounting.ExpenseAccountingPeriod)
                .optional()
        ),
        id: core.serialization.string().optional(),
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

export declare namespace Expense {
    interface Raw {
        transaction_date?: string | null;
        remote_created_at?: string | null;
        account?: serializers.accounting.ExpenseAccount.Raw | null;
        contact?: serializers.accounting.ExpenseContact.Raw | null;
        total_amount?: number | null;
        sub_total?: number | null;
        total_tax_amount?: number | null;
        currency?: serializers.accounting.ExpenseCurrency.Raw | null;
        exchange_rate?: string | null;
        company?: serializers.accounting.ExpenseCompany.Raw | null;
        memo?: string | null;
        lines?: serializers.accounting.ExpenseLine.Raw[] | null;
        tracking_categories?: (serializers.accounting.ExpenseTrackingCategoriesItem.Raw | null | undefined)[] | null;
        remote_was_deleted?: boolean | null;
        accounting_period?: serializers.accounting.ExpenseAccountingPeriod.Raw | null;
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
