import React from 'react';

export const spinner = (): void => {
  document.getElementById('spinner')!.style.display = 'flex';
};
export const stopSpinner = (): void => {
  const spinnerDelay = () => {
    document.getElementById('spinner')!.style.display = 'none';
  };
  setTimeout(spinnerDelay, 500);
};

export default function Spinner(): JSX.Element {
  return <div id='spinner' className='loading'></div>;
}
