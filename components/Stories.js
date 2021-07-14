import StoryCompound from "./StoryCompound"

const stories=[
    {
        name:"ahs",
        src:"https://th.bing.com/th/id/R.5ffeb9b88264485f1b265ff3c94e2dc2?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=1zrBUw2Jkcik7R719ZPnOjG8MrGPNepNGF1KdErFfw4%3d&risl=&pid=ImgRaw",
        profile:"https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?pid=ImgDet&rs=1",
    },
    {
        name:"sudhan",
        src:"https://th.bing.com/th/id/R.5ffeb9b88264485f1b265ff3c94e2dc2?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=1zrBUw2Jkcik7R719ZPnOjG8MrGPNepNGF1KdErFfw4%3d&risl=&pid=ImgRaw",
        profile:"https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?pid=ImgDet&rs=1",
    },
    {
        name:"ram",
        src:"https://th.bing.com/th/id/R.5ffeb9b88264485f1b265ff3c94e2dc2?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=1zrBUw2Jkcik7R719ZPnOjG8MrGPNepNGF1KdErFfw4%3d&risl=&pid=ImgRaw",
        profile:"https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?pid=ImgDet&rs=1",
    },
    {
        name:"vicky",
        src:"https://th.bing.com/th/id/R.5ffeb9b88264485f1b265ff3c94e2dc2?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=1zrBUw2Jkcik7R719ZPnOjG8MrGPNepNGF1KdErFfw4%3d&risl=&pid=ImgRaw",
        profile:"https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?pid=ImgDet&rs=1",
    },


]


function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(story=>(
                    <StoryCompound
                    key={story.name}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}

                    />

                ))
            }
         
        </div>
    )
}

export default Stories
