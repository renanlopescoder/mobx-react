const dateFormat = (date, format = 'YYYY-MM-DD') => {
  const day = date.getUTCDate();
  const month = (date.getUTCMonth() + 1);
  const year = date.getUTCFullYear();
  if (format === 'YYYY-MM-DD') {
    return new Date(`${year}-${month}-${day}`);
  };
  return `${day}/${month}/${year}`;
};

const dateISO = date => date.toISOString().split('T')[0];

export { dateFormat, dateISO };
