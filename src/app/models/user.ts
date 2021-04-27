export interface Roles {
    profesor?: boolean;
    trainer?: boolean;
}


export interface IUser {
    id?: string;
    name?: string;
    email?: string; 
    password?: string;
    photoUrl?: string;
    roles: Roles;
}