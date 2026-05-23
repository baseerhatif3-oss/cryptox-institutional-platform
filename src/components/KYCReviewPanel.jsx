import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const API =
  "https://crypto-backend-dojp.onrender.com/api";

const KYCReviewPanel =
  () => {

    const [kycs, setKycs] =
      useState([]);

    const [loading, setLoading] =
      useState(true);

    /*
    ==========================================
    FETCH KYC RECORDS
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
              `${API}/kyc/admin/all`
            );

          setKycs(
            res.data.kycs || []
          );

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    /*
    ==========================================
    APPROVE
    ==========================================
    */

    const approveKYC =
      async (id) => {
        try {

          await axios.post(
            `${API}/kyc/approve/${id}`
          );

          fetchKYC();

        } catch (error) {

          console.log(error);
        }
      };

    /*
    ==========================================
    REJECT
    ==========================================
    */

    const rejectKYC =
      async (id) => {

        const reason =
          prompt(
            "Enter rejection reason"
          );

        if (!reason) return;

        try {

          await axios.post(
            `${API}/kyc/reject/${id}`,
            {
              reason,
            }
          );

          fetchKYC();

        } catch (error) {

          console.log(error);
        }
      };

    if (loading) {

      return (
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
          Loading KYC records...
        </div>
      );
    }

    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-3xl font-bold">
              KYC Review Panel
            </h2>

            <p className="text-gray-400 mt-2">
              Compliance verification queue
            </p>

          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 px-4 py-2 rounded-xl text-sm">
            ADMIN
          </div>

        </div>

        <div className="space-y-6">

          {kycs.length === 0 && (

            <div className="text-gray-500">
              No KYC submissions found
            </div>

          )}

          {kycs.map(
            (kyc) => (

              <div
                key={kyc._id}
                className="bg-black border border-gray-800 rounded-2xl p-6"
              >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                  {/* LEFT */}

                  <div className="space-y-4">

                    <div>

                      <p className="text-gray-400">
                        User
                      </p>

                      <h3 className="text-xl font-bold mt-1">
                        {
                          kyc.user?.name
                        }
                      </h3>

                    </div>

                    <div>

                      <p className="text-gray-400">
                        Email
                      </p>

                      <h3 className="mt-1">
                        {
                          kyc.user?.email
                        }
                      </h3>

                    </div>

                    <div>

                      <p className="text-gray-400">
                        Full Name
                      </p>

                      <h3 className="mt-1">
                        {
                          kyc.fullName
                        }
                      </h3>

                    </div>

                    <div>

                      <p className="text-gray-400">
                        Country
                      </p>

                      <h3 className="mt-1">
                        {
                          kyc.country
                        }
                      </h3>

                    </div>

                    <div>

                      <p className="text-gray-400">
                        Document Type
                      </p>

                      <h3 className="mt-1">
                        {
                          kyc.documentType
                        }
                      </h3>

                    </div>

                    <div>

                      <p className="text-gray-400">
                        Status
                      </p>

                      <h3
                        className={`mt-1 font-bold ${
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
                      </h3>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div className="space-y-6">

                    {/* DOCUMENT */}

                    <div>

                      <p className="text-gray-400 mb-3">
                        Document
                      </p>

                      <img
                        src={`https://crypto-backend-dojp.onrender.com/uploads/${kyc.documentImage}`}
                        alt="document"
                        className="w-full h-64 object-cover rounded-2xl border border-gray-800"
                      />

                    </div>

                    {/* SELFIE */}

                    <div>

                      <p className="text-gray-400 mb-3">
                        Selfie
                      </p>

                      <img
                        src={`https://crypto-backend-dojp.onrender.com/uploads/${kyc.selfieImage}`}
                        alt="selfie"
                        className="w-full h-64 object-cover rounded-2xl border border-gray-800"
                      />

                    </div>

                  </div>

                </div>

                {/* ACTIONS */}

                {kyc.status ===
                  "PENDING" && (

                  <div className="flex gap-4 mt-8">

                    <button
                      onClick={() =>
                        approveKYC(
                          kyc._id
                        )
                      }
                      className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-bold"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        rejectKYC(
                          kyc._id
                        )
                      }
                      className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-xl font-bold"
                    >
                      Reject
                    </button>

                  </div>

                )}

                {/* REJECTION */}

                {kyc.rejectionReason && (

                  <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-5">

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

            )
          )}

        </div>

      </div>
    );
  };

export default
  KYCReviewPanel;