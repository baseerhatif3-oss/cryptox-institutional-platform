import React, {
  useState,
} from "react";

import {
  FaRobot,
} from "react-icons/fa";

const AITradingAssistant = () => {

  const [messages, setMessages] =
    useState([
      {
        role: "ai",

        text:
          "Hello trader 👋 I am your AI market assistant. Ask me about BTC, ETH, trends or trading signals.",
      },
    ]);

  const [input, setInput] =
    useState("");

  /*
  ==========================================
  SEND MESSAGE
  ==========================================
  */

  const sendMessage = () => {

    if (!input) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    let aiReply = {
      role: "ai",
      text:
        "Current market sentiment appears bullish with increasing volume and momentum across major crypto assets.",
    };

    if (
      input.toLowerCase().includes("btc")
    ) {

      aiReply.text =
        "BTC trend remains bullish above major support zones. Momentum indicators are showing strength.";
    }

    if (
      input.toLowerCase().includes("eth")
    ) {

      aiReply.text =
        "ETH ecosystem activity is increasing rapidly with strong DeFi and ETF-related momentum.";
    }

    if (
      input.toLowerCase().includes("sol")
    ) {

      aiReply.text =
        "SOL continues showing strong network growth and trading activity with rising liquidity.";
    }

    setMessages([
      ...messages,
      userMessage,
      aiReply,
    ]);

    setInput("");
  };

  return (

    <div className="bg-[#111] border border-white/10 rounded-[32px] overflow-hidden">

      {/* HEADER */}

      <div className="p-6 border-b border-white/10 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black text-2xl">
            <FaRobot />
          </div>

          <div>

            <h2 className="text-2xl font-black">
              AI Trading Assistant
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              GPT-powered market intelligence
            </p>

          </div>

        </div>

        <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm font-bold">
          AI ONLINE
        </div>

      </div>

      {/* CHAT */}

      <div className="h-[400px] overflow-y-auto p-6 space-y-5">

        {messages.map(
          (
            msg,
            index
          ) => (

            <div
              key={index}
              className={`flex ${
                msg.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              <div
                className={`max-w-[80%] px-5 py-4 rounded-2xl ${
                  msg.role === "user"
                    ? "bg-yellow-500 text-black"
                    : "bg-black border border-white/10"
                }`}
              >

                <p className="font-medium leading-relaxed">
                  {msg.text}
                </p>

              </div>

            </div>

          )
        )}

      </div>

      {/* INPUT */}

      <div className="p-6 border-t border-white/10 flex gap-4">

        <input
          type="text"
          value={input}
          onChange={(e) =>
            setInput(
              e.target.value
            )
          }
          placeholder="Ask AI about market trends..."
          className="flex-1 bg-black border border-white/10 rounded-2xl px-5 py-4"
        />

        <button
          onClick={sendMessage}
          className="bg-yellow-500 hover:bg-yellow-600 transition px-8 rounded-2xl font-black text-black"
        >

          Send

        </button>

      </div>

    </div>
  );
};

export default AITradingAssistant;