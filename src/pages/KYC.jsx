import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../services/api";

const KYC = () => {
  const [formData, setFormData] =
    useState({
      fullName: "",
      documentType: "Passport",
      documentNumber: "",
    });

  const [documentImage, setDocumentImage] =
    useState(null);

  const [kyc, setKyc] =
    useState(null);

  const fetchKYC = async () => {
    try {
      const { data } = await API.get(
        "/kyc"
      );

      setKyc(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchKYC();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append(
        "fullName",
        formData.fullName
      );

      data.append(
        "documentType",
        formData.documentType
      );

      data.append(
        "documentNumber",
        formData.documentNumber
      );

      data.append(
        "documentImage",
        documentImage
      );

      await API.post("/kyc", data, {
        headers: {
          "Content-Type":
            "multipart/form-data",
        },
      });

      toast.success(
        "KYC submitted successfully"
      );

      fetchKYC();
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message ||
          "Submission failed"
      );
    }
  };

  if (kyc) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-6">
        <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-6">
            KYC Status
          </h1>

          <div className="space-y-5">
            <div>
              <p className="text-slate-400">
                Full Name
              </p>

              <h2 className="text-xl font-bold">
                {kyc.fullName}
              </h2>
            </div>

            <div>
              <p className="text-slate-400">
                Document Type
              </p>

              <h2 className="text-xl font-bold">
                {kyc.documentType}
              </h2>
            </div>

            <div>
              <p className="text-slate-400">
                Status
              </p>

              <h2 className="text-xl font-bold text-yellow-400">
                {kyc.status}
              </h2>
            </div>

            <img
              src={`https://crypto-backend-dojp.onrender.com/${kyc.documentImage}`}
              alt="KYC"
              className="rounded-2xl mt-6"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8">
        <h1 className="text-4xl font-bold mb-2">
          KYC Verification
        </h1>

        <p className="text-slate-400 mb-8">
          Submit your identity documents
          for verification.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={(e) =>
              setFormData({
                ...formData,
                fullName:
                  e.target.value,
              })
            }
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
          />

          <select
            value={formData.documentType}
            onChange={(e) =>
              setFormData({
                ...formData,
                documentType:
                  e.target.value,
              })
            }
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
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

          <input
            type="text"
            placeholder="Document Number"
            required
            value={
              formData.documentNumber
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                documentNumber:
                  e.target.value,
              })
            }
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
          />

          <input
            type="file"
            required
            onChange={(e) =>
              setDocumentImage(
                e.target.files[0]
              )
            }
            className="w-full bg-slate-800 p-4 rounded-xl outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold"
          >
            Submit KYC
          </button>
        </form>
      </div>
    </div>
  );
};

export default KYC;