import { useState, useMemo } from "react";

export default function useSort(data, key, order) {

  // key / sortBy -> title || category
  // order / sortOrder -> asc || desc

  const [sortBy, setSortBy] = useState(key);
  const [sortOrder, setSortOrder] = useState(order == "asc" ? 1 : -1);

  // handle sort -------------------------------------------------------------------------
  const handleSort = (trigger) => {
    if (trigger === sortBy) {
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      setSortBy(trigger);
      setSortOrder(1);
    }
  };

  // sorted Data -------------------------------------------------------------------------
  const sortedData = useMemo(() => {
    const tempData = [...data];

    tempData.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.toLowerCase().localeCompare(bValue.toLowerCase()) * sortOrder;
      } else {
        return (aValue < bValue ? -1 : aValue > bValue ? 1 : 0) * sortOrder;
      }
    });
    return tempData;
  }, [data, sortBy, sortOrder]);

  return {
    sortedData,
    handleSort,
    sortBy,
    sortOrder,
  };
}
