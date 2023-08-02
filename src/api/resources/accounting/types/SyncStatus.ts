/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

/**
 * # The SyncStatus Object
 * ### Description
 * The `SyncStatus` object is used to represent the syncing state of an account
 *
 * ### Usage Example
 * View the `SyncStatus` for an account to see how recently its models were synced.
 */
export interface SyncStatus {
    modelName: string;
    modelId: string;
    lastSyncStart?: string;
    nextSyncStart?: string;
    status: Merge.accounting.SyncStatusStatusEnum;
    isInitialSync: boolean;
    selectiveSyncConfigurationsUsage?: Merge.accounting.SelectiveSyncConfigurationsUsageEnum;
}
