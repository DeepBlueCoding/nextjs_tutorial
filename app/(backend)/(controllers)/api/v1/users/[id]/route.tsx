import {NextRequest, NextResponse} from 'next/server';

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  const id = Number(params.id);
  if (id % 2 !== 0) {
    return NextResponse.json({message: 'Not Found'}, {status: 404});
  }

  return NextResponse.json({message: { id: id, firstName: 'John', lastName: 'Doe' }}, {status: 200});
}
