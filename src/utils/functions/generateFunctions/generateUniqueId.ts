/**
 * Generates a unique identifier using timestamp, random values, and counter to prevent collisions
 *
 * @param prefix Optional prefix to add at the beginning of the ID
 * @returns A unique string identifier
 */

let counter = 0;

const generateUniqueId = (prefix?: string): string => {
  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 8);
  const counterPart = (counter++).toString(36);

  if (counter > 10000) {
    counter = 0;
  }

  const uniqueId = `${timestamp}${randomPart}${counterPart}`;

  return prefix ? `${prefix}_${uniqueId}` : uniqueId;
};

export default generateUniqueId;
