import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const filename = searchParams.get('file')

  if (!filename) {
    return NextResponse.json({ error: 'Filename is required' }, { status: 400 })
  }

  try {
    const filePath = path.join(process.cwd(), 'src/app/[lang]/(home)/what-we-do', filename)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    return NextResponse.json({ content: fileContent })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 })
  }
}