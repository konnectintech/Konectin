const currentYear = new Date().getFullYear();
export const years = [];
for (let year = currentYear; year >= 1905; year--) {
  years.push({ id: year.toString(), label: year.toString() });
}
