import {NextResponse} from 'next/server';


export async function GET() {
  const result = [{ userId: 1, firstName: 'John', lastName: "Doe"}, { userId: 1, firstName: 'Jane', lastName: "Doe"}]
  
  return NextResponse.json({message: result}, {status: 200});
}
