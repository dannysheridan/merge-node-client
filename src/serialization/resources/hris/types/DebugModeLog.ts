/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Merge from "../../../../api";
import * as core from "../../../../core";

export const DebugModeLog: core.serialization.ObjectSchema<serializers.hris.DebugModeLog.Raw, Merge.hris.DebugModeLog> =
    core.serialization.object({
        logId: core.serialization.property("log_id", core.serialization.string()),
        dashboardView: core.serialization.property("dashboard_view", core.serialization.string()),
        logSummary: core.serialization.property(
            "log_summary",
            core.serialization.lazyObject(async () => (await import("../../..")).hris.DebugModelLogSummary)
        ),
    });

export declare namespace DebugModeLog {
    interface Raw {
        log_id: string;
        dashboard_view: string;
        log_summary: serializers.hris.DebugModelLogSummary.Raw;
    }
}
