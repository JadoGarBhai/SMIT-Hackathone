// import React from 'react'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const SideBar = () => {




    const [navbar, setNavbar] = useState(false)
    return (
        <div className="xl:w-[266px]    ">



            {/* logo and Name */}
            <div className=' xl:items-center xl:flex  xl:ml-[51px] xl:mt-[33px]  hidden '>

                <div className=' '>
                    <img src="/images/icon.svg" alt="" />
                </div>

                <div className=' xl:text-[35.4px] text-[#001dc0]  xl:ml-[8px]  '>
                    <span className='font-Regular xl:font-[400]    xl:tracking-[0.35px]'> Ads </span>
                    <span className=' font-BOLD xl:font-[700] xl:ml-[-5px] '> litics </span>

                </div>
            </div>


            {/* side bar content */}
            <div className=' xl:w-[231px]  xl:ml-[35px]  xl:mt-[56px] hidden xl:block  font-Regular '>

                <ul className="    ">

                    <div className=''>

                        <NavLink to='#' >
                            <li className='xl:mb-[-18px] xl:mt-[-20px] active xl:flex xl:items-center xl:gap-6 xl:h-[61.6px]  xl:mx-auto  filter grayscale    xl:text-[19px] xl:font-[400]      ' >
                                <img src="/images/dashboard.svg" alt="" className=' xl:w-[28.43px] xl:h-[28.43px] xl:ml-[33.17px]   ' />
                                <p>Dashboard</p>
                            </li>
                        </NavLink>



                        <li className=' xl:mt-[25px] xl:flex  xl:items-center  xl:gap-6 xl:mx-auto xl:h-[61.6px]   hover:bg-white filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px] hover:xl:font-[700] xl:font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/compagin.png" alt="" className=' xl:w-[29px] xl:h-[29px] xl:ml-[33.17px]   ' />
                            Compaign
                        </li>


                        <li className='xl:mt-[25px] xl:flex  xl:items-center xl:gap-6 xl:mx-auto xl:h-[61.6px]  hover:bg-white filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px] hover:xl:font-[700] xl:font-[400]   hover:shadow-[0_27px_67px_0px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb] xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/personalcard.png" alt="" className='xl:ml-[33.17px] xl:w-[28px] xl:h-[28px] ' />
                            Audience
                        </li>

                        <li className='xl:mt-[25px] xl:flex  xl:items-center xl:gap-6 xl:mx-auto xl:h-[61.6px]  hover:bg-white filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px] hover:xl:font-[700] xl:font-[400]   hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb]   xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/profromance.png" alt="" className='xl:ml-[33.17px] xl:w-[28.43px] xl:h-[28.43px] fill-blue-500' />
                            Performance
                        </li>

                        <li className='xl:mt-[25px] xl:flex  xl:items-center xl:gap-6 xl:mx-auto xl:h-[61.6px]  hover:bg-white filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px] hover:xl:font-[700] xl:font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb]  xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/like.png" alt="" className='xl:ml-[33.17px] xl:w-[30px] xl:h-[30px]' />
                            Promote
                        </li>


                        <div className='xl:mt-[13px]'>
                            <img src="/images/line.png" alt="" className=' xl:w-[231px]' />
                        </div>

                        <li className='xl:mt-[25px] xl:flex  xl:items-center xl:gap-6 xl:mx-auto xl:h-[61.6px]  hover:bg-white filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px] hover:xl:font-[700] xl:font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  border-[#efeeeb]  xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/profile.png" alt="" className='xl:ml-[33.17px] w-[27.1px] h-[27.1px]' />
                            Profile
                        </li>

                        <li className='xl:mt-[25px] xl:flex  xl:items-center xl:gap-6 xl:mx-auto xl:h-[61.6px]  hover:bg-white hover:text-[#1a2b88] filter grayscale hover:grayscale-0 xl:text-[19px] hover:xl:font-[700] xl:font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  xl:rounded-2xl  xl:hover:bg-[#ffffff]  xl:hover:border-[1.36px] xl:border-solid ' >
                            <img src="/images/setting.png" alt="" className='hover:color-[#1a2b88] xl:ml-[33.17px] xl:w-[27.1px] xl:h-[27.1px]  ' />
                            Setting
                        </li>
                    </div>
                </ul>
            </div>


            {/* avatar */}
            <div className='xl:flex xl:w-[190px] xl:h-[40px] xl:mt-[240.06px] xl:ml-[61px] xl:mb-[44px]  hidden'>

                <div className='xl:w-[40px] xl:h-[40px] '>
                    <img src="/images/imagee.png" alt="" />
                </div>
                <div className=' xl:font-BOLD xl:flex xl:items-center xl:ml-[16px]'>
                    <p className='xl:text-[18px] font-[700]  '>Gavano</p>
                </div>
                <div className='xl:flex xl:justify-center xl:items-center xl:w-[30.54px] xl:h-[30.54px]  xl:ml-[38px]'>
                    <img src="/images/more.svg" alt="" />
                </div>

            </div>

























            <div className=' xl:hidden w-[200px]  '>


                {/* onClick={() => setNavbar(!navbar)} */}

                <img src='/images/icon.svg' onClick={() => setNavbar(!navbar)} class=" hover:bg-blue-300 ml-[80px] mt-[20px] " />
                {
                    navbar ? (

                        <div className=' translate-x-[10%]   '>
                            <ul className="    ">

                                <div className=''>

                                    <NavLink to='#' >
                                        <li className=' w-[150px] mt-[25px]  flex justify-center items-center  gap-1.5 mx-auto h-[40.6px] text-[14px] font-[700] active   filter grayscale    ' >
                                            <img src="/images/dashboard.svg" alt="" className='w-[18px] h-[18px]' />
                                            Dashboard
                                        </li>
                                    </NavLink>

                                    <li className='w-[150px]   flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid  ' >
                                        <img src="/images/compagin.png" alt="" className='ml-[-8px] w-[19px] h-[19px]' />
                                        Compaign
                                    </li>

                                    <li className='w-[150px] mt-[25px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid ' >
                                        <img src="/images/personalcard.png" alt="" className='ml-[-10px] w-[18px] h-[18px]' />
                                        Audience
                                    </li>

                                    <li className='w-[150px] mt-[25px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid  ' >
                                        <img src="/images/profromance.png" alt="" className='ml-[11px] w-[18px] ' />
                                        performance
                                    </li>

                                    <li className='w-[150px] mt-[25px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid ' >
                                        <img src="/images/like.png" alt="" className='ml-[-15px] w-[20px] h-[20px]' />
                                        Promote
                                    </li>


                                    <div className='w-[150px] mt-[20px] ml-[20px]'>
                                        <img src="/images/line.png" alt="" className=' w-[231px]' />
                                    </div>

                                    <li className='w-[150px] mt-[25px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]   filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid ' >
                                        <img src="/images/profile.png" alt="" className='ml-[-35px] w-[18px] h-[18px]' />
                                        profile
                                    </li>

                                    <li className='w-[150px] mt-[25px] flex justify-center items-center gap-1.5 mx-auto h-[40.6px]    filter grayscale hover:grayscale-0 hover:text-[#1a2b88] xl:text-[19px]  font-[400]  hover:shadow-[0_27.1px_67.5px_rgba(239,238,235,1)]  rounded-2xl  hover:bg-[#ffffff]  hover:border-[1.36px] border-solid ' >
                                        <img src="/images/setting.png" alt="" className='ml-[-26px] w-[18px] h-[18px]' />
                                        setting
                                    </li>
                                </div>
                            </ul>


                            {/* avatar */}
                            <div className=' mt-[240px] mb-[30px] flex h-[40px] w-[120px] ml-[47px]   '>

                                <div className='my-auto mr-[10px]'>
                                    <img src="/images/imagee.png" alt="" className='w-[55px]'/>
                                </div>
                                <div className=' font-BOLD flex items-center mr-[10px]'>
                                    <p className=' md:text-[14px] sm:text:[12px] text-[10px] font-[700]  '>Gavano</p>
                                </div>
                                <div className='flex justify-center items-center   '>
                                    <img src="/images/more.svg" alt="" className='w-[55px]' />
                                </div>

                            </div>
                            <button onClick={() => setNavbar(!navbar)} className='w-[70px] mt-[10px] flex justify-center items-center ml-[50px] bg-red-500 hover:bg-green-300'>close</button>
                        </div>

                    ) : (
                        <p></p>
                    )
                }

            </div>
        </div>
    )
}

export default SideBar