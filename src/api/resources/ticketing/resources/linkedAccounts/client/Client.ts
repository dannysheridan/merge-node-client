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

export declare namespace LinkedAccounts {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class LinkedAccounts {
    constructor(protected readonly _options: LinkedAccounts.Options) {}

    /**
     * List linked accounts for your organization.
     */
    public async list(
        request: Merge.ticketing.LinkedAccountsListRequest = {},
        requestOptions?: LinkedAccounts.RequestOptions
    ): Promise<Merge.ticketing.PaginatedAccountDetailsAndActionsList> {
        const {
            category,
            cursor,
            endUserEmailAddress,
            endUserOrganizationName,
            endUserOriginId,
            endUserOriginIds,
            id,
            ids,
            includeDuplicates,
            integrationName,
            isTestAccount,
            pageSize,
            status,
        } = request;
        const _queryParams = new URLSearchParams();
        if (category != null) {
            _queryParams.append("category", category);
        }

        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (endUserEmailAddress != null) {
            _queryParams.append("end_user_email_address", endUserEmailAddress);
        }

        if (endUserOrganizationName != null) {
            _queryParams.append("end_user_organization_name", endUserOrganizationName);
        }

        if (endUserOriginId != null) {
            _queryParams.append("end_user_origin_id", endUserOriginId);
        }

        if (endUserOriginIds != null) {
            _queryParams.append("end_user_origin_ids", endUserOriginIds);
        }

        if (id != null) {
            _queryParams.append("id", id);
        }

        if (ids != null) {
            _queryParams.append("ids", ids);
        }

        if (includeDuplicates != null) {
            _queryParams.append("include_duplicates", includeDuplicates.toString());
        }

        if (integrationName != null) {
            _queryParams.append("integration_name", integrationName);
        }

        if (isTestAccount != null) {
            _queryParams.append("is_test_account", isTestAccount);
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MergeEnvironment.Production,
                "api/ticketing/v1/linked-accounts"
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
                "X-Fern-SDK-Version": "0.1.8",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ticketing.PaginatedAccountDetailsAndActionsList.parseOrThrow(_response.body, {
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
