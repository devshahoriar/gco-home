import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Home, BookOpen, Building2 } from "lucide-react"

export default function OurProgram() {
  const programs = [
    {
      title: "One Tree For One Child",
      description: "Environmental initiative promoting sustainability through youth engagement",
      icon: Leaf,
      color: "text-green-500",
      gradient: "from-green-50 to-yellow-50",
    },
    {
      title: "Abalamban",
      description: "Housing and community development program",
      icon: Home,
      color: "text-slate-700",
      gradient: "from-slate-50 to-gray-50",
    },
    {
      title: "TYAGI Research Center",
      description: "Advanced research and development facility",
      icon: BookOpen,
      color: "text-red-500",
      gradient: "from-red-50 to-rose-50",
    },
    {
      title: "TYAGI Enterprise",
      description: "Business and entrepreneurship development",
      icon: Building2,
      color: "text-red-500",
      gradient: "from-red-50 to-rose-50",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:text-black dark:from-gray-700 dark:to-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl dark:text-white">Our Programs</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover our initiatives designed to create positive impact and sustainable change in our communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {programs.map((program) => (
            <Card
              key={program.title}
              className={`group relative overflow-hidden transition-all hover:shadow-lg bg-gradient-to-br ${program.gradient}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform ${program.color}`}
                  >
                    <program.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold tracking-tight text-xl dark:text-black">{program.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{program.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}