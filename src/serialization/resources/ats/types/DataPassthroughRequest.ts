/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const DataPassthroughRequest: core.serialization.ObjectSchema<
    serializers.ats.DataPassthroughRequest.Raw,
    Merge.ats.DataPassthroughRequest
> = core.serialization.object({
    method: core.serialization.lazy(async () => (await import("../../..")).ats.MethodEnum),
    path: core.serialization.string(),
    baseUrlOverride: core.serialization.property("base_url_override", core.serialization.string().optional()),
    data: core.serialization.string().optional(),
    multipartFormData: core.serialization.property(
        "multipart_form_data",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ats.MultipartFormFieldRequest))
            .optional()
    ),
    headers: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    requestFormat: core.serialization.property(
        "request_format",
        core.serialization.lazy(async () => (await import("../../..")).ats.RequestFormatEnum).optional()
    ),
    normalizeResponse: core.serialization.property("normalize_response", core.serialization.boolean().optional()),
});

export declare namespace DataPassthroughRequest {
    interface Raw {
        method: serializers.ats.MethodEnum.Raw;
        path: string;
        base_url_override?: string | null;
        data?: string | null;
        multipart_form_data?: serializers.ats.MultipartFormFieldRequest.Raw[] | null;
        headers?: Record<string, unknown> | null;
        request_format?: serializers.ats.RequestFormatEnum.Raw | null;
        normalize_response?: boolean | null;
    }
}