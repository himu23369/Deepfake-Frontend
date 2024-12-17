import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/common/Heading';
import { Subheading } from '../components/Subheading';
import { InputBox } from '../components/common/InputBox';
import { Button } from '../components/common/Button';
import userContext from '../components/context/userContext';

export const Signup = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const {setUser} = useContext(userContext);

    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstname: FirstName,
                lastname: LastName,
                username: Email,
                password: Password,
            });
            localStorage.setItem("token", response.data.token);
            setUser({
                firstname: response.data.user.firstname,
                lastname: response.data.user.lastname,
                username: response.data.user.username,
            });

            navigate("/Signin");
        } catch (err) {
            setError("Email already taken");
        }
    };

    return (
        <div className="flex w-full h-screen bg-gradient-to-br from-gray-900 to-black">

            <div className="hidden relative w-full lg:flex items-center justify-center bg-gray-900">
                <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-violet-500 to-pink-500 animate-spin" />
                <div className="w-full h-1/2 absolute bottom-0 bg-black/10 backdrop-blur-lg" />
            </div>

            <div className="w-11/12 max-w-[700px] mx-3 px-20 my-10 rounded-3xl bg-gray-800 border-2 border-gray-700 text-white">
                <Heading label="Create Account" />
                <Subheading label="Please enter your details to sign up" />

                <div className="mt-8">
                    <div className="flex flex-col">
                        <label className="text-lg font-medium">First Name</label>
                        <InputBox
                            type="text"
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                            className="bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="text-lg font-medium">Last Name</label>
                        <InputBox
                            type="text"
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                            className="bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="text-lg font-medium">Email</label>
                        <InputBox
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="bg-gray-700 text-white border-gray-600"
                        />
                    </div>
                    <div className="flex flex-col mt-2">
                        <label className="text-lg font-medium">Password</label>
                        <div className="relative">
                            <InputBox
                                type={showPassword ? "text" : "password"}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="bg-gray-700 text-white border-gray-600"
                            />
                            <span
                                className="absolute inset-y-0 right-0 flex items-center justify-center pr-4 pb-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"} {/* Icon for show/hide password */}
                            </span>
                        </div>
                    </div>
                    <div className="mt-2 flex flex-col gap-y-4">
                        <Button onClick={handleSignup} label="Sign up" className="bg-violet-600 hover:bg-violet-500" />
                    </div>
                    {error && <div className="mt-2 text-red-500">{error}</div>}
                    <div className="mt-8 flex justify-center items-center">
                        <p className="font-medium text-base text-gray-400">Already have an account?</p>
                        <button
                            className="ml-2 font-medium text-base text-violet-500 hover:underline"
                            onClick={() => navigate("/signin")}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
