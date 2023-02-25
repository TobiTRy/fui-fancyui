//this funktions makes a hex color transparent depeend on the transparency
export function hexToTransparent(hexColor:string, transparency: number) {
    // Parse the hex color into RGB components
    const red = parseInt(hexColor.substring(1, 3), 16);
    const green = parseInt(hexColor.substring(3, 5), 16);
    const blue = parseInt(hexColor.substring(5, 7), 16);
    
    // Calculate the alpha value as a decimal between 0 and 1
    const alpha = 1 - (transparency / 100);
    
    // Return the RGBA color string
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
  }
  