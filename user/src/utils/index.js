export const generateTimeOptions = () => {
  const times = [];
  const startHour = 8;
  const endHour = 21;

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === endHour && minute > 30) {
        break;
      }

      const ampm = hour < 12 ? "AM" : "PM";
      const hour12 = hour % 12 === 0 ? 12 : hour % 12;
      const timeString = `${hour12}:${minute < 10 ? "0" : ""}${minute} ${ampm}`;

      times.push({ label: timeString, value: timeString });
    }
  }
  return times;
};
