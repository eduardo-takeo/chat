import { createContext, useContext, useState } from "react";

export interface ISession {
  id: string;
  username: string;
  room: string;
}

export interface ISessionProviderProps {
  children: React.ReactNode;
}

export interface ISessionContext {
  currentSession: ISession | {};
  signIn: (username: string, room: string) => void;
  signOut: () => void;
}

const sessionContext = createContext({} as ISessionContext);

export const useSession = () => {
  return useContext(sessionContext);
};

export function SessionProvider({ children }: ISessionProviderProps) {
  const session = useProvideSession();
  return (
    <sessionContext.Provider value={session}>
      {children}
    </sessionContext.Provider>
  );
}

function useProvideSession(): ISessionContext {
  const [currentSession, setCurrentSession] = useState<ISession | {}>(
    {} as ISession
  );

  const signIn = (username: string, room: string) => {
    setCurrentSession({
      id: Math.random().toString(16).slice(2),
      username,
      room,
    });
  };

  const signOut = () => {
    setCurrentSession({});
  };

  return {
    currentSession,
    signIn,
    signOut,
  };
}
