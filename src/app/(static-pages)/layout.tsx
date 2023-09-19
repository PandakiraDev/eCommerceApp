export default function StaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="text-center max-w-md mx-auto">{children}</div>;
}
