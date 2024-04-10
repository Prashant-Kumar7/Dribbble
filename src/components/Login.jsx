import React, { useState } from "react"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { inputAtom } from "../hooks"
import { Resend } from 'resend';
import { EmailTemplate } from "./EmailTemplate"

const BASE_URL = "http://localhost:3000"

const resend = new Resend('re_9ozUsniC_2cy43iLfPo2GKnGP9V9bK1v8');

export const Login = ()=>{

    const postInputs = useRecoilValue(inputAtom)

    const navigate = useNavigate();

    async function sendRequest(){
        try {
            const response  = await axios.post(BASE_URL + "/api/user/signup" , postInputs)
            const jwt = response.data.jwt
            const userId = response.data.userId.id
            console.log("token fetched")
            localStorage.setItem("token" , jwt)


           
            console.log("signup successfull")
            navigate("/profile/" + userId)


        } catch (error) {
            
        }
    }


    return (
        <div className="flex flex-col items-center col-start-2 col-span-2">
            <div className="flex my-6 justify-end w-11/12">
            <span>Already Signed up?</span>
            </div>
            <div className="col-start-2 mt-6 col-span-2 flex justify-center items-center p-4 max-w-xl">
                <div className="grid grid-cols-1 w-11/12 gap-6">
                    <div>
                        <h1 className="font-bold text-3xl mb-6">Sign up to Dribbble</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <InputFeild name={"name"} type={"text"} label = {"Name"} placeholder = {"Enter name"}/>
                        <InputFeild name={"username"} type={"text"} label={"Username"} placeholder={"Enter username"}/>
                    </div>
                    <InputFeild name = {"email"} type={"text"} label={"Email"} placeholder={"Enter email"}/>
                    <InputFeild name = {"password"} type={"password"} label={"Password"} placeholder={"minimum 6 characters"}/>
                    <div className="flex items-start">
                        <input className=" size-8" type="checkbox" name="" id="" />
                        <span className="ml-3">Creating an account means you're okay with our <span className="text-indigo-700"> Terms of Service, Privacy Policy,</span> and our default <span className="text-indigo-700"> Notifications Settings</span></span>
                    </div>
                    <div className="grid grid-cols-2">
                        <button onClick={sendRequest} className="col-start-1 border text-lg bg-pink-500 py-2 rounded-lg text-white font-semibold">Create account</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}


function InputFeild({name , placeholder , label , type}){

    const setPostInput = useSetRecoilState(inputAtom)

    function handleChange(e){
        const {name , value} = e.target
        setPostInput(prevValue =>({
                ...prevValue,
                [name] : value
        }))
    }

    return(
        <div className="flex flex-col gap-2 mb-4">
            <label className="font-bold" htmlFor="">{label}</label>
            <input type={type} name={name} onChange={handleChange} className="border pl-2 font-semibold bg-gray-100 rounded-md py-2" placeholder={placeholder}/>
        </div>
    )
}