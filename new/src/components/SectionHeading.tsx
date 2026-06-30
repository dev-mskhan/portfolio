export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-3">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
