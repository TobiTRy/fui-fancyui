// Define a function to generate an array of page numbers to display
export const generateNumbers = (totalPages: number, currentPage: number, pageLimit = 3) => {
  const numbers: (number | string)[] = [];

  let startPage = currentPage - Math.floor(pageLimit / 2);
  let endPage = currentPage + Math.floor(pageLimit / 2);

  if (pageLimit % 2 === 0) {
    startPage += 1; // If pageLimit is even, favor showing one less page before the current page
  }

  // Adjust if the range goes outside the total pages
  if (startPage < 1) {
    endPage += Math.abs(startPage) + 1;
    startPage = 1;
  }

  // Adjust if the range goes outside the total pages
  if (endPage > totalPages) {
    startPage -= endPage - totalPages;
    endPage = totalPages;
  }

  // Adjust if the range is still outside the total pages
  startPage = Math.max(startPage, 1);

  // Add the dots if the range is still outside the total pages
  if (startPage > 1) {
    numbers.push('...');
  }

  // Generate the array of page numbers
  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  // Add the dots if the range is still outside the total pages
  if (endPage < totalPages) {
    numbers.push('...');
  }

  return numbers;
};
