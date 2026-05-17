import {
  Image,
  ShoppingBag,
  Flame,
} from "lucide-react";

const nfts = [
  {
    id: 1,
    name: "Cyber Ape #1021",
    price: "2.4 ETH",
    creator: "CryptoLabs",
    image:
      "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 2,
    name: "Meta Punk #889",
    price: "1.8 ETH",
    creator: "NFTVerse",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "Galaxy Warrior",
    price: "4.1 ETH",
    creator: "MetaArts",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 4,
    name: "AI Genesis",
    price: "3.7 ETH",
    creator: "FutureChain",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "Crypto Samurai",
    price: "2.9 ETH",
    creator: "NeoNFT",
    image:
      "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?q=80&w=1200&auto=format&fit=crop",
  },

  {
    id: 6,
    name: "Pixel Beast",
    price: "1.2 ETH",
    creator: "PixelWorld",
    image:
      "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?q=80&w=1200&auto=format&fit=crop",
  },
];

const NFTMarketplace = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-purple-600 p-4 rounded-3xl">
              <Image size={36} />
            </div>

            <div>
              <h1 className="text-5xl font-bold">
                NFT Marketplace
              </h1>

              <p className="text-slate-400 mt-2 text-lg">
                Explore and trade premium
                digital collectibles.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <ShoppingBag
              size={38}
              className="text-blue-400 mb-4"
            />

            <p className="text-slate-400">
              Total Collections
            </p>

            <h2 className="text-4xl font-bold mt-2">
              12,450
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Flame
              size={38}
              className="text-orange-400 mb-4"
            />

            <p className="text-slate-400">
              Trending Volume
            </p>

            <h2 className="text-4xl font-bold mt-2 text-orange-400">
              18.2K ETH
            </h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Image
              size={38}
              className="text-purple-400 mb-4"
            />

            <p className="text-slate-400">
              NFTs Listed
            </p>

            <h2 className="text-4xl font-bold mt-2">
              2.1M
            </h2>
          </div>
        </div>

        {/* NFT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-80 object-cover"
              />

              <div className="p-6">
                <div className="mb-5">
                  <h2 className="text-2xl font-bold">
                    {nft.name}
                  </h2>

                  <p className="text-slate-400 mt-1">
                    by {nft.creator}
                  </p>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-slate-400 text-sm">
                      Current Price
                    </p>

                    <h3 className="text-2xl font-bold text-purple-400">
                      {nft.price}
                    </h3>
                  </div>

                  <div className="bg-slate-800 px-4 py-2 rounded-xl">
                    NFT
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl font-bold transition">
                  Buy NFT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplace;