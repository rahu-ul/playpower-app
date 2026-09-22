import { useState } from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';
import './Calendar.css';

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function buildMonth(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

export default function Calendar({ dateRangeLabel }) {
  // Base month is October 2026, as observed in reference
  const [baseYear, setBaseYear] = useState(2026);
  const [baseMonth, setBaseMonth] = useState(9); // October (0-indexed: 9)

  const [startDate, setStartDate] = useState({ year: 2026, month: 9, day: 18 });
  const [endDate, setEndDate] = useState({ year: 2026, month: 9, day: 23 });

  function goPrev() {
    setBaseMonth((m) => {
      if (m === 0) {
        setBaseYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }

  function goNext() {
    setBaseMonth((m) => {
      if (m === 11) {
        setBaseYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }

  const startTimestamp = startDate ? new Date(startDate.year, startDate.month, startDate.day).getTime() : null;
  const endTimestamp = endDate ? new Date(endDate.year, endDate.month, endDate.day).getTime() : null;

  function handleDayClick(day, month, year) {
    if (!day) return;
    const clickedTime = new Date(year, month, day).getTime();

    if (!startDate || (startDate && endDate)) {
      setStartDate({ year, month, day });
      setEndDate(null);
    } else {
      if (clickedTime > startTimestamp) {
        setEndDate({ year, month, day });
      } else {
        setStartDate({ year, month, day });
        setEndDate(null);
      }
    }
  }

  function clearDates() {
    setStartDate(null);
    setEndDate(null);
  }

  function isSelected(day, month, year) {
    if (!day) return false;
    const t = new Date(year, month, day).getTime();
    return t === startTimestamp || t === endTimestamp;
  }

  function isInRange(day, month, year) {
    if (!day || !startTimestamp || !endTimestamp) return false;
    const t = new Date(year, month, day).getTime();
    return t > startTimestamp && t < endTimestamp;
  }

  const monthsToShow = [
    { year: baseYear, month: baseMonth },
    {
      year: baseMonth === 11 ? baseYear + 1 : baseYear,
      month: baseMonth === 11 ? 0 : baseMonth + 1,
    },
  ];

  let headingText = 'Select check-in date';
  let subText = 'Add your travel dates for exact pricing';

  if (startDate && endDate) {
    const diffDays = Math.round((endTimestamp - startTimestamp) / (1000 * 60 * 60 * 24));
    headingText = `${diffDays} nights in Candolim`;
    const startStr = new Date(startDate.year, startDate.month, startDate.day).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    const endStr = new Date(endDate.year, endDate.month, endDate.day).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    subText = `${startStr} - ${endStr}`;
  } else if (startDate) {
    headingText = 'Select checkout date';
    subText = 'Minimum stay: 1 night';
  }

  return (
    <div className="calendar" id="calendar">
      <div className="calendar-header-block">
        <h2 className="calendar-heading">{dateRangeLabel || headingText}</h2>
        <p className="calendar-subheading">{subText}</p>
      </div>

      <div className="calendar-months">
        {monthsToShow.map((m, idx) => (
          <div className="calendar-month" key={`${m.year}-${m.month}`}>
            <div className="calendar-month-header">
              {idx === 0 && (
                <button type="button" onClick={goPrev} aria-label="Previous month">
                  <ChevronLeft size={16} />
                </button>
              )}
              <span>
                {MONTH_NAMES[m.month]} {m.year}
              </span>
              {idx === monthsToShow.length - 1 && (
                <button type="button" onClick={goNext} aria-label="Next month">
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
            <div className="calendar-weekdays" aria-hidden="true">
              {WEEKDAYS.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </div>
            <div className="calendar-grid" role="grid" aria-label={`${MONTH_NAMES[m.month]} ${m.year}`}>
              {buildMonth(m.year, m.month).map((day, i) => {
                const selected = isSelected(day, m.month, m.year);
                const inRange = isInRange(day, m.month, m.year);
                return (
                  <button
                    type="button"
                    key={i}
                    disabled={!day}
                    aria-label={day ? `${MONTH_NAMES[m.month]} ${day}, ${m.year}` : undefined}
                    aria-pressed={selected}
                    className={
                      'calendar-day' +
                      (selected ? ' calendar-day--selected' : '') +
                      (inRange ? ' calendar-day--in-range' : '')
                    }
                    onClick={() => handleDayClick(day, m.month, m.year)}
                  >
                    {day || ''}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="calendar-footer">
        <button type="button" className="calendar-keyboard-btn" aria-label="Keyboard shortcuts">
          <Keyboard size={18} />
        </button>
        <button type="button" className="calendar-clear" onClick={clearDates}>
          Clear dates
        </button>
      </div>
    </div>
  );
}
