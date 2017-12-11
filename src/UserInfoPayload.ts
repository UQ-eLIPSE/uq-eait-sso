export interface UserInfoPayload {
    /** User identifier (login name) */
    user: string,
    /** The user's primary email address */
    email: string,
    /** A short human display name */
    name: string,
    /** Domains where the user has an account */
    domains: string[],
    /** Groups that the user is a member of */
    groups: string[],
    /** Distinguished names from directory servers */
    dn?: string[],
    /** The user's legal given name */
    firstname?: string,
    /** The user legal surname */
    lastname?: string,
    /** A timestamp for the creation of the user session */
    created?: string,
    /** Organisational unit */
    ou?: string,
    /** User type/role */
    type?: string,
    /** Job title */
    title?: string,
}
