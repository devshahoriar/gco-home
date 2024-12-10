import { getSession } from '@/lib/auth-client'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { Role } from '../../../../../prisma/out'
import db from '@/lib/db'

export const POST = async (req: NextRequest) => {
  try {
    const {
      data: { user },
    } = (await getSession({
      fetchOptions: {
        headers: await headers(),
      },
    })) as any
    if (!user || user.type !== Role.ADMIN) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }
    const { postLink } = await req.json()
    if (!postLink) {
      return NextResponse.json(
        { error: 'Post Link  is required' },
        { status: 400 }
      )
    }
    await db?.fbEmbade.create({
      data: {
        embedCode: postLink,
      },
    })
    return NextResponse.json({ message: 'Post Added Successfully' })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Server Error' }, { status: 500 })
  }
}
