import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


const BASE_URL = "http://localhost:3000"


export const Email = ()=>{
    const {userId} = useParams()
    const [email, setEmail] = useState("")
     
    useEffect(()=>{
        axios.get(BASE_URL + "/api/user/verify/"+ userId).then((res)=>{
            setEmail(res.data.emailId)
        })
    },[])

    async function sendRequest(){

        const response = await axios.get(BASE_URL + "/api/user/verify/"+ userId)

        setEmail(response.data.emailId)

    }



    return(
        <div className="m-6 p-6 flex flex-col gap-6 w-5/12">
                <h1 className="text-4xl font-bold text-center">Please verify your email...</h1>
                <div className="w-full flex justify-center text-pink-500">
                <svg xmlns="http://www.w3.org/2000/svg"     width="80" height="80" fill="currentColor" class="bi bi-envelope-check" viewBox="0 0 16 16">
  <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686"/>
                </svg>
                </div>
                <p className="text-md font-semibold text-gray-500 text-center">Please verify your email address. We've send a confirmation email to:</p>
                <p className="text-md text-center font-bold">{email}</p>
                <p className="text-md font-semibold text-gray-500 text-center">Click the confirmation link in that email to begain using Dribbble.</p>
                <p className="text-md font-semibold text-gray-500 text-center">Didn't receive the email? Check your Spam folder, it may have been caught by filter. If you still don't see it. you can <span onClick={sendRequest} className="text-md text-pink-500 font-semibold hover:cursor-pointer hover:underline">resend the confirmation email.</span></p>
                <p className="text-md font-semibold text-gray-500 text-center">Wrong email address? <span className="text-md text-pink-500 font-semibold hover:underline hover:cursor-pointer">Change it.</span></p>
            </div>
    )
}