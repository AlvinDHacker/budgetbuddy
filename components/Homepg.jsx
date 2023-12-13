import { UserCircle2 } from "lucide-react";
import { Scan } from "lucide-react";
import { PlusCircle } from "lucide-react";
import { Route } from "lucide-react";
import Image from "next/image";
import React from "react";

const Homepg = () => {
  return (
    <div>
      <div>
        <div className="md:w-[90%] mx-auto">
          <h1 className="md:block hidden p-3 m-3">Welcome Username</h1>
          <div className="md:hidden">
            <div className="rounded-full px-5 p-3 m-3 bg-transparent border border-white">
              Welcome Username
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="rounded-lg bg-white mx-3 py-2">
              <h2 className="text-black mx-4 my-2">Balance</h2>
              <ul role="list" className=" my-2 md:w-[90%] w-[95%] mx-auto">
                <li className="pb-3">
                  <div className="rounded-full border-2 border-black p-2 px-4 flex items-center">
                    <UserCircle2 />
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        HDFC Bank
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        13/12/2023
                      </p>
                    </div>
                    <div className="inline-flex text-green-400 items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                    </div>
                  </div>
                </li>
                <li className="pb-3 ">
                  <div className="rounded-full border-2 border-black p-2 px-4 flex items-center">
                    <UserCircle2 />
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Citizen Credit Bank
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        13/12/2023
                      </p>
                    </div>
                    <div className="inline-flex text-green-400 items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1200
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white mx-3 py-2">
              <div className="flex justify-between">
                <h2 className="text-black mx-4 my-2">Recent Transactions</h2>
                <Scan />
              </div>
              <ul role="list" className="mx-3 my-2 md:w-[90%] w-[95%] mx-auto">
                <li className="pb-3">
                  <div className="rounded-full border-2 border-black p-2 px-4 flex items-center">
                    <UserCircle2 />
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        HDFC Bank
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        13/12/2023
                      </p>
                    </div>
                    <div className="inline-flex text-red-400 items-center text-base font-semibold text-gray-900 dark:text-white">
                      $320
                    </div>
                  </div>
                </li>
                <li className="pb-3">
                  <div className="rounded-full border-2 border-black p-2 px-4 flex items-center">
                    <UserCircle2 />
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Citizen Credit Bank
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        13/12/2023
                      </p>
                    </div>
                    <div className="inline-flex text-red-400 items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1200
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-1 m-3">
          <h2 className="px-3">Goals</h2>
          <div className="flex flex-row gap-2 py-2">
            <div className="rounded-full bg-white text-black border-2 border-black p-2 px-4 flex items-center">
              <h3>Short Term</h3>
            </div>
            <div className="rounded-full bg-white text-black border-2 border-black p-2 px-4 flex items-center">
              <h3>Long Term</h3>
              <Route />
            </div>
          </div>
          <div className="flex flex-row gap-3 ">
          <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <Image src='' className="m-3 rounded-lg" width={20} height={20}/>
                <h3 className="mx-3 py-2 divide-y text-lg">Buy a House</h3>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                    <div>
                        <span className="text-md">$100 </span>
                        <span className="text-xs">out of $200</span>
                    </div>
                </div>
            </div>
            <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <Image src='' className="m-3 rounded-lg" width={20} height={20}/>
                <h3 className="mx-3 py-2 divide-y text-lg">Buy a House</h3>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                    <div>
                        <span className="text-md">$100 </span>
                        <span className="text-xs">out of $200</span>
                    </div>
                </div>
            </div>
          </div>
          </div>

          <div className="p-1 mx-3">
          <h2 className="px-3">Budget</h2>
          <div className="flex flex-row gap-3 ">
          <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <Image src='' className="m-3 rounded-lg" width={20} height={20}/>
                <h3 className="mx-3 py-2 divide-y text-lg">Buy a House</h3>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                    <div>
                        <span className="text-md">$100 </span>
                        <span className="text-xs">out of $200</span>
                    </div>
                </div>
            </div>
            <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <Image src='' className="m-3 rounded-lg" width={20} height={20}/>
                <h3 className="mx-3 py-2 divide-y text-lg">Buy a House</h3>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                    <div>
                        <span className="text-md">$100 </span>
                        <span className="text-xs">out of $200</span>
                    </div>
                </div>
            </div>
          </div>
          </div>
          
          <div className="p-1 m-3">
          <h2 className="px-3">Investments</h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-2 py-2">
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4 ">
            <Image src='/img/insurance.png' className="m-1 mx-auto rounded-lg" width={100} height={20}/>
              <h3>Insurance</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <Image src='/img/mutualf.png' className="m-1 mx-auto rounded-lg" width={75} height={20}/>
              <h3>Mutual Funds</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <Image src='/img/nps.png' className="mx-auto my-1 rounded-lg" width={90} height={20}/>
              <h3>NPS</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <div className="h-4"/>
            <Image src='/img/stocks.png' className="mx-auto my-3 rounded-lg" width={120} height={20}/>
              <h3>Stocks</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <Image src='/img/sip.png' className="m-3 rounded-lg" width={100} height={20}/>
              <h3>SIP's</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <Image src='/img/homeloan.png' className="m-3 rounded-lg" width={100} height={20}/>
              <h3>Govt. Bonds</h3>
            </div>
          </div>
          </div>

          <div className="p-1 m-3">
          <h2 className="px-3">Debts</h2>
          <div className="grid md:grid-cols-6 grid-cols-2 gap-2 py-2">
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <Image src='/img/homeloan.png' className="mx-0.5 my-2 rounded-lg" width={120} height={120}/>
              <h3>Home Loan</h3>
            </div>
            <div className="rounded-lg bg-white text-black border-2 border-black p-2 px-4">
            <PlusCircle/>
            </div>
          </div>
          </div>

          <div className="p-1 m-3">
          <h2 className="px-3">Blogs</h2>
          <div className="flex flex-row gap-3 ">
          <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <h3 className="mx-3 pt-2 divide-y text-lg">Buy a House</h3>
                <div className="mx-3 flex flex-row justify-between">
                    <p className="text-xs">Times of India</p>
                    <p className="text-xs">Alston Soares</p>
                </div>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                </div>
            </div>
            <div className="rounded-lg w-[80%] text-black bg-white my-3 py-2">
                <h3 className="mx-3 pt-2 divide-y text-lg">Buy a House</h3>
                <div className="mx-3 flex flex-row justify-between">
                    <p className="text-xs">Times of India</p>
                    <p className="text-xs">Alston Soares</p>
                </div>
                <div className="w-[95%] mx-auto bg-gray-100 h-0.5 "/>
                <div className="mx-3 py-2">
                    <p className="text-sm">Money Saved</p>
                </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepg;