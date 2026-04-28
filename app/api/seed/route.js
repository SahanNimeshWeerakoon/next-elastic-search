import { NextResponse } from "next/server";

import User from "@/src/models/User";
import { connectToDatabase } from "@/src/lib/mongodb";

export async function GET() {
    await connectToDatabase();
    await User.deleteMany({});

    await User.insertMany([
        { name: 'Alice Johnson', email: 'alice@example.com', age: 29, department: 'Engineering', role: 'Frontend Developer', skills: ['React', 'CSS', 'TypeScript'] },
        { name: 'Bob Smith',     email: 'bob@example.com',   age: 35, department: 'Engineering', role: 'Backend Developer',  skills: ['Node.js', 'MongoDB', 'Python'] },
        { name: 'Carol White',   email: 'carol@example.com', age: 27, department: 'Design',      role: 'UX Designer',        skills: ['Figma', 'CSS', 'User Research'] },
        { name: 'David Lee',     email: 'david@example.com', age: 42, department: 'Marketing',   role: 'Marketing Manager',  skills: ['SEO', 'Analytics', 'Copywriting'] },
        { name: 'Emma Brown',    email: 'emma@example.com',  age: 31, department: 'Engineering', role: 'DevOps Engineer',    skills: ['Docker', 'Kubernetes', 'AWS'] },
    ]);

    return NextResponse.json({ message: 'Database seeded successfully!' });
}