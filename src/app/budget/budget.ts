export interface IBudgetData {
    data: IBudgets;
}
export interface IBudgets {
    budgets: IBudget[];
    default_budget: null;
}

export interface IBudgetSummary {
    data:IBudge;
}

export interface IBudge {
    budget: IBudget;
    default_budget: null;
}

export interface IBudget {
    id: string;
    name: string;
    last_modified_on: string;
    last_month: string;
    first_month: string;
    accounts: IAccount;
    payees: IPayee;
}

export interface IAccountSummary {
    data:IAccounts;
}

export interface IAccounts {
    accounts: IAccount[];
}


export interface IAccountDetails {
    data:IAccountDetail;
}

export interface IAccountDetail {
    account:IAccount;
}

export interface IAccount {
    balance: number;
    cleared_balance: number;
    closed: boolean;
    deleted: boolean;
    id: string;
    name: string;
    note: string;
    on_budget: boolean;
    transfer_payee_id: string;
    type: string;
    uncleared_balance: number;
}

export interface IPayee {
    deleted: boolean;
    id: string;
    name: string;
    transfer_account_id: string;
}

export interface ICreateAccount {
    name: string;
    type:string;
    balance: string;
}
