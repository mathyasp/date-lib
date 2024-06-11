<a name="Convenient Date Library"></a>

## Convenient Date Library
A date library that provides various date related functionalities.

**Kind**: global class  

* [D](#D)
    * [new D(...args)](#new_D_new)
    * [.year](#D+year) ⇒ <code>number</code>
    * [.yr](#D+yr) ⇒ <code>number</code>
    * [.month](#D+month) ⇒ <code>string</code>
    * [.mon](#D+mon) ⇒ <code>string</code>
    * [.day](#D+day) ⇒ <code>string</code>
    * [.dy](#D+dy) ⇒ <code>string</code>
    * [.date](#D+date) ⇒ <code>number</code>
    * [.hours](#D+hours) ⇒ <code>number</code>
    * [.mins](#D+mins) ⇒ <code>number</code>
    * [.secs](#D+secs) ⇒ <code>number</code>
    * [.ordinal](#D+ordinal) ⇒ <code>string</code>
    * [.format([mask])](#D+format) ⇒ <code>string</code>
    * [.when()](#D+when) ⇒ <code>string</code>

<a name="new_D_new"></a>

### new D(...args)
Constructs a new D object.


| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>any</code> | The arguments to pass to the Date constructor. |

<a name="D+year"></a>

### d.year ⇒ <code>number</code>
Gets the full year of the date.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The full year.  
<a name="D+yr"></a>

### d.yr ⇒ <code>number</code>
Gets the last two digits of the year.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The last two digits of the year.  
<a name="D+month"></a>

### d.month ⇒ <code>string</code>
Gets the full name of the month.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The full name of the month.  
<a name="D+mon"></a>

### d.mon ⇒ <code>string</code>
Gets the abbreviated name of the month.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The abbreviated name of the month.  
<a name="D+day"></a>

### d.day ⇒ <code>string</code>
Gets the full name of the day of the week.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The full name of the day of the week.  
<a name="D+dy"></a>

### d.dy ⇒ <code>string</code>
Gets the abbreviated name of the day of the week.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The abbreviated name of the day of the week.  
<a name="D+date"></a>

### d.date ⇒ <code>number</code>
Gets the day of the month.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The day of the month.  
<a name="D+hours"></a>

### d.hours ⇒ <code>number</code>
Gets the hours of the date.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The hours of the date.  
<a name="D+mins"></a>

### d.mins ⇒ <code>number</code>
Gets the minutes of the date.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The minutes of the date.  
<a name="D+secs"></a>

### d.secs ⇒ <code>number</code>
Gets the seconds of the date.

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>number</code> - The seconds of the date.  
<a name="D+ordinal"></a>

### d.ordinal ⇒ <code>string</code>
Gets the ordinal of the day of the month (e.g., '1st', '2nd', '3rd', '4th').

**Kind**: instance property of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The ordinal of the day of the month.  
<a name="D+format"></a>

### d.format([mask]) ⇒ <code>string</code>
Formats the date according to the given mask.

**Kind**: instance method of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The formatted date.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [mask] | <code>string</code> | <code>&quot;&#x27;Y-M-D&#x27;&quot;</code> | The mask to format the date. |

<a name="D+when"></a>

### d.when() ⇒ <code>string</code>
Calculates the difference between the current date and the date of the D object.

**Kind**: instance method of [<code>D</code>](#D)  
**Returns**: <code>string</code> - The difference in years, months, days, hours, minutes, and seconds.  
