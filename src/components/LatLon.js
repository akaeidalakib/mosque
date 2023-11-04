"use client"
import React, { useState } from "react";
import axios from "axios";

const Geocode = () => {
    const address = "london";
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleGeocode = async () => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
                    address
                )}&format=json`
            );
            if (response.data.length > 0) {
                const { lat, lon } = response.data[0];
                setLatitude(lat);
                setLongitude(lon);
            }
        } catch (error) {
            console.error("Error fetching data from the API", error);
        }
    };
    handleGeocode()
    //onClick={handleGeocode}
    return (
        <div>
            <button >Get Latitude and Longitude</button>
            {latitude && longitude && (
                <div>
                    <p>Latitude: {latitude}</p>
                    <p>Longitude: {longitude}</p>
                </div>
            )}
        </div>
    );
};

export default Geocode;