import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const DonationCard = () => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-2">
            <div className=" bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <Image width={500} height={500} src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="donation" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Madrasa fees</h2>
                    <p>£20.00 every month</p>
                    <div className="flex  gap-y-4 flex-col justify center">
                        <Link href='/cart'><button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <Image width={500} height={500} src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="donation" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> £20.00 every month</h2>
                    <p> £20.00 every month</p>
                    <div className="flex  gap-y-4 flex-col justify center">
                        <Link href='/store'><button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <Image width={500} height={500} src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="donation" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Alhidaya Ramadhan Fundraising</h2>
                    <p>Alhidaya Ramadhan Fundraising - 30.png
                        £30 MONTHLY DONATION</p>
                    <div className="flex  gap-y-4 flex-col justify center">
                        <Link href='/store'><button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <Image width={500} height={500} src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="donation" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">ZAKATUL FITR - FITRANA</h2>
                    <p>ZAKATUL FITR - FITRANA £4.00 Zakatul Fitr - Fitrana is £4 per person in family</p>
                    <div className="flex  gap-y-4 flex-col justify center">
                        <Link href='/store'><button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl">
                <figure className="px-4 pt-10">
                    <Image width={500} height={500} src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="donation" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">MORNING MADRASA FEES</h2>
                    <p>£30.00 every month
                        Madrasa Fees</p>
                    <div className="flex  gap-y-4 flex-col justify center">
                        <Link href='/store'><button className="w-56 bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-700">Donate $20</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;