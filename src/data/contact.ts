import type { ContactFormField, SocialLink } from '../types/contact'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    description: 'Connect professionally and explore my career journey.',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com',
    description: 'Browse open-source contributions and project repositories.',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@portfolio.pro',
    description: 'Reach out directly for collaborations and opportunities.',
  },
]

export const CONTACT_FORM_FIELDS: ContactFormField[] = [
  {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Your name',
    required: true,
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    required: true,
  },
  {
    id: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder: 'Tell me about your project or opportunity...',
    required: true,
  },
]
