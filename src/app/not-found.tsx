import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <h1 className="text-6xl font-bold">Not found 404</h1>
      <p className="mt-10">This may not build yet😐</p>
      <Link className="mt-5 hover:underline" href={'/'}>
        Go to home🏠
      </Link>
    </div>
  )
}
export default NotFound
