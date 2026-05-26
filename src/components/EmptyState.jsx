const EmptyState = ({
  title,
  description,
}) => {

  return (

    <div className="glass rounded-3xl p-14 text-center">

      <div className="w-24 h-24 rounded-full bg-yellow-400/10 flex items-center justify-center mx-auto mb-8">

        <span className="text-5xl">
          📭
        </span>

      </div>

      <h2 className="text-4xl font-black mb-4">

        {title}

      </h2>

      <p className="text-zinc-500 text-lg max-w-xl mx-auto">

        {description}

      </p>

    </div>
  );
};

export default EmptyState;