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
        "BTC Alert",
      message:
        "Bitcoin crossed above $82,000.",
      time:
        "2m ago",
    },

    {
      title:
        "AI Signal",
      message:
        "New BUY signal detected for ETH.",
      time:
        "10m ago",
    },

    {
      title:
        "Security",
      message:
        "New login detected on your account.",
      time:
        "1h ago",
    },

    {
      title:
        "Rewards",
      message:
        "You earned 50 XP from trading.",
      time:
        "3h ago",
    },
  ];

  return (

    <div className="relative">

      {/* BELL */}

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="relative w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:scale-105 transition"
      >

        <FaBell />

        <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />

      </button>

      {/* DROPDOWN */}

      {open && (

        <div className="absolute right-0 mt-4 w-[360px] max-w-[90vw] bg-[#111] border border-white/10 rounded-[28px] shadow-2xl overflow-hidden z-50">

          <div className="p-6 border-b border-white/10">

            <h2 className="text-2xl font-black">
              Notifications
            </h2>

          </div>

          <div className="max-h-[450px] overflow-y-auto">

            {notifications.map(
              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="p-6 border-b border-white/5 hover:bg-white/5 transition"
                >

                  <div className="flex items-center justify-between">

                    <h3 className="font-black">
                      {item.title}
                    </h3>

                    <span className="text-xs text-gray-500">
                      {item.time}
                    </span>

                  </div>

                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {item.message}
                  </p>

                </div>

              )
            )}

          </div>

          <div className="p-5">

            <button className="w-full bg-yellow-500 hover:bg-yellow-600 transition py-3 rounded-2xl font-black text-black">

              View All Notifications

            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default NotificationCenter;