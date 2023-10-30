/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { AccountDetails } from "../resources/accountDetails/client/Client";
import { AccountToken } from "../resources/accountToken/client/Client";
import { Activities } from "../resources/activities/client/Client";
import { Applications } from "../resources/applications/client/Client";
import { AsyncPassthrough } from "../resources/asyncPassthrough/client/Client";
import { Attachments } from "../resources/attachments/client/Client";
import { AuditTrail } from "../resources/auditTrail/client/Client";
import { AvailableActions } from "../resources/availableActions/client/Client";
import { Candidates } from "../resources/candidates/client/Client";
import { DeleteAccount } from "../resources/deleteAccount/client/Client";
import { Departments } from "../resources/departments/client/Client";
import { Eeocs } from "../resources/eeocs/client/Client";
import { GenerateKey } from "../resources/generateKey/client/Client";
import { Interviews } from "../resources/interviews/client/Client";
import { Issues } from "../resources/issues/client/Client";
import { JobInterviewStages } from "../resources/jobInterviewStages/client/Client";
import { Jobs } from "../resources/jobs/client/Client";
import { LinkToken } from "../resources/linkToken/client/Client";
import { LinkedAccounts } from "../resources/linkedAccounts/client/Client";
import { Offers } from "../resources/offers/client/Client";
import { Offices } from "../resources/offices/client/Client";
import { Passthrough } from "../resources/passthrough/client/Client";
import { RegenerateKey } from "../resources/regenerateKey/client/Client";
import { RejectReasons } from "../resources/rejectReasons/client/Client";
import { Scorecards } from "../resources/scorecards/client/Client";
import { SelectiveSync } from "../resources/selectiveSync/client/Client";
import { SyncStatus } from "../resources/syncStatus/client/Client";
import { ForceResync } from "../resources/forceResync/client/Client";
import { Tags } from "../resources/tags/client/Client";
import { Users } from "../resources/users/client/Client";
import { WebhookReceivers } from "../resources/webhookReceivers/client/Client";

export declare namespace Ats {
    interface Options {
        environment?: core.Supplier<environments.MergeEnvironment | string>;
        apiKey: core.Supplier<core.BearerToken>;
        accountToken?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Ats {
    constructor(protected readonly _options: Ats.Options) {}

    protected _accountDetails: AccountDetails | undefined;

    public get accountDetails(): AccountDetails {
        return (this._accountDetails ??= new AccountDetails(this._options));
    }

    protected _accountToken: AccountToken | undefined;

    public get accountToken(): AccountToken {
        return (this._accountToken ??= new AccountToken(this._options));
    }

    protected _activities: Activities | undefined;

    public get activities(): Activities {
        return (this._activities ??= new Activities(this._options));
    }

    protected _applications: Applications | undefined;

    public get applications(): Applications {
        return (this._applications ??= new Applications(this._options));
    }

    protected _asyncPassthrough: AsyncPassthrough | undefined;

    public get asyncPassthrough(): AsyncPassthrough {
        return (this._asyncPassthrough ??= new AsyncPassthrough(this._options));
    }

    protected _attachments: Attachments | undefined;

    public get attachments(): Attachments {
        return (this._attachments ??= new Attachments(this._options));
    }

    protected _auditTrail: AuditTrail | undefined;

    public get auditTrail(): AuditTrail {
        return (this._auditTrail ??= new AuditTrail(this._options));
    }

    protected _availableActions: AvailableActions | undefined;

    public get availableActions(): AvailableActions {
        return (this._availableActions ??= new AvailableActions(this._options));
    }

    protected _candidates: Candidates | undefined;

    public get candidates(): Candidates {
        return (this._candidates ??= new Candidates(this._options));
    }

    protected _deleteAccount: DeleteAccount | undefined;

    public get deleteAccount(): DeleteAccount {
        return (this._deleteAccount ??= new DeleteAccount(this._options));
    }

    protected _departments: Departments | undefined;

    public get departments(): Departments {
        return (this._departments ??= new Departments(this._options));
    }

    protected _eeocs: Eeocs | undefined;

    public get eeocs(): Eeocs {
        return (this._eeocs ??= new Eeocs(this._options));
    }

    protected _generateKey: GenerateKey | undefined;

    public get generateKey(): GenerateKey {
        return (this._generateKey ??= new GenerateKey(this._options));
    }

    protected _interviews: Interviews | undefined;

    public get interviews(): Interviews {
        return (this._interviews ??= new Interviews(this._options));
    }

    protected _issues: Issues | undefined;

    public get issues(): Issues {
        return (this._issues ??= new Issues(this._options));
    }

    protected _jobInterviewStages: JobInterviewStages | undefined;

    public get jobInterviewStages(): JobInterviewStages {
        return (this._jobInterviewStages ??= new JobInterviewStages(this._options));
    }

    protected _jobs: Jobs | undefined;

    public get jobs(): Jobs {
        return (this._jobs ??= new Jobs(this._options));
    }

    protected _linkToken: LinkToken | undefined;

    public get linkToken(): LinkToken {
        return (this._linkToken ??= new LinkToken(this._options));
    }

    protected _linkedAccounts: LinkedAccounts | undefined;

    public get linkedAccounts(): LinkedAccounts {
        return (this._linkedAccounts ??= new LinkedAccounts(this._options));
    }

    protected _offers: Offers | undefined;

    public get offers(): Offers {
        return (this._offers ??= new Offers(this._options));
    }

    protected _offices: Offices | undefined;

    public get offices(): Offices {
        return (this._offices ??= new Offices(this._options));
    }

    protected _passthrough: Passthrough | undefined;

    public get passthrough(): Passthrough {
        return (this._passthrough ??= new Passthrough(this._options));
    }

    protected _regenerateKey: RegenerateKey | undefined;

    public get regenerateKey(): RegenerateKey {
        return (this._regenerateKey ??= new RegenerateKey(this._options));
    }

    protected _rejectReasons: RejectReasons | undefined;

    public get rejectReasons(): RejectReasons {
        return (this._rejectReasons ??= new RejectReasons(this._options));
    }

    protected _scorecards: Scorecards | undefined;

    public get scorecards(): Scorecards {
        return (this._scorecards ??= new Scorecards(this._options));
    }

    protected _selectiveSync: SelectiveSync | undefined;

    public get selectiveSync(): SelectiveSync {
        return (this._selectiveSync ??= new SelectiveSync(this._options));
    }

    protected _syncStatus: SyncStatus | undefined;

    public get syncStatus(): SyncStatus {
        return (this._syncStatus ??= new SyncStatus(this._options));
    }

    protected _forceResync: ForceResync | undefined;

    public get forceResync(): ForceResync {
        return (this._forceResync ??= new ForceResync(this._options));
    }

    protected _tags: Tags | undefined;

    public get tags(): Tags {
        return (this._tags ??= new Tags(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _webhookReceivers: WebhookReceivers | undefined;

    public get webhookReceivers(): WebhookReceivers {
        return (this._webhookReceivers ??= new WebhookReceivers(this._options));
    }
}
