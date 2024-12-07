import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const allCat = async () =>
  await db?.blogCategory.findMany({
    select: {
      name: true,
      id: true,
      _count: {
        select: {
          BlogPost: true,
        },
      },
    },
  })

const blogsDb = async () =>
  await db?.blogPost.findMany({
    select: {
      title: true,
      content: true,
      coverImage: {
        select: {
          fileUrl: true,
        },
      },
      id: true,
      createdAt: true,
      category: {
        select: {
          name: true,
        },
      },
    },
  })

const BlogPage = async () => {
  const categories = await allCat()
  const blogs = await blogsDb()
  return (
    <>
      <header className="text-center bg-green-500 py-2">
        <h1 className="text-4xl font-bold dark:text-white">Our Blog</h1>
      </header>

      {/* Mobile Categories */}
      <div className="lg:hidden overflow-x-auto scrollbar-none bg-white dark:bg-bgMain z-10 border-b dark:border-gray-700">
        <div className="flex whitespace-nowrap px-4 py-3 gap-2">
          {categories &&
            categories.map((category) => (
              <Link
                key={category.name}
                href={`/blog?id=${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {category.name}
                </span>
                <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                  {category._count.BlogPost}
                </span>
              </Link>
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-4 bg-white dark:bg-bgMain rounded-[2px] shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Categories
              </h2>
              <ul className="space-y-2">
                {categories &&
                  categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={`/blog?id=${category.id}`}
                        className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <span className="text-gray-700 dark:text-gray-300">
                          {category.name}
                        </span>
                        <span className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-sm px-2 py-1 rounded-full">
                          {category._count.BlogPost}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs &&
                blogs.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white dark:bg-bgMain rounded-[2px] shadow-md overflow-hidden 
                    hover:shadow-xl dark:hover:shadow-gray-700 transition-all duration-300"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.coverImage.fileUrl}
                          alt="Blog post thumbnail"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          {post.category.name}
                        </span>
                        <h2 className="text-xl font-semibold mt-2 mb-3 dark:text-white">
                          {post.title}
                        </h2>

                        <ReactMarkdown
                      
                          allowedElements={['p','h1','h2','h3','h4','h5','h6','blockquote']}
                          className="text-gray-600 dark:text-gray-300 text-sm mb-4 [&>*]:inline"
                        >
                          {post.content.slice(0, 200) + '...'}
                        </ReactMarkdown>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                          <span className="text-blue-600 dark:text-blue-400 text-sm">
                            Read more →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage
