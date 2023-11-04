import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>

            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 pt-6">
                <div><Image width={500} height={500} alt="image" src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
                <div>
                    {/* this section for product type */}
                    <div>
                        <h2 className="font-bold from-neutral-950 text-3xl">Madressa Diary for the students to write their homework</h2>
                        <p>£3.00</p>
                        <p>Madressa Diary for the students to write their homework</p>
                        <div className="mx-auto flex h-8  text-gray-600">
                            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">-</button>
                            <div className="flex items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">1</div>
                            <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white">+</button>

                        </div>
                        <select className="select select-accent w-full max-w-xs">
                            <option selected>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                        </select>
                        <Link href="store"><button className="w-56 mt-3 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;