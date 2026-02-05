function Section({ number, title, content }) {
  return (
    <div className="mb-4 pb-4 border-b border-gray-200 last:border-0">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
        {number && (
          <span className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold">
            {number}
          </span>
        )}
        {title}
      </h3>

      <div className={number ? "ml-12" : ""}>{content}</div>
    </div>
  );
}

export default Section;
