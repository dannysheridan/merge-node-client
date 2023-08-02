/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The LinkedAccount Object
 * ### Description
 * The `LinkedAccount` object is used to represent an end user's link with a specific integration.
 *
 * ### Usage Example
 * View a list of your organization's `LinkedAccount` objects.
 */
export interface AccountDetailsAndActions {
    id: string;
    category?: Merge.ats.CategoryEnum;
    status: Merge.ats.AccountDetailsAndActionsStatusEnum;
    statusDetail?: string;
    endUserOriginId?: string;
    endUserOrganizationName: string;
    endUserEmailAddress: string;
    webhookListenerUrl: string;
    /** Whether a Production Linked Account's credentials match another existing Production Linked Account. This field is `null` for Test Linked Accounts, incomplete Production Linked Accounts, and ignored duplicate Production Linked Account sets. */
    isDuplicate?: boolean;
    integration?: Merge.ats.AccountDetailsAndActionsIntegration;
}
