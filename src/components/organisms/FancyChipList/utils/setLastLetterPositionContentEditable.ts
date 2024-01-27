export const setLastLetterPositionContentEditable = (element: HTMLElement) => {
  const range = document.createRange();
  const selection = window.getSelection();

  range.selectNodeContents(element);
  range.collapse(false); // Set the cursor at the end

  selection?.removeAllRanges();
  selection?.addRange(range);
};
