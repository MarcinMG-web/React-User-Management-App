export interface IRouteParams {
  userId: string;
}

export interface INewUserCredentials {
  name: string;
  password: string;
}

export interface IRegisterNewUser {
  name: string;
  password: string;
  email: string;
}

export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  company: string;
  catchPhrase: string;
  bs: string;
}
