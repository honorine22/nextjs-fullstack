import React, { useState } from 'react'
import ButtonLoader from '../ButtonLoader'
import { toast } from 'react-toastify'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })
        setLoading(false)

        console.log(result);
        if (result.error) {
            toast.error(result.error)
        } else {
            window.location.href = '/'
        }
    }
    return (
        <div className='md:mx-96 lg:mx-96 my-32'>
            <form onSubmit={submitHandler}>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="ml-3 mb-6 text-sm flex justify-end">
                    <label htmlFor="remember" className="font-medium text-gray-900 dark:text-gray-300">Forgot Password</label>
                </div>
                <div className='flex flex-col md:justify-between lg:justify-between'>
                    <button disabled={loading ? true : false} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {loading ? <ButtonLoader /> : 'LOGIN'}</button>
                    <div className="mt-4 flex justify-end text-sm">
                        <Link href='/register'>
                            <span className='font-medium cursor-pointer text-gray-900 dark:text-white text-right'>New User?</span></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login