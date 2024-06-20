export default function DocsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div>
      <section className="prose prose-slate dark:prose-invert">{children}</section>
    </div>
  )
}
