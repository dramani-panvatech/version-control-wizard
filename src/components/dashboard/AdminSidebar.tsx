
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Settings,
  LayoutDashboard,
  UserCheck,
  Clock,
  Package,
  CreditCard,
  HelpCircle,
  User,
  LogOut,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const { collapsed, toggleSidebar } = useSidebar();

  const menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Customers', url: '/dashboard/customers', icon: Users },
    { title: 'Provider', url: '/dashboard/provider', icon: UserCheck },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar },
    { title: 'Services', url: '/dashboard/services', icon: Package },
    { title: 'Payment', url: '/dashboard/payment', icon: CreditCard },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
  ];

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/signin');
  };

  return (
    <Sidebar className={`border-r border-gray-200 bg-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-80'}`}>
      <SidebarHeader className={`p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 ${collapsed ? 'px-2' : 'px-6'}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-gray-900">FlowTime</h1>
                <p className="text-xs text-gray-500 font-medium">Admin Dashboard</p>
              </div>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0"
            onClick={toggleSidebar}
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
        
        {!collapsed && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search..." 
              className="pl-10 h-9 bg-white/70 border-gray-200 focus:bg-white"
            />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `group flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                        } ${collapsed ? 'justify-center' : ''}`
                      }
                      title={collapsed ? item.title : undefined}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-2 py-4 border-t border-gray-100 bg-gray-50/50">
        <div className="space-y-2">
          {!collapsed && (
            <div className="flex items-center space-x-3 px-3 py-3 rounded-lg bg-white border border-gray-200">
              <div className="h-8 w-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">sarah@flowtime.com</p>
              </div>
            </div>
          )}

          <NavLink
            to="/dashboard/help"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              } ${collapsed ? 'justify-center' : ''}`
            }
            title={collapsed ? 'Help & Support' : undefined}
          >
            <HelpCircle className="h-4 w-4" />
            {!collapsed && <span>Help & Support</span>}
          </NavLink>
          
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              } ${collapsed ? 'justify-center' : ''}`
            }
            title={collapsed ? 'Your Profile' : undefined}
          >
            <User className="h-4 w-4" />
            {!collapsed && <span>Your Profile</span>}
          </NavLink>

          <Button
            onClick={handleSignOut}
            variant="ghost"
            className={`w-full px-3 py-2 h-auto text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 ${collapsed ? 'justify-center' : 'justify-start'}`}
            title={collapsed ? 'Sign Out' : undefined}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-3">Sign Out</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
