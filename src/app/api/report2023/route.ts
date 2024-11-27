// app/api/pdf/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const pdfPath = path.join(process.cwd(),'src','app','api','report2023','Global Community Organization Annual Report-2023.pdf');
    const pdfBuffer = await fs.readFile(pdfPath);
    const state = await fs.stat(pdfPath);

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Global Community Organization Annual Report-2023.pdf"',
        'Content-Length': state.size.toString(),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to load PDF' },
      { status: 500 }
    );
  }
}