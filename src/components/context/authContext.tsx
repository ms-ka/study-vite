

interface IUser {
    accessToken: string;
    email: string;
    firstName: string;
    gender: string;
    id: number;
    image: string;
    lastName: string;
    refreshToken: string;
    username: string;
  }

  //dane ze state od usera
interface IAuthContextType{
    user:IUser
    setUser: React.Dispatch<React.SetStateAction<User>>
  }

  //początkowe
const initialUser:IUser = {
    accessToken: "",
    email: "",
    firstName: "",
    gender: "",
    id: 0,
    image: "",
    lastName: "",
    refreshToken: "",
    username: ""
}

export const AuthContext = createContext<IAuthContextType | undefined>(undefined);