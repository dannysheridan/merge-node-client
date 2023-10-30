/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FileDrive: core.serialization.Schema<serializers.filestorage.FileDrive.Raw, Merge.filestorage.FileDrive> =
    core.serialization.undiscriminatedUnion([
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("../../..")).filestorage.Drive),
    ]);

export declare namespace FileDrive {
    type Raw = string | serializers.filestorage.Drive.Raw;
}
