"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import PrimaryBtn from "../Helpers/PrimaryBtn";
import Image from "next/image";
// import { AvatarReg } from "../Constants/imageContants";
import { BiSolidCamera } from "react-icons/bi";
import { FieldError, useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { setCookie } from "cookies-next";
import axios from "axios";
// import { ApiUrl, registerApi } from "../Constants/apiEndpoints";
import { useRouter } from "next/navigation";
// import { postRequest } from "@/config/axiosInterceptor";
import { ApiUrl, loginApi } from "../../website_components/components/constants/apiEndpoints"; 

const Login = ({ set, setStep }) => {
    const [type, setType] = useState(false);
    const [image, setImage] = useState(null);
    

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
        reset,
    } = useForm();

    const router = useRouter();

    const submitData = async (data) => {
        try {
            const response = await axios.post(`${ApiUrl}${loginApi}`, {
                "password":"",
                "email": data.email
            });
            set(data)
            console.log(response.data);
            // return ;
            if (response.data.status === "success") {
                // setCookie("token", response.data.token);
                setStep(2)
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    



    return (
        <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-start">Good to see you again.</h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-start">Sign in with your existing SocialX account.</h1>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-3
        ">

            </div>
            <div className="mt-6 text-sm text-gray-600 text-center">

            </div>
            <form action="#" method="POST" className="space-y-4" onSubmit={handleSubmit(submitData)}>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Id</label>
                    <input type="text" id="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" placeholder='“Jhondoe@abc.com'
                        {...register("email", {
                            required: true,
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                message: "Email is invalid",
                            },
                        })}


                    />
                    {errors.email && errors.email.type === "required" && (
                        <span className="text-red-600 text-xs">Email is required</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span className="text-red-600 text-xs">{(errors.email as FieldError).message}</span>

                    )}
                </div>
                

                <div>
                    <button type="submit" className="w-full bg-[#5E17EB] text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Login</button>
                </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
                <p>Don’t have an account? <a href="/signup" className="text-[#5E17EB] inline-block border-b-2 border-[#5E17EB]">Signup </a> instead</p>
            </div>
        </div>
    );
}

export default Login;