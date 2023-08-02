/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type FoldersRetrieveRequestExpand =
    | "drive"
    | "parent_folder"
    | "parent_folder,drive"
    | "permissions"
    | "permissions,drive"
    | "permissions,parent_folder"
    | "permissions,parent_folder,drive";

export const FoldersRetrieveRequestExpand = {
    Drive: "drive",
    ParentFolder: "parent_folder",
    ParentFolderDrive: "parent_folder,drive",
    Permissions: "permissions",
    PermissionsDrive: "permissions,drive",
    PermissionsParentFolder: "permissions,parent_folder",
    PermissionsParentFolderDrive: "permissions,parent_folder,drive",
} as const;
