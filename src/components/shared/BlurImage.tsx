
import getBlurData from '@/lib/getBlourData'
import Image from 'next/image'
import React from 'react'

type prop = React.ComponentProps<typeof Image>

const BlurImage = async ({ alt, src, ...rest }: prop) => {
  const { base64 } = await getBlurData(src)
  return (
    <Image
      placeholder="blur"
      blurDataURL={base64}
      alt={alt}
      src={src}
      {...rest}
    />
  )
}
export default BlurImage
