/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteResponseResponseType: core.serialization.Schema<
    serializers.ats.RemoteResponseResponseType.Raw,
    Merge.ats.RemoteResponseResponseType
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("../../..")).ats.ResponseTypeEnum),
    core.serialization.string(),
]);

export declare namespace RemoteResponseResponseType {
    type Raw = serializers.ats.ResponseTypeEnum.Raw | string;
}
