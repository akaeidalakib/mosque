import Image from 'next/image';
import React from 'react';

const Blog = () => {
    return (
        <div>
           <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
            <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>

            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                quia tempore delect
            </p>
        </div>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                <Image width={500} height={500} class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1590273089302-ebbc53986b6e?auto=format&fit=crop&q=80&w=1516&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    Abu Dhabi, Abu Dhabi, Vereinigte Arabische Emirate
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Abu Dhabi, Abu Dhabi, Vereinigte Arabische Emirate
                          Published on May 24, 2020
                        Apple, iPhone 8
                       Free to use under the Unsplash License
                    </p>

                    <p class="mt-3 text-sm text-blue-500">21 October 2019</p>
                </div>
            </div>

            <div>
                <Image width={500} height={500} class="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt=""/>

                <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                    Sheikh Zayed Grand Mosque Center - 5th Street - Abu Dhabi - United Arab Emirates
                    </a>

                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Sheikh Zayed Grand Mosque Center - 5th Street - Abu Dhabi - United Arab Emirates
                    </p>

                    <p class="mt-3 text-sm text-blue-500">20 October 2019</p>
                </div>
            </div>
        </div>
    </div>
</section> 
        </div>
    );
};

export default Blog;