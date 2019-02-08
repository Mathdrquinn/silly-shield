interface IUserBase {
    firstName: string;
    lastName: string;
    username: string;
    trainerLevel: number;
}
export interface IUserNew extends IUserBase {
    email: string;
    image: string;
}

export interface IUserUpdate extends IUserBase {
    readonly id: string;
}

export interface IUser extends IUserUpdate, IUserNew {}
