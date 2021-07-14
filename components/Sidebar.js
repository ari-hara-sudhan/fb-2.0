import SidebarRow from "./SidebarRow"
import {
    ChevronDownIcon,
    shoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    CheckIcon,
    ClockIcon,
    DesktopComputerIcon,
    ShoppingBagIcon,
    UserIcon,
} from "@heroicons/react/solid";
function Sidebar() {
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UserIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Markerplace" />
            <SidebarRow Icon={DesktopComputerIcon} title="watch" />
            <SidebarRow Icon={CalendarIcon} title="Events" />
            <SidebarRow Icon={ClockIcon} title="Memories" />
            <SidebarRow Icon={ChevronDownIcon} title="See more" />

            
        </div>
    )
}

export default Sidebar
