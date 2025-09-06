const productSpecs = [
  {
    label: "Material",
    value: "Eco-friendly ABS plastic and food grade silicone",
  },
  { label: "Processor", value: "Arm® Cortex®-M4 @ 168 MHz" },
  { label: "Control Unit", value: "GD32F403RGT6" },
  {
    label: "Robot Sensors",
    value: "OID sensor, 6-axis motion sensor, LED indicator",
  },
  {
    label: "Pen Sensors",
    value:
      "OID sensor, 6-axis motion sensor, dual-axis joystick, button, LED indicator",
  },
  { label: "Battery", value: "Robot: 1800 mAh | Pen: 300 mAh" },
  { label: "Runtime", value: "≈ 1–2 hours play, ≈ 1–2 hours charge" },
  { label: "Speed", value: "250 RPM" },
  { label: "Communication", value: "2.4G" },
  { label: "Compatibility", value: "LEGO bricks" },
  { label: "Programming", value: "Coding cards" },
];

export default function SpecsTable() {
  return (
    <div className="section bg-gray-50">
      <div className="contanier max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-[600px] mx-auto">
          <span className="text-[var(--primary-blue)] font-semibold text-sm tracking-widest uppercase mb-4 block">
            Journey
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Start a Journey with a Buildable Robotics Kit
          </h2>
        </div>
        <div className=" p-6 bg-white shadow-xl ">
          {/* Heading */}
          <h2 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
            Product Specifications
          </h2>

          {/* Table */}
          <div className="overflow-x-auto border  bg-white  rounded-2xl">
            <table className="min-w-full text-sm text-left border-collapse bg-white">
              <tbody>
                {productSpecs.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3 font-[700] text-[16px]  text-gray-700 w-1/3">
                      {item.label}
                    </td>
                    <td className="px-4 py-3 font-[500]">{item.value}</td>
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
