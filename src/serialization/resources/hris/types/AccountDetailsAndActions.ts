/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AccountDetailsAndActions: core.serialization.ObjectSchema<
    serializers.hris.AccountDetailsAndActions.Raw,
    Merge.hris.AccountDetailsAndActions
> = core.serialization.object({
    id: core.serialization.string(),
    category: core.serialization.lazy(async () => (await import("../../..")).hris.CategoryEnum).optional(),
    status: core.serialization.lazy(async () => (await import("../../..")).hris.AccountDetailsAndActionsStatusEnum),
    statusDetail: core.serialization.property("status_detail", core.serialization.string().optional()),
    endUserOriginId: core.serialization.property("end_user_origin_id", core.serialization.string().optional()),
    endUserOrganizationName: core.serialization.property("end_user_organization_name", core.serialization.string()),
    endUserEmailAddress: core.serialization.property("end_user_email_address", core.serialization.string()),
    webhookListenerUrl: core.serialization.property("webhook_listener_url", core.serialization.string()),
    isDuplicate: core.serialization.property("is_duplicate", core.serialization.boolean().optional()),
    integration: core.serialization
        .lazyObject(async () => (await import("../../..")).hris.AccountDetailsAndActionsIntegration)
        .optional(),
});

export declare namespace AccountDetailsAndActions {
    interface Raw {
        id: string;
        category?: serializers.hris.CategoryEnum.Raw | null;
        status: serializers.hris.AccountDetailsAndActionsStatusEnum.Raw;
        status_detail?: string | null;
        end_user_origin_id?: string | null;
        end_user_organization_name: string;
        end_user_email_address: string;
        webhook_listener_url: string;
        is_duplicate?: boolean | null;
        integration?: serializers.hris.AccountDetailsAndActionsIntegration.Raw | null;
    }
}
