'use client'
import SiteButton from '@/components/ui/SiteButton'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { FacebookEmbed } from 'react-social-media-embed'

const FbTab = ({ fb }: any) => {
  return (
    <div className="mt-5">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1100: 4 }}
      >
        <Masonry gutter="20px">
          {fb.map((post: any) => (
            <div className="w-full h-auto" key={post.id}>
              <FacebookEmbed width="auto" url={post?.embedCode} />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="flex justify-center pb-2 mt-5">
        <SiteButton className=" px-6">Show More</SiteButton>
      </div>
    </div>
  )
}

export default FbTab
