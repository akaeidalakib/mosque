import Image from 'next/image';
import React from 'react';

const Card = () => {
    return (
        <div className="py-4">
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><Image src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  width={500}
  height={500}
  alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary ">Donate Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;