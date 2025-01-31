import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { query } = await req.json();

        // Send request to Python backend (FastAPI running on localhost:8000)
        const response = await fetch("http://localhost:8000/query/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();
        return NextResponse.json({ result: data.result });
    } catch (error) {
        return NextResponse.json({ error: "Failed to process query" }, { status: 500 });
    }
}

