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

export declare namespace Employees {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Employees {
    constructor(protected readonly _options: Employees.Options) {}

    /**
     * Returns a list of `Employee` objects.
     */
    public async list(
        request: Merge.hris.EmployeesListRequest = {},
        requestOptions?: Employees.RequestOptions
    ): Promise<Merge.hris.PaginatedEmployeeList> {
        const {
            companyId,
            createdAfter,
            createdBefore,
            cursor,
            displayFullName,
            employmentStatus,
            employmentType,
            expand,
            firstName,
            groups,
            homeLocationId,
            includeDeletedData,
            includeRemoteData,
            includeSensitiveFields,
            jobTitle,
            lastName,
            managerId,
            modifiedAfter,
            modifiedBefore,
            pageSize,
            payGroupId,
            personalEmail,
            remoteFields,
            remoteId,
            showEnumOrigins,
            startedAfter,
            startedBefore,
            teamId,
            terminatedAfter,
            terminatedBefore,
            workEmail,
            workLocationId,
        } = request;
        const _queryParams = new URLSearchParams();
        if (companyId != null) {
            _queryParams.append("company_id", companyId);
        }

        if (createdAfter != null) {
            _queryParams.append("created_after", createdAfter.toISOString());
        }

        if (createdBefore != null) {
            _queryParams.append("created_before", createdBefore.toISOString());
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (displayFullName != null) {
            _queryParams.append("display_full_name", displayFullName);
        }

        if (employmentStatus != null) {
            _queryParams.append("employment_status", employmentStatus);
        }

        if (employmentType != null) {
            _queryParams.append("employment_type", employmentType);
        }

        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (firstName != null) {
            _queryParams.append("first_name", firstName);
        }

        if (groups != null) {
            _queryParams.append("groups", groups);
        }

        if (homeLocationId != null) {
            _queryParams.append("home_location_id", homeLocationId);
        }

        if (includeDeletedData != null) {
            _queryParams.append("include_deleted_data", includeDeletedData.toString());
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (includeSensitiveFields != null) {
            _queryParams.append("include_sensitive_fields", includeSensitiveFields.toString());
        }

        if (jobTitle != null) {
            _queryParams.append("job_title", jobTitle);
        }

        if (lastName != null) {
            _queryParams.append("last_name", lastName);
        }

        if (managerId != null) {
            _queryParams.append("manager_id", managerId);
        }

        if (modifiedAfter != null) {
            _queryParams.append("modified_after", modifiedAfter.toISOString());
        }

        if (modifiedBefore != null) {
            _queryParams.append("modified_before", modifiedBefore.toISOString());
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (payGroupId != null) {
            _queryParams.append("pay_group_id", payGroupId);
        }

        if (personalEmail != null) {
            _queryParams.append("personal_email", personalEmail);
        }

        if (remoteFields != null) {
            _queryParams.append("remote_fields", remoteFields);
        }

        if (remoteId != null) {
            _queryParams.append("remote_id", remoteId);
        }

        if (showEnumOrigins != null) {
            _queryParams.append("show_enum_origins", showEnumOrigins);
        }

        if (startedAfter != null) {
            _queryParams.append("started_after", startedAfter.toISOString());
        }

        if (startedBefore != null) {
            _queryParams.append("started_before", startedBefore.toISOString());
        }

        if (teamId != null) {
            _queryParams.append("team_id", teamId);
        }

        if (terminatedAfter != null) {
            _queryParams.append("terminated_after", terminatedAfter.toISOString());
        }

        if (terminatedBefore != null) {
            _queryParams.append("terminated_before", terminatedBefore.toISOString());
        }

        if (workEmail != null) {
            _queryParams.append("work_email", workEmail);
        }

        if (workLocationId != null) {
            _queryParams.append("work_location_id", workLocationId);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/employees"
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
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.PaginatedEmployeeList.parseOrThrow(_response.body, {
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
     * Creates an `Employee` object with the given values.
     */
    public async create(
        request: Merge.hris.EmployeeEndpointRequest,
        requestOptions?: Employees.RequestOptions
    ): Promise<Merge.hris.EmployeeResponse> {
        const { isDebugMode, runAsync, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (isDebugMode != null) {
            _queryParams.append("is_debug_mode", isDebugMode.toString());
        }

        if (runAsync != null) {
            _queryParams.append("run_async", runAsync.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/employees"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.hris.EmployeeEndpointRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.EmployeeResponse.parseOrThrow(_response.body, {
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
     * Returns an `Employee` object with the given `id`.
     */
    public async retrieve(
        id: string,
        request: Merge.hris.EmployeesRetrieveRequest = {},
        requestOptions?: Employees.RequestOptions
    ): Promise<Merge.hris.Employee> {
        const { expand, includeRemoteData, includeSensitiveFields, remoteFields, showEnumOrigins } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand);
        }

        if (includeRemoteData != null) {
            _queryParams.append("include_remote_data", includeRemoteData.toString());
        }

        if (includeSensitiveFields != null) {
            _queryParams.append("include_sensitive_fields", includeSensitiveFields.toString());
        }

        if (remoteFields != null) {
            _queryParams.append("remote_fields", remoteFields);
        }

        if (showEnumOrigins != null) {
            _queryParams.append("show_enum_origins", showEnumOrigins);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/hris/v1/employees/${id}`
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
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.Employee.parseOrThrow(_response.body, {
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
     * Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
     */
    public async ignoreCreate(
        modelId: string,
        request: Merge.hris.IgnoreCommonModelRequest,
        requestOptions?: Employees.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                `api/hris/v1/employees/ignore/${modelId}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Account-Token":
                    (await core.Supplier.get(this._options.accountToken)) != null
                        ? await core.Supplier.get(this._options.accountToken)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mergeapi/merge-node-client",
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            body: await serializers.hris.IgnoreCommonModelRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return;
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
     * Returns metadata for `Employee` POSTs.
     */
    public async metaPostRetrieve(requestOptions?: Employees.RequestOptions): Promise<Merge.hris.MetaResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/hris/v1/employees/meta/post"
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
                "X-Fern-SDK-Version": "1.0.1",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.hris.MetaResponse.parseOrThrow(_response.body, {
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
