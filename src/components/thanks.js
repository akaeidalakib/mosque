import Image from 'next/image';
import React from 'react';

const thanks = () => {
    return (
        <div>
            <div className="flex h-screen items-center justify-center bg-gray-100 py-10">
                <div className="mx-auto max-w-md overflow-hidden rounded-3xl text-gray-700 shadow-md">
                    <div className="h-40 bg-rose-500 pt-10 sm:h-56">
                        <Image className="h-full w-full object-contain" src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527788263495-3518a5c1c42d%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1508%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75" alt="" />
                    </div>
                    <div className="flex flex-col items-center bg-white px-4 py-10">
                        <h2 className="mb-2 text-3xl font-bold text-rose-500 sm:text-4xl">Thank you!</h2>
                        <p className="mb-8 font-medium text-gray-500">For supporting me with your donation</p>
                        <div className="flex items-center rounded-xl bg-rose-500 p-4">
                            <img className="h-12 w-12 rounded-full border-4 border-white object-cover" src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1527788263495-3518a5c1c42d%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D1508%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=640&q=75" />
                            <div className="ml-4 w-56">
                                <p className="text-xs font-medium text-gray-100">From</p>
                                <p className="font-medium text-white">Emilia Anvil</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default thanks;