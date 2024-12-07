import { getSession } from '@/lib/auth-client'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { Role } from '../../../../prisma/out'

export const POST = async (req: NextRequest) => {
  const {
    data: { user },
  } = (await getSession({
    fetchOptions: {
      headers: await headers(),
    },
  })) as any
  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  if (user.type !== Role.ADMIN) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  const { name } = await req.json()
  try {
    await db?.blogCategory.create({
      data: {
        name: name,
      },
    })
    return NextResponse.json({ message: 'Category added' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
