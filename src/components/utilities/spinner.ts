/* eslint-disable  @typescript-eslint/no-non-null-assertion */
export const spinner = (): void => {
  document.getElementById('spinner')!.style.display = 'flex';
};
export const stopSpinner = () => {
  const spinnerDelay = () => {
    document.getElementById('spinner')!.style.display = 'none';
  };
  setTimeout(spinnerDelay, 500);
};
