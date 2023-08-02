/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const TicketsListRequestShowEnumOrigins: core.serialization.Schema<
    serializers.ticketing.TicketsListRequestShowEnumOrigins.Raw,
    Merge.ticketing.TicketsListRequestShowEnumOrigins
> = core.serialization.enum_([
    "priority",
    "priority,status",
    "priority,status,ticket_type",
    "priority,ticket_type",
    "status",
    "status,ticket_type",
    "ticket_type",
]);

export declare namespace TicketsListRequestShowEnumOrigins {
    type Raw =
        | "priority"
        | "priority,status"
        | "priority,status,ticket_type"
        | "priority,ticket_type"
        | "status"
        | "status,ticket_type"
        | "ticket_type";
}
