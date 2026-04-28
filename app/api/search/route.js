import exClient from "@/lib/elasticsearch";
import { NextResponse } from "next/server";

const INDEX = process.env.ELASTICSEARCH_INDEX;

export async function POST(request) {
    const { query } = await request.json();

    const { hits } = await exClient.search({
        index: INDEX,
        body: query
    });

    const users = hits.hits.map(hit => hit._source);
    return NextResponse.json({ users });
}