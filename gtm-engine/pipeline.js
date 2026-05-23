// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || process.env.HUBSPOT_ACCESS_TOKEN;
// const HUBSPOT_BASE_URL = "https://api.hubapi.com";

// // ===== HELPER FUNCTIONS =====

// // Map Apollo data to HubSpot properties
// function mapApolloToHubSpot(apolloPerson) {
//     const nameParts = apolloPerson.name ? apolloPerson.name.split(" ") : ["Unknown", ""];
//     const firstname = nameParts[0];
//     const lastname = nameParts[1] || "";

//     return {
//         firstname: firstname,
//         lastname: lastname,
//         email: apolloPerson.email,
//         jobtitle: apolloPerson.title,
//         company: apolloPerson.organization?.name || "Unknown",
//     };
// }

// // Create contact in HubSpot
// async function createContactInHubSpot(hubspotProperties) {
//     try {
//         const response = await axios.post(
//             `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`,
//             {
//                 properties: hubspotProperties,
//             },
//             {
//                 headers: {
//                     Authorization: `Bearer ${HUBSPOT_API_KEY}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         return {
//             success: true,
//             contactId: response.data.id,
//             contact: response.data.properties,
//         };
//     } catch (error) {
//         // Handle 409 error (contact already exists)
//         if (error.response?.status === 409) {
//             return {
//                 success: false,
//                 error: "CONTACT_EXISTS",
//                 message: "Contact with this email already exists",
//             };
//         }

//         return {
//             success: false,
//             error: error.response?.status || "UNKNOWN_ERROR",
//             message: error.response?.data?.message || error.message,
//         };
//     }
// }

// // ===== MAIN PIPELINE =====

// async function runPipeline() {
//     console.log("========================================");
//     console.log("   MINI GTM PIPELINE: Apollo → HubSpot");
//     console.log("========================================\n");

//     // Step 1: Mock Apollo results (simulating API call)
//     const apolloResults = [
//         {
//             name: "Michael Chen",
//             title: "VP of Product",
//             email: "michael.chen@techco.com",
//             organization: {
//                 name: "TechCo Inc",
//             },
//         },
//         {
//             name: "Lisa Rodriguez",
//             title: "Head of Revenue",
//             email: "lisa.rodriguez@growthlab.com",
//             organization: {
//                 name: "GrowthLab",
//             },
//         },
//         {
//             name: "David Kim",
//             title: "CTO",
//             email: "david.kim@innovate.io",
//             organization: {
//                 name: "Innovate Labs",
//             },
//         },
//     ];

//     console.log("STEP 1: Received Apollo results\n");
//     console.log(`Total records: ${apolloResults.length}\n`);

//     // Step 2: Process each record
//     console.log("STEP 2: Processing records...\n");

//     let successCount = 0;
//     let failureCount = 0;

//     for (let i = 0; i < apolloResults.length; i++) {
//         const apolloPerson = apolloResults[i];
//         const recordNumber = i + 1;

//         console.log(`--- Record ${recordNumber}/${apolloResults.length} ---`);
//         console.log(`Name: ${apolloPerson.name}`);
//         console.log(`Email: ${apolloPerson.email}`);
//         console.log(`Title: ${apolloPerson.title}`);
//         console.log(`Company: ${apolloPerson.organization.name}`);

//         // Step 3: Map to HubSpot format
//         console.log("\n  Mapping to HubSpot format...");
//         const hubspotProperties = mapApolloToHubSpot(apolloPerson);
//         console.log(`  Mapped properties:`, JSON.stringify(hubspotProperties, null, 2));

//         // Step 4: Create in HubSpot
//         console.log(`\n  Creating in HubSpot...`);
//         const result = await createContactInHubSpot(hubspotProperties);

//         // Step 5: Handle result
//         if (result.success) {
//             console.log(`  ✓ Success! Contact ID: ${result.contactId}`);
//             successCount++;
//         } else if (result.error === "CONTACT_EXISTS") {
//             console.log(`  ⚠ Skipped: ${result.message}`);
//             failureCount++;
//         } else {
//             console.log(`  ✗ Error: ${result.message}`);
//             failureCount++;
//         }

//         console.log("");
//     }

//     // Final summary
//     console.log("========================================");
//     console.log("           PIPELINE COMPLETE");
//     console.log("========================================\n");
//     console.log(`✓ Successful: ${successCount}`);
//     console.log(`✗ Failed/Skipped: ${failureCount}`);
//     console.log(`Total processed: ${successCount + failureCount}`);
//     console.log("");
// }

// // Run the pipeline
// runPipeline();


import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_BASE_URL = "https://api.hubapi.com";

// Mock Apollo data
const apolloPerson = {
    name: "Michael Chend",
    title: "VP of Product",
    email: "michael.chendnode@techco.com",
    organization: {
        name: "TechCo Inc",
    },
};

// Convert Apollo format → HubSpot format
const hubspotProperties = {
    firstname: apolloPerson.name.split(" ")[0],
    lastname: apolloPerson.name.split(" ")[1],
    email: apolloPerson.email,
    jobtitle: apolloPerson.title,
    company: apolloPerson.organization.name,
};

// Create contact in HubSpot
async function runPipeline() {
    try {
        const response = await axios.post(
            `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`,
            {
                properties: hubspotProperties,
            },
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        console.log("Contact created:");
        console.log(response.data);
    } catch (error) {
        console.error("Error creating contact:", error.response?.data || error.message);
    }
}

runPipeline();