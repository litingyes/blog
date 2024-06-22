export default function DocsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <section className="prose prose-slate w-full max-w-4xl dark:prose-invert prose-a:text-blue-400 prose-a:underline prose-a:decoration-current prose-a:decoration-solid prose-a:decoration-1 prose-a:underline-offset-4 prose-img:m-0">{children}</section>
    </div>
  )
}
