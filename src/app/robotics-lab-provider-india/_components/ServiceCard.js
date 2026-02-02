const ServiceCard = ({ icon: Icon, number, title, description, features }) => {
  return (
    <div
      className="
        group relative rounded-2xl p-6 lg:p-8
        bg-gray-100 border border-gray-200
        shadow-[rgba(0,0,0,0.1)_0px_10px_50px]
        transition-all duration-500
        hover:-translate-y-2
        hover:bg-gradient-to-br hover:from-blue-500 hover:via-blue-600 hover:to-blue-700
        hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)]
      "
    >
      {/* Number Badge */}
      <div
        className="
          absolute -top-3 -right-3 w-10 h-10 rounded-full
          flex items-center justify-center
          text-sm font-bold
          bg-gradient-to-br from-blue-500 to-blue-600 text-white
          transition-colors
        "
      >
        {number}
      </div>

      {/* Icon */}
      <div
        className="
          w-14 h-14 rounded-xl flex items-center justify-center mb-5
          bg-blue-100 transition-all duration-300
          group-hover:bg-white/20 group-hover:scale-110
        "
      >
        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
      </div>

      {/* Title */}
      <h3
        className="
          text-lg lg:text-xl font-bold mb-3
          text-gray-900 group-hover:text-white transition-colors
        "
      >
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p
          className="
            text-sm mb-5 leading-relaxed
            text-gray-500 group-hover:text-white/80 transition-colors
          "
        >
          {description}
        </p>
      )}

      {/* Divider */}
      <div className="h-px w-full bg-gray-200 mb-4 group-hover:bg-white/20 transition-colors" />

      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, index) => {
          if (typeof feature === "string") {
            return (
              <li
                key={index}
                className="
                  flex items-start gap-2 text-sm leading-relaxed
                  text-gray-700 group-hover:text-white/90 transition-colors
                "
              >
                <span
                  className="
                    w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                    bg-blue-500 group-hover:bg-white transition-colors
                  "
                />
                {feature}
              </li>
            );
          }

          return (
            <li key={index} className="space-y-2">
              {/* Heading badge */}
              <span
                className="
                  inline-block text-xs font-semibold px-3 py-1 rounded-full
                  bg-blue-50 text-blue-600
                  group-hover:bg-white/20 group-hover:text-white transition-colors
                "
              >
                {feature.heading}
              </span>

              {/* Sub list */}
              <ul className="ml-4 space-y-2">
                {feature.list.map((item, i) => (
                  <li
                    key={i}
                    className="
                      flex items-start gap-2 text-sm
                      text-gray-600 group-hover:text-white/90 transition-colors
                    "
                  >
                    <span
                      className="
                        w-1 h-1 rounded-full mt-2 flex-shrink-0
                        bg-gray-400 group-hover:bg-white transition-colors
                      "
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServiceCard;
