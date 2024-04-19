import React from 'react'

const Header = () => {
    return (
        <div className='h-svh bg-black h-[100px] flex justify-between items-center pl-[50px] pr-[50px]'>
            <img src="/public/Logo.svg" alt="" />
            <div className='w-[40px] h-[40px] bg-white rounded-full' ></div>
        </div>
    )
}

export default Header
