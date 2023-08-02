/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountDetails: core.serialization.ObjectSchema<
    serializers.hris.AccountDetails.Raw,
    Merge.hris.AccountDetails
> = core.serialization.object({
    id: core.serialization.string().optional(),
    integration: core.serialization.string().optional(),
    integrationSlug: core.serialization.property("integration_slug", core.serialization.string().optional()),
    category: core.serialization.lazy(async () => (await import("../../..")).hris.CategoryEnum).optional(),
    endUserOriginId: core.serialization.property("end_user_origin_id", core.serialization.string().optional()),
    endUserOrganizationName: core.serialization.property(
        "end_user_organization_name",
        core.serialization.string().optional()
    ),
    endUserEmailAddress: core.serialization.property("end_user_email_address", core.serialization.string().optional()),
    status: core.serialization.string().optional(),
    webhookListenerUrl: core.serialization.property("webhook_listener_url", core.serialization.string().optional()),
    isDuplicate: core.serialization.property("is_duplicate", core.serialization.boolean().optional()),
});

export declare namespace AccountDetails {
    interface Raw {
        id?: string | null;
        integration?: string | null;
        integration_slug?: string | null;
        category?: serializers.hris.CategoryEnum.Raw | null;
        end_user_origin_id?: string | null;
        end_user_organization_name?: string | null;
        end_user_email_address?: string | null;
        status?: string | null;
        webhook_listener_url?: string | null;
        is_duplicate?: boolean | null;
    }
}
