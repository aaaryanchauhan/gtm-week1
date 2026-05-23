import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";
dotenv.config();

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Call 1 will go here
// CALL 1: Basic message
async function call1() {
    console.log("=== CALL 1: Basic Message ===\n");

    const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        messages: [
            {
                role: "user",
                content: "What is ICP in B2B sales?",
            },
        ],
    });

    console.log("Full Response Object:");
    console.log(JSON.stringify(response, null, 2));
    console.log("\n--- Extracted Answer ---");
    console.log(response.content[0].text);
    console.log("\n");
}

// Call 2 will go here

// CALL 2: With system prompt 

async function call2() {
    console.log("=== CALL 2: With System Prompt ===\n");

    const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: "You are an expert GTM analyst. Answer all questions from a go-to-market perspective, focusing on strategy, metrics, and execution.",
        messages: [
            {
                role: "user",
                content: "What is ICP in B2B sales?",
            },
        ],
    });

    console.log("--- GTM Analyst Response ---");
    console.log(response.content[0].text);
    console.log("\n");
}
// Call 3 will go here

// CALL 3: Parse and clean the response
async function call3() {
    console.log("=== CALL 3: Parsed Response ===\n");

    const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: "You are an expert GTM analyst.",
        messages: [
            {
                role: "user",
                content: "What is ICP in B2B sales? Answer in 2-3 sentences.",
            },
        ],
    });

    // Extract the fields you actually care about
    const answer = response.content[0].text;
    const inputTokens = response.usage.input_tokens;
    const outputTokens = response.usage.output_tokens;
    const totalTokens = inputTokens + outputTokens;

    console.log("Question: What is ICP in B2B sales?");
    console.log("\nAnswer:");
    console.log(answer);
    console.log("\n--- Token Usage ---");
    console.log(`Input tokens: ${inputTokens}`);
    console.log(`Output tokens: ${outputTokens}`);
    console.log(`Total tokens: ${totalTokens}`);
    console.log("\n");
}
// Call 4 will go here

// CALL 4: Multi-turn conversation
async function call4() {
    console.log("=== CALL 4: Multi-Turn Conversation ===\n");

    const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: "You are an expert GTM analyst.",
        messages: [
            {
                role: "user",
                content: "What is gtm engineering and how dif from gtm?",
            },
            {
                role: "assistant",
                content: "ICP stands for Ideal Customer Profile — a detailed description of the type of company most likely to benefit from and buy your product. It includes firmographics (company size, industry, revenue) and psychographics (pain points, goals, values).",
            },
            {
                role: "user",
                content: "Give me 3 real-world examples of a strong ICP.",
            },
        ],
    });

    console.log("Conversation:");
    console.log("You: What is ICP in B2B sales?");
    console.log("\nClaude: (response from turn 1)");
    console.log("You: Give me 3 real-world examples of a strong ICP.");
    console.log("\nClaude:");
    console.log(response.content[0].text);
    console.log("\n");
}

call4();