import { BarChart3, PieChart, LineChart } from "lucide-react";
import { useInView } from "../../../components/hooks/useInView";

const businessFocusData = [
  {
    id: 1,
    title: "Telecom",
    icon: <BarChart3 size={24} />,
    description:
      "Global mobile data traffic will grow by 8 fold over the period 2015 – 2020. Mobile data traffic will grow as a compound annual growth rate of 53% to reach an average of 30.6 Exabyte per month."
  },
  {
    id: 2,
    title: "Media",
    icon: <PieChart size={24} />,
    description:
      "Advances in telecom broadband network and mobile devices have opened up brand new markets to the Media and Entertainment industry. Consumers have changed the way they consume content."
  },
  {
    id: 3,
    title: "Digital",
    icon: <LineChart size={24} />,
    description:
      "The launch of Apple's iPhone in 2007 was a catalyst for change in telecom and ICT; reshaping communication and interaction."
  }
];

const FocusCard = ({ item, inView, delay }) => {
  return (
    <div
      className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionProperty: "all",
        transitionDuration: "700ms"
      }}
    >
      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        {item.icon}
      </div>

      <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
      <p className="text-gray-700 leading-relaxed">{item.description}</p>

      <button className="mt-6 text-blue-800 font-medium flex items-center group-hover:underline">
        Learn more
      </button>
    </div>
  );
};

const BusinessFocus = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="focus"
      className="w-full py-20 px-4 md:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <h2
          className={`text-4xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-12 text-center ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        >
          Business Focus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {businessFocusData.map((item, index) => (
            <FocusCard
              key={item.id}
              item={item}
              inView={inView}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessFocus;
