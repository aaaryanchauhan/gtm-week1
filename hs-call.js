import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || process.env.HUBSPOT_ACCESS_TOKEN;
const HUBSPOT_BASE_URL = "https://api.hubapi.com";

// CALL 1: List all contacts
async function call1() {
    console.log("=== CALL 1: List All Contacts ===\n");

    try {
        const response = await axios.get(
            `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`,
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
                params: {
                    limit: 10,
                    properties: ["firstname", "lastname", "email", "jobtitle"],
                },
            }
        );

        const contacts = response.data.results;

        console.log(`Found ${contacts.length} contacts\n`);
        console.log("--- Contact List ---\n");

        contacts.forEach((contact, index) => {
            const firstname = contact.properties.firstname || "Unknown";
            const lastname = contact.properties.lastname || "Unknown";
            const email = contact.properties.email || "No email";
            const jobtitle = contact.properties.jobtitle || "No title";

            console.log(`${index + 1}. ${firstname} ${lastname}`);
            console.log(`   Email: ${email}`);
            console.log(`   Title: ${jobtitle}`);
            console.log("");
        });
    } catch (error) {
        console.error("Call 1 Error:", error.response?.data || error.message);
    }
}

// Call 2 will go here

// CALL 2: Create a new contact
async function call2() {
    console.log("=== CALL 2: Create New Contact ===\n");

    try {
        // Data for the new contact
        const newContact = {
            firstname: "Alex",
            lastname: "Johnson",
            email: "alex.johnson@example.com",
            jobtitle: "CTO",
            company: "Tech Startup Inc",
        };

        console.log("Creating contact with data:");
        console.log(JSON.stringify(newContact, null, 2));
        console.log("");

        const response = await axios.post(
            `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts`,
            {
                properties: newContact,
            },
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const createdContact = response.data;

        console.log("✓ Contact created successfully!\n");
        console.log(`Contact ID: ${createdContact.id}`);
        console.log(`Name: ${createdContact.properties.firstname} ${createdContact.properties.lastname}`);
        console.log(`Email: ${createdContact.properties.email}`);
        console.log(`Title: ${createdContact.properties.jobtitle}`);
        console.log("");

        // Store the ID for Call 3 later
        console.log(`(Save this ID for later: ${createdContact.id})`);
        console.log("");
    } catch (error) {
        console.error("Call 2 Error:", error.response?.data || error.message);
    }
}
// Call 3 will go here

// CALL 3: Update a contact
async function call3() {
    console.log("=== CALL 3: Update Contact ===\n");

    try {
        // Use the contact ID from Call 2
        // REPLACE THIS with the actual ID you got from Call 2
        const contactId = "490121019114";

        const updates = {
            jobtitle: "VP of Technology",
            phone: "+1-555-9876",
        };

        console.log(`Updating contact ${contactId} with:`);
        console.log(JSON.stringify(updates, null, 2));
        console.log("");

        const response = await axios.patch(
            `${HUBSPOT_BASE_URL}/crm/v3/objects/contacts/${contactId}`,
            {
                properties: updates,
            },
            {
                headers: {
                    Authorization: `Bearer ${HUBSPOT_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        const updatedContact = response.data;

        console.log("✓ Contact updated successfully!\n");
        console.log(`Name: ${updatedContact.properties.firstname} ${updatedContact.properties.lastname}`);
        console.log(`New Title: ${updatedContact.properties.jobtitle}`);
        console.log(`New Phone: ${updatedContact.properties.phone}`);
        console.log("");
    } catch (error) {
        console.error("Call 3 Error:", error.response?.data || error.message);
    }
}

call3()