import React, { useState } from 'react';

interface ToolIdea {
  title: string;
  category: 'personal' | 'business' | 'media' | 'finance' | 'education' | 'lifestyle' | 'developer' | 'marketing' | 'automation' | 'agents';
  desc: string;
  prompt: string;
}

export const ContentPipeline: React.FC = () => {
  const categories = [
    { id: 'personal', label: 'Personal Utility', color: 'var(--color-cyan)' },
    { id: 'business', label: 'Business & Sales', color: 'var(--color-indigo)' },
    { id: 'media', label: 'Content & Media', color: 'var(--color-magenta)' },
    { id: 'finance', label: 'Finance & Wealth', color: '#10b981' }, // Emerald
    { id: 'education', label: 'Education & Study', color: '#f59e0b' }, // Gold
    { id: 'lifestyle', label: 'Lifestyle & Health', color: '#ec4899' }, // Pink
    { id: 'developer', label: 'Developer Utilities', color: '#8b5cf6' }, // Purple
    { id: 'marketing', label: 'Marketing & Growth', color: '#06b6d4' }, // Cyan
    { id: 'automation', label: 'Workflow Automation', color: '#ff7e33' }, // Orange
    { id: 'agents', label: 'AI Agent Builders', color: '#00f2fe' } // Neon Teal
  ] as const;

  const [activeFilter, setActiveFilter] = useState<typeof categories[number]['id']>('personal');
  const [selectedIdea, setSelectedIdea] = useState<ToolIdea | null>(null);

  const ideas: ToolIdea[] = [
    // 1. PERSONAL UTILITY
    { title: 'Daily Activity Log System', category: 'personal', desc: 'Track daily achievements vs planned goals.', prompt: 'Create checklist with circular progress ring representing day completion.' },
    { title: 'Personal Note-Taking App', category: 'personal', desc: 'Structured tags organizer with index searches.', prompt: 'Create card-based note compiler supporting custom tags.' },
    { title: 'Habit & Routine Tracker', category: 'personal', desc: 'Streak builder for daily habits (workout, read).', prompt: 'Create habit calendar checker showing consecutive day counts.' },
    { title: 'Study Timetable Planner', category: 'personal', desc: 'Dynamic schedule scheduler with alarm queues.', prompt: 'Design timeline layout which splits study intervals with break notifications.' },
    { title: 'Reminder Alert Widget', category: 'personal', desc: 'Floating system reminder triggers.', prompt: 'Generate audio timer notifications when checklist items are overdue.' },
    { title: 'Task Prioritizer Matrix', category: 'personal', desc: 'Matrix layout for sorting daily to-dos.', prompt: 'Build Eisenhower Matrix grid sorting tasks by Urgency and Importance.' },
    { title: 'Gift Idea Generator', category: 'personal', desc: 'Brainstorm gifts based on recipient profiles.', prompt: 'Simple form suggesting gift tags based on age, hobby, and budget inputs.' },
    { title: 'Pantry Recipe Finder', category: 'personal', desc: 'Search local pantry items for custom dishes.', prompt: 'Match ingredient checklist and render step-by-step cooking cards.' },
    { title: 'Travel Packing Planner', category: 'personal', desc: 'Generate packing list by destination weather.', prompt: 'Input city and duration to yield packing cards with status checkmarks.' },
    { title: 'Book Reading Tracker', category: 'personal', desc: 'Page milestone calculator with progress stats.', prompt: 'Track books read, current page, and project target finish date.' },
    { title: 'Morning Routine Timer', category: 'personal', desc: 'Split timers for structured early sequences.', prompt: 'Split morning sequence into timed progress bars with chimes.' },
    { title: 'Home Maintenance Log', category: 'personal', desc: 'Scheduled checks for filters, bills, batteries.', prompt: 'Grid of periodic household tasks showing days-left badges.' },
    { title: 'Local Activity Hub', category: 'personal', desc: 'Compile weekend plans and local events list.', prompt: 'Simple selector of activity types generating card templates.' },
    { title: 'Wishlist Priorities Deck', category: 'personal', desc: 'Save desired items with priority rankings.', prompt: 'Visual cards sorting personal shopping lists by desire score.' },
    { title: 'Journal Prompt Picker', category: 'personal', desc: 'Daily self-reflection questions compiler.', prompt: 'Click to display random creative writing prompts with response text area.' },

    // 2. BUSINESS & SALES
    { title: 'Payment Collection Dashboard', category: 'business', desc: 'Revenue aggregator for stripe & cashfree APIs.', prompt: 'Integrate Cashfree API gateway response to draw daily collection charts.' },
    { title: 'Zoom Webinar Analytics', category: 'business', desc: 'Analyze drop points and attendee stays.', prompt: 'Graph participant duration lists showing drop-off curves at time markers.' },
    { title: 'CRM Lead Tracker', category: 'business', desc: 'Track sales deals pipeline status.', prompt: 'Design kanban board showing Lead ➔ In Touch ➔ Proposal ➔ Won columns.' },
    { title: 'Client Communication Log', category: 'business', desc: 'Log meetings, emails, and follow-ups.', prompt: 'Create dashboard containing last interaction times and color-coded warnings.' },
    { title: 'Invoice PDF Generator', category: 'business', desc: 'Compile PDF invoices for small businesses.', prompt: 'Create printable invoice creator with automated tax calculations.' },
    { title: 'Email Follow-up Queue', category: 'business', desc: 'Queue reminder emails for client contracts.', prompt: 'Generate standard follow-up draft script templates based on date differences.' },
    { title: 'Expense Receipt Logger', category: 'business', desc: 'Quick input for receipts and categories.', prompt: 'Table showing date, vendor, amount with digital receipt preview block.' },
    { title: 'Meeting Cost Calculator', category: 'business', desc: 'Real-time cost ticker based on team size.', prompt: 'Input participant count and average rate to tick up cost per second.' },
    { title: 'NDA Builder Assistant', category: 'business', desc: 'Generate custom standard business NDAs.', prompt: 'Fill-in-the-blanks form producing a downloadable legal agreement text file.' },
    { title: 'Product Feedback Hub', category: 'business', desc: 'Gather customer scores and feature votes.', prompt: 'Render feedback list sorting submissions by user votes and rating stars.' },
    { title: 'Inventory Stock Alert', category: 'business', desc: 'Real-time stock alerts for retail listings.', prompt: 'Stock count grid highlighting low inventory items in glowing red.' },
    { title: 'Project Status Deck', category: 'business', desc: 'Visual high-level boards for client updates.', prompt: 'Create Gantt-style progress bars showing milestone start and finish states.' },
    { title: 'Pricing Calculator', category: 'business', desc: 'Calculate retail price by margin targets.', prompt: 'Form calculator showing cost of goods, overheads, margins, and final price.' },
    { title: 'Employee Time Card', category: 'business', desc: 'Simple check-in/check-out log sheet.', prompt: 'Timesheet log tracking login hours, breaks, and daily totals.' },
    { title: 'Survey Template Creator', category: 'business', desc: 'Design client feedback forms with JSON output.', prompt: 'Drag and drop builder producing JSON representation of custom forms.' },

    // 3. CONTENT & MEDIA
    { title: 'Video Script Builder', category: 'media', desc: 'Multi-column editor for speaking cues.', prompt: 'Dual-panel layout splitting video scene actions and speaking voiceover.' },
    { title: 'Thumbnail CTR Analyzer', category: 'media', desc: 'Overlay mock layout to preview video CTR.', prompt: 'Upload image draft to preview look inside YouTube feeds next to competitors.' },
    { title: 'Image Prompt Studio', category: 'media', desc: 'Generate detailed Midjourney styling inputs.', prompt: 'Interactive modifier buttons adding camera types and lighting tags to base text.' },
    { title: 'Hook Generator Engine', category: 'media', desc: 'Suggest video hooks by proven frameworks.', prompt: 'Input core topic to output 10 viral hooks matching curiosity frameworks.' },
    { title: 'Description Formatter', category: 'media', desc: 'Add visual emojis and chapters lists.', prompt: 'Text block converter mapping raw timestamp numbers to clean clickable lists.' },
    { title: 'Audio Soundboard Widget', category: 'media', desc: 'Play short sound FX during recording prep.', prompt: 'Grid of sound buttons triggering audio samples for fast reference.' },
    { title: 'Color Palette Extractor', category: 'media', desc: 'Extract hex color schemes from sample art.', prompt: 'Drag files to extract main colors and display corresponding CSS styles.' },
    { title: 'Title Quality Ranker', category: 'media', desc: 'Score potential title ideas on formatting rules.', prompt: 'Rate headline inputs against click-readiness guidelines and emoji use.' },
    { title: 'Reaction GIF Selector', category: 'media', desc: 'Quick tags list for meme video production.', prompt: 'Curated collection tags yielding popular reaction GIF links.' },
    { title: 'Subtitles Segmenter', category: 'media', desc: 'Break raw text into caption-friendly lengths.', prompt: 'Segment raw text transcripts into timed caption subtitles.' },
    { title: 'Asset License Catalog', category: 'media', desc: 'Central tracker for media copyright terms.', prompt: 'Categorized files library displaying icons and license terms.' },
    { title: 'Sponsor Brief Deck', category: 'media', desc: 'Build pitch sheets for advertising offers.', prompt: 'Generate advertising card containing viewer metrics and pricing plans.' },
    { title: 'UGC Storyboard Builder', category: 'media', desc: 'Storyboard outline template for creators.', prompt: 'Fillable outline detailing Problem ➔ Solution ➔ Hook ➔ Offer.' },
    { title: 'Inspiration Moodboard', category: 'media', desc: 'Drag-and-arrange grid for styling boards.', prompt: 'Interactive grid allowing visual image blocks styling arrangement.' },
    { title: 'Filler Word Cleaner', category: 'media', desc: 'Strip filler words from voice transcripts.', prompt: "Text parser removing 'um', 'like', and 'ah' from raw video audio transcripts." },

    // 4. FINANCE & WEALTH
    { title: 'Personal Finance Ledger', category: 'finance', desc: 'Ledger summaries using mock bank statements.', prompt: 'Parse expense SMS alerts and organize into monthly charts.' },
    { title: 'Stock Price Monitor', category: 'finance', desc: 'Monitor price thresholds for chosen stocks.', prompt: 'Simple stocks table displaying current vs target prices with alert badges.' },
    { title: 'Tax Estimate Guide', category: 'finance', desc: 'Estimate income tax slabs and percentages.', prompt: 'Input annual income and deductions to output slab breakdown graphics.' },
    { title: 'Subscription Manager', category: 'finance', desc: 'Track active software billings and dates.', prompt: 'Visual list showing SaaS products, billing dates, and cost warning indicators.' },
    { title: 'Savings Goal Progress', category: 'finance', desc: 'Bucket target savings with visual charts.', prompt: 'Track multi-goal savings buckets with animated water-filling progress jars.' },
    { title: 'Crypto Assets Tracker', category: 'finance', desc: 'Real-time valuations grid for web3 assets.', prompt: 'Crypto coins list displaying quantity and simulated pricing splits.' },
    { title: 'EMI Amortization Solver', category: 'finance', desc: 'Detailed calculations for loan payments.', prompt: 'Visual payment timeline splitting principal and interest portions.' },
    { title: 'Rule of 72 Estimator', category: 'finance', desc: 'Estimate double-time returns on investments.', prompt: 'Interactive sliders showing doubling time based on compound rates.' },
    { title: 'Budget Split Calculator', category: 'finance', desc: 'Separate earnings by 50/30/20 standard split.', prompt: 'Pie chart visualization of monthly salary divided into needs, wants, savings.' },
    { title: 'Dividend Calendar', category: 'finance', desc: 'Projected monthly dividend cashflow logs.', prompt: 'Calendar list displaying upcoming payout dates and projected cashflow.' },
    { title: 'Utility Bill Checklist', category: 'finance', desc: 'Utility billing cycles checklist trackers.', prompt: 'Grid of utility cards showing status, amount due, and quick links.' },
    { title: 'Accounts Receivable Log', category: 'finance', desc: 'Ledger logs for client invoice terms.', prompt: 'Tracker showing invoice number, client, terms, and overdue days count.' },
    { title: 'Net Worth Ledger', category: 'finance', desc: 'Sum assets vs liabilities logs automatically.', prompt: 'Dual columns for current balances rendering net worth aggregate stats.' },
    { title: 'Emergency Fund Calculator', category: 'finance', desc: 'Calculate months of living cost buffers.', prompt: 'Input monthly costs to calculate 3-month and 6-month safety reserves.' },
    { title: 'Receipt Scanner Organizer', category: 'finance', desc: 'Tax tags organizer for tax deductions.', prompt: 'Log receipt date, category, and tax codes with status checks.' },

    // 5. EDUCATION & STUDY
    { title: 'Active Recall Flashcards', category: 'education', desc: 'Dual-sided flip cards for vocabulary review.', prompt: 'Render vocabulary deck allowing flips on hover to show definitions.' },
    { title: 'Focus Timer Logs', category: 'education', desc: 'Pomodoro study intervals with session counters.', prompt: 'Focus timers mapping work intervals to daily stats grids.' },
    { title: 'Textbook Study Sidebar', category: 'education', desc: 'Take margin notes next to PDF preview boxes.', prompt: 'Dual-pane layout containing notes workspace next to main document text.' },
    { title: 'Equation Catalog Board', category: 'education', desc: 'List mathematical formulas by discipline tags.', prompt: 'Mathematical equation catalog with search filters and sample use cases.' },
    { title: 'Exam Countdown Tracker', category: 'education', desc: 'Visual calendar deck tracking test milestones.', prompt: 'Grid showing days remaining, subject labels, and confidence bars.' },
    { title: 'Quiz Setup Builder', category: 'education', desc: 'Generate review quizzes with grade updates.', prompt: 'Custom questions designer displaying score counters on submission.' },
    { title: 'Interactive Mindmap Canvas', category: 'education', desc: 'Connect and organize concepts visually.', prompt: 'Clean interactive canvas connecting nodes with custom color labels.' },
    { title: 'Language Vocab Journal', category: 'education', desc: 'Personal dictionary for vocabulary progress.', prompt: 'Categorized list of vocabulary with pronunciation and sample sentences.' },
    { title: 'GPA Calculator Widget', category: 'education', desc: 'Calculate course weight credits and trends.', prompt: 'Table summing current class scores, weights, and overall GPA trends.' },
    { title: 'Notes Formatter Tool', category: 'education', desc: 'Structure raw lecture details automatically.', prompt: 'Input raw notes to clean formatting and output structured summaries.' },
    { title: 'Essay Outline Planner', category: 'education', desc: 'Outlines sections for standard research essays.', prompt: 'Guide document outline splitting Introduction, Body, and Conclusion.' },
    { title: 'Citation Builder Tool', category: 'education', desc: 'APA and MLA citation string generator.', prompt: 'Input fields (author, book, date) yielding formatted strings.' },
    { title: 'Assignment Tracker Log', category: 'education', desc: 'Shared task boards for academic projects.', prompt: 'Visual assignment chart highlighting member names and progress states.' },
    { title: 'Daily Trivia Deck', category: 'education', desc: 'Quick learning details on historical facts.', prompt: 'Display random science/history fact card with expansion notes.' },
    { title: 'Concept Definition Search', category: 'education', desc: 'Dictionary lookup tool with glossary index.', prompt: 'Alphabetical index list searching terms and displaying popups.' },

    // 6. LIFESTYLE & HEALTH
    { title: 'Workout Planner Sheet', category: 'lifestyle', desc: 'Reps, weight, and target muscle logging.', prompt: 'Exercise logger with input cards showing target sets and reps logs.' },
    { title: 'Daily Macro Tracker', category: 'lifestyle', desc: 'Log dietary macros to progress charts.', prompt: 'Progress rings summarizing daily protein, fat, and carb splits.' },
    { title: 'Hydration Ticker Log', category: 'lifestyle', desc: 'Count cups and log fluid intake targets.', prompt: 'Graphic water bottle tracking daily milliliter milestones on click.' },
    { title: 'Sleep Log Scorecard', category: 'lifestyle', desc: 'Record duration and sleep quality marks.', prompt: 'Bar chart input logs showing bedtime, wake time, and sleep quality ratings.' },
    { title: 'Weekly Meal Prep Sheet', category: 'lifestyle', desc: 'Plan meals and extract ingredient shopping checklists.', prompt: '7-day calendar grid allowing recipe selections and grocery checklist output.' },
    { title: 'Medication Checklist Box', category: 'lifestyle', desc: 'Alert lists for medical dose schedules.', prompt: 'Daily pillbox layout showing morning, afternoon, and night checklist items.' },
    { title: 'Mood Trigger Logger', category: 'lifestyle', desc: 'Map emotions and track external triggers.', prompt: 'Color-coded emotion calendar showing monthly trends and triggers.' },
    { title: 'Step Goal Counter', category: 'lifestyle', desc: 'Weekly steps logger with metric logs.', prompt: 'Weekly step logs comparing progress against standard goals.' },
    { title: 'Circuit Workout Creator', category: 'lifestyle', desc: 'Generate circuits based on exercise focus.', prompt: 'Selector of chest, legs, arms yielding timed workout blocks.' },
    { title: 'Meditation Breath Guide', category: 'lifestyle', desc: 'Paced animations to stabilize breathing.', prompt: 'Simple timers animating screen sizes to guide breathing intervals.' },
    { title: 'Streak Tracker Calendar', category: 'lifestyle', desc: 'Mark continuous days of habit adherence.', prompt: 'Monthly calendars coloring consecutive days of habit adherence.' },
    { title: 'Vaccination & Doctor Log', category: 'lifestyle', desc: 'Save historical physical checks and details.', prompt: 'Visual list of historical doctor logs, notes, and file tags.' },
    { title: 'Caloric Deficit Gauge', category: 'lifestyle', desc: 'Deficit metrics summing intake vs burn rates.', prompt: 'Deficit calculator illustrating calorie burn status versus consumed levels.' },
    { title: 'Mobility Stretch Deck', category: 'lifestyle', desc: 'Sequence of physical stretching circuits.', prompt: 'Grid of stretching animations showing duration timers.' },
    { title: 'Caffeine Limit Alarm', category: 'lifestyle', desc: 'Alert thresholds for daily coffee inputs.', prompt: 'Caffeine counter warning users when milligram thresholds are hit.' },

    // 7. DEVELOPER UTILITIES
    { title: 'JSON Formatter Panel', category: 'developer', desc: 'Clean up raw JSON string structures.', prompt: 'Code panel parsing raw JSON and rendering colorized nested structures.' },
    { title: 'Regex Helper Library', category: 'developer', desc: 'Common regex codes for quick validation scripts.', prompt: 'Click template to load regex for emails, phones, or URLs with text test fields.' },
    { title: 'Mock Database SQL Builder', category: 'developer', desc: 'Generate schemas and SQL tables mockup.', prompt: 'Visual database tables showing SQL commands side-by-side with charts.' },
    { title: 'Git Command Snippets', category: 'developer', desc: 'Quick lookup deck for standard version logs.', prompt: 'Categorized terminal-like snippet list with copy click buttons.' },
    { title: 'CSS Gradient Visualizer', category: 'developer', desc: 'Dynamic gradient rule CSS outputs.', prompt: 'Color selectors outputting direct copyable linear-gradient CSS.' },
    { title: 'Unicode Entity Catalog', category: 'developer', desc: 'Quick HTML entity code references.', prompt: 'Grid of symbols displaying entity names and code tags.' },
    { title: 'Base64 Encoder Tool', category: 'developer', desc: 'Encode raw text strings to Base64 output.', prompt: 'Dual text fields translating string characters to Base64 formats.' },
    { title: 'Markdown Live Previewer', category: 'developer', desc: 'Real-time HTML compile workspace.', prompt: 'Split window rendering typed markdown text into styled output page.' },
    { title: 'API Mock Payload Hub', category: 'developer', desc: 'Mock typical endpoint responses in JSON.', prompt: 'Code snippet triggers simulating custom REST API responses.' },
    { title: 'CRON Syntax Scheduler', category: 'developer', desc: 'Translates expression numbers to clear intervals.', prompt: 'Selector of time ranges printing standard CRON syntax outputs.' },
    { title: 'Color Translator Desk', category: 'developer', desc: 'Convert HEX codes to HSL/RGB properties.', prompt: 'Inputs translating color models with real-time swatch reviews.' },
    { title: 'JWT Token Decryption', category: 'developer', desc: 'Display JWT payload JSON data visually.', prompt: 'Input token parser separating header, payload, and signature blocks.' },
    { title: 'Vite Configuration Builder', category: 'developer', desc: 'Vite build settings file exporter.', prompt: 'Interactive options dashboard outputting `vite.config.ts` templates.' },
    { title: 'Package Version Auditor', category: 'developer', desc: 'Check version dependencies updates.', prompt: 'Check dependency version names displaying update notifications.' },
    { title: 'UUID Generation Grid', category: 'developer', desc: 'Output random raw UUID hash keys.', prompt: 'Click button displaying multiple formatted UUID rows with copy options.' },

    // 8. MARKETING & GROWTH
    { title: 'Ad Headline Creator', category: 'marketing', desc: 'Format copy options for Google Search placements.', prompt: 'Create copy cards comparing formats for Google Search ads.' },
    { title: 'Keyword Volume Matrix', category: 'marketing', desc: 'Log query difficulty and CPC ranges.', prompt: 'Tables showing keywords, CPC levels, and difficulty scores.' },
    { title: 'LinkedIn Post Sandbox', category: 'marketing', desc: 'Preview line spacing on standard feed layouts.', prompt: 'Text workspace previewing post look on standard feed layout columns.' },
    { title: 'UTM URL Compiler', category: 'marketing', desc: 'Add parameters tracking to promotional links.', prompt: 'Form compiling campaign parameters into clean marketing links.' },
    { title: 'Email Newsletter Outline', category: 'marketing', desc: 'Format layout blocks for email newsletters.', prompt: 'Outliner mapping headers, stories, call-to-actions into email formats.' },
    { title: 'Instagram Slide Planner', category: 'marketing', desc: 'Design slide-by-slide titles and structures.', prompt: 'Sequence boards organizing visuals and captions.' },
    { title: 'Clickbait Title Analyzer', category: 'marketing', desc: 'Scores title variants against viral frameworks.', prompt: 'Text input analyzing headline words and rendering click score tags.' },
    { title: 'Social Growth Tracker', category: 'marketing', desc: 'Graph comparative subscriber timelines.', prompt: 'Comparative charts plotting growth rates of competitor channels.' },
    { title: 'Call-to-Action Library', category: 'marketing', desc: 'Visual templates for high-performing buttons.', prompt: 'Click selection panel outputting copy-ready CTAs.' },
    { title: 'Buyer Persona Deck', category: 'marketing', desc: 'Compile demographic pain points cards.', prompt: 'Visual user cards showing bio, pain points, and product fit logs.' },
    { title: 'AB Test Significance', category: 'marketing', desc: 'Verify metrics variances statistics.', prompt: 'Input variations visits and conversions to display significance levels level.' },
    { title: 'Affiliate Program Ledger', category: 'marketing', desc: 'Commission rates and link parameters logger.', prompt: 'Ledger showing referral brands, custom URLs, and payout states.' },
    { title: 'Promo Coupon Organizer', category: 'marketing', desc: 'Coupon dates, codes, and discounts tracker.', prompt: 'Coupons grid showing code, discount value, and expiry calendars.' },
    { title: 'User Funnel Blueprint', category: 'marketing', desc: 'Flowcharts charting client paths.', prompt: 'Multi-step layout describing user touchpoints and metrics.' },
    { title: 'Meta Tags Compiler', category: 'marketing', desc: 'SEO descriptions with lengths audits.', prompt: 'Field inputs tracking length recommendations for clean index cards.' },

    // 9. WORKFLOW AUTOMATION
    { title: 'Slack Alert Dispatcher', category: 'automation', desc: 'Automate channel notices based on DB triggers.', prompt: 'Create script routing database triggers to Slack webhook messages.' },
    { title: 'Web Scraper Deck', category: 'automation', desc: 'Extract HTML lists from URL feeds.', prompt: 'Design dashboard tracking scraping sessions with tables and export options.' },
    { title: 'File Sync Monitor', category: 'automation', desc: 'Auto-backup local folders to cloud storage tags.', prompt: 'Simple file directory checker displaying sync progress bars.' },
    { title: 'API Integration Hub', category: 'automation', desc: 'Wire data pipelines between multiple SaaS systems.', prompt: 'Graph panel showing API flows: Input ➔ Transform ➔ Output.' },
    { title: 'CSV Combiner Tool', category: 'automation', desc: 'Merge mismatched CSV reports automatically.', prompt: 'Drag and drop files to combine rows based on header matching.' },
    { title: 'Social Media Poster', category: 'automation', desc: 'Schedule posts across multi-platform feeds.', prompt: 'Calendar manager displaying automated queue statuses.' },
    { title: 'Broken Link Checker', category: 'automation', desc: 'Scan web domains and flag error codes.', prompt: 'Input URL to output a list of bad links with status code tags.' },
    { title: 'Auto Backup Scheduler', category: 'automation', desc: 'Set database dump intervals and notify via email.', prompt: 'Simple CRON-based console configuring database backup schedules.' },
    { title: 'Database Cleaner Bot', category: 'automation', desc: 'Auto-purge stale session data rows.', prompt: 'Tracker illustrating database size reduction from clean runs.' },
    { title: 'Webhook Simulator', category: 'automation', desc: 'Test custom webhook responses and payloads.', prompt: 'Visual console listening for webhook hits and displaying JSON details.' },
    { title: 'Text Alerts Bot', category: 'automation', desc: 'Route critical alerts to mobile SMS gateways.', prompt: 'Simple rules editor triggering SMS warnings when thresholds fail.' },
    { title: 'PDF Text Extractor', category: 'automation', desc: 'Extract plain text from uploaded files.', prompt: 'Upload area parsing PDF structures and rendering clean text blocks.' },
    { title: 'Currency Rate Watcher', category: 'automation', desc: 'Track exchange rates and email thresholds.', prompt: 'Grid of currency pairs highlighting custom target triggers.' },
    { title: 'RSS Aggregator Bot', category: 'automation', desc: 'Pool multiple blogs into standard logs.', prompt: 'Feed reader pooling articles and sorting by publication dates.' },
    { title: 'System Health Checker', category: 'automation', desc: 'Auto-ping server status checkpoints.', prompt: 'Visual dashboard plotting server response times and uptime averages.' },

    // 10. AI AGENT BUILDERS
    { title: 'Autonomous Researcher', category: 'agents', desc: 'Crawl and summarize articles for a topic.', prompt: 'Deploy agent to fetch top 5 Google results and write a synthesis brief.' },
    { title: 'Code Bug Scanner', category: 'agents', desc: 'Analyze files for code efficiency and bugs.', prompt: 'Input code box highlighting syntax suggestions and performance updates.' },
    { title: 'Customer Support Agent', category: 'agents', desc: 'Auto-draft replies to customer complaints.', prompt: 'Input email ticket to output drafts matching specific voice tones.' },
    { title: 'SEO Content Outliner', category: 'agents', desc: 'Draft outlines using focus keyword rules.', prompt: 'Feed keyword lists to agent to layout headings and word counts.' },
    { title: 'Resume Optimizer Agent', category: 'agents', desc: 'Tailor resume bullets to job listings.', prompt: 'Match resume text against job postings and highlight missing tags.' },
    { title: 'Data Anonymizer Agent', category: 'agents', desc: 'Clean sensitive credentials from datasets.', prompt: 'Text scanner replacing credentials with mock values.' },
    { title: 'Legal Contract Auditor', category: 'agents', desc: 'Flag high-risk liability terms in PDFs.', prompt: 'Upload contract to identify missing liabilities terms and warnings.' },
    { title: 'Product Spec Draft', category: 'agents', desc: 'Auto-draft PRD sheets from short text ideas.', prompt: 'Fill specs form yielding standard Product Requirement Documents.' },
    { title: 'SQL Schema Architect', category: 'agents', desc: 'Generate SQL creation structures from text.', prompt: 'Input database layout in plain text to output raw SQL creation scripts.' },
    { title: 'Translation Validator', category: 'agents', desc: 'Translate and cross-check phrase context.', prompt: 'Translate phrases into target languages and back to ensure clarity.' },
    { title: 'Social Sentiment Agent', category: 'agents', desc: 'Assess customer sentiment on product forums.', prompt: 'Input comment threads to chart Positive, Neutral, Negative splits.' },
    { title: 'Mock Interview Coach', category: 'agents', desc: 'Ask context interview questions and score results.', prompt: 'Chat window asking interview questions and scoring user responses.' },
    { title: 'Auto Caption Script', category: 'agents', desc: 'Add chapters and matching emojis to transcripts.', prompt: 'Reformat audio transcription text to include emojis and line splits.' },
    { title: 'Competitor Auditor', category: 'agents', desc: 'Watch competitor sites for structural updates.', prompt: 'Visual diff showing pricing changes on target domain paths.' },
    { title: 'Marketing Persona Agent', category: 'agents', desc: 'Evaluate ad copy based on demographic persona profiles.', prompt: 'Input product prompt to generate mock user feedback cards.' }
  ];

  const filteredIdeas = ideas.filter(idea => idea.category === activeFilter);

  const activeCategoryObject = categories.find(c => c.id === activeFilter);
  const activeColor = activeCategoryObject ? activeCategoryObject.color : 'var(--color-cyan)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
      {/* Category Pills (Centered, no search bar) */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat) => (
            <button 
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)} 
              className={`btn interactive ${activeFilter === cat.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{ 
                padding: '6px 12px', 
                fontSize: '0.72rem', 
                borderRadius: '8px',
                borderColor: activeFilter === cat.id ? cat.color : 'rgba(255, 255, 255, 0.1)',
                boxShadow: activeFilter === cat.id ? `0 0 10px ${cat.color}22` : 'none'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid container (filling the whole screen with scrollable cards) */}
      <div style={{ 
        flexGrow: 1, 
        overflowY: 'auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', 
        gap: '12px', 
        minHeight: 0, 
        paddingRight: '4px' 
      }}>
        {filteredIdeas.map((idea) => {
          return (
            <div 
              key={idea.title}
              onClick={() => setSelectedIdea(idea)}
              className="glass-panel interactive"
              style={{ 
                padding: '12px 14px', 
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `2.5px solid ${activeColor}`,
                background: 'var(--color-surface)',
                transition: 'var(--transition-fast)'
              }}
            >
              <div>
                <strong style={{ fontSize: '0.82rem', color: '#ffffff', fontFamily: 'var(--font-display)', display: 'block', marginBottom: '4px' }}>
                  {idea.title}
                </strong>
                <span style={{ fontSize: '0.72rem', color: '#9ca3af', lineHeight: 1.3, display: 'block' }}>
                  {idea.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Prompt Expansion Overlay */}
      {selectedIdea && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(5, 6, 10, 0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 200,
          padding: '20px'
        }}>
          <div className="glass-panel" style={{ 
            maxWidth: '500px', 
            width: '100%', 
            borderColor: activeColor,
            background: 'var(--color-surface)',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'modalScale 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-display)', color: 'white', margin: 0 }}>{selectedIdea.title}</h4>
              <button 
                onClick={() => setSelectedIdea(null)} 
                className="interactive"
                style={{ background: 'none', border: 'none', color: '#9ca3af', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 700 }}
              >
                ✕
              </button>
            </div>
            
            <div>
              <div style={{ fontSize: '0.72rem', color: '#9ca3af', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                IDEATION PIPELINE PROMPT:
              </div>
              <div style={{ 
                background: '#090a10', 
                padding: '12px', 
                borderRadius: '8px', 
                border: '1px solid var(--color-border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: '#a7f3d0',
                marginTop: '6px',
                textAlign: 'left',
                lineHeight: 1.4,
                whiteSpace: 'pre-wrap'
              }}>
                {selectedIdea.prompt}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
              <button 
                onClick={() => setSelectedIdea(null)} 
                className="btn btn-secondary interactive" 
                style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '0.8rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalScale {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};
