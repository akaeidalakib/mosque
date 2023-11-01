import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div class="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
            <div><Image width={500} height={500} alt="image" src="https://images.unsplash.com/photo-1527788263495-3518a5c1c42d?auto=format&fit=crop&q=80&w=1508&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
            <div>09</div>
        </div>
    );
};

export default page;