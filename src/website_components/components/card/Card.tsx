
export default function Card({name,domain}) {
    return (
        <div className="flex flex-col bg-white border gap-3  text-black border-gray-200 rounded-lg shadow  md:w-full hover:bg-gray-100 p-4">
            <div className="flex flex-col justify-between   gap-3">
                <div className="flex justify-between">
                    <h5 className="mb-2 text-base   font-bold">{name}</h5> 
                    {/* { item} */}
                    <div className="SaveButton w-8 h-8 p-1.5 bg-white rounded-lg border border-zinc-100 justify-center items-center gap-1 inline-flex">
                        <div className="Icon p-0.5 justify-start items-start gap-2.5 flex">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00002 2.74805L7.28302 2.01105C5.60002 0.281048 2.51402 0.878049 1.40002 3.05305C0.877017 4.07605 0.759017 5.55305 1.71402 7.43805C2.63402 9.25305 4.54802 11.427 8.00002 13.795C11.452 11.427 13.365 9.25305 14.286 7.43805C15.241 5.55205 15.124 4.07605 14.6 3.05305C13.486 0.878049 10.4 0.280049 8.71702 2.01005L8.00002 2.74805ZM8.00002 15C-7.33298 4.86805 3.27902 -3.03995 7.82402 1.14305C7.88402 1.19805 7.94302 1.25505 8.00002 1.31405C8.05644 1.2551 8.11515 1.19839 8.17602 1.14405C12.72 -3.04195 23.333 4.86705 8.00002 15Z" fill="#726E7A" />
                            </svg>

                        </div>
                    </div>
                </div>
                <p className="mb-3 font-light text-sm text-[#4B4652]">“Spark imaginations and craft compelling brand stories. Generate names.”</p>
                <div className="flex gap-2 items-center">
                    <p className='font-extralight text-sm'>Domain Availability: </p>
                    <span className="border border-[#1E8926]  text-black text-xs font-medium me-2 px-2.5 py-1.5 rounded-full flex gap-2 bg-[#DEF8DD]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_62_17991)">
                                <path d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM12.03 4.97C11.9586 4.89882 11.8735 4.84277 11.7799 4.80522C11.6863 4.76766 11.5861 4.74936 11.4853 4.75141C11.3845 4.75347 11.2851 4.77583 11.1932 4.81717C11.1012 4.85851 11.0185 4.91797 10.95 4.992L7.477 9.417L5.384 7.323C5.24183 7.19052 5.05378 7.1184 4.85948 7.12183C4.66518 7.12525 4.47979 7.20397 4.34238 7.34138C4.20497 7.47879 4.12625 7.66418 4.12283 7.85848C4.1194 8.05278 4.19152 8.24083 4.324 8.383L6.97 11.03C7.04128 11.1012 7.12616 11.1572 7.21958 11.1949C7.313 11.2325 7.41305 11.2509 7.51375 11.2491C7.61444 11.2472 7.71374 11.2251 7.8057 11.184C7.89766 11.1429 7.9804 11.0837 8.049 11.01L12.041 6.02C12.1771 5.8785 12.2523 5.68928 12.2504 5.49296C12.2485 5.29664 12.1698 5.10888 12.031 4.97H12.03Z" fill="#38B03F" />
                            </g>
                            <defs>
                                <clipPath id="clip0_62_17991">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        .com
                    </span>


                </div>
                <div className="flex justify-end gap-2" style={{justifyContent:'end'}}>
                    <button type="submit" className="text-black mb-2 mr-2 border border-[#F2F2F2] bg-white   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 d " style={{ top: '9px' }}>Trademark Checker</button>
                    <button type="submit" className="text-white mb-2 mr-2 border border-[#F2F2F2]  bg-[#5E17EB]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 d " style={{ top: '9px' }}>Create Logo</button>
                </div>
            </div>

        </div>)
}