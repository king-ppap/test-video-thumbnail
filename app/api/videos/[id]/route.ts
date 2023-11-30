import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const { rows } = await sql`SELECT * FROM videos WHERE id = ${params.id};`;
        if (!rows.length) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        return NextResponse.json(rows[0], { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
