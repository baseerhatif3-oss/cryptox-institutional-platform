import React, {
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const KYC = () => {

  const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

  const [documentType, setDocumentType] =
    useState("Passport");

  const [documentFile, setDocumentFile] =
    useState(null);

  const [selfieFile, setSelfieFile] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  /*
  ==========================================
  SUBMIT KYC
  ==========================================
  */

  const submitKYC =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const formData =
          new FormData();

        formData.append(
          "userId",
          user.id
        );

        formData.append(
          "documentType",
          documentType
        );

        formData.append(
          "document",
          documentFile
        );

        formData.append(
          "selfie",
          selfieFile
        );

        const res =
          await axios.post(
            `${API}/kyc/upload`,
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        alert(
          res.data.message
        );

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "KYC submission failed"
        );

      } finally {

        setLoading(false);
      }
    };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Identity Verification
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            Secure institutional KYC verification infrastructure
          </p>

        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-5 py-3 rounded-2xl font-bold">
          COMPLIANCE ACTIVE
        </div>

      </div>

      {/* STATUS CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Verification Status
          </p>

          <h2 className="text-4xl font-black mt-5 text-yellow-400">
            PENDING
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Security Layer
          </p>

          <h2 className="text-4xl font-black mt-5 text-green-400">
            ACTIVE
          </h2>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

          <p className="text-gray-400">
            Verification Level
          </p>

          <h2 className="text-4xl font-black mt-5">
            LEVEL 2
          </h2>

        </div>

      </div>

      {/* MAIN FORM */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* LEFT */}

        <div className="xl:col-span-2 bg-[#111] border border-white/10 rounded-[36px] p-10">

          <div className="mb-10">

            <h2 className="text-4xl font-black">
              Submit Verification
            </h2>

            <p className="text-gray-400 text-lg mt-4">
              Upload identity documents for account verification
            </p>

          </div>

          <form
            onSubmit={submitKYC}
            className="space-y-8"
          >

            {/* DOCUMENT TYPE */}

            <div>

              <label className="block mb-4 text-gray-400 font-semibold">
                Document Type
              </label>

              <select
                value={documentType}
                onChange={(e) =>
                  setDocumentType(
                    e.target.value
                  )
                }
                className="w-full bg-black border border-white/10 rounded-2xl px-5 py-5"
              >

                <option>
                  Passport
                </option>

                <option>
                  National ID
                </option>

                <option>
                  Driving License
                </option>

              </select>

            </div>

            {/* DOCUMENT */}

            <div>

              <label className="block mb-4 text-gray-400 font-semibold">
                Identity Document
              </label>

              <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center bg-black/40">

                <input
                  type="file"
                  onChange={(e) =>
                    setDocumentFile(
                      e.target.files[0]
                    )
                  }
                  className="w-full"
                  required
                />

                <p className="text-gray-500 mt-5">
                  Upload high-quality government issued ID
                </p>

              </div>

            </div>

            {/* SELFIE */}

            <div>

              <label className="block mb-4 text-gray-400 font-semibold">
                Selfie Verification
              </label>

              <div className="border-2 border-dashed border-white/10 rounded-3xl p-10 text-center bg-black/40">

                <input
                  type="file"
                  onChange={(e) =>
                    setSelfieFile(
                      e.target.files[0]
                    )
                  }
                  className="w-full"
                  required
                />

                <p className="text-gray-500 mt-5">
                  Upload a clear selfie for facial verification
                </p>

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 transition py-5 rounded-2xl font-black text-lg"
            >

              {loading
                ? "Submitting..."
                : "Submit Verification"}

            </button>

          </form>

        </div>

        {/* RIGHT */}

        <div className="space-y-8">

          {/* SECURITY */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Security Standards
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  AML Compliance
                </p>

                <h3 className="font-black text-green-400">
                  ENABLED
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Data Encryption
                </p>

                <h3 className="font-black text-green-400">
                  AES-256
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Verification Time
                </p>

                <h3 className="font-black">
                  24H
                </h3>

              </div>

              <div className="flex items-center justify-between">

                <p className="text-gray-400">
                  Storage Security
                </p>

                <h3 className="font-black text-green-400">
                  SECURE
                </h3>

              </div>

            </div>

          </div>

          {/* BENEFITS */}

          <div className="bg-[#111] border border-white/10 rounded-[32px] p-8">

            <h2 className="text-2xl font-black mb-6">
              Verification Benefits
            </h2>

            <div className="space-y-5">

              <div className="bg-black/40 border border-white/5 rounded-2xl p-5">

                <h3 className="font-black">
                  Higher Withdrawals
                </h3>

                <p className="text-gray-500 mt-2">
                  Increase account withdrawal limits
                </p>

              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-5">

                <h3 className="font-black">
                  Futures Access
                </h3>

                <p className="text-gray-500 mt-2">
                  Unlock leveraged futures trading
                </p>

              </div>

              <div className="bg-black/40 border border-white/5 rounded-2xl p-5">

                <h3 className="font-black">
                  Institutional Security
                </h3>

                <p className="text-gray-500 mt-2">
                  Enhanced account protection systems
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default KYC;