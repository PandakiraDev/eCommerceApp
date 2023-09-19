export default async function BlogPage({
  params: { date, slug },
}: {
  params: { date: string; slug: string };
}) {
  return (
    <div>
      <h1>
        Blog {date} / {slug}
      </h1>
    </div>
  );
}
