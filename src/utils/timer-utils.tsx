export const getDateString = () => {
  const date = new Date()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return ({
    year: date.getFullYear(),
    month: months[date.getMonth()],
    date: date.getDate(),
    day: days[date.getDay()],
  })
}