import Image from 'next/image'
import Link from 'next/link'

const ItemBlogPage = () => {
  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Blog post hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container">
          <div className="absolute bottom-0 container mx-auto px-4 pb-12">
            <span className="text-green-400 mb-4 inline-block">Technology</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Understanding Modern Web Development Practices
            </h1>
            <div className="flex items-center text-white/80 gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://picsum.photos/100/100"
                  alt="Author"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>John Doe</span>
              </div>
              <span>•</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose dark:prose-invert lg:prose-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {['Web Development', 'JavaScript', 'React'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-5 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-4">
              <Image
                src="https://picsum.photos/100/100"
                alt="Author"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg dark:text-white">
                  John Doe
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Senior Web Developer with 5 years of experience.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((post) => (
                <Link key={post} href={`/blog/${post}`} className="group block">
                  <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={`https://picsum.photos/600/400?random=${post}`}
                      alt="Related post"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-semibold mb-2 dark:text-white group-hover:text-green-500 transition-colors">
                    Related Blog Post {post}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Short description of the related post...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ItemBlogPage
