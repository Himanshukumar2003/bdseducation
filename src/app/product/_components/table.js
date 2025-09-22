export default function TableVariation({ specifications }) {
  return (
    <div className="section ">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Start a Journey with a Buildable Robotics Kit
          </h2>
        </div>
        <div className="p-6 bg-white shadow-xl">
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Product Specifications
          </h2>
          <div className="overflow-x-auto border bg-white rounded-2xl">
            <table className="min-w-full text-sm text-left border-collapse bg-white">
              <tbody>
                {specifications.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 font-[700] text-[16px] text-gray-700 w-1/3">
                      {item.title}
                    </td>
                    <td className="px-4 py-3 font-[500]">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
