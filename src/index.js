/**
 * A date library that provides various date related functionalities.
 */
class D {
  /**
   * Constructs a new D object.
   * @param {...any} args - The arguments to pass to the Date constructor.
   */
  constructor(...args) {
    this._date = new Date(...args)
  }

  /**
   * Gets the full year of the date.
   * @returns {number} The full year.
   */
  get year() {
    return this._date.getFullYear()
  }

  /**
   * Gets the last two digits of the year.
   * @returns {number} The last two digits of the year.
   */
  get yr() {
    return this.year % 100;
  }

  /**
   * Gets the full name of the month.
   * @returns {string} The full name of the month.
   */
  get month() {
    const monthIndex = this._date.getMonth();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
  }

  /**
   * Gets the abbreviated name of the month.
   * @returns {string} The abbreviated name of the month.
   */
  get mon() {
    return this.month.substring(0, 3);
  }

  /**
   * Gets the full name of the day of the week.
   * @returns {string} The full name of the day of the week.
   */
  get day() {
    const dayIndex = this._date.getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[dayIndex];
  }

  /**
   * Gets the abbreviated name of the day of the week.
   * @returns {string} The abbreviated name of the day of the week.
   */
  get dy() {
    return this.day.substring(0, 3);
  }

  /**
   * Gets the day of the month.
   * @returns {number} The day of the month.
   */
  get date() {
    return this._date.getDate();
  }

  /**
   * Gets the hours of the date.
   * @returns {number} The hours of the date.
   */
  get hours() {
    return this._date.getHours();
  }

  /**
   * Gets the minutes of the date.
   * @returns {number} The minutes of the date.
   */
  get mins() {
    return this._date.getMinutes();
  }

  /**
   * Gets the seconds of the date.
   * @returns {number} The seconds of the date.
   */
  get secs() {
    return this._date.getSeconds();
  }

  /**
   * Gets the ordinal of the day of the month (e.g., '1st', '2nd', '3rd', '4th').
   * @returns {string} The ordinal of the day of the month.
   */
  get ordinal() {
    let n = this.date;
    if (n >= 11 && n <= 13) {
        return n + 'th';
    }
    let v = n % 10;
    if (v === 1) {
        return n + 'st';
    } else if (v === 2) {
        return n + 'nd';
    } else if (v === 3) {
        return n + 'rd';
    } else {
        return n + 'th';
    }
  }

  /**
   * Formats the date according to the given mask.
   * @param {string} [mask='Y-M-D H:I:S'] - The mask to format the date.
   * @returns {string} The formatted date.
   */
  format(mask = 'Y-M-D H:I:S') {
    const formattedChar = {
      'Y': this.year,
      'y': this.yr < 10 ? '0' + this.yr : this.yr,
      'M': this.month,
      'm': this.mon,
      'D': this.date < 10 ? '0' + this.date : this.date,
      'd': this.date,
      'L': this.day,
      'l': this.dy,
      '#': this.ordinal,
      'H': this.hours < 10 ? '0' + this.hours : this.hours,
      'h': this.hours,
      'I': this.mins < 10 ? '0' + this.mins : this.mins,
      'i': this.mins,
      'S': this.secs < 10 ? '0' + this.secs : this.secs,
      's': this.secs
    }
    return mask.split('').map(char => formattedChar[char] || char).join('');
  }

  /**
   * Calculates the difference between the current date and the date of the D object.
   * @returns {string} The difference in years, months, days, hours, minutes, and seconds.
   */
  when() {
    const now = new Date();

    let diffYears = Math.abs(now.getFullYear() - this._date.getFullYear());
    let diffMonths = Math.abs(now.getMonth() - this._date.getMonth());
    let diffDays = Math.abs(now.getDate() - this._date.getDate());
    let diffHours = Math.abs(now.getHours() - this._date.getHours());
    let diffMinutes = Math.abs(now.getMinutes() - this._date.getMinutes());
    let diffSeconds = Math.abs(now.getSeconds() - this._date.getSeconds());

    let future = now < this._date;

    let result = '';
    if (diffYears !== 0) {
      result += `${diffYears} years `;
    }
    if (diffMonths !== 0) {
      result += `${diffMonths} months `;
    }
    if (diffDays !== 0) {
      result += `${diffDays} days `;
    }
    if (diffHours !== 0) {
      result += `${diffHours} hours `;
    }
    if (diffMinutes !== 0) {
      result += `${diffMinutes} minutes `;
    }
    if (diffSeconds !== 0) {
      result += `${diffSeconds} seconds `;
    }

    return result + (future ? 'from now' : 'ago');
  }
}