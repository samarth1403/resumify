import {
  GlobalContextType,
  coverLetterType,
  initialCoverLetterData,
  initialGlobalContext,
  initialUserInfo,
  userInfoType,
} from "@/constants";
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

  return (
    <GlobalContext.Provider
      value={{
        isUserLoggedIn,
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
