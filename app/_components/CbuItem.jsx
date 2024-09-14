import Image from 'next/image';
import { toast } from 'react-toastify';

const CbuItem = ({ item, title }) => {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="mt-2 text-A3">{title}</h3>
        <p className="text-white mb-2">{item}</p>
      </div>
      <Image
        src="/copy.svg"
        alt="copy"
        width={24}
        height={24}
        onClick={() => {
          navigator.clipboard.writeText(item)
          toast.success(`${title} copiado al portapapeles`)
        }}
        className="cursor-pointer"
      />
    </div>
  );
};

export default CbuItem;
