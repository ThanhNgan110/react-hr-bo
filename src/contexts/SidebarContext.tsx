import React from 'react';

interface SidebarContextProps {}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SidebarContext.Provider
      value={{

      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => React.useContext(SidebarContext);