// Apply the theme to the DOM style sheet
export default function applyThemeToDomStyleSheet(theme: string, styleSheetId = 'fui-theme') {
  // Create the CSS string
  const css = `:root { ${theme} }`;

  // Get the style element from the DOM
  let styleSheet = document.getElementById(styleSheetId);

  // Check if the style element already exists
  // If it doesn't exist, create it
  if (!styleSheet) {
    // Create a new style element
    styleSheet = document.createElement('style');
    // Set the id of the style element
    styleSheet.id = styleSheetId;
    // Append the style element to the head of the document
    document.head.appendChild(styleSheet);
  }

  // Set the inner text of the style element to the CSS string
  styleSheet.innerText = css;
}
