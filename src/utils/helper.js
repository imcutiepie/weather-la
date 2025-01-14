export const formatDateTime = (epoch) => {
  const date = new Date(epoch * 1000);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = String(hours % 12 || 12).padStart(2, '0');

  return `${day}-${month}-${year} ${formattedHours}:${minutes}${ampm}`;
};

export const removeDP = (value) => {
  return Math.floor(value);
};

export const appendDegreeSymbol = (value) => {
  return `${removeDP(value)}°`;
};
