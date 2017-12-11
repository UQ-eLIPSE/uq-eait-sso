import * as crypto from "crypto";
import { KVD } from "uq-eait-kvd";

import { UserInfoPayload } from "./UserInfoPayload";

export class SingleSignOn {
    public readonly host: string;
    public readonly ssoUrl: string;
    public readonly kvdAddress: string | undefined;
    public readonly kvdPort: number | undefined;

    constructor(host: string, ssoUrl: string = "https://api.uqcloud.net", kvdAddress?: string, kvdPort?: number) {
        this.host = host;
        this.ssoUrl = ssoUrl;
        this.kvdAddress = kvdAddress;
        this.kvdPort = kvdPort;
    }

    public newKvd() {
        return new KVD(this.kvdAddress, this.kvdPort);
    }

    public async getUserInfoPayload(token: string) {
        const kvd = this.newKvd();

        try {
            // Fetch from KVD
            const payload = await kvd.request(token, Buffer.from(this.host, "utf8"));

            // Decode as JSON
            const data: UserInfoPayload = JSON.parse(payload.toString("utf8"));

            // Close off KVD connection
            kvd.destroy();

            return data;

        } catch (e) {
            // Close off KVD connection
            kvd.destroy();

            // If error is "Key invalid" then there is no info available at
            // given token
            if (e && e.message === "Key invalid") {
                return undefined;
            }

            // Continue throwing otherwise
            throw e;
        }
    }

    public async deleteUserInfo(token: string) {
        const kvd = this.newKvd();
        await kvd.delete(token);
    }

    public generateToken() {
        // Generate 24 random bytes
        const bytes = crypto.randomBytes(24);

        // Encode as base64
        const b64 = bytes.toString("base64");

        // Replace '/' with '_', '+' with '-'.
        const token = b64.replace(/\//g, "_").replace(/\+/g, "-");

        return token;
    }

    public generateRedirectUrl(returnUrl: string) {
        return `${this.ssoUrl}/login/${returnUrl}`;
    }
}
