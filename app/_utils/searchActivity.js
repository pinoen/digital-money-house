// src/utils/searchActivity.js

export const searchActivity = (query, activity) => {
  if (!query) return activity;

  const lowerCaseQuery = query.toLowerCase();

  return activity.filter(item =>
    item.origin.toLowerCase().includes(lowerCaseQuery) ||
    item.type.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery)
  );
};
