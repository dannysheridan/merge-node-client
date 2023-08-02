/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const EndUserDetailsRequest: core.serialization.Schema<
    serializers.ats.EndUserDetailsRequest.Raw,
    Merge.ats.EndUserDetailsRequest
> = core.serialization.object({
    endUserEmailAddress: core.serialization.property("end_user_email_address", core.serialization.string()),
    endUserOrganizationName: core.serialization.property("end_user_organization_name", core.serialization.string()),
    endUserOriginId: core.serialization.property("end_user_origin_id", core.serialization.string()),
    categories: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../../../../..")).ats.CategoriesEnum)
    ),
    integration: core.serialization.string().optional(),
    linkExpiryMins: core.serialization.property("link_expiry_mins", core.serialization.number().optional()),
    shouldCreateMagicLinkUrl: core.serialization.property(
        "should_create_magic_link_url",
        core.serialization.boolean().optional()
    ),
    commonModels: core.serialization.property(
        "common_models",
        core.serialization
            .list(
                core.serialization.lazyObject(
                    async () => (await import("../../../../../..")).ats.CommonModelScopesBodyRequest
                )
            )
            .optional()
    ),
});

export declare namespace EndUserDetailsRequest {
    interface Raw {
        end_user_email_address: string;
        end_user_organization_name: string;
        end_user_origin_id: string;
        categories: serializers.ats.CategoriesEnum.Raw[];
        integration?: string | null;
        link_expiry_mins?: number | null;
        should_create_magic_link_url?: boolean | null;
        common_models?: serializers.ats.CommonModelScopesBodyRequest.Raw[] | null;
    }
}
