function SidebarRow({Icon,title,src}) {
    return (
        <div className="flex items-center space-x-2 p-4
        hover:bg-gray-200 rounded-xl cursor-pointer">
            {src && "image"}
            {Icon && <Icon className="h-8 w-8 text-blue-500" />}
            <p className="hidden sm:inline-flex font-medium" >{title}</p>
        </div>
    )
}

export default SidebarRow
