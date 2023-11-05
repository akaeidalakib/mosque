import React from 'react';

const page = () => {

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>subs</th>
                            <th>payment type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.squarespace-cdn.com/content/v1/5728efc8b6aa606956c3aa1d/1553360462481-3KRGQRB4T66LUBFFUTZI/AH-Donate-Icon-50.png?format=300w" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                JANAZA FUND MONTHLY SUBSCRIPTION
                                <br />
                                <span className="badge badge-ghost badge-sm">£10.00 every month</span>
                            </td>
                            <td>Paypal</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.squarespace-cdn.com/content/v1/5728efc8b6aa606956c3aa1d/1553360462481-3KRGQRB4T66LUBFFUTZI/AH-Donate-Icon-50.png?format=300w" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">China</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                MONTHLY HIFZ FEES
                                <br />
                                <span className="badge badge-ghost badge-sm">£50.00 every month</span>
                            </td>
                            <td>Card</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.squarespace-cdn.com/content/v1/5728efc8b6aa606956c3aa1d/1553360462481-3KRGQRB4T66LUBFFUTZI/AH-Donate-Icon-50.png?format=300w" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Russia</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                £20 MONTHLY DONATION
                                <br />
                                <span className="badge badge-ghost badge-sm">£20.00 every month</span>
                            </td>
                            <td>Crimson</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.squarespace-cdn.com/content/v1/5728efc8b6aa606956c3aa1d/1655582776984-M5KJCBIJPOMJKQQAZBDP/Girls_Youth_Club.jpg?format=500w" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Brazil</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                GIRLS YOUTH CLUB
                                <br />
                                <span className="badge badge-ghost badge-sm">£5.00 every month</span>
                            </td>
                            <td>paypal</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Subs</th>
                            <th>payment type</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default page;