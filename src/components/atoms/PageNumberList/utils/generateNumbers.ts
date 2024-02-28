// Define a function to generate an array of page numbers to display
export const generateNumbers = (totalPages: number, currentPage: number, showPages: number) => {
  const numbers: (number | string)[] = [];
  const ellipsis = '...';

  // show the count of the shown pages but the current page is always in the middle
  let startPage = currentPage - Math.floor(showPages / 2);
  let endPage = currentPage + Math.floor(showPages / 2);

  // when startPage is less than 1, we need to adjust the endPage
  if (startPage < 1) {
    startPage = 1;
    endPage += 1;
  }

  // when endPage is greater than totalPages, we need to adjust the startPage
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage -= 1;
  }

  // generate the array of page numbers
  for (let i = startPage; i <= Math.min(endPage, totalPages); i++) {
    numbers.push(i);
  }

  // calculate the items that not shown in the list
  const startDots = startPage > 1 ? ellipsis : '';
  const endDots = endPage < totalPages ? ellipsis : '';

  // Add the dots if the range is still outside the total pages
  if (startPage > 1) {
    numbers.unshift(startDots);
  }
  // Add the dots if the range is still outside the total pages
  if (endPage < totalPages) {
    numbers.push(endDots);
  }

  return numbers;
};

// let startPage = currentPage - Math.floor(pageLimit / 2);
// let endPage = currentPage + Math.floor(pageLimit / 2);

// if (pageLimit % 2 === 0) {
//   startPage += 1; // If pageLimit is even, favor showing one less page before the current page
// }

// // Adjust if the range goes outside the total pages
// if (startPage < 1) {
//   endPage += Math.abs(startPage) + 1;
//   startPage = 1;
// }

// // Adjust if the range goes outside the total pages
// if (endPage > totalPages) {
//   startPage -= endPage - totalPages;
//   endPage = totalPages;
// }

// console.log('startPage', startPage, endPage);

// // Adjust if the range is still outside the total pages
// startPage = Math.max(startPage, 1);

// // Add the dots if the range is still outside the total pages
// if (startPage > 1) {
//   numbers.push('...');
// }

// // Generate the array of page numbers
// for (let i = startPage; i <= endPage; i++) {
//   numbers.push(i);
// }

// // Add the dots if the range is still outside the total pages
// if (endPage < totalPages) {
//   numbers.push('...');
// }
