/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The Contact Object
 * ### Description
 * The `Contact` object is used to represent an existing point of contact at a company in a CRM system.
 * ### Usage Example
 * TODO
 */
export interface Contact {
    /** The contact's first name. */
    firstName?: string;
    /** The contact's last name. */
    lastName?: string;
    /** The contact's account. */
    account?: Merge.crm.ContactAccount;
    addresses?: Merge.crm.Address[];
    emailAddresses?: Merge.crm.EmailAddress[];
    phoneNumbers?: Merge.crm.PhoneNumber[];
    /** When the contact's last activity occurred. */
    lastActivityAt?: Date;
    /** When the third party's contact was created. */
    remoteCreatedAt?: Date;
    remoteWasDeleted?: boolean;
    id?: string;
    /** The third-party API ID of the matching object. */
    remoteId?: string;
    createdAt?: Date;
    /** This is the datetime that this object was last updated by Merge */
    modifiedAt?: Date;
    fieldMappings?: Record<string, unknown>;
    remoteData?: Merge.crm.RemoteData[];
    remoteFields?: Merge.crm.RemoteField[];
}
