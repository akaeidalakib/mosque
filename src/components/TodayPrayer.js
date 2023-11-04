"use client"
import React, { useEffect, useState } from "react";
import Geocode from "./LatLon";
import { convertTo12HourFormat } from "@/utils/timeZone";
const TodayPrayer = () => {
  const address = "london";
  const [todaySalat, setTodaySalat] = useState({})
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${address}`;
  // fetch(url)
  //   .then(res => res.json())
  //   .then(json => {
  //     setLatitude(json[0].lat)
  //     setLongitude(json[0].lon)
  //   })
  // const salatUrl = `https://api.aladhan.com/v1/timings/04-11-2023?latitude=${latitude}&longitude=${longitude}&method=4`;
  // fetch(salatUrl)
  //   .then(res => res.json())
  //   .then(data => console.log(data))


  return (
    <div className="container overflow-hidden px-10">
      <div className="py-14">
        <h2 className="text-center font-bold text-2xl">TODAY’S PRAYER TIMES</h2>
      </div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th
              scope="col"
              className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black dark:text-gray-400"
            >
              <div className="flex items-center gap-x-3">
                <span><h1></h1></span>
              </div>
            </th>

            <th
              scope="col"
              className="px-12 py-3.5 text-sm font-medium text-left rtl:text-right text-black dark:text-gray-400"
            >
              Fjr
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black dark:text-gray-400"
            >
              Dhuhr
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black dark:text-gray-400"
            >
              Asr
            </th>

            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black dark:text-gray-400"
            >
              Maghrib
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-black dark:text-gray-400"
            >
              Isha
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          <tr className="border-b-2 border-gray-200">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              Begins
            </td>
            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
              5:12
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              11:49
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              2:08
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              4:39
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              6:06
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              Jamā‘ah
            </td>
            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
              5:12
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              11:49
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              2:08
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              4:39
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              6:06
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td colSpan={6} className="wd-100 text-center px-4 py-4 text-sm font-medium text-black dark:text-gray-300 whitespace-nowrap border-b-2 border-gray-200">
              <span>Tue - 31 Oct // 16 Rabi‘ Al-Ākhir</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center py-10">
        <button className="border p-4 border-black tracking-normal font-medium uppercase text-black hover:text-white text-lg hover:bg-black">
          monthly timetable
        </button>
      </div>
      <Geocode />
      <span></span>
    </div>
  );
};

export default TodayPrayer;