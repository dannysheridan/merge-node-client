/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../..";
import * as Merge from "../../../../../../../api";
import * as core from "../../../../../../../core";

export const WebhookReceiverRequest: core.serialization.Schema<
    serializers.hris.WebhookReceiverRequest.Raw,
    Merge.hris.WebhookReceiverRequest
> = core.serialization.object({
    event: core.serialization.string(),
    isActive: core.serialization.property("is_active", core.serialization.boolean()),
    key: core.serialization.string().optional(),
});

export declare namespace WebhookReceiverRequest {
    interface Raw {
        event: string;
        is_active: boolean;
        key?: string | null;
    }
}
