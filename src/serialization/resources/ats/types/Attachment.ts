/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Attachment: core.serialization.ObjectSchema<serializers.ats.Attachment.Raw, Merge.ats.Attachment> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        fileName: core.serialization.property("file_name", core.serialization.string().optional()),
        fileUrl: core.serialization.property("file_url", core.serialization.string().optional()),
        candidate: core.serialization.string().optional(),
        attachmentType: core.serialization.property(
            "attachment_type",
            core.serialization.lazy(async () => (await import("../../..")).ats.AttachmentAttachmentType).optional()
        ),
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
                .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.RemoteData))
                .optional()
        ),
    });

export declare namespace Attachment {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        file_name?: string | null;
        file_url?: string | null;
        candidate?: string | null;
        attachment_type?: serializers.ats.AttachmentAttachmentType.Raw | null;
        remote_was_deleted?: boolean | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.ats.RemoteData.Raw[] | null;
    }
}
