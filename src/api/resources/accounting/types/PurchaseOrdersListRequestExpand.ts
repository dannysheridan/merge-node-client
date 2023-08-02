/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type PurchaseOrdersListRequestExpand =
    | "company"
    | "delivery_address"
    | "delivery_address,company"
    | "delivery_address,vendor"
    | "delivery_address,vendor,company"
    | "line_items"
    | "line_items,company"
    | "line_items,delivery_address"
    | "line_items,delivery_address,company"
    | "line_items,delivery_address,vendor"
    | "line_items,delivery_address,vendor,company"
    | "line_items,tracking_categories"
    | "line_items,tracking_categories,company"
    | "line_items,tracking_categories,delivery_address"
    | "line_items,tracking_categories,delivery_address,company"
    | "line_items,tracking_categories,delivery_address,vendor"
    | "line_items,tracking_categories,delivery_address,vendor,company"
    | "line_items,tracking_categories,vendor"
    | "line_items,tracking_categories,vendor,company"
    | "line_items,vendor"
    | "line_items,vendor,company"
    | "tracking_categories"
    | "tracking_categories,company"
    | "tracking_categories,delivery_address"
    | "tracking_categories,delivery_address,company"
    | "tracking_categories,delivery_address,vendor"
    | "tracking_categories,delivery_address,vendor,company"
    | "tracking_categories,vendor"
    | "tracking_categories,vendor,company"
    | "vendor"
    | "vendor,company";

export const PurchaseOrdersListRequestExpand = {
    Company: "company",
    DeliveryAddress: "delivery_address",
    DeliveryAddressCompany: "delivery_address,company",
    DeliveryAddressVendor: "delivery_address,vendor",
    DeliveryAddressVendorCompany: "delivery_address,vendor,company",
    LineItems: "line_items",
    LineItemsCompany: "line_items,company",
    LineItemsDeliveryAddress: "line_items,delivery_address",
    LineItemsDeliveryAddressCompany: "line_items,delivery_address,company",
    LineItemsDeliveryAddressVendor: "line_items,delivery_address,vendor",
    LineItemsDeliveryAddressVendorCompany: "line_items,delivery_address,vendor,company",
    LineItemsTrackingCategories: "line_items,tracking_categories",
    LineItemsTrackingCategoriesCompany: "line_items,tracking_categories,company",
    LineItemsTrackingCategoriesDeliveryAddress: "line_items,tracking_categories,delivery_address",
    LineItemsTrackingCategoriesDeliveryAddressCompany: "line_items,tracking_categories,delivery_address,company",
    LineItemsTrackingCategoriesDeliveryAddressVendor: "line_items,tracking_categories,delivery_address,vendor",
    LineItemsTrackingCategoriesDeliveryAddressVendorCompany:
        "line_items,tracking_categories,delivery_address,vendor,company",
    LineItemsTrackingCategoriesVendor: "line_items,tracking_categories,vendor",
    LineItemsTrackingCategoriesVendorCompany: "line_items,tracking_categories,vendor,company",
    LineItemsVendor: "line_items,vendor",
    LineItemsVendorCompany: "line_items,vendor,company",
    TrackingCategories: "tracking_categories",
    TrackingCategoriesCompany: "tracking_categories,company",
    TrackingCategoriesDeliveryAddress: "tracking_categories,delivery_address",
    TrackingCategoriesDeliveryAddressCompany: "tracking_categories,delivery_address,company",
    TrackingCategoriesDeliveryAddressVendor: "tracking_categories,delivery_address,vendor",
    TrackingCategoriesDeliveryAddressVendorCompany: "tracking_categories,delivery_address,vendor,company",
    TrackingCategoriesVendor: "tracking_categories,vendor",
    TrackingCategoriesVendorCompany: "tracking_categories,vendor,company",
    Vendor: "vendor",
    VendorCompany: "vendor,company",
} as const;
