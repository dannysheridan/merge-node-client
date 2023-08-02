/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const LinkedAccountStatus: core.serialization.ObjectSchema<
    serializers.hris.LinkedAccountStatus.Raw,
    Merge.hris.LinkedAccountStatus
> = core.serialization.object({
    linkedAccountStatus: core.serialization.property("linked_account_status", core.serialization.string()),
    canMakeRequest: core.serialization.property("can_make_request", core.serialization.boolean()),
});

export declare namespace LinkedAccountStatus {
    interface Raw {
        linked_account_status: string;
        can_make_request: boolean;
    }
}
