export function ErrorState({ message = 'Something went wrong.', onRetry }) {
  return (
    <div className="grid gap-3 rounded-2xl border border-destructive bg-destructive p-4 text-sm text-destructive-foreground">
      <p>{message}</p>
      {onRetry ? (
        <button
          className="w-fit rounded-full bg-background px-4 py-2 font-medium text-foreground transition hover:bg-accent"
          onClick={onRetry}
          type="button"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
