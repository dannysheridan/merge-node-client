/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const Dependent: core.serialization.ObjectSchema<serializers.hris.Dependent.Raw, Merge.hris.Dependent> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        remoteId: core.serialization.property("remote_id", core.serialization.string().optional()),
        firstName: core.serialization.property("first_name", core.serialization.string().optional()),
        middleName: core.serialization.property("middle_name", core.serialization.string().optional()),
        lastName: core.serialization.property("last_name", core.serialization.string().optional()),
        relationship: core.serialization
            .lazy(async () => (await import("../../..")).hris.DependentRelationship)
            .optional(),
        employee: core.serialization.string().optional(),
        dateOfBirth: core.serialization.property("date_of_birth", core.serialization.date().optional()),
        gender: core.serialization.lazy(async () => (await import("../../..")).hris.DependentGender).optional(),
        phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
        homeLocation: core.serialization.property("home_location", core.serialization.string().optional()),
        isStudent: core.serialization.property("is_student", core.serialization.boolean().optional()),
        ssn: core.serialization.string().optional(),
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
                .list(core.serialization.lazyObject(async () => (await import("../../..")).hris.RemoteData))
                .optional()
        ),
    });

export declare namespace Dependent {
    interface Raw {
        id?: string | null;
        remote_id?: string | null;
        first_name?: string | null;
        middle_name?: string | null;
        last_name?: string | null;
        relationship?: serializers.hris.DependentRelationship.Raw | null;
        employee?: string | null;
        date_of_birth?: string | null;
        gender?: serializers.hris.DependentGender.Raw | null;
        phone_number?: string | null;
        home_location?: string | null;
        is_student?: boolean | null;
        ssn?: string | null;
        remote_was_deleted?: boolean | null;
        created_at?: string | null;
        modified_at?: string | null;
        field_mappings?: Record<string, unknown> | null;
        remote_data?: serializers.hris.RemoteData.Raw[] | null;
    }
}
