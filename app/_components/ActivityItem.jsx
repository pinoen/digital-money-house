import { useRouter } from 'next/navigation';
import { formatDateToDDMMYY } from '../_utils/dateFormatter';
const ActivityItem = ({ id, name, money, date }) => {
  const router = useRouter();
  const formattedMoney = new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(money);
  const operation =
    money > 0 ? 'Te transfirieron dinero' : 'Transferiste dinero';

  return (
    <div
      className="flex justify-between my-2 cursor-pointer"
      onClick={() => router.push(`/activity/${id}`)}
    >
      <div className="flex justify-start gap-2">
        <div className="bg-A3 w-6 h-6 rounded-full"></div>
        <span>
          {operation} ({name})
        </span>
      </div>
      <div className="flex flex-col">
        <span className="w-[100px]">$ {formattedMoney}</span>
        <small className="text-gray-400">{formatDateToDDMMYY(date)}</small>
      </div>
    </div>
  );
};

export default ActivityItem;
