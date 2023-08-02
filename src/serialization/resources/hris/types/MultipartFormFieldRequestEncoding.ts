/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const MultipartFormFieldRequestEncoding: core.serialization.Schema<
    serializers.hris.MultipartFormFieldRequestEncoding.Raw,
    Merge.hris.MultipartFormFieldRequestEncoding
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).hris.EncodingEnum),
    core.serialization.string(),
]);

export declare namespace MultipartFormFieldRequestEncoding {
    type Raw = serializers.hris.EncodingEnum.Raw | string;
}
