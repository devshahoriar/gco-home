import { ReactNode } from 'react'

const AdminPageLayout = ({
  children,
  title = 'Admin Page',
  subTitle
}: {
  children: ReactNode
  title: String
  subTitle?: String
}) => {
  return (
    <div className="container my-5 px-3">
      <div className='flex justify-between items-center'>
      <h1 className="text-lg font-bold">{title}</h1>
      {
        subTitle && <p className="text-lg">{subTitle}</p>
      }
      </div>
      {children}
    </div>
  )
}
export default AdminPageLayout
