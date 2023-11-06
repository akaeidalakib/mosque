"use client"
import React, { useEffect, useState } from "react";
import { convertTo12HourFormat } from "@/utils/timeZone";
import Link from "next/link";
const TodayPrayer = () => {
  const address = "london";
  const [todaySalat, setTodaySalat] = useState({})
  const [todayDate, setTodayDate] = useState({})
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${address}`);
      const newData = await response.json();
      console.log(newData)
      setLatitude(newData[0].lat)
      setLongitude(newData[0].lon)
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchPData = async () => {
      const res = await fetch("https://api.aladhan.com/v1/timings/05-11-2023?latitude=51.376163&longitude=-0.098234&method=2");
      const prayerData = await res.json();
      setTodaySalat(prayerData.data.timings)
      setTodayDate(prayerData.data.date)

    };
    fetchPData();
  }, [])
  console.log(todayDate)
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
              {convertTo12HourFormat(todaySalat.Fajr)}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat(todaySalat.Dhuhr)}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat(todaySalat.Asr)}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat(todaySalat.Maghrib)}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat(todaySalat.Isha)}
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
              Jamā‘ah
            </td>
            <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
              {convertTo12HourFormat("05:20")}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat("12:00")}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat("14:20")}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat("16:45")}
            </td>
            <td className="px-4 py-4 text-sm text-black dark:text-gray-300 whitespace-nowrap">
              {convertTo12HourFormat("18:30")}
            </td>
          </tr>
          <tr className="border-b-2 border-gray-200">
            <td colSpan={6} className="wd-100 text-center px-4 py-4 text-sm font-medium text-black dark:text-gray-300 whitespace-nowrap border-b-2 border-gray-200">
              <span>{`${todayDate?.readable}  // ${todayDate?.hijri?.day} ${todayDate?.hijri?.month?.en}`}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center py-10">
        <Link href="/monthly-timetable">
          <button className="border p-4 border-black tracking-normal font-medium uppercase text-black hover:text-white text-lg hover:bg-black">
            monthly timetable
          </button>
        </Link>
      </div>
      <span></span>
    </div>
  );
};

export default TodayPrayer;