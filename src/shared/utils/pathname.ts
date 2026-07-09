import { NavItem } from "../components/controls/mobile-navigation";

export const isActive = (item: Omit<NavItem, 'icon'>, pathname: string) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href)