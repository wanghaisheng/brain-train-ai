import React from 'react'
import SideBarItem from './sidebar-item'
import { NavRoutes } from '@/lib/constants';

export default function SidebarRoutes() {
  const routes = NavRoutes;
  return (
    <div className="flex flex-col w-full gap-y-2">
      {routes.map((route, index) => (
        <SideBarItem
          key={index}
          path={route.href}
          name={route.name}
          icon={route.icon}
        />
      ))}
    </div>
  )
}
