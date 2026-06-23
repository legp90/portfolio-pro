export type SocialLinkId = 'linkedin' | 'github' | 'email'

export interface SocialLink {
  id: SocialLinkId
  label: string
  href: string
  description: string
}

export interface ContactFormField {
  id: string
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  required: boolean
}
