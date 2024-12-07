import AdminPageLayout from '@/components/custom/admin/shared/AdminPageLayout'
import SubmtButton from '@/components/shared/SubmtButton'
import UploadFile, { imageKit } from '@/lib/ImageKit'

const handelSubmit = async (e: FormData) => {
  'use server'
  const name = e.get('name')
  const image = e.get('image') as File
  if (image) {
    console.log(image)
    const res =await UploadFile(image, 'blog')
    console.log(res)
  }
}

const AdminAddBlogPage = () => {
  return (
    <AdminPageLayout title="Admin add blog">
      <form action={handelSubmit}>
        <input type="text" placeholder="Title" name="name" />
        <input type="file" name="image" />
        <SubmtButton />
      </form>
    </AdminPageLayout>
  )
}
export default AdminAddBlogPage
