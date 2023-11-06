import React from 'react';
import Link from 'next/link';
const Signup = () => {
    return (
        <div>
            <div class="lg:m-10">
                <form class="relative border border-gray-100 space-y-3 max-w-screen-md mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10">
                    <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

                    <div class="grid gap-3 md:grid-cols-2">
                        <div>
                            <label class=""> First Name </label>
                            <input type="text" placeholder="Your Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                        <div>
                            <label class=""> Last Name </label>
                            <input type="text" placeholder="Last  Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div>
                        <label class=""> Username </label>
                        <input type="text" placeholder="Username" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label class=""> Email Address </label>
                        <input type="email" placeholder="Info@example.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div class="grid gap-3 md:grid-cols-2">

                        <div>
                            <label class=""> Password </label>
                            <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>

                        <div>
                            <label class=""> Password </label>
                            <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div class="grid  lg:grid-cols-1">
                        <div>
                            <label class=""> Phone: <span class="text-sm text-gray-400">(optional)</span> </label>
                            <input type="text" placeholder="+543 5445 0543" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                        </div>
                    </div>
                    <div>
                        <button type="button" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Signup</button>
                        <p class="text-center text-gray-600">
                            Already have an account?
                            <Link href="/login" class="whitespace-nowrap font-semibold text-gray-900 hover:underline">Login</Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Signup;