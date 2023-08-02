/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PaymentsListRequestExpand =
    | "account"
    | "account,company"
    | "company"
    | "contact"
    | "contact,account"
    | "contact,account,company"
    | "contact,company"
    | "tracking_categories"
    | "tracking_categories,account"
    | "tracking_categories,account,company"
    | "tracking_categories,company"
    | "tracking_categories,contact"
    | "tracking_categories,contact,account"
    | "tracking_categories,contact,account,company"
    | "tracking_categories,contact,company";

export const PaymentsListRequestExpand = {
    Account: "account",
    AccountCompany: "account,company",
    Company: "company",
    Contact: "contact",
    ContactAccount: "contact,account",
    ContactAccountCompany: "contact,account,company",
    ContactCompany: "contact,company",
    TrackingCategories: "tracking_categories",
    TrackingCategoriesAccount: "tracking_categories,account",
    TrackingCategoriesAccountCompany: "tracking_categories,account,company",
    TrackingCategoriesCompany: "tracking_categories,company",
    TrackingCategoriesContact: "tracking_categories,contact",
    TrackingCategoriesContactAccount: "tracking_categories,contact,account",
    TrackingCategoriesContactAccountCompany: "tracking_categories,contact,account,company",
    TrackingCategoriesContactCompany: "tracking_categories,contact,company",
} as const;
