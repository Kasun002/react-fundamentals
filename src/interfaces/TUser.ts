export type TUser = {
    firstName: string;
    lastName: string;
    nickname: string;
    phoneNumber: string;
    email: string;
  };
  
  export type TUserContextType = {
    user: TUser;
    updateUser: (updatedUser: Partial<TUser>) => void;
  };
  
  export const initialUser: TUser = {
    firstName: "Kasun",
    lastName: "Abaywardana",
    nickname: "kasun002",
    phoneNumber: "770350545",
    email: "aks.map@gmail.com"
  };