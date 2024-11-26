"use client";
import {
  GlobalContextType,
  dataType,
  initialData,
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
  const [data, setData] = useState<dataType>(initialData);

  useEffect(() => {
    const savedTemplateId = localStorage.getItem("selectedTemplateId");
    if (savedTemplateId) {
      setSelectedTemplateId(savedTemplateId);
    }
  }, []);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("data");
    if (dataFromLocalStorage) {
      setData(JSON.parse(dataFromLocalStorage));
    }
  }, [localStorage.getItem("data")]);

  return (
    <GlobalContext.Provider
      value={{
        isUserLoggedIn,
        setIsUserLoggedIn,
        user,
        setUser,
        selectedTemplateId,
        setSelectedTemplateId,
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
