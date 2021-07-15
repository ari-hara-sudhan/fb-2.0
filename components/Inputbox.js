import { session } from "next-auth/client";
import Image from "next/image";
import { useRef,useState } from "react";
import {useSession} from "next-auth/client"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import firebase from "firebase"
import {CameraIcon ,VideoCameraIcon } from "@heroicons/react/solid"
import { db, storage } from "../firebase";
function Inputbox() {
    const [session]=useSession()
    const inputRef =useRef(null)
    const fileRef =useRef(null)
    const [image,setImage]=useState();

    const submit=e=>{
        e.preventDefault();
        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message:inputRef.current.value,
            name:session?.user,
            email:session.user.email,
            image:session.user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            
        }).then((doc)=>{
            if(image){
                const uploadTask=storage.ref(`posts/${doc.id}`).putString(image,'data_url')

                removeImage();

                uploadTask.on("state_change",null,(error)=>console.log(error),()=>{
                    //progress..
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url=>{
                        db.collection("posts").doc(doc.id).set({
                            postImage:url
                        },{merge:true})
                    })
                })
            }
        })

        inputRef.current.value="";



    }

    const Addimage =(e)=>{
        const reader=new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload =(readerEvent)=>{
            setImage(readerEvent.target.result);
        }

    }
    const removeImage=()=>{
        setImage(null);
    }
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md
        text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
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
                <form className="flex flex-1
                ">
                    <input ref={inputRef} className="rounded-full h-12 bg-gray-100
                    flex-grow px-5 focus:outline-none" type="text" placeholder={`whats on ur mind ( ${session?.user.name}?)`}/>
                    <button type="submit" hidden onClick={submit}>submit</button>

                </form>

                {image &&(
                    <div className="flex flex-col cursor-pointer filter hover:brightness-110 transition duration-150 transform hover:scale-105" onClick={removeImage}>
                        <img className="h-10 object-fit-contain" src={image} />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                        </div>
                )
                }
              
            </div>

            <div className="flex justify-evenly p-3
            border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className='h-7
                    text-red-500 '/>
                    <p className='text-xs 
                    sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={()=>fileRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400"
                    />
                      <p className='text-xs 
                    sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={fileRef} hidden type="file" onChange={Addimage} />

                </div>
                <div className="inputIcon">
              
                <EmojiHappyIcon className='h-7
                text-yellow-300  text-yellow-300'
                />
              
                <p className='text-xs 
                    sm:text-sm xl:text-base'>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default Inputbox
