import { type FormEvent } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { SocialLinkCard } from '../components/SocialLinkCard'
import { CONTACT_FORM_FIELDS, SOCIAL_LINKS } from '../data/contact'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Contact"
          title="Let's build something great together"
          description="Whether you have a project in mind, a role to discuss, or just want to connect — I would love to hear from you."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-surface-border bg-surface-elevated p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="space-y-5">
              {CONTACT_FORM_FIELDS.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="mb-2 block text-sm font-medium text-zinc-300"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      rows={5}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full resize-none rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  ) : (
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-surface-border bg-surface px-4 py-3 text-sm text-white placeholder:text-zinc-500 transition-colors focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  )}
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover sm:w-auto"
            >
              Send message
            </button>

            <p className="mt-4 text-xs text-zinc-500">
              Form submission is a placeholder. Connect via the links on the
              right for direct outreach.
            </p>
          </form>

          <div className="flex flex-col gap-4">
            {SOCIAL_LINKS.map((link) => (
              <SocialLinkCard key={link.id} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
