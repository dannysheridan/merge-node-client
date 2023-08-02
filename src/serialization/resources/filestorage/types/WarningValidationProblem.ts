/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const WarningValidationProblem: core.serialization.ObjectSchema<
    serializers.filestorage.WarningValidationProblem.Raw,
    Merge.filestorage.WarningValidationProblem
> = core.serialization.object({
    source: core.serialization
        .lazyObject(async () => (await import("../../..")).filestorage.ValidationProblemSource)
        .optional(),
    title: core.serialization.string(),
    detail: core.serialization.string(),
    problemType: core.serialization.property("problem_type", core.serialization.string()),
});

export declare namespace WarningValidationProblem {
    interface Raw {
        source?: serializers.filestorage.ValidationProblemSource.Raw | null;
        title: string;
        detail: string;
        problem_type: string;
    }
}
