import React from 'react';

interface SidebarContextProps {
  isExpanded: boolean,
  isMobileOpen: boolean,
  openSubmenu: string | null,
  isMobile: boolean,
  isHovered: boolean,
  activeItem: string | null,
  setIsHovered: (isHovered: boolean) => void,
  toggleSidebar: () => void,
  toggleMobileSideBar: () => void,
  toggleSubmenu: (item: string) => void,
  setActiveItem: (item: string) => void,
}

const SidebarContext = React.createContext<SidebarContextProps>({
  isExpanded: true,
  isMobileOpen: false,
  openSubmenu: null,
  isMobile: false,
  isHovered: false,
  activeItem: null,
  setIsHovered: () => {},
  toggleSidebar: () => {},
  toggleMobileSideBar: () => {},
  toggleSubmenu: () => {},
  setActiveItem: () => {},
});

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobile(false)
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  function toggleSidebar() {
    setIsExpanded(prevState => !prevState);
  }

  function toggleMobileSideBar() {
    setIsMobileOpen(prevState => !prevState);
  }

  function toggleSubmenu(item: string) {
    setOpenSubmenu(prevState => prevState === item ? null : item);
  }

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        isMobileOpen,
        openSubmenu,
        isMobile,
        isHovered,
        activeItem,
        setIsHovered,
        toggleSidebar,
        toggleMobileSideBar,
        toggleSubmenu,
        setActiveItem
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => React.useContext(SidebarContext);