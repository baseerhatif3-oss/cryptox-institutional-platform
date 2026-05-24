import React, {
  useState,
} from "react";

import {
  FaBell,
} from "react-icons/fa";

const NotificationCenter = () => {

  const [open, setOpen] =
    useState(false);

  const notifications = [

    {
      title:
        "BTC Buy Order Filled",

      time:
        "2 min ago",
    },

    {
      title:
        "Withdrawal Successful",

      time:
        "8 min ago",
    },

    {
      title:
        "New Login Detected",

      time:
        "15 min ago",
    },

    {
      title:
        "KYC Verification Approved",

      time:
        "1 hour ago",
    },
  ];

  return (

    <div className="relative">

      {/* BUTTON */}

      <button
        onClick={() =>
          setOpen(
            !open
          )
        }
        className="relative w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-lg"
      >

        <FaBell />

        <span className="absolute top-2 right-2 w-3 h-3 rounded-full bg-yellow-400 animate-pulse" />

      </button>

      {/* DROPDOWN */}

      {open && (

        <div className="absolute right-0 mt-4 w-[360px] bg-[#111] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-50">

          {/* HEADER */}

          <div className="p-6 border-b border-white/10">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-black">
                Notifications
              </h2>

              <span className="text-xs bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full font-bold">
                4 NEW
              </span>

            </div>

          </div>

          {/* LIST */}

          <div className="max-h-[400px] overflow-y-auto">

            {notifications.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="p-5 border-b border-white/5 hover:bg-white/[0.03] transition"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-bold">
                        {
                          item.title
                        }
                      </h3>

                      <p className="text-gray-500 text-sm mt-2">
                        {
                          item.time
                        }
                      </p>

                    </div>

                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />

                  </div>

                </div>

              )
            )}

          </div>

          {/* FOOTER */}

          <div className="p-4 text-center">

            <button className="text-yellow-400 font-bold hover:underline">

              View All Notifications

            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default NotificationCenter;