import { session } from "next-auth/client";
import Image from "next/image";
import {useSession} from "next-auth/client"

function Inputbox() {
    const [session]=useSession()
    return (
        <div>
            <div classNa>
                {session &&
                <>
                  <Image
                  className="rounded-full"
                  src={session.user.image}
                  width={40}
                  height={40}
                  layout="fixed"

                  />
                  </>
                }
                <form className="flex flex-1">
                    <input type="text" placeholder={`whats on ur mind (${session.user.name})`}/>

                </form>
              
            </div>
            
        </div>
    )
}

export default Inputbox
