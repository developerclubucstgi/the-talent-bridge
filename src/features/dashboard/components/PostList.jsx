export function PostList({ posts }) {
  if (!posts?.length) {
    return <p className="text-sm text-slate-500">No data found.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <article
          className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          key={post.id}
        >
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">Post #{post.id}</p>
          <h3 className="text-lg font-semibold text-slate-900">{post.title}</h3>
          <p className="text-sm leading-6 text-slate-500">{post.body}</p>
        </article>
      ))}
    </div>
  );
}
