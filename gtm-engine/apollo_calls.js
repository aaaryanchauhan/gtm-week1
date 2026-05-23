import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const APOLLO_API_KEY = process.env.APOLLO_API_KEY;
const APOLLO_BASE_URL = "https://api.apollo.io/v1";

// Call 1 will go here

// CALL 0: Test Authentication
async function testAuth() {
    console.log("=== Testing Authentication ===\n");
    try {
        const response = await axios.get(`${APOLLO_BASE_URL}/auth/health`, {
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": APOLLO_API_KEY,
            },
        });
        console.log("Authentication Successful:", response.data);
        console.log("\n");
    } catch (error) {
        console.error("Auth Error:", error.response?.data || error.message);
    }
}

// CALL 1: Search for people by title and industry
async function call1() {
    console.log("=== CALL 1: Search People by Title & Industry ===\n");

    try {
        const response = await axios.post(
            `${APOLLO_BASE_URL}/people/search`,
            {
                title: "Head of Sales",
                organization_industries: ["Software"],
                per_page: 5, // Start with just 5 results
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": APOLLO_API_KEY,
                },
            }
        );

        console.log(`Found ${response.data.breadcrumbs.total_pagination_count} results\n`);

        // Print the raw response to see what Apollo gives us
        console.log("Full Response:");
        console.log(JSON.stringify(response.data, null, 2));
        console.log("\n");
    } catch (error) {
        console.error("Call 1 Error:", error.response?.data || error.message);
    }
}

// Call 2 will go here

// Call 3 will go here

async function main() {
    await testAuth();
    await call1();
}

//main();

// CALL 4: Loop over results and print summary
async function call4() {
    console.log("=== CALL 4: Loop Over Results ===\n");

    try {
        const response = await axios.post(
            `${APOLLO_BASE_URL}/people/search`,
            {
                api_key: APOLLO_API_KEY,
                title: "Head of Sales",
                organization_industries: ["Software"],
                per_page: 5,
            }
        );

        const people = response.data.people;

        console.log(`Processing ${people.length} results...\n`);

        // Loop over each result
        people.forEach((person, index) => {
            const name = person.name || "Unknown";
            const title = person.title || "No title";
            const email = person.email || "No email";
            const company = person.organization?.name || "Unknown";
            const industry = person.organization?.industry || "Unknown";
            const size = person.organization?.estimated_num_employees || "Unknown";

            // Print a clean summary
            console.log(`[${index + 1}/${people.length}] ${name}`);
            console.log(`  Position: ${title} at ${company}`);
            console.log(`  Email: ${email}`);
            console.log(`  Company Size: ${size} employees`);
            console.log(`  Industry: ${industry}`);
            console.log("");
        });

        console.log("✓ Processing complete");
    } catch (error) {
        console.error("Call 4 Error:", error.response?.data || error.message);
    }
}

call4