import pluralize from 'pluralize';
import differenceInSeconds from 'date-fns/differenceInSeconds';
import differenceInMonths from 'date-fns/differenceInMonths';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';

/**
 * Formats a date
 * @param {String|Date} date
 * @param {Object} options
 *
 * @example
 *
 * `formatDate(date)`
 * returns `15 June 2020`
 *
 * `formatDate(date, { year: false })`
 * returns `15 June`
 *
 * `formatDate(date, { day: false })`
 * returns `June 2020`
 *
 * `formatDate(date, { month: 'short' })`
 * returns `15 Jun 2020`
 *
 * `formatDate(date, { time: true, weekday: true })`
 * returns `Mon, 15 June 2020, 2:46 pm`
 *
 * `formatDate(date, { timeOnly: true })`
 * returns `2:46 pm`
 *
 * `formatDate(date, { numeric: true })`
 * returns `15/06/2020`
 */
function formatDate(date, options = {}) {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const {
    numeric = false,
    weekday = false,
    year = 'numeric',
    month = 'long',
    day = 'numeric',
    timeOnly = false,
    time = false,
  } = options;

  let formatOptions;
  if (timeOnly) {
    formatOptions = {
      hour: 'numeric',
      minute: '2-digit',
      hourCycle: 'h12',
    };
  } else if (numeric) {
    formatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: time ? 'numeric' : undefined,
      minute: time ? '2-digit' : undefined,
    };
  } else {
    formatOptions = {
      weekday: weekday === true ? 'short' : weekday || undefined,
      year: year === true ? 'numeric' : year || undefined,
      month,
      day: day === true ? 'numeric' : day || undefined,
      hour: time ? 'numeric' : undefined,
      minute: time ? '2-digit' : undefined,
      hourCycle: time ? 'h12' : undefined,
    };
  }

  return dateObj.toLocaleString('en-gb', formatOptions);
}

function formatTime(date) {
  return formatDate(date, { timeOnly: true });
}

function formatTimeAgo(date) {
  const dateObj = new Date(date);
  const now = new Date();
  const diff = differenceInSeconds(now, dateObj);

  let num;
  let unit;
  if (diff < 60) {
    num = diff;
    unit = 'second';
  } else if (diff < 3600) {
    num = Math.floor(diff / 60);
    unit = 'minute';
  } else if (diff < 3600 * 24) {
    num = Math.floor(diff / 3600);
    unit = 'hour';
  } else if (diff < 3600 * 24 * 7) {
    num = Math.floor(diff / (3600 * 24));
    unit = 'day';
  } else if (diff < 3600 * 24 * 7 * 5) {
    num = Math.floor(diff / (3600 * 24 * 7));
    unit = 'week';
  } else if (diff < 3600 * 24 * 365) {
    num = differenceInMonths(now, dateObj);
    unit = 'month';
  } else {
    num = differenceInYears(now, dateObj);
    unit = 'year';
  }
  return `${num} ${pluralize(unit, num)} ago`;
}

function formatTimeFromNow(date) {
  const dateObj = new Date(date);
  const now = new Date();
  if (dateObj < now) return formatTimeAgo(date);

  const diff = differenceInSeconds(dateObj, now);

  if (diff === 0) return 'just now';

  let num;
  let unit;
  if (diff < 60) {
    num = diff;
    unit = 'second';
  } else if (diff < 3600) {
    num = Math.round(diff / 60);
    unit = 'minute';
  } else if (diff < 3600 * 24) {
    num = Math.round(diff / 3600);
    unit = 'hour';
  } else if (diff < 3600 * 24 * 7 * 2) {
    num = differenceInCalendarDays(dateObj, now);
    unit = 'day';
  } else if (diff < 3600 * 24 * 7 * 5) {
    num = Math.round(diff / (3600 * 24 * 7));
    unit = 'week';
  } else if (diff < 3600 * 24 * 365) {
    num = differenceInMonths(dateObj, now);
    unit = 'month';
  } else {
    num = differenceInYears(dateObj, now);
    unit = 'year';
  }
  return `in ${num} ${pluralize(unit, num)}`;
}

export { formatDate, formatTime, formatTimeFromNow, formatTimeAgo };