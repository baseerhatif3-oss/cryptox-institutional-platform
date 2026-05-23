import React, {
  useState,
} from "react";

import toast from "react-hot-toast";

const Settings = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [name, setName] =
    useState(
      user?.name || ""
    );

  const [email, setEmail] =
    useState(
      user?.email || ""
    );

  const [
    currentPassword,
    setCurrentPassword,
  ] = useState("");

  const [
    newPassword,
    setNewPassword,
  ] = useState("");

  const [twoFA, setTwoFA] =
    useState(false);

  /*
  ==========================================
  SAVE PROFILE
  ==========================================
  */

  const saveProfile = () => {

    toast.success(
      "Profile updated successfully"
    );
  };

  /*
  ==========================================
  UPDATE PASSWORD
  ==========================================
  */

  const updatePassword =
    () => {

      if (
        !currentPassword ||
        !newPassword
      ) {

        return toast.error(
          "Fill all password fields"
        );
      }

      toast.success(
        "Password updated"
      );

      setCurrentPassword("");
      setNewPassword("");
    };

  /*
  ==========================================
  GENERATE API KEY
  ==========================================
  */

  const generateApiKey =
    () => {

      toast.success(
        "New API key generated"
      );
    };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Settings
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Manage profile, security and account preferences
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
          ACCOUNT SECURED
        </div>

      </div>

      {/* GRID */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="xl:col-span-2 space-y-8">

          {/* PROFILE */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-black mb-8">
              Profile Settings
            </h2>

            <div className="space-y-6">

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

              <button
                onClick={saveProfile}
                className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-black text-black"
              >

                Save Changes

              </button>

            </div>

          </div>

          {/* PASSWORD */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-black mb-8">
              Security Settings
            </h2>

            <div className="space-y-6">

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  Current Password
                </label>

                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

              <div>

                <label className="block mb-3 text-gray-400 font-semibold">
                  New Password
                </label>

                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                  className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
                />

              </div>

              <button
                onClick={updatePassword}
                className="bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-2xl font-black"
              >

                Update Password

              </button>

            </div>

          </div>

          {/* API */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-3xl font-black mb-8">
              API Management
            </h2>

            <div className="space-y-6">

              <div className="bg-black border border-white/10 rounded-2xl p-6">

                <p className="text-gray-400 text-sm">
                  Active API Key
                </p>

                <h3 className="font-black mt-3 break-all">
                  sk_live_82jd82jd92jd9dj29dj29
                </h3>

              </div>

              <button
                onClick={generateApiKey}
                className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-2xl font-black"
              >

                Generate New API Key

              </button>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          {/* 2FA */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Two Factor Auth
            </h2>

            <div className="flex items-center justify-between mb-6">

              <div>

                <p className="font-bold">
                  Enable 2FA
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Extra layer of account security
                </p>

              </div>

              <button
                onClick={() =>
                  setTwoFA(
                    !twoFA
                  )
                }
                className={`w-16 h-9 rounded-full transition relative ${
                  twoFA
                    ? "bg-green-500"
                    : "bg-gray-700"
                }`}
              >

                <div
                  className={`absolute top-1 w-7 h-7 rounded-full bg-white transition ${
                    twoFA
                      ? "left-8"
                      : "left-1"
                  }`}
                />

              </button>

            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-5">

              <p className="text-gray-400 text-sm">
                Current Status
              </p>

              <h3 className="font-black mt-2 text-green-400">
                {twoFA
                  ? "ENABLED"
                  : "DISABLED"}
              </h3>

            </div>

          </div>

          {/* SESSIONS */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Active Sessions
            </h2>

            <div className="space-y-5">

              <div className="bg-black border border-white/10 rounded-2xl p-5">

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="font-black">
                      Chrome • MacOS
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      Karachi, Pakistan
                    </p>

                  </div>

                  <span className="text-green-400 font-bold text-sm">
                    ACTIVE
                  </span>

                </div>

              </div>

              <button className="w-full bg-red-500 hover:bg-red-600 transition py-4 rounded-2xl font-black">

                Logout All Sessions

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;