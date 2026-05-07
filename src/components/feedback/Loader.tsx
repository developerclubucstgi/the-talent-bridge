interface LoaderProps {
  label?: string;
}

export function Loader({ label = 'Loading...' }: LoaderProps) {
  return <p className="text-sm text-muted-foreground">{label}</p>;
}
