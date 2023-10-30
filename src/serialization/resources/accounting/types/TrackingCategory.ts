/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TrackingCategory: core.serialization.ObjectSchema<
    serializers.accounting.TrackingCategory.Raw,
    Merge.accounting.TrackingCategory
> = core.serialization.object({
    name: core.serialization.string().optional(),
    status: core.serialization
        .lazy(async () => (await import("../../..")).accounting.TrackingCategoryStatus)
        .optional(),
    categoryType: core.serialization.property(
        "category_type",
        core.serialization
            .lazy(async () => (await import("../../..")).accounting.TrackingCategoryCategoryType)
            .optional()
    ),
    parentCategory: core.serialization.property("parent_category", core.serialization.string().optional()),
    company: core.serialization
        .lazy(async () => (await import("../../..")).accounting.TrackingCategoryCompany)
        .optional(),
    remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
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

export declare namespace TrackingCategory {
    interface Raw {
        name?: string | null;
        status?: serializers.accounting.TrackingCategoryStatus.Raw | null;
        category_type?: serializers.accounting.TrackingCategoryCategoryType.Raw | null;
        parent_category?: string | null;
        company?: serializers.accounting.TrackingCategoryCompany.Raw | null;
        remote_was_deleted?: boolean | null;
        id?: string | null;
        remote_id?: string | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.accounting.RemoteData.Raw[] | null;
    }
}
