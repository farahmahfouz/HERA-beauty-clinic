export interface SignUp {
    name: string;
    username: string;
    email: string;
    password: string;
    phone: string;
}


export type AuthUser = {
    role?: string;
    [key: string]: any;
  };
  
 export  type AuthResponse = {
    data: {
      user: AuthUser;
    };
  };