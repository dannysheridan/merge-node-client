/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const AttachmentTypeEnum: core.serialization.Schema<
    serializers.ats.AttachmentTypeEnum.Raw,
    Merge.ats.AttachmentTypeEnum
> = core.serialization.enum_(["RESUME", "COVER_LETTER", "OFFER_LETTER", "OTHER"]);

export declare namespace AttachmentTypeEnum {
    type Raw = "RESUME" | "COVER_LETTER" | "OFFER_LETTER" | "OTHER";
}
