/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Merge from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace EmployeePayrollRuns {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class EmployeePayrollRuns {
    constructor(protected readonly _options: EmployeePayrollRuns.Options) {}

    /**
     * Returns a list of `EmployeePayrollRun` objects.
     */
    public async list(
        request: Merge.hris.EmployeePayrollRunsListRequest = {},
        requestOptions?: EmployeePayrollRuns.RequestOptions
    ): Promise<Merge.hris.PaginatedEmployeePayrollRunList> {
        const {
            createdAfter,
            createdBefore,
            cursor,
            employeeId,
            endedAfter,
            endedBefore,
            expand,
            includeDeletedData,
            includeRemoteData,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            payrollRunId,
            remoteId,
            startedAfter,
            startedBefore,
        } = request;
        const _queryParams = new URLSearchParams();
        if (createdAfter != null) {
            _queryParams.append("created_after", createdAfter);
        }

        if (createdBefore != null) {
            _queryParams.append("created_before", createdBefore);
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (employeeId != null) {
            _queryParams.append("employee_id", employeeId);
        }

        if (endedAfter != null) {
            _queryParams.append("ended_after", endedAfter);
        }

        if (endedBefore != null) {
            _queryParams.append("ended_before", endedBefore);
        }

        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeDeletedData != null) {
            _queryParams.append("include_deleted_data", includeDeletedData.toString());
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (modifiedAfter != null) {
            _queryParams.append("modified_after", modifiedAfter);
        }

        if (modifiedBefore != null) {
            _queryParams.append("modified_before", modifiedBefore);
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (payrollRunId != null) {
            _queryParams.append("payroll_run_id", payrollRunId);
        }

        if (remoteId != null) {
            _queryParams.append("remote_id", remoteId);
        }

        if (startedAfter != null) {
            _queryParams.append("started_after", startedAfter);
        }

        if (startedBefore != null) {
            _queryParams.append("started_before", startedBefore);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/employee-payroll-runs"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.PaginatedEmployeePayrollRunList.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Returns an `EmployeePayrollRun` object with the given `id`.
     */
    public async retrieve(
        id: string,
        request: Merge.hris.EmployeePayrollRunsRetrieveRequest = {},
        requestOptions?: EmployeePayrollRuns.RequestOptions
    ): Promise<Merge.hris.EmployeePayrollRun> {
        const { expand, includeRemoteData } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/hris/v1/employee-payroll-runs/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "0.1.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.EmployeePayrollRun.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MergeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MergeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MergeTimeoutError();
            case "unknown":
                throw new errors.MergeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.apiKey)}`;
    }
}
