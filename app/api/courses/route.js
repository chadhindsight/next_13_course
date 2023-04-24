import courses from './data.json';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';

// NB: you must name the function after the name of the method being used. example, GET, PUT, etc.
export async function GET() {
    return NextResponse.json(courses)
}

export async function POST(request) {
    const { title, description, level, link } = await request.json();

    const newCourse = {
        id: uuidv4(),
        title,
        description,
        level,
        link,
    };

    courses.push(newCourse);

    return NextResponse.json(courses);
}