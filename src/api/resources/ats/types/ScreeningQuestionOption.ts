/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The ScreeningQuestionOption Object
 * ### Description
 * The `ScreeningQuestionOption` object is used to represent options for a `ScreeningQuestion` object
 *
 * ### Usage Example
 * TODO
 */
export interface ScreeningQuestionOption {
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** Available response options */
    label?: string;
    id?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
}
