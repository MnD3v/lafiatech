import { Metadata } from 'next'
import { metadata as eglixMetadata } from './metadata'

export const metadata: Metadata = eglixMetadata

export default function EglixLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
