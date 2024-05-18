'use client'
import React, { useEffect, useRef, useState } from 'react';
import MultiRangeSlider from "../../website_components/components/MultiRangeSlider";
import axios from 'axios';
import './style.css';
import Card from '~/website_components/components/card/Card';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

import { deleteCookie } from 'cookies-next';
import Layout from '~/website_components/components/layout';

// To delete the cookie

const Sidebar = () => {
    const token = getCookie("token");
    const router = useRouter();
    console.log(token);

    useEffect(() => {
        if (!token) {
            // If the token is not valid, redirect to the login page
            router.push('/login');
        }
    }, [token]);

    const [activeButton, setActiveButton] = useState<string>("Keyword");
    const [toggleSearch, setToggleSearch] = useState<boolean>(false); //generate logo search button
    const searchMenuRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLInputElement | null>(null);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('high');
    const [show, setShow] = useState(true);
    const data = {
        "status": "success",
        "message": "Here are your results",
        "data": {
            "domains": [
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Viralify.com"
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Growthify.com"
                },
                {
                    "available": true,
                    "currency": "USD",
                    "definitive": true,
                    "domain": "Influerize.com",
                    "period": 1,
                    "price": 10690000
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Buzzgrow.com"
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Expandize.com"
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Boostfluence.com"
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Thrivify.com"
                },
                {
                    "available": true,
                    "currency": "USD",
                    "definitive": true,
                    "domain": "Circulenz.com",
                    "period": 1,
                    "price": 10690000
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Amplifize.com"
                },
                {
                    "available": false,
                    "definitive": true,
                    "domain": "Trendfluence.com"
                }
            ]
        },
        "names": [
            "Viralify",
            "Growthify",
            "Influerize",
            "Buzzgrow",
            "Expandize",
            "Boostfluence",
            "Thrivify",
            "Circulenz",
            "Amplifize",
            "Trendfluence"
        ]
    };

    const handleToggle = () => {
        console.log('checkedx');

        setIsChecked(!isChecked);
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside); //unmount
        };
    }, []);

    const handleClickOutside = (event) => {
        if (searchMenuRef.current && !searchMenuRef.current.contains(event.target) && !searchRef?.current?.contains(event.target)) {
            setToggleSearch(false);
        }
    };
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const searchQuery = searchRef.current?.value || '';
        const industry = (searchMenuRef.current?.querySelector('#countries') as HTMLSelectElement)?.value || '';
        const includeWord = (searchMenuRef.current?.querySelector('input[type="text"]') as HTMLInputElement)?.value || '';
        const randomness = selectedOption;

        const data = {
            searchQuery,
            industry,
            includeWord,
            includeSlogan: isChecked,
            randomness,
        };
        console.log(data);
        setShow(false)
        // try {
        //     const response = await axios.post('https://api.example.com/generate-logo', data);
        //     console.log('API Response:', response.data);
        //     // Handle the response as needed
        // } catch (error) {
        //     console.error('API Error:', error);
        // }
    };


    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (<Layout>

        {/* Main Content */}
        {show && <div className="px-4 py-16  m-3 rounded-md sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hero-section">
            {/* hero section */}
            <div className="max-w-4xl sm:mx-auto " style={{ height: '241px' }}>
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="flex justify-center mb-3">
                        <div
                            className="flex overflow-x-auto items-center p-0.5 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-white rounded-xl d">
                            <button
                                type="button"
                                className={`flex whitespace-nowrap items-center text-black h-10 px-3 font-medium  outline-none focus:ring-2 focus:ring-inset  ${activeButton === 'Keyword' ? 'bg-gradient-active text-white rounded-lg' : 'bg-white'}`}
                                onClick={() => setActiveButton('Keyword')}
                            >
                                Keyword
                            </button>

                            <button
                                type="button"
                                className={`flex whitespace-nowrap items-center text-black h-10 px-3 font-medium  outline-none focus:ring-2 focus:ring-inset  ${activeButton === 'AI' ? 'bg-gradient-active text-white rounded-lg' : 'bg-white'}`}
                                onClick={() => setActiveButton('AI')}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_62_12103)">
                                        <path d="M7.74285 6.68523C7.82535 6.43773 8.17485 6.43773 8.25735 6.68523L8.7411 8.13798C8.84758 8.45733 9.02698 8.74749 9.26508 8.98546C9.50318 9.22343 9.79344 9.40267 10.1129 9.50898L11.5649 9.99273C11.8124 10.0752 11.8124 10.4247 11.5649 10.5072L10.1121 10.991C9.79275 11.0975 9.50259 11.2769 9.26462 11.515C9.02665 11.7531 8.84741 12.0433 8.7411 12.3627L8.25735 13.8147C8.23957 13.8689 8.20512 13.9161 8.15892 13.9496C8.11272 13.983 8.05714 14.001 8.0001 14.001C7.94306 14.001 7.88748 13.983 7.84128 13.9496C7.79509 13.9161 7.76064 13.8689 7.74285 13.8147L7.2591 12.362C7.1527 12.0427 6.97341 11.7526 6.73545 11.5146C6.49748 11.2767 6.20737 11.0974 5.8881 10.991L4.43535 10.5072C4.38116 10.4894 4.33396 10.455 4.3005 10.4088C4.26704 10.3626 4.24903 10.307 4.24903 10.25C4.24903 10.1929 4.26704 10.1374 4.3005 10.0912C4.33396 10.045 4.38116 10.0105 4.43535 9.99273L5.8881 9.50898C6.20737 9.40257 6.49748 9.22329 6.73545 8.98532C6.97341 8.74736 7.1527 8.45725 7.2591 8.13798L7.74285 6.68523ZM4.8456 2.86098C4.85636 2.8285 4.87707 2.80023 4.90481 2.7802C4.93254 2.76017 4.96589 2.74939 5.0001 2.74939C5.03432 2.74939 5.06766 2.76017 5.09539 2.7802C5.12313 2.80023 5.14385 2.8285 5.1546 2.86098L5.44485 3.73248C5.5746 4.12098 5.8791 4.42548 6.2676 4.55523L7.1391 4.84548C7.17158 4.85623 7.19984 4.87695 7.21988 4.90468C7.23991 4.93242 7.25069 4.96576 7.25069 4.99998C7.25069 5.03419 7.23991 5.06753 7.21988 5.09527C7.19984 5.123 7.17158 5.14372 7.1391 5.15448L6.2676 5.44473C6.076 5.50856 5.90189 5.61615 5.75908 5.75896C5.61627 5.90176 5.50869 6.07587 5.44485 6.26748L5.1546 7.13898C5.14385 7.17146 5.12313 7.19972 5.09539 7.21975C5.06766 7.23978 5.03432 7.25057 5.0001 7.25057C4.96589 7.25057 4.93254 7.23978 4.90481 7.21975C4.87707 7.19972 4.85636 7.17146 4.8456 7.13898L4.55535 6.26748C4.49151 6.07587 4.38393 5.90176 4.24112 5.75896C4.09831 5.61615 3.92421 5.50856 3.7326 5.44473L2.8611 5.15448C2.82862 5.14372 2.80036 5.123 2.78033 5.09527C2.76029 5.06753 2.74951 5.03419 2.74951 4.99998C2.74951 4.96576 2.76029 4.93242 2.78033 4.90468C2.80036 4.87695 2.82862 4.85623 2.8611 4.84548L3.7326 4.55523C3.92421 4.49139 4.09831 4.3838 4.24112 4.241C4.38393 4.09819 4.49151 3.92408 4.55535 3.73248L4.8456 2.86098ZM10.1474 2.07423C10.1548 2.05287 10.1686 2.03435 10.187 2.02125C10.2055 2.00814 10.2275 2.0011 10.2501 2.0011C10.2727 2.0011 10.2947 2.00814 10.3132 2.02125C10.3316 2.03435 10.3454 2.05287 10.3529 2.07423L10.5464 2.65473C10.6326 2.91423 10.8359 3.11748 11.0954 3.20373L11.6759 3.39723C11.6972 3.40463 11.7157 3.4185 11.7288 3.43692C11.7419 3.45533 11.749 3.47737 11.749 3.49998C11.749 3.52258 11.7419 3.54462 11.7288 3.56303C11.7157 3.58145 11.6972 3.59532 11.6759 3.60273L11.0954 3.79623C10.9675 3.83877 10.8513 3.91054 10.756 4.00584C10.6607 4.10114 10.5889 4.21734 10.5464 4.34523L10.3529 4.92573C10.3454 4.94708 10.3316 4.9656 10.3132 4.9787C10.2947 4.99181 10.2727 4.99885 10.2501 4.99885C10.2275 4.99885 10.2055 4.99181 10.187 4.9787C10.1686 4.9656 10.1548 4.94708 10.1474 4.92573L9.95385 4.34523C9.91131 4.21734 9.83954 4.10114 9.74424 4.00584C9.64894 3.91054 9.53273 3.83877 9.40485 3.79623L8.8251 3.60273C8.80375 3.59532 8.78523 3.58145 8.77212 3.56303C8.75902 3.54462 8.75197 3.52258 8.75197 3.49998C8.75197 3.47737 8.75902 3.45533 8.77212 3.43692C8.78523 3.4185 8.80375 3.40463 8.8251 3.39723L9.4056 3.20373C9.6651 3.11748 9.86835 2.91423 9.9546 2.65473L10.1474 2.07498V2.07423Z" fill={`${activeButton === 'AI' ? 'white' : '#4B4652'}`} />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_62_12103">
                                            <rect width="12" height="12" fill="white" transform="translate(2 2)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                AI Powered
                            </button>
                        </div>
                    </div>
                    <div className="mb-10 md:mx-auto sm:text-center max-w-2xl md:mb-12">
                        <h2 className="mb-2 font-sans text-6xl font-bold leading-none tracking-tight text-gray-900 md:mx-auto">
                            Generate Name at ease
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Generate Logo at ease
                        </p>
                    </div>


                    <div className="flex items-center justify-center relative group">

                        <form className="mx-auto w-full relative bg-[#f3f1fe] rounded-md p-2" onSubmit={handleSubmit}>
                            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <input
                                    type="search"
                                    ref={searchRef}
                                    id="default-search"
                                    className="block w-full p-4 text-sm text-black border border-gray-300 rounded-lg bg-white dark:placeholder-gray-400"
                                    placeholder="Design Studio, Creative Industry"
                                    required
                                    onFocus={() => setToggleSearch(true)}
                                    autoComplete="off"
                                />
                                <button
                                    type="submit"
                                    className="text-white mb-2 mr-2 absolute end-2.5 bg-[#5E17EB] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                                    style={{ top: '9px' }}
                                >
                                    Generate Logo
                                </button>
                            </div>

                            <div id="search-menu" ref={searchMenuRef} className={`mt-2 w-full right-0 rounded-md bg-white p-4 ${toggleSearch ? '' : 'hidden'}`}>
                                <div className="flex flex-col gap-2 mb-5">
                                    <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Industry</div>
                                    <div className="flex flex-row flex-wrap">
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            😉 Catchy
                                        </span>
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            📃 Descriptive
                                        </span>
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            🎨 Brandable
                                        </span>
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            🎨 Compound Words
                                        </span>
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            🎨 Real World
                                        </span>
                                        <span className="bg-white border text-black text-xs font-medium me-2 px-3.5 py-1.5 rounded-full w-max hover:bg-[#5E17EB] hover:text-white hover:cursor-pointer">
                                            🎨 Short Phrase
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between mb-5">
                                    <div className="flex flex-col flex-wrap gap-3 w-1/4">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Name Style</div>
                                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-1.5 h-8 pl-2.5">
                                            <option selected>Select Industry</option>
                                            <option value="Energy">Energy</option>
                                            <option value="Agriculture">Agriculture</option>
                                            <option value="Int. Development">Int. Development</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Education">Education</option>
                                            <option value="Business">Business</option>
                                            <option value="Environment">Environment</option>
                                            <option value="Health">Health</option>
                                            <option value="Property">Property</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Automotive">Automotive</option>
                                            <option value="FMCG">FMCG</option>
                                            <option value="Pharma">Pharma</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col flex-wrap gap-3 w-1/4">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Include a word</div>
                                        <input
                                            type="text"
                                            className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-1.5 h-8 pl-2.5"
                                            placeholder='"The"'
                                            required
                                            name='sdf'
                                        />
                                    </div>
                                    <div className="flex flex-col flex-wrap gap-3 w-1/4">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Include Slogan</div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                onChange={handleToggle}
                                            />
                                            <div className={`relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer ${isChecked ? '' : ''} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#5E17EB] after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}></div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-between mb-5">
                                    <div className="flex flex-col flex-wrap gap-3 w-1/4">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none mb-2">Character Count</div>
                                        <MultiRangeSlider min={0} max={1000} />
                                    </div>
                                    <div className="flex flex-col flex-wrap gap-3 w-1/4">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Include a word</div>
                                        <div className="inline-flex rounded-md shadow-sm" role="group">
                                            <button type="button" className="p-2 text-xs font-medium text-black bg-[#f2f2f2] border border-#4B4652 rounded-s-lg hover:bg-[#5E17EB] hover:text-white focus:z-10 focus:ring-2 focus:ring-#5E17EB">
                                                Any
                                            </button>
                                            <button type="button" className="p-2 text-xs font-medium text-black bg-[#f2f2f2] border-t border-b border-#4B4652 hover:bg-[#5E17EB] hover:text-white focus:z-10 focus:ring-2 focus:ring-#5E17EB">
                                                One Word
                                            </button>
                                            <button type="button" className="p-2 text-xs font-medium text-black bg-[#f2f2f2] border border-#4B4652 rounded-e-lg hover:bg-[#5E17EB] hover:text-white focus:z-10 focus:ring-2 focus:ring-#5E17EB">
                                                Two Words
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-wrap gap-3  w-1/4 ">
                                        <div className="NameStyle w-max text-neutral-600 text-xs font-medium leading-none">Randomness</div>

                                        <label className="inline-flex items-center cursor-pointer">
                                            <div className="flex">
                                                <div className="flex items-center me-4">
                                                    <input
                                                        id="low-radio"
                                                        type="radio"
                                                        value="low"
                                                        name="inline-radio-group"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                        checked={selectedOption === 'low'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="low-radio" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                                                        Low
                                                    </label>
                                                </div>
                                                <div className="flex items-center me-4">
                                                    <input
                                                        id="medium-radio"
                                                        type="radio"
                                                        value="medium"
                                                        name="inline-radio-group"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                        checked={selectedOption === 'medium'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="medium-radio" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                                                        Medium
                                                    </label>
                                                </div>
                                                <div className="flex items-center me-4">
                                                    <input
                                                        id="high-radio"
                                                        type="radio"
                                                        value="high"
                                                        name="inline-radio-group"
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                                        checked={selectedOption === 'high'}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="high-radio" className="ms-2 text-sm font-medium text-gray-900 cursor-pointer">
                                                        High
                                                    </label>
                                                </div>
                                            </div>

                                        </label>

                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>}

        <div className='m-3.5 px-6 py-3 text-base font-medium bg-[#fdfdfd] rounded-md '>
            {show ? <Cards /> : <NextPage setShow={setShow} data={data} />}
            {/* <NextPage/> */}

        </div>
    </Layout>)
};



const Cards = () => {
    const [activeTab, setActiveTab] = useState(1);

    return <>
        <div className=" font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 mb-3">
            <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                    <a href="#" className={`inline-block p-4   rounded-t-lg hover:text-gray-600  ${activeTab === 1 ? 'text-[#5E17EB]  border-blue-600 border-b-2' : ''}`} onClick={(event) => { event.preventDefault(); setActiveTab(1); }} >Get Inspired</a>
                </li>
                <li className="me-2">
                    <a href="#" className={`inline-block p-4   rounded-t-lg ${activeTab === 2 ? 'text-[#5E17EB]  border-blue-600 border-b-2 ' : ''}`} onClick={(event) => { event.preventDefault(); setActiveTab(2); }} >Saved Names</a>
                </li>
            </ul>
        </div>
        <div className="tabs">
            {activeTab == 1 && <div id='tab1' className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col bg-white border gap-3  text-black border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-4">
                    <img className="object-cover w-11 h-11 rounded-t-lg  md:rounded-none md:rounded-l-lg" src="/draw.png" alt="" />
                    <div className="flex flex-col justify-between  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight ">Creative Agency</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">“Spark imaginations and craft compelling brand stories. Generate names.”</p>
                        <div className="flex gap-2">
                            <p >Tags:</p>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Design</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Branding</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Marketing</span>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col bg-white border gap-3  text-black border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-4">
                    <img className="object-cover w-11 h-11 rounded-t-lg  md:rounded-none md:rounded-l-lg" src="/draw.png" alt="" />
                    <div className="flex flex-col justify-between  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight ">Creative Agency</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">“Spark imaginations and craft compelling brand stories. Generate names.”</p>
                        <div className="flex gap-2">
                            <p >Tags:</p>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Design</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Branding</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Marketing</span>

                        </div>
                    </div>

                </div>
                <div className="flex flex-col bg-white border gap-3  text-black border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-4">
                    <img className="object-cover w-11 h-11 rounded-t-lg  md:rounded-none md:rounded-l-lg" src="/draw.png" alt="" />
                    <div className="flex flex-col justify-between  leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight ">Creative Agency</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">“Spark imaginations and craft compelling brand stories. Generate names.”</p>
                        <div className="flex gap-2">
                            <p >Tags:</p>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Design</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Branding</span>
                            <span className="bg-white border   text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Marketing</span>

                        </div>
                    </div>

                </div>
                {/* Repeat the above two card elements for additional cards */}
            </div>}
            {activeTab == 2 && <div id='tab2' className=" flex flex-col items-center justify-center gap-4  place-items-center">
                <div className="flex flex-col py-3">
                    <img src="/saved.png" alt="Descriptive Text" className="object-scale-down h-auto m-auto  w-full" style={{ width: '200px' }} />
                    <div className=" w-60 h-9 text-center text-neutral-600 text-base font-normal font-['Inter']">Ohh..🧐 Seems like you haven’t saved any names yet.</div>
                </div>
                {/* Repeat the above two card elements for additional cards */}
            </div>}
        </div>
    </>
}

const NextPage = ({ setShow, data }) => {
    return <>
        {/* back button and text */}
        <div className="flex gap-4 font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-9 items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' onClick={() => setShow((value) => !value)}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.00002C15 7.86741 14.9473 7.74024 14.8535 7.64647C14.7598 7.5527 14.6326 7.50002 14.5 7.50002H2.70698L5.85398 4.35402C5.90047 4.30753 5.93734 4.25234 5.9625 4.1916C5.98766 4.13087 6.00061 4.06577 6.00061 4.00002C6.00061 3.93428 5.98766 3.86918 5.9625 3.80844C5.93734 3.7477 5.90047 3.69251 5.85398 3.64602C5.80749 3.59953 5.7523 3.56266 5.69156 3.5375C5.63082 3.51234 5.56572 3.49939 5.49998 3.49939C5.43423 3.49939 5.36913 3.51234 5.30839 3.5375C5.24765 3.56266 5.19247 3.59953 5.14598 3.64602L1.14598 7.64602C1.09942 7.69247 1.06247 7.74764 1.03727 7.80839C1.01206 7.86913 0.999084 7.93425 0.999084 8.00002C0.999084 8.06579 1.01206 8.13091 1.03727 8.19165C1.06247 8.2524 1.09942 8.30758 1.14598 8.35402L5.14598 12.354C5.19247 12.4005 5.24765 12.4374 5.30839 12.4625C5.36913 12.4877 5.43423 12.5007 5.49998 12.5007C5.56572 12.5007 5.63082 12.4877 5.69156 12.4625C5.7523 12.4374 5.80749 12.4005 5.85398 12.354C5.90047 12.3075 5.93734 12.2523 5.9625 12.1916C5.98766 12.1309 6.00061 12.0658 6.00061 12C6.00061 11.9343 5.98766 11.8692 5.9625 11.8084C5.93734 11.7477 5.90047 11.6925 5.85398 11.646L2.70698 8.50002H14.5C14.6326 8.50002 14.7598 8.44734 14.8535 8.35357C14.9473 8.25981 15 8.13263 15 8.00002Z" fill="#4B4652" />
            </svg>
            {/* back arrow icon */}
            <ul className="flex flex-col -mb-px justify-start text-start pl-4 gap-1">
                <h5 className="text-2xl font-bold  text-black">Our AI has generated </h5>
                <p className='text-black'>You can skip if you are not sure</p>

            </ul>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.data.domains.map((domainObj, index) => (
                <Card
                    key={index}
                    name={data.names[index]}
                    domain={domainObj.available ? domainObj.domain : 'Not Available'}
                />
            ))}
        </div>
    </>
}

export default Sidebar;
