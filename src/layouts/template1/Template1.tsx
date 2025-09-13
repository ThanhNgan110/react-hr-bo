import React from 'react'
import Sidebar from '../../components/organisms/Sidebar'
import Header from '../../components/organisms/Header'
import { useSidebar } from '../../contexts/SidebarContext'

function Template1({ children }: React.PropsWithChildren) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  return (
    <div className="min-h-screen xl:flex">
      <aside>
        <Sidebar />
      </aside>

      <div
        className={`flex-1 transition-all duration-300 ease-in-out
            ${isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"}
            ${isMobileOpen ? "ml-0" : ''}
          `}
      >
        <header>
          <Header />
        </header>
        <main className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
          {children}
        </main>
      </div>

    </div>
  )
}

export default Template1