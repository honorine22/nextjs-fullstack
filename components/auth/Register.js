import React, { useState, useEffect } from 'react'
import ButtonLoader from '../ButtonLoader'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { registerUser, clearErrors } from '../../redux/actions/userActions'
const Register = () => {
    const dispatch = useDispatch()
    const router = useRouter()

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = user

    const [avatar, setAvatar] = useState('')
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.png')

    const { success, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (success) {
            router.push('/login')
        }
        if (error) {
            toast.error(error)
            dispatch(clearErrors())
        }
    }, [dispatch, success, error])

    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name, email, password, avatar
        }

        dispatch(registerUser(userData))

    }

    const onChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result)
                }
            }
            reader.readAsDataURL(e.target.files[0])
        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }
    }
    return (
        <div className='md:mx-96 lg:mx-96 my-24'>
            <form onSubmit={submitHandler}>
                {/* autoComplete='off' */}
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                    <input value={name} name='name' onChange={onChange} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" value={email} name='email' onChange={onChange} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                    <input value={password} onChange={onChange} type="password" name='password' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="mb-6 flex justify-between">
                    <div className=''>
                        <figure className='mt-2'>
                            <img src={avatarPreview} className='h-20 w-20 rounded-full' alt="Image" />
                        </figure>
                    </div>
                    <div className='pl-4'>
                        <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Avatar</label>
                        <input placeholder='Choose Avatar' className="form-control
                                block
                                w-full
                                bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                rounded
                                transition
                                ease-in-out
                                m-0"
                            name='avatar'
                            type="file" id="avatar"
                            accept='images/*' onChange={onChange}
                        />
                    </div>
                </div>
                <div className='flex flex-col md:justify-between lg:justify-between'>
                    <button disabled={loading ? true : false} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {loading ? <ButtonLoader /> : 'REGISTER'}</button>
                </div>
            </form>
        </div>
    )
}

export default Register