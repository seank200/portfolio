'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';

export default function ThemeSelect() {
  return (
    <div className="rounded-full border border-slate-500 flex text-sm text-slate-500">
      <button className="rounded-full px-2 py-1 hover:bg-slate-300">
        <FontAwesomeIcon icon={faSun} />
      </button>
      <button className="rounded-full px-2 py-1 hover:bg-slate-300">
        <FontAwesomeIcon icon={faMoon} />
      </button>
      <button className="rounded-full px-2 py-1 bg-slate-500 text-slate-200">
        <FontAwesomeIcon icon={faDesktop} />
      </button>
    </div>
  );
}
