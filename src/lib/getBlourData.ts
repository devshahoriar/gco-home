import { getPlaiceholder } from 'plaiceholder'

const getBlurData = async (src: any) => {
  const buffer = await fetch('http://localhost:3000/' + src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )
  const { base64, css } = await getPlaiceholder(buffer, { size: 10 })
  return { base64, css }
}

export default getBlurData
