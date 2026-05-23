import React, {
  useEffect,
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

  const [fullName, setFullName] =
    useState("");

  const [country, setCountry] =
    useState("");

  const [
    documentType,
    setDocumentType,
  ] = useState(
    "PASSPORT"
  );

  const [
    documentImage,
    setDocumentImage,
  ] = useState(null);

  const [
    selfieImage,
    setSelfieImage,
  ] = useState(null);

  const [loading, setLoading] =
    useState(false);

  const [kyc, setKyc] =
    useState(null);

  /*
  ==========================================
  FETCH KYC STATUS
  ==========================================
  */

  useEffect(() => {
    fetchKYC();
  }, []);

  const fetchKYC =
    async () => {
      try {

        const res =
          await axios.get(
            `${API}/kyc/${user.id}`
          );

        setKyc(
          res.data.kyc
        );

      } catch (error) {

        console.log(error);
      }
    };

  /*
  ==========================================
  SUBMIT KYC
  ==========================================
  */

  const submitKYC =
    async (
      e
    ) => {

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
          "fullName",
          fullName
        );

        formData.append(
          "country",
          country
        );

        formData.append(
          "documentType",
          documentType
        );

        formData.append(
          "documentImage",
          documentImage
        );

        formData.append(
          "selfieImage",
          selfieImage
        );

        const res =
          await axios.post(
            `${API}/kyc/submit`,
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

        fetchKYC();

      } catch (error) {

        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "KYC failed"
        );

      } finally {

        setLoading(false);
      }
    };

  /*
  ==========================================
  VERIFIED UI
  ==========================================
  */

  if (kyc) {

    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">

        <h1 className="text-4xl font-bold mb-6">
          KYC Verification
        </h1>

        <div className="space-y-4">

          <div className="bg-black border border-gray-800 rounded-xl p-5">

            <p className="text-gray-400">
              Full Name
            </p>

            <h2 className="text-xl font-bold mt-2">
              {
                kyc.fullName
              }
            </h2>

          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-5">

            <p className="text-gray-400">
              Country
            </p>

            <h2 className="text-xl font-bold mt-2">
              {
                kyc.country
              }
            </h2>

          </div>

          <div className="bg-black border border-gray-800 rounded-xl p-5">

            <p className="text-gray-400">
              Verification Status
            </p>

            <h2
              className={`text-xl font-bold mt-2 ${
                kyc.status ===
                "APPROVED"
                  ? "text-green-400"
                  : kyc.status ===
                    "REJECTED"
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {
                kyc.status
              }
            </h2>

          </div>

          {kyc.rejectionReason && (

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-5">

              <p className="text-red-400">
                Rejection Reason:
              </p>

              <p className="mt-2">
                {
                  kyc.rejectionReason
                }
              </p>

            </div>

          )}

        </div>

      </div>
    );
  }

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-8">

      <h1 className="text-4xl font-bold mb-2">
        KYC Verification
      </h1>

      <p className="text-gray-400 mb-8">
        Verify your identity to unlock full exchange access
      </p>

      <form
        onSubmit={submitKYC}
        className="space-y-6"
      >

        {/* FULL NAME */}

        <div>

          <label className="block mb-2 text-gray-400">
            Full Name
          </label>

          <input
            type="text"
            required
            value={fullName}
            onChange={(e) =>
              setFullName(
                e.target.value
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          />

        </div>

        {/* COUNTRY */}

        <div>

          <label className="block mb-2 text-gray-400">
            Country
          </label>

          <input
            type="text"
            required
            value={country}
            onChange={(e) =>
              setCountry(
                e.target.value
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          />

        </div>

        {/* DOCUMENT TYPE */}

        <div>

          <label className="block mb-2 text-gray-400">
            Document Type
          </label>

          <select
            value={documentType}
            onChange={(e) =>
              setDocumentType(
                e.target.value
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          >

            <option>
              PASSPORT
            </option>

            <option>
              ID_CARD
            </option>

            <option>
              DRIVING_LICENSE
            </option>

          </select>

        </div>

        {/* DOCUMENT IMAGE */}

        <div>

          <label className="block mb-2 text-gray-400">
            Upload Document
          </label>

          <input
            type="file"
            required
            onChange={(e) =>
              setDocumentImage(
                e.target.files[0]
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          />

        </div>

        {/* SELFIE */}

        <div>

          <label className="block mb-2 text-gray-400">
            Upload Selfie
          </label>

          <input
            type="file"
            required
            onChange={(e) =>
              setSelfieImage(
                e.target.files[0]
              )
            }
            className="w-full bg-black border border-gray-700 rounded-xl px-4 py-4"
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-xl font-bold"
        >

          {loading
            ? "Submitting..."
            : "Submit KYC"}

        </button>

      </form>

    </div>
  );
};

export default KYC;