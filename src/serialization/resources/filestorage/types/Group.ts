/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Group: core.serialization.ObjectSchema<serializers.filestorage.Group.Raw, Merge.filestorage.Group> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        name: core.serialization.string().optional(),
        users: core.serialization.list(core.serialization.string()),
        remoteWasDeleted: core.serialization.property("remote_was_deleted", core.serialization.boolean().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.date().optional()),
        modifiedAt: core.serialization.property("modified_at", core.serialization.date().optional()),
        fieldMappings: core.serialization.property(
            "field_mappings",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
        remoteData: core.serialization.property(
            "remote_data",
            core.serialization
                .list(core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional())
                .optional()
        ),
    });

export declare namespace Group {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        name?: string | null;
        users: string[];
        remote_was_deleted?: boolean | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: (Record<string, unknown> | null | undefined)[] | null;
    }
}
