import DonationCard from '@/components/donationCard';
import React from 'react';

const pages = () => {
    return (
        <div className="py-10">
            <div><h2 className="text-center border-b pb-10 mb-6 shadow-sm text-2xl font-bold">DONATIONS</h2></div>
            <DonationCard />
        </div>
    );
};

export default pages;