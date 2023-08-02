/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountSelectiveSyncConfigurationRequest: core.serialization.ObjectSchema<
    serializers.ats.LinkedAccountSelectiveSyncConfigurationRequest.Raw,
    Merge.ats.LinkedAccountSelectiveSyncConfigurationRequest
> = core.serialization.object({
    linkedAccountConditions: core.serialization.property(
        "linked_account_conditions",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ats.LinkedAccountConditionRequest)
        )
    ),
});

export declare namespace LinkedAccountSelectiveSyncConfigurationRequest {
    interface Raw {
        linked_account_conditions: serializers.ats.LinkedAccountConditionRequest.Raw[];
    }
}
