export function calculatePasswordStrength(password: string): number {
  let score = 0;
  const length = password.length;

  // Length
  if (length >= 12) score += 25;
  else if (length >= 8) score += 10;

  // Character Types
  if (password.match(/[a-z]/)) score += 10;
  if (password.match(/[A-Z]/)) score += 10;
  if (password.match(/[0-9]/)) score += 10;
  if (password.match(/[^a-zA-Z0-9]/)) score += 20;

  // Deduct for Common Patterns
  if (password.match(/0123456789|9876543210|qwertyuiop|asdfghjkl|zxcvbnm/)) score -= 15;
  if (password.toLowerCase().includes(password.toLowerCase().split('').reverse().join(''))) score -= 10;

  // Deduct for Repeating Characters
  const repeatRegex = /(.)\1{2,}/; // Matches 3 or more consecutive identical characters
  if (repeatRegex.test(password)) {
    const matches = password.match(repeatRegex);
    if (matches) {
      for (const match of matches) {
        score -= (match.length - 2) * 2; // Deduct 2 points for each additional repeat beyond the first two
      }
    }
  }

  // Bonus for Extra Length and Variety
  if (length >= 16) score += 10;
  if (score >= 30 && score <= 40) score += 5;
  if (score >= 50) score += 10;

  return score;
}
