import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/common/Heading';
import { Subheading } from '../components/Subheading';
import { InputBox } from '../components/common/InputBox';
import { Button } from '../components/common/Button';
import userContext from '../components/context/userContext';


export const Signin = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { setUser } = useContext(userContext);

    const handleSignin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username: Email,
                password: Password
            });
            localStorage.setItem("token", response.data.token);
            setUser({
                firstname: response.data.user.firstname,
                lastname: response.data.user.lastname,
                username: response.data.user.username,
            });
            navigate("/Dashboard");
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="flex w-full h-screen bg-gradient-to-br from-gray-900 to-black">
            <div className="w-11/12 max-w-[700px] mx-3 px-10 my-10 rounded-3xl bg-gray-800 border-2 border-gray-700 text-white">
                <Heading label="Welcome Back" />
                <Subheading label="Please enter your details to sign into your account" />

                <div className="mt-8">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">Email</label>
                        <InputBox
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label className="text-lg font-medium">Password</label>
                        <div className="relative">
                            <InputBox
                                type={showPassword ? "text" : "password"}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="bg-gray-700 text-white border-gray-600"
                            />
                            <span
                                className="absolute inset-y-0 right-0  flex items-center justify-center pr-4 pb-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"} {/* Icon for show/hide password */}
                            </span>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-between items-center">
                        <div>
                            <input type="checkbox" id="remember" className="text-violet-500 focus:ring-violet-500" />
                            <label className="ml-2 font-medium text-base text-gray-400" htmlFor="remember">
                                Remember for 30 days
                            </label>
                        </div>
                        <button className="font-medium text-base text-violet-500 hover:underline">
                            Forgot password
                        </button>
                    </div>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <Button onClick={handleSignin} label="Sign in" className="bg-violet-600 hover:bg-violet-500" />
                        <button className="flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-lg border-2 border-gray-600 hover:bg-gray-700 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                                    fill="#EA4335"
                                />
                                <path
                                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                                    fill="#4A90E2"
                                />
                                <path
                                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                                    fill="#FBBC05"
                                />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>
                    {error && <div className="mt-2 text-red-500">{error}</div>}
                    <div className="mt-8 flex justify-center items-center">
                        <p className="font-medium text-base text-gray-400">Don't have an account?</p>
                        <button onClick={() => navigate('/signup')} className="ml-2 font-medium text-base text-violet-500 hover:underline">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden relative w-full lg:flex items-center justify-center bg-gray-900">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-black/10 backdrop-blur-lg" />
            </div>
        </div>
    );
};
