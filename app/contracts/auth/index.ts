export interface LoginFormValuesInterface {
  email: string;
  password: string;
}

export interface LoginFormPhoneValuesInterface {
  phone: string;
}

export interface RegisterFormValuesInterface {
  name: string;
  email: string;
  password: string;
}

export interface RegisterFormPhoneValuesInterface {
  phone: string;
  name: string;
}

export interface verifyFormValuesInterface {
  code: string;
  token: string;
}
