// src/utils/dateFilters.js

export const applyDateFilter = (selectedPeriod, activity) => {
  const now = new Date()
  let filteredData = []

  switch (selectedPeriod) {
    case 'Hoy':
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate.toDateString() === now.toDateString()
      })
      break
    case 'Ayer':
      const yesterday = new Date(now)
      yesterday.setDate(yesterday.getDate() - 1)
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate.toDateString() === yesterday.toDateString()
      })
      break
    case 'Esta semana':
      const startOfWeek = new Date(now)
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate >= startOfWeek && itemDate <= now
      })
      break
    case 'Ultima semana':
      const endOfLastWeek = new Date(now)
      endOfLastWeek.setDate(endOfLastWeek.getDate() - now.getDay() - 1)
      const startOfLastWeek = new Date(endOfLastWeek)
      startOfLastWeek.setDate(startOfLastWeek.getDate() - 6)
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate >= startOfLastWeek && itemDate <= endOfLastWeek
      })
      break
    case 'Ultimos 15 días':
      const fifteenDaysAgo = new Date(now)
      fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15)
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate >= fifteenDaysAgo && itemDate <= now
      })
      break
    case 'Ultimo mes':
      const oneMonthAgo = new Date(now)
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate >= oneMonthAgo && itemDate <= now
      })
      break
    case 'Ultimo año':
      const oneYearAgo = new Date(now)
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)
      filteredData = activity.filter(item => {
        const itemDate = new Date(item.dated)
        return itemDate >= oneYearAgo && itemDate <= now
      })
      break
    default:
      filteredData = activity
  }

  return filteredData
}