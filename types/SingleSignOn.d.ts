import { KVD } from '@uq-elipse/uq-eait-kvd';
import { UserInfoPayload } from './UserInfoPayload';
export declare class SingleSignOn {
    readonly host: string;
    readonly ssoUrl: string;
    readonly kvdAddress: string | undefined;
    readonly kvdPort: number | undefined;
    constructor(host: string, ssoUrl?: string, kvdAddress?: string, kvdPort?: number);
    newKvd(): KVD;
    getUserInfoPayload(token: string): Promise<UserInfoPayload | undefined>;
    deleteUserInfo(token: string): Promise<void>;
    generateToken(): string;
    generateRedirectUrl(returnUrl: string): string;
}
