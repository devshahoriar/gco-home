'use client'

import dynamic from 'next/dynamic'

const XEmbed = dynamic(
  () => import('react-social-media-embed').then((mod) => mod.XEmbed),
  {
    ssr: false,
    loading: () => null,
  }
)

const ShowEmbade = ({ embedCode }: { embedCode: string }) => {
  return <XEmbed url={embedCode} />
}

export default ShowEmbade
