import React, {
  useState,
} from "react";

const Profile =
  () => {
    const [
      form,
      setForm,
    ] = useState({
      name:
        "Baseer Hatif",

      email:
        "baseer@example.com",

      phone:
        "+92 300 0000000",
    });

    const [
      password,
      setPassword,
    ] = useState("");

    const handleChange =
      (e) => {
        setForm({
          ...form,

          [e.target.name]:
            e.target.value,
        });
      };

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            Profile Settings
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your exchange account and security
          </p>
        </div>

        {/* PROFILE */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={
                form.name
              }
              onChange={
                handleChange
              }
              placeholder="Full Name"
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

            <input
              type="email"
              name="email"
              value={
                form.email
              }
              onChange={
                handleChange
              }
              placeholder="Email"
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

            <input
              type="text"
              name="phone"
              value={
                form.phone
              }
              onChange={
                handleChange
              }
              placeholder="Phone Number"
              className="bg-black border border-gray-700 rounded-xl px-4 py-4"
            />
          </div>

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-xl">
            Save Changes
          </button>
        </div>

        {/* SECURITY */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-6">
            Security Settings
          </h2>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              value={
                password
              }
              onChange={(
                e
              ) =>
                setPassword(
                  e.target
                    .value
                )
              }
              className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
            />

            <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3 rounded-xl">
              Update Password
            </button>
          </div>
        </div>

        {/* KYC */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">
                KYC Verification
              </h2>

              <p className="text-gray-400 mt-2">
                Verify your identity for full exchange access
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full">
                Pending
              </span>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-xl">
                Start Verification
              </button>
            </div>
          </div>
        </div>

        {/* 2FA */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">
                Two-Factor Authentication
              </h2>

              <p className="text-gray-400 mt-2">
                Add extra security to your exchange account
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl">
              Enable 2FA
            </button>
          </div>
        </div>
      </div>
    );
  };

export default Profile;