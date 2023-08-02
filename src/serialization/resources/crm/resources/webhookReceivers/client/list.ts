/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Merge from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.crm.webhookReceivers.list.Response.Raw,
    Merge.crm.WebhookReceiver[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).crm.WebhookReceiver)
);

export declare namespace Response {
    type Raw = serializers.crm.WebhookReceiver.Raw[];
}
