import Image from "next/image";

type StatProps = {
  label: string;
  value: string;
  icon: string;
  valueIcon: string;
};

export default function Stat({ label, value, icon, valueIcon }: StatProps) {
  return (
    <div className="flex flex-col justify-center md:max-w-[168px] w-full md:space-y-0 space-y-5">
      <div className="flex items-center space-x-2">
        <Image src={icon} alt={label} width={18} height={18} />
        <span className="text-white/50 text-[15px] clashnormal">{label}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <Image
          src={valueIcon}
          alt={value}
          width={16}
          height={16}
          className="opacity-50"
        />
        <span className="text-2xl clashmedium">{value}</span>
      </div>
    </div>
  );
}
