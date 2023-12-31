"use client"
import React, { useEffect, useState } from "react";
import { convertTo12HourFormat } from "@/utils/timeZone";
const MonthlyTimeTable = () => {
    const [data, SetData] = useState([])

    const [isToday, setIsToday] = useState(false);

    const url = "https://api.aladhan.com/v1/calendar/2023/11?latitude=51.376163&longitude=-0.098234&method=2";
    useEffect(() => {
        const fetchPData = async () => {
            const res = await fetch(url);
            const prayerData = await res.json();
            SetData(prayerData.data);
            console.log(prayerData.data);

        };
        fetchPData();
    }, [])
    console.log(data)
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <div className="flex flex-col justify-center py-5">
            <div className="grid grid-cols-1 place-items-center pb-4">
                <h2 className="text-center text-2xl py-8"> PRAYER TIMES</h2>
                <button className="border-black border p-4 text-black justify-items-center ">
                    DOWNLOAD 2023 CALENDAR
                </button>
            </div>
            <select className="select select-success w-full max-w-xs mb-4">
                <option value="" disabled selected>Select a month</option>
                {months.map((month, index) => (
                    <option key={index} value={month}>
                        {month}
                    </option>
                ))}
            </select>
            <table className="table-auto border-collapse border border-slate-400">
                <thead>
                    <tr>
                        <th colSpan={2} className="border p-2 border-slate-300">Date</th>
                        <th colSpan={3} className="border p-2 border-slate-300">Fajr</th>
                        <th colSpan={2} className="border p-2 border-slate-300">Zuhr</th>
                        <th colSpan={2} className="border p-2 border-slate-300">Asr</th>
                        <th colSpan={2} className="border p-2 border-slate-300">Magrib</th>
                        <th colSpan={2} className="border p-2 border-slate-300">Ishā</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2 border-slate-300">Date</td>
                        <td className="border p-2 border-slate-300">Day</td>
                        <td className="border p-2 border-slate-300">Begins</td>
                        <td className="border p-2 border-slate-300">Jamā‘ah</td>
                        <td className="border p-2 border-slate-300">Sunrise</td>
                        <td className="border p-2 border-slate-300">Begins</td>
                        <td className="border p-2 border-slate-300">Jamā‘ah</td>
                        <td className="border p-2 border-slate-300">Begins</td>
                        <td className="border p-2 border-slate-300">Jamā‘ah</td>
                        <td className="border p-2 border-slate-300">Begins</td>
                        <td className="border p-2 border-slate-300">Jamā‘ah</td>
                        <td className="border p-2  border-slate-300">Begins</td>
                        <td className="border p-2 border-slate-300">Jamā‘ah</td>
                    </tr>
                    {data && data.map((prayer, index) => {
                        const day = prayer.date.gregorian.weekday.en.substring(0, 3);
                        const date = prayer.date.gregorian.day
                        const { Asr, Dhuhr, Fajr, Isha, Maghrib, Sunrise, Sunset } = prayer.timings;
                        const fFajr = convertTo12HourFormat(Fajr.split(" ", 1));
                        const fDhuhr = convertTo12HourFormat(Dhuhr.split(" ", 1));
                        const fAsr = convertTo12HourFormat(Asr.split(" ", 1));
                        const fMaghrib = convertTo12HourFormat(Maghrib.split(" ", 1));
                        const fIsha = convertTo12HourFormat(Isha.split(" ", 1));
                        const fSunrise = convertTo12HourFormat(Sunrise.split(" ", 1));
                        let d = new Date();
                        let today = d.getDate();
                        if (today < 10) {
                            today = '0' + today;
                        }
                        return (
                            <tr
                                className={today === date ? 'bg-black text-white font-medium' : 'text-black font-normal'}
                                key={index}>
                                <td className="border p-2 border-slate-300">{date}</td>
                                <td className="border p-2 border-slate-300">{day}</td>
                                <td className="border p-2 border-slate-300">{fFajr}</td>
                                <td className="border p-2 border-slate-300">6:00</td>
                                <td className="border p-2 border-slate-300">{fSunrise}</td>
                                <td className="border p-2 border-slate-300">{fDhuhr}</td>
                                <td className="border p-2 border-slate-300">12:45</td>
                                <td className="border p-2 border-slate-300">{fAsr}</td>
                                <td className="border p-2 border-slate-300">3:00</td>
                                <td className="border p-2 border-slate-300">{fMaghrib}</td>
                                <td className="border p-2 border-slate-300">4:45 PM</td>
                                <td className="border p-2 border-slate-300">{fIsha}</td>
                                <td className="border p-2 border-slate-300">6:15 PM</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MonthlyTimeTable;