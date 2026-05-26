<button
  type="button"
  onClick={() => {

    localStorage.setItem(
      "token",
      "demo-user-token"
    );

    navigate(
      "/dashboard"
    );
  }}
  className="w-full bg-[#111] border border-yellow-500/20 hover:border-yellow-400 transition-all py-4 rounded-2xl font-bold mt-3"
>

  Continue Demo Account

</button>