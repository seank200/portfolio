import type { DateTime } from 'luxon';

export type TimePrecision = 'year' | 'month' | 'day';

export type TimePeriod = {
  start: Date | DateTime;
  /** Set to `null` for current */
  end: Date | DateTime | null;
  /** Defaults to `month`. */
  precision?: TimePrecision;
};
