export function ErrorState({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <p>{message}</p>
      {onRetry ? (
        <button
          className="w-fit rounded-full bg-slate-200 px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-300"
          onClick={onRetry}
          type="button"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
