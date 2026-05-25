import MainLayout from "../components/layout/MainLayout";

const SecurityCenter = () => {

  return (

    <MainLayout>

      <div className="max-w-4xl mx-auto">

        <div className="mb-10">

          <h1 className="text-5xl font-black">
            Security Center
          </h1>

          <p className="text-zinc-500 mt-2">
            Protect your exchange account
          </p>

        </div>

        <div className="space-y-8">

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black mb-2">
                  Email Verification
                </h2>

                <p className="text-zinc-500">
                  Secure your account with verified email
                </p>

              </div>

              <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-black">

                Verify

              </button>

            </div>

          </div>

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black mb-2">
                  Two-Factor Authentication
                </h2>

                <p className="text-zinc-500">
                  Add extra layer of protection
                </p>

              </div>

              <button className="bg-green-500 text-black px-6 py-3 rounded-2xl font-black">

                Enable 2FA

              </button>

            </div>

          </div>

          <div className="bg-[#111] border border-yellow-500/10 rounded-3xl p-8">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black mb-2">
                  Anti-Phishing Code
                </h2>

                <p className="text-zinc-500">
                  Prevent phishing attacks
                </p>

              </div>

              <button className="bg-blue-500 text-white px-6 py-3 rounded-2xl font-black">

                Configure

              </button>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>
  );
};

export default SecurityCenter;