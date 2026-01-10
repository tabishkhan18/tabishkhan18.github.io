// dateUtils.js
// Handles both past (start + end) and ongoing (start + present) experience calculations

// Core month calculation logic
function diffInMonths(start, end) {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // If the end day hasn't reached the start day, month is incomplete
  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  return Math.max(months, 0);
}

// Calculate duration between start and end date
// endDate is optional → if not provided, current date is used (Present job)
export function calculateDuration(startDate, endDate = null) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  return diffInMonths(start, end);
}

// Format months into readable string
// Examples: "4 months", "1 year", "1 year 3 months"
export function formatDuration(months) {
  if (months < 12) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  }

  return `${years} year${years !== 1 ? 's' : ''} ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}`;
}

// Optional helper to format date range label
// Example: "Oct 2025 - Present" or "Jun 2023 - Sep 2023"
export function formatDateRange(startDate, endDate = null) {
  const options = { month: 'short', year: 'numeric' };
  const start = new Date(startDate).toLocaleDateString('en-US', options);

  if (!endDate) {
    return `${start} - Present`;
  }

  const end = new Date(endDate).toLocaleDateString('en-US', options);
  return `${start} - ${end}`;
}
