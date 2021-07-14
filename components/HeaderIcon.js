function HeaderIcon({Icon}) {
    return (
        <div className= 'flex items-center cursor-pointer md:px-10 sm:h-14 
        md:hover:bg-gray-100 rounded-xl ' >

            <Icon className="h-5"/>
        </div>
    )
}

export default HeaderIcon
