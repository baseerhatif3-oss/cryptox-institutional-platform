import React, {
  useState,
} from "react";

const AIAssistant =
  () => {
    const [
      loading,
      setLoading,
    ] = useState(false);

    const [
      analysis,
      setAnalysis,
    ] = useState("");

    const generateAnalysis =
      async () => {
        setLoading(
          true
        );

        setTimeout(
          () => {
            setAnalysis(`
BTC Market Analysis:

• Trend: Bullish
• Momentum: Strong
• RSI: 64
• MACD: Positive crossover
• Support: $102,000
• Resistance: $108,500

AI Insight:
Market structure remains bullish with strong institutional buying pressure. Short-term continuation likely while BTC stays above support zone.

Suggested Strategy:
Consider scaling into long positions with tight risk management.
            `);

            setLoading(
              false
            );
          },

          2000
        );
      };

    return (
      <div className="space-y-6">
        {/* HEADER */}

        <div>
          <h1 className="text-3xl font-bold">
            AI Trading Assistant
          </h1>

          <p className="text-gray-400 mt-2">
            GPT-powered market intelligence system
          </p>
        </div>

        {/* HERO */}

        <div className="bg-gradient-to-r from-blue-500 to-indigo-700 rounded-2xl p-8">
          <h2 className="text-4xl font-bold">
            AI Market Intelligence
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Advanced AI-powered crypto market analysis and trading insights
          </p>

          <button
            onClick={
              generateAnalysis
            }
            disabled={
              loading
            }
            className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition"
          >
            {loading
              ? "Analyzing Market..."
              : "Generate AI Analysis"}
          </button>
        </div>

        {/* ANALYSIS */}

        <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 min-h-[400px]">
          <h2 className="text-2xl font-bold mb-6">
            AI Analysis Output
          </h2>

          {analysis ? (
            <pre className="whitespace-pre-wrap text-gray-300 leading-8">
              {analysis}
            </pre>
          ) : (
            <div className="h-[250px] flex items-center justify-center text-gray-500">
              Generate AI analysis to view market insights
            </div>
          )}
        </div>

        {/* FEATURES */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              AI Signals
            </h3>

            <p className="text-gray-400 mt-4">
              Receive realtime AI-generated trade opportunities.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Smart Risk
            </h3>

            <p className="text-gray-400 mt-4">
              AI-powered stop loss and portfolio risk management.
            </p>
          </div>

          <div className="bg-[#111] border border-gray-800 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Sentiment AI
            </h3>

            <p className="text-gray-400 mt-4">
              Analyze market sentiment using AI intelligence systems.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default AIAssistant;