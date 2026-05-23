# GTM Engineering Prep: Complete Guide

**Last Updated:** May 14, 2026  
**Prep Duration:** 10 weeks  
**Goal:** Build a complete GTM automation system, ship a portfolio project, and land a GTM engineer role at a high-growth startup

---

## Table of Contents

1. [Who You Are & Where You're Starting](#who-you-are--where-youre-starting)
2. [The Big Picture: What You're Building](#the-big-picture-what-youre-building)
3. [10-Week Master Plan](#10-week-master-plan)
4. [Phase-by-Phase Breakdown](#phase-by-phase-breakdown)
5. [Technical Skills Foundation](#technical-skills-foundation)
6. [Key Objectives by Phase](#key-objectives-by-phase)
7. [Success Metrics](#success-metrics)
8. [Weekly Operating Principle](#weekly-operating-principle)

---

## Who You Are & Where You're Starting

**Profile:**
- Location: Delhi, India
- Background: Non-technical but revenue/GTM-curious
- Current State: Learning APIs, no-code tools, and AI integration
- Goal: Become a GTM Engineer at a high-growth B2B SaaS startup

**Why This Path:**
A GTM engineer is the person who sits between revenue teams and engineering. You understand:
- How sales and marketing actually work
- How to build systems that scale lead generation
- How to use APIs, no-code tools, and AI to automate revenue processes
- How to measure and optimize the pipeline

**What Makes You Different:**
You're approaching this as a builder, not a theorist. You will ship a complete, working automation system by Week 10. That system becomes your portfolio.

---

## The Big Picture: What You're Building

### The End-to-End GTM Automation Pipeline

By Week 10, you will have built a system that does this:

```
Raw Company List
     ↓
   Enrich (Company data: size, funding, industry)
     ↓
   Enrich (Contact data: email, title, phone)
     ↓
   Score (AI: is this a good fit for my product?)
     ↓
   Draft (AI: write personalized outreach)
     ↓
   Sync (Auto-create contact in HubSpot)
     ↓
   Monitor (Track failures, retry, alert)
```

This pipeline:
- Takes a CSV of company names
- Finds decision-makers at those companies
- Enriches them with company and person data
- Scores them with AI based on ICP
- Drafts personalized email openers
- Creates them as contacts in HubSpot
- Runs with zero manual intervention

### Why This Matters

This system represents what every GTM engineer does:
- You know APIs (Apollo, HubSpot, Anthropic)
- You know no-code tools (Make.com, Clay)
- You know how to think about data quality and scoring
- You know AI (Claude) integrated into production workflows
- You can explain business impact (leads qualified, time saved)

When you interview, you don't say "I know APIs." You say: "I built a system that takes raw company lists and produces sales-ready leads. It achieves 80%+ email coverage and scores leads on ICP fit. Here's the code, here's the workflow, here are the results."

---

## 10-Week Master Plan

| Week | Focus | What You Ship | Success Metric |
|------|-------|---------------|-----------------|
| **1** | API Fundamentals | 15+ raw API calls (Apollo, HubSpot, Anthropic) | Can read/parse JSON independently |
| **2** | Enrichment Pipeline | Enrich 50+ real companies (Clay/Apollo) | 80%+ email coverage on cold list |
| **3** | Make.com Workflows | Auto-create contacts in HubSpot from enriched data | Workflow runs 20+ records without error |
| **4** | Signal Detection | Build hiring signal pipeline | Correctly identifies signals on 80% of test cases |
| **5** | AI Integration | AI-drafted email block in Clay | 5 emails you'd send without editing |
| **6** | End-to-End Pipeline | Full pipeline: Sheet → Enrich → Score → Draft → HubSpot | Process 100 leads with 95%+ success |
| **7** | Error Handling & Monitoring | Slack alerts, retry logic, failure tracking | System alerts on failures within 5 minutes |
| **8** | Portfolio Documentation | Notion case study + Loom video walkthrough | Someone unfamiliar understands build in 3 minutes |
| **9** | LinkedIn Presence | 3+ posts with code/screenshots + engagement | At least 1 public inquiry |
| **10** | Job Search Campaign | 20 personalized applications to target companies | 3+ first-round interviews |

---

## Phase-by-Phase Breakdown

### Phase 1: Foundation (Weeks 1-2)
**Goal:** Understand how systems talk to each other (APIs, authentication, data formats)

**Why this matters:** Every tool (Apollo, HubSpot, Anthropic, Make, Clay) communicates via APIs. If you don't understand how APIs work, you can't build anything.

**What you learn:**
- REST fundamentals (GET, POST, PATCH, DELETE, authentication headers)
- JSON (parsing, extracting nested data, handling nulls)
- API error handling (401, 429, 500, retry logic)
- Three core platforms: Anthropic, Apollo, HubSpot

**Week 1 Breakdown:**
- Days 1-2: Environment setup + Anthropic API
- Days 3-5: Apollo API + HubSpot API + basic integration

**Week 2 Breakdown:**
- Days 1-3: Clay deep dive (enrichment as a service)
- Days 4-5: Build your first enrichment pipeline (50 companies)

**You'll know you're done when:** You can make an API call to any of these 3 platforms without consulting docs, and you understand every field in the response.

---

### Phase 2: Enrichment & Integration (Weeks 2-3)
**Goal:** Take raw data, make it rich, flow it between systems

**Why this matters:** Data enrichment is 70% of GTM engineering work. You find a list of 500 company names. You need emails, company sizes, funding info, decision-maker titles. That's enrichment. Then you move that data from Clay → Make → HubSpot. That's integration.

**What you learn:**
- How to enrich companies (Apollo, Clay) — get emails, company details
- How to enrich people (email-based lookups)
- No-code workflow basics (Make.com)
- Data mapping (field matching between systems)
- Handling missing data (80%+ coverage is good)

**Week 3 Breakdown:**
- Days 1-2: Make.com fundamentals (create account, build simple 3-step flow)
- Days 3-4: Build your first Make workflow (enrich → HubSpot create contact)
- Day 5: Test with 20+ records, fix errors

**You'll know you're done when:** You can take a CSV, enrich it in Clay, and have Make auto-create contacts in HubSpot with zero manual steps.

---

### Phase 3: AI & Lead Qualification (Weeks 4-5)
**Goal:** Use Claude to think about your leads

**Why this matters:** Your enriched data is useless if you don't know which leads matter. Is this company a fit for my product? Is the person the right stakeholder? Is this the right time to reach out? AI answers these questions at scale.

**What you learn:**
- Prompt engineering (how to ask Claude good questions)
- Multi-turn conversations (maintain context across exchanges)
- Parsing AI responses (extract structured data from natural language)
- Lead scoring logic (ICP fit, buying power, urgency)
- Integrating Claude into Make workflows

**Week 4 Breakdown:**
- Days 1-3: Claude API mastery (system prompts, multi-turn, response parsing)
- Days 4-5: Build lead scoring prompt (scores 50 leads on fit)

**Week 5 Breakdown:**
- Days 1-3: Email draft generation (Claude writes personalized openers)
- Days 4-5: Integrate Claude into Make workflow

**You'll know you're done when:** You score 50 leads with Claude and 90%+ of your high-fit assessment matches real company fit.

---

### Phase 4: Complete Automation (Weeks 6-7)
**Goal:** Build the full pipeline, make it production-ready

**Why this matters:** Week 1-5 you learn pieces. Week 6-7 you glue them together into one system that works without you.

**What you learn:**
- End-to-end architecture (data flow from source to destination)
- Error handling and recovery (workflows break, you need retry logic)
- Monitoring and observability (know when things fail, why, how to fix)
- Hiring signals (job postings, funding, press = intent to buy)

**Week 6 Breakdown:**
- Days 1-3: Integrate all pieces (enrichment → scoring → draft → HubSpot)
- Days 4-5: Test with 100 leads, find and fix errors

**Week 7 Breakdown:**
- Days 1-3: Add error handling (Slack alerts, retry logic, validation)
- Days 4-5: Add monitoring (dashboards showing pipeline health)

**You'll know you're done when:** You can run 100 leads through the entire pipeline and 95%+ complete without manual intervention.

---

### Phase 5: Ship & Job Search (Weeks 8-10)
**Goal:** Package your build, get hired

**Why this matters:** A system no one knows about is worthless. Week 8-10 is about telling the story and applying it to real jobs.

**What you learn:**
- How to document technical projects for non-technical people
- How to build personal brand on LinkedIn
- How to run a targeted outreach campaign
- How to interview as a builder (you have proof)

**Week 8 Breakdown:**
- Days 1-3: Build Notion case study (architecture, decisions, results, code)
- Days 4-5: Record Loom video (3-minute walkthrough of the system)

**Week 9 Breakdown:**
- Days 1-3: Write 3 LinkedIn posts (code snippets, screenshots, learnings)
- Days 4-5: Engage in GTM/revenue engineering conversations

**Week 10 Breakdown:**
- Days 1-3: Identify 50 target companies (ICP: Series A-B, GTM-focused, 20-100 people)
- Days 4-5: Send 20 personalized applications with portfolio link

**You'll know you're done when:** You have 3+ first-round interviews scheduled.

---

## Technical Skills Foundation

### Tier 1: Critical Skills (Weeks 1-3) — Must Master

#### 1. APIs & HTTP Fundamentals
**What you need to know:**
- HTTP methods (GET = read, POST = create, PATCH = update, DELETE = remove)
- Request anatomy (URL, method, headers, body)
- Authentication (API keys in headers, Bearer tokens, API keys in body)
- Response structure (status code, headers, body)
- Error codes (200 = success, 401 = auth error, 429 = rate limited, 500 = server error)
- Rate limiting (how many calls per minute/hour)

**How you'll use it:**
Every API call you make. Every workflow in Make. Every integration.

**Success metric:** Make 15+ API calls without errors, understand each response completely.

---

#### 2. JSON & Data Structures
**What you need to know:**
- Objects (`{ key: value }`)
- Arrays (`[ item1, item2 ]`)
- Nested data (`{ user: { name: "Aryan", email: "aryan@..." } }`)
- Null/missing values (how to handle them without crashes)
- Parsing/extracting data (get specific fields from large responses)

**How you'll use it:**
Every API response is JSON. You extract fields, transform them, send them to the next system.

**Success metric:** Extract 5 fields from a 100-field API response in under 2 minutes.

---

#### 3. No-Code Workflows (Make.com)
**What you need to know:**
- Creating workflows (trigger → condition → action)
- Data mapping (field A from system 1 → field B in system 2)
- Filters and conditions (if this, then that)
- Testing and debugging (does the data flow correctly?)
- Error handling (what happens when API returns 401?)

**How you'll use it:**
Your enrichment pipeline runs in Make. Data flows: CSV upload → enrich → HubSpot. Make orchestrates all of it.

**Success metric:** Build a workflow that creates 20 HubSpot contacts from enriched data without manual steps.

---

### Tier 2: Important Skills (Weeks 4-6) — Deep Dive

#### 4. Prompt Engineering & LLM Integration
**What you need to know:**
- System prompts (how to instruct Claude to act)
- Multi-turn conversations (maintaining context)
- Structuring prompts for consistent output (ask for JSON, get JSON)
- Token usage and costs
- Testing and iterating on prompts

**How you'll use it:**
Claude scores your leads, drafts emails, enriches company context. You teach Claude to think like a GTM person via your prompts.

**Success metric:** Write 5 prompts that consistently produce 80%+ quality output.

---

#### 5. Revenue Acumen (GTM Principles)
**What you need to know:**
- ICP (Ideal Customer Profile) — who should you target?
- Lead scoring — which leads matter most?
- Pipeline velocity — how long does a deal take?
- CAC (Customer Acquisition Cost) — how much does a customer cost to acquire?
- Signal detection — what indicates a prospect is likely to buy?

**How you'll use it:**
Your scoring logic is based on these principles. Your prompts teach Claude to think this way. Your pipeline prioritizes high-signal leads.

**Success metric:** Define a clear ICP, score 50 leads, validate 90%+ of high-fit scores are correct.

---

### Tier 3: Advanced Skills (Weeks 7-10) — As Needed

#### 6. SQL
**What you need to know:**
- SELECT queries (get data)
- WHERE clauses (filter)
- JOINs (combine tables)
- Aggregations (count, sum, average)

**How you'll use it:**
Query HubSpot data for analytics. "How many leads did we create this week? What's the fit score distribution?"

**Success metric:** Write a query that answers a business question about your pipeline.

---

#### 7. Python
**What you need to know:**
- Loops (process multiple items)
- Functions (reusable code blocks)
- API calls with libraries (requests, httpx)
- Error handling (try/except)
- Data transformation (pandas, if needed)

**How you'll use it:**
For custom automation that Make can't do. Complex data transformations. Advanced scoring logic.

**Success metric:** Write a Python script that calls an API, transforms the response, and stores it.

---

## Key Objectives by Phase

### Phase 1: Foundation (Weeks 1-2)

**Objective 1.1: Master API Basics**
- [ ] Understand REST (GET, POST, PATCH, DELETE)
- [ ] Make 5 Anthropic API calls (basic → system prompt → multi-turn)
- [ ] Make 5 Apollo API calls (if paid plan) or enrich via API
- [ ] Make 5 HubSpot API calls (list → create → update)
- [ ] Parse every response, explain every field
- [ ] Handle errors gracefully (401, 429, validation)

**Success:** Can read any API docs and make a working call in 5 minutes.

---

**Objective 1.2: JSON Mastery**
- [ ] Understand objects, arrays, nested structures
- [ ] Extract nested fields from complex responses
- [ ] Handle null/missing values without crashes
- [ ] Transform data (rename fields, combine fields)

**Success:** Extract 5 specific fields from a 100-field response in under 2 minutes.

---

**Objective 1.3: Know Your Core Platforms**
- [ ] Anthropic: `messages` endpoint, system prompts, multi-turn
- [ ] Apollo: enrichment endpoints (organizations/enrich, person enrichment)
- [ ] HubSpot: contacts API (list, create, update, properties)

**Success:** Make 3 API calls to each platform without consulting docs.

---

### Phase 2: Enrichment & Integration (Weeks 2-3)

**Objective 2.1: Data Enrichment Pipeline**
- [ ] Enrich 50+ real companies with Clay/Apollo
- [ ] Achieve 80%+ email coverage
- [ ] Understand data quality metrics
- [ ] Handle missing data gracefully

**Success:** Enrich 100 companies, 80+ have valid emails.

---

**Objective 2.2: Make.com Workflows**
- [ ] Create 3-step workflow (trigger → condition → action)
- [ ] Connect Make to HubSpot
- [ ] Map fields between systems
- [ ] Test and debug workflows

**Success:** Build workflow that creates 20 HubSpot contacts from CSV without manual steps.

---

**Objective 2.3: Integration Fundamentals**
- [ ] Understand data flow (source → transform → destination)
- [ ] Map fields between systems correctly
- [ ] Understand webhooks vs. polling
- [ ] Log and monitor data flow

**Success:** Build flow: CSV → Clay → Make → HubSpot, works perfectly.

---

### Phase 3: AI & Lead Qualification (Weeks 4-5)

**Objective 3.1: Prompt Engineering**
- [ ] Write clear system prompts for GTM use cases
- [ ] Use multi-turn conversations to maintain context
- [ ] Structure prompts for consistent output (JSON, CSV)
- [ ] Understand token usage and cost optimization
- [ ] Iterate and test prompts

**Success:** Write 5 prompts with 80%+ quality output consistency.

---

**Objective 3.2: AI-Powered Scoring**
- [ ] Build Claude system prompt for lead scoring
- [ ] Score on fit (ICP), urgency, buying power
- [ ] Parse Claude responses into structured data
- [ ] Integrate into Make workflows

**Success:** Score 50 leads, 90%+ correct on high-fit assessment.

---

**Objective 3.3: AI-Drafted Messaging**
- [ ] Generate personalized email openers
- [ ] Draft subject lines
- [ ] Maintain brand voice while personalizing
- [ ] Automate message generation in Clay

**Success:** Generate 20 emails you'd send without editing.

---

### Phase 4: Complete Automation (Weeks 6-7)

**Objective 4.1: Hiring Signal Detection**
- [ ] Identify hiring signals (job postings, funding, press)
- [ ] Build rules to detect automatically
- [ ] Prioritize based on signal strength
- [ ] Monitor signal accuracy

**Success:** Build workflow flagging signals with 80%+ precision.

---

**Objective 4.2: End-to-End Pipeline**
- [ ] Integrate all components (enrich → score → draft → HubSpot)
- [ ] Zero manual intervention after setup
- [ ] Automate 80% of lead preparation
- [ ] Handle duplicates, validation, edge cases

**Success:** Process 100 leads through full pipeline, 95%+ complete without errors.

---

**Objective 4.3: Monitoring & Observability**
- [ ] Set up Slack alerts for failures
- [ ] Log all API calls and responses
- [ ] Monitor success rates by stage
- [ ] Create dashboards showing pipeline health
- [ ] Implement retry logic

**Success:** System alerts on all failures within 5 minutes.

---

### Phase 5: Ship & Job Search (Weeks 8-10)

**Objective 5.1: Portfolio Case Study**
- [ ] Document architecture and decisions
- [ ] Create Notion walkthrough with screenshots
- [ ] Record 3-minute Loom video
- [ ] Show before/after metrics
- [ ] Explain business impact clearly

**Success:** Non-technical person understands build in 3 minutes.

---

**Objective 5.2: LinkedIn Presence**
- [ ] Write 3+ posts with code snippets/screenshots
- [ ] Share learnings and build process
- [ ] Engage in GTM/revenue engineering conversations
- [ ] Get at least 1 public inquiry

**Success:** Generate 1+ meaningful inquiry from posts.

---

**Objective 5.3: Targeted Job Search**
- [ ] Define your ICP (stage, size, vertical, role)
- [ ] Identify 50 target companies
- [ ] Find founder/Head of Growth contacts
- [ ] Send 20 personalized applications
- [ ] Personalize based on company's GTM stack

**Success:** Land 3+ first-round interviews.

---

## Success Metrics

### By Week

| Week | Metric | Target |
|------|--------|--------|
| 1 | API calls made | 15+ |
| 1 | JSON parsing confidence | Can explain every field |
| 2 | Companies enriched | 50+ |
| 2 | Email coverage | 80%+ |
| 3 | Contacts created via workflow | 20+ without errors |
| 4 | Hiring signals detected correctly | 80%+ precision |
| 5 | AI-drafted emails | 5 you'd send unedited |
| 6 | Leads through full pipeline | 100+ with 95%+ success |
| 7 | Failure alert time | Within 5 minutes |
| 8 | Portfolio understanding | 3 minute explanation |
| 9 | LinkedIn inquiries | 1+ |
| 10 | First-round interviews | 3+ |

### Overall

**By Week 10, you will have:**
- ✅ Built a complete GTM automation system
- ✅ Documented it clearly with case study + video
- ✅ Built personal brand via LinkedIn
- ✅ Applied to 20 target companies
- ✅ Have 3+ first-round interviews

---

## Weekly Operating Principle

### Build → Ship → Document → Repeat

Every week follows this cycle:

**Monday-Thursday: Build**
- Write code/workflows
- Test with real data
- Fix errors
- Iterate until it works

**Friday: Ship & Document**
- Finalize what you built
- Take screenshots/screen recordings
- Write summary of what you learned
- Update Logs page in Notion
- Commit to GitHub (if code)

**Repeat Next Week**

---

## How Claude Should Help You

Claude (me) will:

1. **Break down complex concepts** into digestible pieces
2. **Provide step-by-step guidance** for each day/hour
3. **Reference your objectives** to keep you on track
4. **Point out when you're deviating** from your goals
5. **Celebrate wins** and keep you motivated
6. **Debug code and workflows** with you
7. **Write summaries to your Logs page** automatically
8. **Adjust explanations based on your confusion**

You should:

1. **Tell me what you're trying to do** (don't just say "help")
2. **Share error messages or blockers** (paste actual errors)
3. **Update your Notion** as you progress (I'll read it)
4. **Ask clarifying questions** when confused
5. **Ship something every Friday** (doesn't have to be perfect)

---

## Your Current Status

**Week 1: In Progress**
- ✅ Day 1: Environment setup complete
- ✅ Day 2: 4 Anthropic API calls working
- 🔄 Day 3: Apollo API calls (working on free plan limitations)
- ⏳ Days 4-5: HubSpot integration + mini pipeline

**Blockers to address:**
- Apollo free plan doesn't include people/search (only organization enrich)
- Adapting Week 3 to use available endpoints

**Next immediate steps:**
1. Finish Day 3 with available Apollo endpoints
2. Move to Day 4: HubSpot API
3. Day 5: Simple integration (Apollo → HubSpot)

---

## Questions to Ask Yourself Each Week

1. **What did I build?** (Be specific)
2. **What's still confusing?** (Ask for help)
3. **What does next week require from me?** (Read objectives)
4. **Am I tracking toward the success metric?** (Check)
5. **Did I ship something?** (GitHub commit + Logs update)

---

## Let's Build

You have 10 weeks. You have clear objectives. You have a system for tracking progress.

**Now let's ship.**

Start with finishing Week 1. Make your API calls. Parse the responses. Document what you learned.

Everything else flows from there.

---

*This guide is your north star. Refer back to it daily. When you feel lost, re-read your objectives. When you feel stuck, ask for help. When you ship, celebrate.*

*You've got this.*