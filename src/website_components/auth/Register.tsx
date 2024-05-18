"use client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import PrimaryBtn from "../Helpers/PrimaryBtn";
import Image from "next/image";
// import { AvatarReg } from "../Constants/imageContants";
import { BiSolidCamera } from "react-icons/bi";
import { FieldError, useForm } from "react-hook-form";
// import toast from "react-hot-toast";
// import { setCookie } from "cookies-next";
import axios from "axios";
// import { ApiUrl, registerApi } from "../Constants/apiEndpoints";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
// import { postRequest } from "@/config/axiosInterceptor";
// import Title from "../Helpers/Title";
// import Description from "../Helpers/Description";
import { ApiUrl, signupApi } from "../../website_components/components/constants/apiEndpoints"; 
const RegisterComponent = ({ set, setStep }) => {
    const [type, setType] = useState(false);
    const [image, setImage] = useState(null);
    //   const getUserDetails = userDetailsStore((state) => state.getUserDetails);
    //   const setLoading = useLoader((state) => state.setLoading);

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
            console.log(data)
                set(data) //setting form data

            const response = await axios.post(`${ApiUrl}${signupApi}`, {
                "name":`${data.first_name} ${data.last_name}`,
                "email":data.email,
                "password":""
            });

            if (response.data.status === "success") {
                // setCookie("token", response.data.token);
                setStep(2)
                // toast.success("Login Successful!");
                // router.push("/create-join");
                // Assuming getUserDetails and setLoading are defined elsewhere
                // getUserDetails();
                // setLoading(false);
            } else {
                toast.error(response.data.message);
                // setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };



    return (
        <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-start">Create your FREE SocialX Account</h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-start">Create your SocialX Account 😉</h1>
            <form action="#" method="POST" className="space-y-4" onSubmit={handleSubmit(submitData)}>

                <div className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-3
        ">
                    <div className="w-full lg:w-1/2 mb-2 lg:mb-0 flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-3">First Name</label>
                        <input type="text" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300" placeholder='John' id="name"
                            {...register("first_name", { required: true })} />
                        {errors.first_name && errors.first_name.type === "required" && (
                            <span className="text-red-600 text-xs">first name is required</span>
                        )}
                    </div>
                    <div className="w-full lg:w-1/2 mb-2 lg:mb-0 flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-3">Last Name</label>
                        <input type="text" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300" placeholder='Doe' id="name"
                            {...register("last_name", { required: true })}
                        />
                        {errors.last_name && errors.last_name.type === "required" && (
                            <span className="text-red-600 text-xs">last name  is required</span>
                        )}
                    </div>
                </div>
                <div className="mt-6 text-sm text-gray-600 text-center">

                </div>

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
                <div className="input-group w-full" hidden>
                    <input
                        id="password"
                        type={type ? "text" : "password"}
                        className="input"
                        {...register("password", {})}
                    />
                    <label htmlFor="password" className="placeholder">
                        Password
                    </label>
                    <p
                        className="absolute right-[10px] top-[11px] cursor-pointer"
                        onClick={() => setType(!type)}
                    >
                        {type ? (
                            <AiFillEye className="text-[#808080] text-xl" />
                        ) : (
                            <AiFillEyeInvisible className="text-[#808080] text-xl" />
                        )}
                    </p>
                    {errors.password && errors.password.type === "required" && (
                        <span className="text-red-600 text-xs">Password is required</span>
                    )}
                </div>
                <div>
                    <button type="submit" className="w-full bg-[#5E17EB] text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                        // disabled={Object?.keys(errors).length !== 0}
                    >Sign Up</button>
                </div>
                <div className="mt-4 text-sm text-gray-600 text-center">
                    <p>Already have an account? <a href="/login" className="text-[#5E17EB] inline-block border-b-2 border-[#5E17EB]">Login </a> instead</p>
                </div>
            </form>

        </div>
    );
}

export default RegisterComponent;