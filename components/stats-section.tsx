export function StatsSection() {
  const stats = [
    { value: "500+", label: "Clientes Atendidos" },
    { value: "15+", label: "Anos de Experiência" },
    { value: "98%", label: "Satisfação do Cliente" },
    { value: "24/7", label: "Suporte Disponível" },
  ]

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
