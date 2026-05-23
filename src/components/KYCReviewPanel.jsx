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

    const [error, setError] =
      useState("");

    /*
    ==========================================
    FETCH KYC
    ==========================================
    */

    useEffect(() => {

      fetchKYC();

    }, []);

    const fetchKYC =
      async () => {

        try {

          setError("");

          const res =
            await axios.get(
              `${API}/kyc/admin/all`
            );

          console.log(
            res.data
          );

          if (
            res.data &&
            Array.isArray(
              res.data.kycs
            )
          ) {

            setKycs(
              res.data.kycs
            );

          } else {

            setKycs([]);
          }

        } catch (err) {

          console.log(err);

          setError(
            "Failed to load KYC records"
          );

          setKycs([]);

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

        } catch (err) {

          console.log(err);
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

        } catch (err) {

          console.log(err);
        }
      };

    /*
    ==========================================
    LOADING
    ==========================================
    */

    if (loading) {

      return (
        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 text-white">
          Loading KYC...
        </div>
      );
    }

    /*
    ==========================================
    ERROR
    ==========================================
    */

    if (error) {

      return (
        <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6 text-red-400">
          {error}
        </div>
      );
    }

    return (
      <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">

        {/* HEADER */}

        <div className="mb-8">

          <h2 className="text-3xl font-bold">
            KYC Review Panel
          </h2>

          <p className="text-gray-400 mt-2">
            Compliance verification queue
          </p>

        </div>

        {/* EMPTY */}

        {kycs.length === 0 && (

          <div className="text-gray-500">
            No KYC submissions found
          </div>

        )}

        {/* LIST */}

        <div className="space-y-6">

          {kycs.map(
            (kyc) => (

              <div
                key={kyc._id}
                className="bg-black border border-gray-800 rounded-2xl p-6"
              >

                <div className="space-y-4">

                  <div>

                    <p className="text-gray-400">
                      User
                    </p>

                    <h3 className="text-xl font-bold mt-1">
                      {
                        kyc?.user
                          ?.name ||
                        "Unknown User"
                      }
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Email
                    </p>

                    <h3>
                      {
                        kyc?.user
                          ?.email ||
                        "No Email"
                      }
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Full Name
                    </p>

                    <h3>
                      {
                        kyc.fullName
                      }
                    </h3>

                  </div>

                  <div>

                    <p className="text-gray-400">
                      Status
                    </p>

                    <h3 className="text-yellow-400 font-bold">
                      {
                        kyc.status
                      }
                    </h3>

                  </div>

                </div>

                {/* ACTIONS */}

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={() =>
                      approveKYC(
                        kyc._id
                      )
                    }
                    className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      rejectKYC(
                        kyc._id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold"
                  >
                    Reject
                  </button>

                </div>

              </div>

            )
          )}

        </div>

      </div>
    );
  };

export default
  KYCReviewPanel;