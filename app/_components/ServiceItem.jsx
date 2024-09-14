import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ServiceItem = ({ logo, service }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between mt-2 m-2">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="logo" width={60} height={25} />
        <small className="text-black">{service}</small>
      </div>
      <span
        className="font-semibold cursor-pointer"
        onClick={() => router.push(`/services/${service.toLowerCase()}`)}
      >
        Seleccionar
      </span>
    </div>
  );
};

export default ServiceItem;
