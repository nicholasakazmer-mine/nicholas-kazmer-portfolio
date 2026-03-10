import { Mail, Linkedin, MapPin } from "lucide-react"
import { PageContainer } from "@/components/layout/PageContainer"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nicholas.a.kazmer@gmail.com",
    href: "mailto:nicholas.a.kazmer@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nkazmer",
    href: "https://linkedin.com/in/nkazmer",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Minneapolis, MN",
    href: null,
  },
]

export default function Contact() {
  return (
    <PageContainer wide>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Get in touch.
          </h1>
          <p className="max-w-md text-lg text-gray-500">
            I'm looking for an end-to-end product design role where
            design owns outcomes, not deliverables. Let's talk.
          </p>
        </div>

        <div className="space-y-4">
          {contactInfo.map((item) => {
            const Icon = item.icon
            const content = (
              <div className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-6 transition-colors hover:border-gray-300">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface">
                  <Icon size={18} className="text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {item.value}
                  </p>
                </div>
              </div>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block no-underline"
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={item.label}>
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </PageContainer>
  )
}
