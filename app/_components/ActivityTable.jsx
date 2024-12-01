import Image from 'next/image';
import ActivityItem from './ActivityItem';
import { usePathname, useRouter } from 'next/navigation';
import FilterOptions from './FilterOptions';
import { useEffect, useState, useMemo } from 'react';
import Pagination from './Pagination';

const ActivityTable = ({ activity, searchQuery }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredActivity, setFilteredActivity] = useState([]);
  const itemsPerPage = 10;
  const router = useRouter();
  const params = usePathname();

  useEffect(() => {
    setFilteredActivity(Array.isArray(activity) ? activity : []);
  }, [activity]);

  const applyFilter = filteredData => {
    setFilteredActivity(Array.isArray(filteredData) ? filteredData : []);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchQuery && Array.isArray(activity)) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const searchFilteredActivity = activity.filter(item => {
        const origin = item.origin ? item.origin.toLowerCase() : '';
        const type = item.type ? item.type.toLowerCase() : '';
        const description = item.description
          ? item.description.toLowerCase()
          : '';

        return (
          origin.includes(lowercasedQuery) ||
          type.includes(lowercasedQuery) ||
          description.includes(lowercasedQuery)
        );
      });
      setFilteredActivity(searchFilteredActivity);
    } else {
      setFilteredActivity(Array.isArray(activity) ? activity : []);
    }
  }, [searchQuery, activity]);

  const sortedActivity = useMemo(() => {
    return [...filteredActivity].sort((a, b) => new Date(b.dated) - new Date(a.dated));
  }, [filteredActivity]);

  const totalPages = Math.ceil(sortedActivity.length / itemsPerPage);

  const currentItems = useMemo(() => {
    if (params === '/activity') {
      return sortedActivity.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    }
    return [];
  }, [params, sortedActivity, currentPage]);

  const lastTransactions = useMemo(() => {
    return sortedActivity.slice(0, 5);
  }, [sortedActivity]);

  return (
    <div className="m-4 p-4 flex flex-col gap-4 shadow-xl rounded-xl w-[335px] md:w-[511px] lg:w-[800px]">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Tu actividad</h2>
        {params === '/activity' && (
          <div
            className="flex gap-3 cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <h3 className="underline text-xl">Filtrar</h3>
            <Image src="/filter.svg" alt="filter" width={20} height={20} />
          </div>
        )}
      </div>
      {showFilter && (
        <FilterOptions
          activity={activity}
          applyFilter={applyFilter}
          setShowFilter={setShowFilter}
        />
      )}
      <hr className="h-[2px] bg-gray-300 border-gray-300" />
      <div className="flex flex-col gap-4">
        {params === '/home'
          ? lastTransactions.map(item => (
            <ActivityItem
              key={item.id}
              id={item.id}
              name={item.origin}
              money={item.amount}
              date={item.dated}
            />
          ))
          : currentItems.map(item => (
            <ActivityItem
              key={item.id}
              id={item.id}
              name={item.origin}
              money={item.amount}
              date={item.dated}
            />
          ))}
      </div>
      {params === '/activity' && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
      {params === '/home' && (
        <div
          className="flex justify-between mb-28 cursor-pointer"
          onClick={() => router.push('/activity')}
        >
          <p className="font-semibold text-sm">Ver toda tu actividad</p>
          <Image src="/arrowBtn.svg" alt="arrow" width={20} height={20} />
        </div>
      )}
    </div>
  );
};

export default ActivityTable;