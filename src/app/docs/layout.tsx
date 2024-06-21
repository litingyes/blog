export default function DocsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <section className="prose prose-slate w-full max-w-4xl dark:prose-invert prose-a:no-underline">{children}</section>
    </div>
  )
}
