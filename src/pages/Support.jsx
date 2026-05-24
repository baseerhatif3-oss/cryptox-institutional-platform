import React, {
  useState,
} from "react";

const Support = () => {

  const [messages, setMessages] =
    useState([
      {
        sender: "support",
        text:
          "Hello 👋 How can we help you today?",
      },
    ]);

  const [input, setInput] =
    useState("");

  const sendMessage = () => {

    if (!input.trim())
      return;

    setMessages([
      ...messages,

      {
        sender: "user",
        text: input,
      },

      {
        sender: "support",
        text:
          "Our support team will respond shortly.",
      },
    ]);

    setInput("");
  };

  return (

    <div className="space-y-10">

      {/* HEADER */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-black">
            Support Center
          </h1>

          <p className="text-gray-400 text-lg mt-3">
            24/7 customer support and live assistance
          </p>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-5 py-3 rounded-2xl font-bold">
          ONLINE
        </div>

      </div>

      {/* CHAT BOX */}

      <div className="bg-[#111] border border-white/10 rounded-[36px] overflow-hidden">

        <div className="p-6 border-b border-white/10 flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-black">
              Live Chat
            </h2>

            <p className="text-gray-400 mt-1">
              Average response time: 2 mins
            </p>

          </div>

          <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

        </div>

        {/* MESSAGES */}

        <div className="h-[500px] overflow-y-auto p-6 space-y-4">

          {messages.map(
            (
              msg,
              index
            ) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender ===
                  "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[75%] px-5 py-4 rounded-3xl font-medium ${
                    msg.sender ===
                    "user"
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 text-white"
                  }`}
                >

                  {msg.text}

                </div>

              </div>

            )
          )}

        </div>

        {/* INPUT */}

        <div className="p-6 border-t border-white/10 flex gap-4">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) =>
              setInput(
                e.target.value
              )
            }
            className="flex-1 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500"
          />

          <button
            onClick={sendMessage}
            className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl font-black text-black"
          >

            Send

          </button>

        </div>

      </div>

      {/* FAQ */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <h3 className="text-2xl font-black">
            Deposits
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Learn how to deposit crypto and fiat
            securely into your account.
          </p>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <h3 className="text-2xl font-black">
            Withdrawals
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Understand withdrawal processing,
            security and wallet verification.
          </p>

        </div>

        <div className="bg-[#111] border border-white/10 rounded-[36px] p-8">

          <h3 className="text-2xl font-black">
            Security
          </h3>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Enable 2FA, anti-phishing protection
            and account safety tools.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Support;