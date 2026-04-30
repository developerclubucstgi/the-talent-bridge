export function PostList({ posts }) {
  if (!posts?.length) {
    return <p className="text-sm text-muted-foreground">No data found.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <article
          className="grid gap-3 rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-elevated)]"
          key={post.id}
        >
          <p className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.28em] text-primary">
            Post #{post.id}
          </p>
          <h3 className="text-lg font-semibold text-card-foreground">{post.title}</h3>
          <p className="text-sm leading-6 text-muted-foreground">{post.body}</p>
        </article>
      ))}
    </div>
  );
}
