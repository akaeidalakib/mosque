import Image from 'next/image';
import React from 'react';

const Teams = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                    <div className="container px-6 py-10 mx-auto">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">MEET OUR MANAGEMENT TEAM</h1>

                        <div className="flex justify-center mx-auto mt-6">
                            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                        </div>

                        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                        </p>
                    </div>
                </div>

                <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-80 md:-mt-96">
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
                        <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                            <Image className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8M" width={500} height={500} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">JAHIR HUSSAIN</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">President and Chair of Trustees</p>
                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">12/4/2023</p>
                        </div>

                        <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                            <Image className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8M" width={500} height={500} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">RAJA HYDERALI</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Head of Finance</p>
                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">12/4/2023</p>
                        </div>

                        <div className="flex flex-col items-center p-4 border sm:p-6 rounded-xl dark:border-gray-700">
                            <Image className="object-cover w-full rounded-xl aspect-square" src="https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8M" width={500} height={500} alt="" />

                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">WAZIR YOONUS</h1>

                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">Head of Projects</p>
                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300">12/4/2023</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Teams;