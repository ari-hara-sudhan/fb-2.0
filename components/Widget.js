import {SearchIcon} from "@heroicons/react/outline"
import { DotsHorizontalIcon ,VideoCameraIcon } from "@heroicons/react/outline"
import Contact from "./Contact"

const contacts =[
    {src:"https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    name:"ahs"
    },
    {src:"https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    name:"anandhi"
    }, {src:"https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    name:"sandle"
    },
    {src:"https://www.bing.com/th?id=OIP.fBYQQAMqYDFxOh5dWobzLgHaFj&w=196&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
    name:"ahs"
    }
]

function Widget() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />

                </div>
            </div>

            {
                contacts.map(contact=>(
                    <Contact key={contact.key} src={contact.src}
                    name={contact.name}/>
                ))
            }
        </div>
    )
}

export default Widget
