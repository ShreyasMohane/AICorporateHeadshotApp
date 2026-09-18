# 👔 AI Corporate Headshot Standardizer

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![Framework](https://img.shields.io/badge/FastAPI-0.100+-green.svg)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)

An AI-powered B2B micro-SaaS designed for distributed teams, remote-first tech startups, and real estate brokerages[cite: 5, 6]. This application allows HR departments to batch-upload casual employee selfies and instantly standardize them into highly professional corporate headshots[cite: 6].

## 🚨 The Problem
Imagine a startup where employees work from home all over the world[cite: 6]. The company wants a unified, professional "Meet the Team" page[cite: 6]. But when HR asks for photos, they get a mess:
* One person takes a selfie in a messy bedroom[cite: 6].
* Another is in a dimly lit kitchen[cite: 6].
* Someone else is wearing a faded graphic t-shirt[cite: 6].

Hiring a professional photographer for every single person in different cities is way too expensive and logistically complicated[cite: 6].

## 💡 The Solution
A simple web platform where HR managers can upload all random, messy employee selfies at once[cite: 6]. The AI engine gives them an instant, professional makeover:
* **Fixes the Background:** Removes messy bedrooms and replaces them with a clean, matching background (like a modern office or a solid brand color)[cite: 6].
* **Fixes the Clothes:** Digitally swaps casual t-shirts or hoodies for professional blazers or button-down shirts[cite: 6].
* **Fixes the Lighting:** Corrects harsh shadows and makes everyone look like they are in a real photo studio[cite: 6].
* **Keeps the Face:** Most importantly, it does all of this without changing the person's actual facial identity—it still looks exactly like them, just highly polished[cite: 6].

## 🛠 Tech Stack
This system integrates a modern web framework with asynchronous AI image inference[cite: 6].

* **Backend API:** FastAPI (Python) handles routing, authentication, webhook processing, and database interactions[cite: 6].
* **Database & Auth:** PostgreSQL (via Supabase) stores user accounts, credit balances, image S3 URLs, and model training statuses[cite: 6].
* **Object Storage:** AWS S3 / Cloudflare R2 stores the user-uploaded reference photos and the final generated output headshots[cite: 6].
* **Payments:** Stripe API handles checkout sessions and webhook events to grant generation "credits"[cite: 6].
* **AI Inference:** Managed GPUs via Fal.ai / Replicate / Astria run the actual Stable Diffusion / Flux LoRA models[cite: 6].
* **Queue/Workers:** Celery + Redis handle the asynchronous communication between the FastAPI server and the AI inference provider[cite: 6].

## ⚙️ System Architecture & Data Flow
1. **Checkout & Billing:** The user selects a batch package. FastAPI creates a Stripe checkout session. Upon payment, the `/stripe/webhook` listens for `checkout.session.completed` and allocates credits to the user's Supabase account[cite: 6].
2. **Image Ingestion:** The frontend uploads reference photos directly to AWS S3/Cloudflare R2 (bypassing FastAPI to prevent timeouts), and the pre-signed URLs are saved to the database[cite: 6].
3. **Async AI Processing:** FastAPI deducts credits, marks a new job as "processing", and dispatches the S3 URLs and prompt architectures to the AI provider (e.g., Fal.ai)[cite: 6].
4. **Fulfillment Webhook:** The AI provider processes the job (zero-shot or custom LoRA training) and pings the `/ai/callback` webhook upon completion[cite: 6].
5. **Client Delivery:** FastAPI updates the database status to "completed"[cite: 6]. The frontend polls `/status/{job_id}` (or uses WebSockets) to fetch and display the final images[cite: 6].

## 💼 Unit Economics & Business Model
* **Pricing Strategy:** Pay-per-batch B2B model (e.g., $50 one-time fee to process 10 employees)[cite: 6].
* **Infrastructure Burn:** Minimal fixed costs (~$50–$130/month) covering Supabase, Vercel, S3, and outbound CRM tools[cite: 5].
* **Profitability:** Gross margins sit at ~80% when utilizing a zero-shot AI architecture[cite: 5]. The business reaches its break-even point by selling just 3 batches (30 headshots) per month[cite: 4].

## 🚀 Local Setup & Installation

### Prerequisites
* Python 3.10+
* Redis server (running locally or via Docker)
* Supabase Account
* Stripe Developer Account
* Fal.ai or Replicate API Keys

### Installation Steps
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/ai-corporate-headshot-standardizer.git](https://github.com/yourusername/ai-corporate-headshot-standardizer.git)
   cd ai-corporate-headshot-standardizer
