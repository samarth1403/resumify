import {
  GlobalContextType,
  initialGlobalContext,
  initialUserInfo,
  userInfoType,
} from "@/constants";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const GlobalContext = createContext<GlobalContextType>(initialGlobalContext);

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<userInfoType>(initialUserInfo);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getCurrentUser = async () => {
      try {
        const { data, status } = await axios.post("/api/user/me");
        if (status === 200) {
          setUser({
            username: data.user.username,
            email: data.user.email,
            isAdmin: data.user.isAdmin,
            isVerified: data.user.isVerified,
          });
          setIsUserLoggedIn(true);
        }
      } catch (error: unknown) {
        setIsUserLoggedIn(false);
        setUser({} as userInfoType);
      } finally {
        setIsLoading(false);
      }
    };
    getCurrentUser();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isUserLoggedIn, isLoading, setIsUserLoggedIn, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
