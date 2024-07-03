import { ReactNode } from 'react'

const AdminPageLayout = ({
  children,
  title = 'Admin Page',
}: {
  children: ReactNode
  title: String
}) => {
  return (
    <div className="container my-5 px-3">
      <h1 className="text-lg font-bold">{title}</h1>
      {children}
    </div>
  )
}
export default AdminPageLayout
