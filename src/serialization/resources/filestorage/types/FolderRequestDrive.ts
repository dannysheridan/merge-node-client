/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const FolderRequestDrive: core.serialization.Schema<
    serializers.filestorage.FolderRequestDrive.Raw,
    Merge.filestorage.FolderRequestDrive
> = core.serialization.undiscriminatedUnion([
    core.serialization.string(),
    core.serialization.lazyObject(async () => (await import("../../..")).filestorage.Drive),
]);

export declare namespace FolderRequestDrive {
    type Raw = string | serializers.filestorage.Drive.Raw;
}
