import MainLayout from "../components/layout/MainLayout";

const Notifications = () => {

  const notifications = [

    {
      title: "BTC Buy Order Executed",
      message: "Your BTCUSDT order has been filled successfully.",
      time: "2 min ago",
      type: "success",
    },

    {
      title: "AI Signal Alert",
      message: "Strong BUY signal detected for ETHUSDT.",
      time: "10 min ago",
      type: "info",
    },

    {
      title: "Security Login Detected",
      message: "New login detected from Karachi, Pakistan.",
      time: "1 hour ago",
      type: "warning",
    },

    {
      title: "Withdrawal Completed",
      message: "0.15 BTC withdrawal processed successfully.",
      time: "3 hours ago",
      type: "success",
    },
  ];

  return (

    <MainLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black">
          Notifications
        </h1>

        <p className="text-zinc-500 mt-2">
          Real-time platform alerts and updates
        </p>

      </div>

      <div className="space-y-6">

        {
          notifications.map(
            (notification, index) => (

              <div
                key={index}
                className="bg-[#111] border border-yellow-500/10 rounded-3xl p-6"
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">

                  <h2 className="text-2xl font-black">
                    {notification.title}
                  </h2>

                  <span className="text-zinc-500 text-sm">
                    {notification.time}
                  </span>

                </div>

                <p className="text-zinc-400">
                  {notification.message}
                </p>

              </div>
            )
          )
        }

      </div>

    </MainLayout>
  );
};

export default Notifications;