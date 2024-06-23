// --------------------------------------------------------------------------- //
// ------------------- function to copy to the Clipboard --------------------- //
// --------------------------------------------------------------------------- //
// https://stackoverflow.com/a/53951634/938822
const copyToClipboard = (textToCopyd: string) => {
  let textarea;
  let result;

  try {
    // Create a textarea element
    textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', 'true');
    textarea.setAttribute('contenteditable', 'true');
    textarea.style.position = 'fixed'; // prevent scroll from jumping to the bottom when focus is set.
    textarea.value = textToCopyd;

    // Set the styles for the textarea to be hidden
    document.body.appendChild(textarea);

    // Select the content of the textarea
    textarea.focus();
    textarea.select();

    // Copy the selected content
    const range = document.createRange();
    range.selectNodeContents(textarea);

    // Remove all ranges from the selection.
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);

    textarea.setSelectionRange(0, textarea.value.length);
    result = document.execCommand('copy');
    textarea.blur();
  } catch (err) {
    console.error(err);
    result = null;
  } finally {
    if (textarea) document.body.removeChild(textarea);
  }

  // manual copy fallback using prompt
  if (!result) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const copyHotkey = isMac ? '⌘C' : 'CTRL+C';
    result = prompt(`Press ${copyHotkey}`, textToCopyd);
    if (!result) {
      return false;
    }
  }
  return true;
};

export default copyToClipboard;
