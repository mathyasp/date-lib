class D {
	constructor(...args) {
		this._date = new Date(...args)
	}

  get year() {
    return this._date.getFullYear()
  }

  get yr() {
    return this.year % 100;
  }

  get month() {
    const monthIndex = this._date.getMonth();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[monthIndex];
  }

  get mon() {
    return this.month.substring(0, 3);
  }

  get day() {
    const dayIndex = this._date.getDay();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[dayIndex];
  }

  get dy() {
    return this.day.substring(0, 3);
  }

  get date() {
    return this._date.getDate();
  }

  get hours() {
    return this._date.getHours();
  }

  get mins() {
    return this._date.getMinutes();
  }

  get secs() {
    return this._date.getSeconds();
  }

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
      '#': this.getOrdinal(this.date),
      'H': this.hours < 10 ? '0' + this.hours : this.hours,
      'h': this.hours,
      'I': this.mins < 10 ? '0' + this.mins : this.mins,
      'i': this.mins,
      'S': this.secs < 10 ? '0' + this.secs : this.secs,
      's': this.secs
    }
    return mask.split('').map(char => formattedChar[char] || char).join('');
  }

  getOrdinal(n) {
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
}


const d = new D();
console.log(d.format());
console.log(d.format('Y-m-d'));
