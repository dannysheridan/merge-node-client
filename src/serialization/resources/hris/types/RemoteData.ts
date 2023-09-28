/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteData: core.serialization.ObjectSchema<serializers.hris.RemoteData.Raw, Merge.hris.RemoteData> =
    core.serialization.object({
        path: core.serialization.string(),
        data: core.serialization.unknown().optional(),
    });

export declare namespace RemoteData {
    interface Raw {
        path: string;
        data?: unknown | null;
    }
}
