import {
  GlobalContextType,
  coverLetterType,
  initialCoverLetterData,
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
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("");
  const [coverLetterData, setCoverLetterData] = useState<coverLetterType>(
    initialCoverLetterData
  );

  useEffect(() => {
    const savedTemplateId = localStorage.getItem("selectedTemplateId");
    const coverLetterDataFromLocalStorage =
      localStorage.getItem("coverLetterData");
    if (savedTemplateId) {
      setSelectedTemplateId(savedTemplateId);
    }
    if (coverLetterDataFromLocalStorage) {
      setCoverLetterData(JSON.parse(coverLetterDataFromLocalStorage));
    }
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getCurrentUser = async () => {
  //     try {
  //       const { data, status } = await axios.post("/api/user/me");
  //       if (status === 200) {
  //         setUser({
  //           username: data.user.username,
  //           email: data.user.email,
  //           isAdmin: data.user.isAdmin,
  //           isVerified: data.user.isVerified,
  //         });
  //         setIsUserLoggedIn(true);
  //       }
  //     } catch (error: unknown) {
  //       setIsUserLoggedIn(false);
  //       setUser({} as userInfoType);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getCurrentUser();
  // }, []);

  return (
    <GlobalContext.Provider
      value={{
        isUserLoggedIn,
        isLoading,
        setIsUserLoggedIn,
        user,
        setUser,
        selectedTemplateId,
        setSelectedTemplateId,
        coverLetterData,
        setCoverLetterData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
