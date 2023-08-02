/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const ModelOperation: core.serialization.ObjectSchema<
    serializers.hris.ModelOperation.Raw,
    Merge.hris.ModelOperation
> = core.serialization.object({
    modelName: core.serialization.property("model_name", core.serialization.string()),
    availableOperations: core.serialization.property(
        "available_operations",
        core.serialization.list(core.serialization.string())
    ),
    requiredPostParameters: core.serialization.property(
        "required_post_parameters",
        core.serialization.list(core.serialization.string())
    ),
    supportedFields: core.serialization.property(
        "supported_fields",
        core.serialization.list(core.serialization.string())
    ),
});

export declare namespace ModelOperation {
    interface Raw {
        model_name: string;
        available_operations: string[];
        required_post_parameters: string[];
        supported_fields: string[];
    }
}
