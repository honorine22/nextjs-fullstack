import React from 'react'
import Link from 'next/link'
export const Header = () => {
    return (
        <nav className="border-b-2 shadow-lg sticky py-2 top-0 z-72 dark:border-gray-600 border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-around items-center mx-auto">
                <Link href="/">
                    <a className="flex no-underline">
                        <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"></path><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"></path><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"></path></svg>
                        <span className="self-center text-blue-700 text-4xl font-semibold">BookIt</span>
                    </a>
                </Link>
                <div className="flex md:order-2">
                    <Link href='/login'>
                    <a>
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">Login</button>
                    </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
