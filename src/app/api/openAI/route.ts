import {OpenAIStream, StreamingTextResponse} from "ai";
import { openai } from '@ai-sdk/openai';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { prompt } = await req.json();
    if (!prompt) {
        return new Response("No prompt in the request", { status: 400 });
    }}