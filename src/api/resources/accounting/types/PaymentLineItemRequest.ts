/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * # The PaymentLineItem Object
 * ### Description
 * The `PaymentLineItem` object is an applied-to-line on a `Payment` that can either be a `Invoice`, `CreditNote`, or `JournalEntry`.
 *
 * ### Usage Example
 * `Payment` will have a field called `applied-to-lines` which will be an array of `PaymentLineItemInternalMappingSerializer` objects that can either be a `Invoice`, `CreditNote`, or `JournalEntry`.
 *
 * # EXTERNAL SERIALIZER: This is used as the serializer that will be used for actual payloads to and from the
 * # customer
 */
export interface PaymentLineItemRequest {
    /** The amount of the PaymentLineItem. */
    appliedAmount?: string;
    /** Applied date of the PaymentLineItem */
    appliedDate?: Date;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    relatedObjectId?: string;
    relatedObjectType?: string;
    integrationParams?: Record<string, unknown>;
    linkedAccountParams?: Record<string, unknown>;
}
