import { createContext } from "react";
import { TUserContextType, initialUser } from "../../interfaces/TUser";

const UserContext = createContext<TUserContextType>({
  user: initialUser,
  updateUser: () => {},
});

export default UserContext;