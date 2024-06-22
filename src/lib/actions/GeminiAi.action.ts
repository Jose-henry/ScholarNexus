"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";

// To use the File API, use this import path for GoogleAIFileManager.
// Note that this is a different import path than what you use for generating content.
//import { GoogleAIFileManager } from "@google/generative-ai/files";


// Access your API key as an environment variable.
const geminiAiApiKey = process.env.GEMINI_AI;

if (!geminiAiApiKey) {
  throw new Error("GEMINI_AI environment variable is not defined");
}

const genAI = new GoogleGenerativeAI(geminiAiApiKey);

export async function summarizeText(): Promise<any> {

    try{
  // Choose a model that's appropriate for your use case.
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Exhaustively Summarize the text, while bulleting and highlighting major points, links, headings, and other relevant information."

  
const result = await model.generateContentStream([prompt]);
// print text as it comes in
for await (const chunk of result.stream) {
  const chunkText = chunk.text();
  return chunkText;
} 
} catch (error:any) {
  console.error(error);
  return null;
}
}




/* 
//link to file upload
https://ai.google.dev/gemini-api/docs/prompting_with_media?lang=node 
const dotenv = require('dotenv');
const fs = require('fs');
const {google} = require('googleapis');
const mime = require('mime-types');

// Load environment variables from .env file
dotenv.config({ path: '.env' });
const API_KEY = process.env.GOOGLE_API_KEY;
const GENAI_DISCOVERY_URL = `https://generativelanguage.googleapis.com/$discovery/rest?version=v1beta&key=${API_KEY}`;


async function run(filePath, fileDisplayName) {
    // Initialize API Client
    const genaiService = await google.discoverAPI({url: GENAI_DISCOVERY_URL});
    const auth = new google.auth.GoogleAuth().fromAPIKey(API_KEY);

    // Prepare file to upload to GenAI File API
    const media = {
        mimeType: mime.lookup(filePath),
        body: fs.createReadStream(filePath),
    };
    var body = {"file": {"displayName": fileDisplayName}};
    try {
        // Upload the file
        const createFileResponse = await genaiService.media.upload({
            media: media, auth: auth, requestBody:body});
        const file = createFileResponse.data.file;
        const fileUri = file.uri;
        console.log("Uploaded file: " + fileUri);

        // Make Gemini 1.5 API LLM call
        const prompt = "Describe the image with a creative description";
        const model = "models/gemini-1.5-pro-latest";
        const contents = {'contents': [{ 
        'parts':[
            {'text': prompt},
            {'file_data': {'file_uri': fileUri, 'mime_type': file.mimeType}}]
        }]}
        const generateContentResponse = await genaiService.models.generateContent({
            model: model, requestBody: contents, auth: auth});
        console.log(JSON.stringify(generateContentResponse.data));
    }
    catch (err) {
        throw err;
    }
}

filePath = "sample_data/gemini_logo.png";
fileDisplayName = "Gemini logo";
run(filePath, fileDisplayName); */