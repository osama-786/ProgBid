import { Smartphone, Globe, Zap, Briefcase } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const stats = [
  {
    icon: Smartphone,
    value: 1.5,
    suffix: "M+",
    label: "Apps Globally",
    gradient: "from-red-600 to-indigo-600",
    iconColor: "text-red-600",
    shadow: "shadow-indigo-200",
  },
  {
    icon: Globe,
    value: 105,
    suffix: "+",
    label: "Countries Served",
    gradient: "from-fuchsia-500 to-orange-500",
    iconColor: "text-fuchsia-500",
    shadow: "shadow-orange-200",
  },
  {
    icon: Zap,
    value: 2,
    suffix: "B+",
    label: "Daily Active Users",
    gradient: "from-red-500 to-indigo-500",
    iconColor: "text-red-500",
    shadow: "shadow-indigo-200",
  },
  {
    icon: Briefcase,
    value: 100,
    suffix: "+",
    label: "Global Brands",
    gradient: "from-fuchsia-600 to-pink-600",
    iconColor: "text-fuchsia-600",
    shadow: "shadow-pink-200",
  },
];

const StatItem = ({
  icon: Icon,
  value,
  suffix,
  label,
  gradient,
  iconColor,
  shadow,
}: {
  icon: typeof Smartphone;
  value: number;
  suffix: string;
  label: string;
  gradient: string;
  iconColor: string;
  shadow: string;
}) => {
  const { count, ref } = useCounterAnimation({ end: value, duration: 2000 });

  return (
    <div ref={ref} className="text-center group p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
      
      {/* Icon Container with Blurred Gradient Background */}
      <div className="relative mb-6 mx-auto w-16 h-16 flex items-center justify-center rounded-2xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
        
        {/* The Blurred Gradient Blob */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 blur-sm rounded-2xl group-hover:opacity-20 transition-opacity duration-300`} />
        
        {/* The Icon (Solid Color) */}
        <Icon className={`w-8 h-8 ${iconColor} relative z-10`} strokeWidth={1.5} />
      
      </div>

      {/* Number with Gradient Text */}
      <div className={`text-4xl md:text-4xl font-black mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {count}
        {suffix}
      </div>

      {/* Label */}
      <p className="text-slate-500 font-medium text-lg">{label}</p>
    </div>
  );
};

const StatsCounterSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50 mx-4 md:mx-8 rounded-[3rem] my-8 shadow-md">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            ProgBid In <span className="text-transparent bg-clip-text gradient-text">Numbers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-xl mx-auto">
            Scale that speaks for itself. We deliver consistent growth across the globe.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;