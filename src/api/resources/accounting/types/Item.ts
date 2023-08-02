/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Item Object
 * ### Description
 * The `Item` object refers to the goods involved in a transaction.
 *
 * ### Usage Example
 * Fetch from the `LIST Items` endpoint and view a company's items.
 */
export interface Item {
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    /** The item's name. */
    name?: string;
    /**
     * The item's status.
     *
     * * `ACTIVE` - ACTIVE
     * * `ARCHIVED` - ARCHIVED
     */
    status?: Merge.accounting.ItemStatus;
    /** The item's unit price. */
    unitPrice?: number;
    /** The price at which the item is purchased from a vendor. */
    purchasePrice?: number;
    /** References the default account used to record a purchase of the item. */
    purchaseAccount?: string;
    /** References the default account used to record a sale. */
    salesAccount?: string;
    /** The company the item belongs to. */
    company?: string;
    /** When the third party's item note was updated. */
    remoteUpdatedAt?: string;
    /** Indicates whether or not this object has been deleted by third party webhooks. */
    remoteWasDeleted?: boolean;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: string;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.accounting.RemoteData[];
}
