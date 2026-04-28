import { connectToDatabase } from "../../../src/lib/mongodb";
import User from "@/src/models/User";
import esClient from "@/src/lib/elasticsearch";
import { NextResponse } from "next/server";

const INDEX = process.env.ELASTICSEARCH_INDEX;

export async function GET() {
    await connectToDatabase();

    const exists = await esClient.indices.exists({ index: INDEX });

    if(!exists) {
        await esClient.indices.create({
            index: INDEX,
            mappings: {
                properties: {
                    name: { type: 'text' },
                    email: { type: 'keyword' },
                    age: { type: 'integer' },
                    department: { type: 'keyword' },
                    role: { type: 'keyword' },
                    skills: { type: 'keyword' },
                    createdAt: { type: 'date' }
                }
            }
        })
    }

    const users = await User.find({});

    const operations = users.flatMap(user => [
        { index: { _index: INDEX, _id: user._id.toString() } },
        {
            name: user.name,
            email: user.email,
            age: user.age,
            department: user.department,
            role: user.role,
            skills: user.skills,
            createdAt: user.createdAt }
    ]);

    await esClient.bulk({ operations });

    return NextResponse.json({ message: `${users.length} users synchronized with Elasticsearch successfully!` });
}