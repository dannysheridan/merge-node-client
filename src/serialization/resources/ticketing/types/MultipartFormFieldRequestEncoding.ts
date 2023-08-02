/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const MultipartFormFieldRequestEncoding: core.serialization.Schema<
    serializers.ticketing.MultipartFormFieldRequestEncoding.Raw,
    Merge.ticketing.MultipartFormFieldRequestEncoding
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ticketing.EncodingEnum),
    core.serialization.string(),
]);

export declare namespace MultipartFormFieldRequestEncoding {
    type Raw = serializers.ticketing.EncodingEnum.Raw | string;
}
