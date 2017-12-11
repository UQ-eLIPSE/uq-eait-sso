import { UserInfoPayload } from "./UserInfoPayload";
export declare class SingleSignOn {
    readonly host: string;
    readonly ssoUrl: string;
    readonly kvdAddress: string | undefined;
    readonly kvdPort: number | undefined;
    constructor(host: string, ssoUrl?: string, kvdAddress?: string, kvdPort?: number);
    getUserInfoPayload(token: string): Promise<UserInfoPayload | undefined>;
    generateToken(): string;
    generateRedirectUrl(returnUrl: string): string;
}
