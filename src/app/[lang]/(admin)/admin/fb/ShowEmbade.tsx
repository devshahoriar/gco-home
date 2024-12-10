'use client'

import dynamic from "next/dynamic"

const FacebookEmbed = dynamic(() => import("react-social-media-embed").then((mod) => mod.FacebookEmbed), {
  ssr: false,
  loading: () => null
})

const ShowEmbade = ({ embedCode }:{
  embedCode: string
}) => {
  return <FacebookEmbed url={embedCode} />
}

export default ShowEmbade
