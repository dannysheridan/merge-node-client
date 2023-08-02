/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const RemoteKey: core.serialization.ObjectSchema<
    serializers.ticketing.RemoteKey.Raw,
    Merge.ticketing.RemoteKey
> = core.serialization.object({
    name: core.serialization.string(),
    key: core.serialization.string(),
});

export declare namespace RemoteKey {
    interface Raw {
        name: string;
        key: string;
    }
}
