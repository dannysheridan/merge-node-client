/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Merge from "../../..";

export interface AccountDetailsAndActionsIntegration {
    name: string;
    categories: Merge.ats.CategoriesEnum[];
    image?: string;
    squareImage?: string;
    color: string;
    slug: string;
    passthroughAvailable: boolean;
    availableModelOperations?: Merge.ats.ModelOperation[];
}
