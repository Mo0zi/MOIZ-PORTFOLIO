# Search Console & Indexing Execution Checklist

**Domain**: [https://www.moizahmed.online/](https://www.moizahmed.online/)  
**Sitemap XML**: [https://www.moizahmed.online/sitemap.xml](https://www.moizahmed.online/sitemap.xml)  
**Robots TXT**: [https://www.moizahmed.online/robots.txt](https://www.moizahmed.online/robots.txt)  

---

## 1. Google Search Console (GSC) Setup & Submission

1. **Verify Ownership**: Domain verification via DNS TXT record or HTML tag in `index.html`.
2. **Submit Sitemap**: Go to GSC -> **Sitemaps** -> Submit `https://www.moizahmed.online/sitemap.xml`.
3. **Priority URL Inspection & Manual Indexing Requests**:
   - `https://www.moizahmed.online/` (Root Homepage & Brand Hub)
   - `https://www.moizahmed.online/#local-ai-developer-sialkot` (AI Developer Sialkot)
   - `https://www.moizahmed.online/#local-fyp-developer-sialkot` (FYP Project Developer Sialkot)
   - `https://www.moizahmed.online/#local-n8n-automation-expert-pakistan` (n8n Automation Expert Pakistan)
   - `https://www.moizahmed.online/#local-full-stack-developer-sialkot` (Full Stack Developer Sialkot)
   - `https://www.moizahmed.online/#services-agentic-ai-development` (Agentic AI Service)

---

## 2. Bing Webmaster Tools & IndexNow API Setup

1. **Import GSC Verification**: Import domain directly into Bing Webmaster Tools.
2. **Submit Sitemap**: Submit `https://www.moizahmed.online/sitemap.xml`.
3. **Enable IndexNow API**:
   - Host `indexnow.txt` key on root domain directory.
   - Send HTTP POST requests to `https://api.indexnow.org/indexnow` upon each deployment to trigger immediate crawling by Bing, Yandex, and Seznam.

---

## 3. Generative Engine Crawling Verification

Ensure `robots.txt` explicitly grants access to AI web crawlers:
- `GPTBot` (OpenAI / ChatGPT Search)
- `PerplexityBot` (Perplexity AI)
- `ClaudeBot` (Anthropic Claude)
- `Google-Extended` (Google AI Overviews / Gemini)
