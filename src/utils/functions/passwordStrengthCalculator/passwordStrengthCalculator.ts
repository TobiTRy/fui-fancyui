export function calculatePasswordStrength(password: string, identifiers?: string[]): number {
  let score = 0;
  const length = password.length;

  // --- Length ---
  if (length >= 16) {
    score += 35; // Combined bonus for 12+ and 16+
  } else if (length >= 12) {
    score += 25;
  } else if (length >= 8) {
    score += 10;
  }

  // --- Character Types ---
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);

  if (hasLowercase) score += 10;
  if (hasUppercase) score += 10;
  if (hasDigit) score += 10;
  if (hasSymbol) score += 20; // Increased bonus for symbols

  // --- Deductions for Common Patterns ---
  const commonPatterns = [
    '0123456789',
    '9876543210',
    'qwertyuiop',
    'asdfghjkl',
    'zxcvbnm',
    'password',
    'admin',
    '123456',
    'iloveyou', // Added more common patterns
  ];

  if (commonPatterns.some((pattern) => password.includes(pattern))) {
    score -= 15;
  }

  const reversed = password.split('').reverse().join('');
  if (password.toLowerCase() === reversed.toLowerCase()) {
    score -= 10;
  }

  // --- Repeating Characters ---
  const repeatRegex = /(.)\1{2,}/g; // Global match for multiple repeats
  let repeatMatches;
  while ((repeatMatches = repeatRegex.exec(password)) !== null) {
    score -= (repeatMatches[0].length - 2) * 2;
  }

  // --- Compare with Identifier (optional) ---
  if (identifiers) {
    for (const identifier of identifiers) {
      const normalizedIdentifier = identifier.toLowerCase().replace(/[^a-z0-9]/g, '');
      const normalizedPassword = password.toLowerCase().replace(/[^a-z0-9]/g, '');

      if (normalizedPassword.includes(normalizedIdentifier)) {
        score -= normalizedIdentifier.length; // Deduct for each matching char
      }
    }
  }

  // --- Final Score Adjustment ---
  return Math.max(0, score); // Ensure score doesn't go below zero
}

// export function calculatePasswordStrength(password: string): number {
//   let score = 0;
//   const length = password.length;

//   // Length
//   if (length >= 12) score += 25;
//   else if (length >= 8) score += 10;

//   // Character Types
//   if (password.match(/[a-z]/)) score += 10;
//   if (password.match(/[A-Z]/)) score += 10;
//   if (password.match(/[0-9]/)) score += 10;
//   if (password.match(/[^a-zA-Z0-9]/)) score += 20;

//   // Deduct for Common Patterns
//   if (password.match(/0123456789|9876543210|qwertyuiop|asdfghjkl|zxcvbnm/)) score -= 15;
//   if (password.toLowerCase().includes(password.toLowerCase().split('').reverse().join(''))) score -= 10;

//   // Deduct for Repeating Characters
//   const repeatRegex = /(.)\1{2,}/; // Matches 3 or more consecutive identical characters
//   if (repeatRegex.test(password)) {
//     const matches = password.match(repeatRegex);
//     if (matches) {
//       for (const match of matches) {
//         score -= (match.length - 2) * 2; // Deduct 2 points for each additional repeat beyond the first two
//       }
//     }
//   }

//   // Bonus for Extra Length and Variety
//   if (length >= 16) score += 10;
//   if (score >= 30 && score <= 40) score += 5;
//   if (score >= 50) score += 10;

//   return score;
// }
