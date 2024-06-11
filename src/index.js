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
}


const d = new D();
console.log(d.year);
console.log(d.yr);
console.log(d.month);
console.log(d.mon);
console.log(d.day);
console.log(d.dy);
console.log(d.date); 
console.log(d.hours);
console.log(d.mins);
console.log(d.secs);