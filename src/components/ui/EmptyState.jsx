const EmptyState = ({
  title,
  text,
}) => {

  return (

    <div className="glass rounded-3xl p-14 text-center">

      <h2 className="text-4xl font-black mb-6 text-yellow-400">

        {
          title
        }

      </h2>

      <p className="text-zinc-500 text-xl max-w-2xl mx-auto leading-relaxed">

        {
          text
        }

      </p>

    </div>
  );
};

export default EmptyState;