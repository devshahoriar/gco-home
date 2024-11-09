'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Globe2,
  Users,
  Laptop,
  Calendar,
  Megaphone,
  HandshakeIcon,
} from 'lucide-react'
import Meteors from '@/components/ui/aimate/meteors'

const categories = [
  {
    id: 'support',
    title: 'Support Team',
    icon: Users,
    items: [
      {
        title: 'Global Nation',
        description: 'International collaboration network',
        icon: Globe2,
      },
      {
        title: 'TYAGI Volunteer',
        description: 'Community volunteer program',
        icon: HandshakeIcon,
      },
    ],
  },
  {
    id: 'development',
    title: 'Development Program',
    icon: Laptop,
    items: [
      {
        title: 'ICT Training',
        description: 'Skill Development & Technical Education',
        icon: Laptop,
      },
      {
        title: 'Freelancing',
        description: 'Self-development & Career Growth',
        icon: Users,
      },
    ],
  },
  {
    id: 'events',
    title: 'Our Events',
    icon: Calendar,
    items: [
      {
        title: 'One Tree For One Student',
        description: 'Environmental Education Initiative',
        icon: Globe2,
      },
      {
        title: 'Cluster Village',
        description: 'Community Development Project',
        icon: Users,
      },
      {
        title: 'Safe Program',
        description: 'Safety and Security Initiative',
        icon: HandshakeIcon,
      },
      {
        title: 'Shadow Program',
        description: 'Mentorship & Guidance',
        icon: Users,
      },
    ],
  },
  {
    id: 'campaign',
    title: 'Campaign',
    icon: Megaphone,
    items: [
      {
        title: 'Mobile Campaign',
        description: 'Outreach & Awareness Program',
        icon: Megaphone,
      },
      {
        title: 'Child Nutrition',
        description: 'Health & Wellness Initiative',
        icon: Users,
      },
    ],
  },
]

export default function ProgramOverview() {




  return (
    <section className="w-full bg-bgMain bg-opacity-10 py-10 relative overflow-hidden">
      <Meteors number={10} />
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Programs & Initiatives
        </h2>

        <Tabs defaultValue="support" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground flex items-center gap-2 py-3"
              >
                <category.icon className="h-4 w-4" />
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card
                    key={item.title}
                    className="group hover:shadow-lg transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {item.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            {item.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-1 w-0 group-hover:w-full bg-primary/20 transition-all duration-300" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
