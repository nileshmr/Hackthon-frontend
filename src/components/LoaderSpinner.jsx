import React from 'react';

export default function LoaderSpinner() {
  return (
    <span className="inline-block animate-spin h-5 w-5 text-indigo-600">
      <svg viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
    </span>
  );
}
