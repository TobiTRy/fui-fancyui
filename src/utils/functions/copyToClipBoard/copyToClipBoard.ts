// --------------------------------------------------------------------------- //
// ------------------- function to copy to the Clipboard --------------------- //
// --------------------------------------------------------------------------- //
const copyToClipboard = async (value: string) => {
  // Create a textarea element
  const textarea = document.createElement('textarea');
  // Set the value of the textarea to the text you want to copy
  textarea.value = value.toString();
  // Set the styles for the textarea to be hidden
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  // Append the textarea to the DOM
  document.body.appendChild(textarea);
  // Select the content of the textarea
  textarea.select();
  // Copy the selected content
  try {
    await navigator.clipboard.writeText(value);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
  // Remove the textarea from the DOM
  document.body.removeChild(textarea);
};

export default copyToClipboard;
