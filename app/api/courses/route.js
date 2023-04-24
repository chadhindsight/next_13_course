import courses from './data.json';
import { NextResponse } from 'next/server';

// NB: you must name the function after the name of the method being used. example, GET, PUT, etc.
export async function GET() {
    return NextResponse.json(courses)
}

export async function POST(request) {
    const course = await request.json();
    courses.push(course);

    return NextResponse.json(course);
}