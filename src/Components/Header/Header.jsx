import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between  xl:w-[1082px] font-BOLD '>

        <div className='xl:text-[32px] xl:font-[700] xl:mt-[40px]  md:text-[30px] sm:mt-[10px]' >Good Morning, Gavano !</div>
        <div className='xl:mt-[47.5px] sm:mt-[5px]'>
            <img src="/images/notification.svg" alt="" className='w-[30px] md:w-auto xl:w-auto'/>
        </div>
    </div>
  )
}

export default Header