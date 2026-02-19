import Image, { StaticImageData } from "next/image";

interface InfoItemProps {
  icon: StaticImageData;
  iconAlt: string;
  label: string;
  value: string;
}

export default function InfoItem({
  icon,
  iconAlt,
  label,
  value,
}: InfoItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Image className="w-5 h-5" src={icon} alt={iconAlt} />
      <p className="text-md font-extralight">
        <strong className="font-semibold">{label}:</strong> {value}
      </p>
    </div>
  );
}
