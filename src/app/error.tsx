"use client";

/**
 * Displays a message indicating that an error has occurred.
 *
 * Renders a simple UI notifying the user of a problem, using Korean text. Does not display error details or provide a reset mechanism in the UI.
 *
 * @param error - The error object representing the encountered problem.
 * @param reset - A function intended to reset the error state.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>문제가 발생했습니다!</h2>
    </div>
  );
}
