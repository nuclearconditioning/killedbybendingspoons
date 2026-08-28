/*
 * Killed by Bending Spoons: dataset.
 *
 * Editorial rule: every factual claim below traces to a named source listed on
 * the card. Where no reporting exists, the card says so rather than guessing.
 *
 * Fields
 *   facts    : discrete verified data points, each tagged with its source
 *   team     : what happened to the people, sourced
 *   product  : what happened to the thing, sourced
 *   sourcing : "reported" (company-specific coverage exists)
 *              "thin" (acquisition confirmed; no outcome reporting found)
 */

var S = {
  wiki:       { t: "Wikipedia: Bending Spoons",                       u: "https://en.wikipedia.org/wiki/Bending_Spoons" },
  tcProfile:  { t: "TechCrunch: What is Bending Spoons?",             u: "https://techcrunch.com/2026/07/05/what-is-bending-spoons-everything-to-know-about-aols-acquirer/" },
  tcIpo:      { t: "TechCrunch: Bending Spoons files to go public",   u: "https://techcrunch.com/2026/06/08/eventbrite-and-vimeo-owner-bending-spoons-files-to-go-public/" },
  tcRaise:    { t: "TechCrunch: Bending Spoons raises $155M",         u: "https://techcrunch.com/2024/02/15/evernote-and-meetup-owner-bending-spoons-raises-155m-in-equity-financing/" },
  tcWt:       { t: "TechCrunch: Plans to lay off 75% of WeTransfer staff", u: "https://techcrunch.com/2024/09/08/bending-spoons-plans-to-lay-off-75-of-wetransfer-staff-after-acquisition" },
  ftm:        { t: "Follow the Money: Buys up apps, then makes them more expensive", u: "https://www.ftm.eu/articles/wetransfer-owner-buys-up-apps-then-makes-them-more-expensive" },
  fortune:    { t: "Fortune: Bending Spoons files for a U.S. IPO",    u: "https://fortune.com/2026/06/08/bending-spoons-italian-aol-evernote-wetransfer-files-us-ipo/" },
  f1:         { t: "SEC: Bending Spoons Form F-1",                    u: "https://www.sec.gov/Archives/edgar/data/0002004711/000110465926071170/tm2613674-7_f1.htm" },
  pragmatic:  { t: "The Pragmatic Engineer: Bending Spoons' acquisition strategy", u: "https://blog.pragmaticengineer.com/the-pulse-bending-spoons-acquisition-strategy/" },
  bloomberg:  { t: "Bloomberg: Customers decry ‘outrageous’ app price hikes", u: "https://www.bloomberg.com/news/articles/2026-08-13/bending-spoons-customers-decry-outrageous-app-price-hikes" },
  yahooHarv:  { t: "Yahoo Finance: ‘Daylight robbery’: 1500% price hike for invoicing software", u: "https://finance.yahoo.com/small-business/articles/uk-business-hit-daylight-robbery-094408923.html" },
  hn:         { t: "Hacker News: Harvest hikes bills by 1500%",       u: "https://news.ycombinator.com/item?id=49374920" },
  trWt:       { t: "TechRadar: WeTransfer set to lay off hundreds",   u: "https://techradar.com/pro/wetransfer-set-to-lay-off-hundreds-of-staff-after-bending-spoons-acquisition" },
  tvbe:       { t: "TVBEurope: Brightcove announces layoffs",         u: "https://www.tvbeurope.com/business/brightcove-announces-layoffs-following-acquisition-by-bending-spoons" },
  smb:        { t: "Streaming Media: Brightcove acquired for $233M",  u: "https://www.streamingmediablog.com/2024/11/brightcove-acquired.html" },
  brKomoot:   { t: "BikeRadar: Komoot acquired, mass layoffs expected", u: "https://www.bikeradar.com/news/komoot-acquisition" },
  brRedesign: { t: "BikeRadar: Komoot redesign and price increase",   u: "https://www.bikeradar.com/news/komoot-redesign-2025" },
  dcr:        { t: "DC Rainmaker: Komoot acquired: history says this won't end well", u: "https://www.dcrainmaker.com/2025/03/komoot-acquired-history-says-this-wont-end-well.html" },
  dcrBye:     { t: "DC Rainmaker: The Komoot team says goodbye",      u: "https://www.dcrainmaker.com/2025/05/komoot-team-goodbye.html" },
  roadcc:     { t: "road.cc: “Totally blindsided”: cuts expected at Komoot", u: "https://road.cc/content/news/job-cuts-expected-komoot-after-tech-firm-purchase-313159" },
  cw:         { t: "Cycling Weekly: Komoot sold after it expands paywall", u: "https://www.cyclingweekly.com/news/route-planning-app-komoot-sold-after-it-expands-paywall-job-losses-could-follow" },
  meetupBlog: { t: "Meetup blog: Luca Ferrari, “Recent changes and a look toward the future”", u: "https://www.meetup.com/blog/recent-changes-and-a-look-toward-the-future/" },
  ticketTailor:{ t: "Ticket Tailor: What Eventbrite users can expect", u: "https://www.tickettailor.com/blog/bending-spoons-acquires-eventbrite-what-does-this-mean" },
  cafetech:   { t: "Café Tech: Bending Spoons' insatiable appetite",  u: "https://cafetechinenglish.substack.com/p/bending-spoons-insatiable-appetite" },
  dcrPaywall: { t: "DC Rainmaker: Komoot's expanded paywalls",        u: "https://www.dcrainmaker.com/2025/03/komoots-expanded-paywalls-trying-to-make-sense-of-it.html" },
  komootPrem: { t: "komoot newsroom: Go further with komoot Premium", u: "https://newsroom.komoot.com/182344-go-further-with-komoot-premium/" },
  wikiImmuni: { t: "Wikipedia: Immuni",                             u: "https://en.wikipedia.org/wiki/Immuni" },
  startupIt:  { t: "StartupItalia: Cosa fa la startup di Immuni e Live Quiz", u: "https://startupitalia.eu/78499-20200511-bending-spoons-cosa-la-startup-immuni-live-quiz" }
};

/* Company-level facts, all sourced. Rendered in the "playbook" section. */
window.SPOONS_COMPANY = {
  founded:  { label: "Founded",        value: "June 2013, in Copenhagen", src: S.wiki },
  hq:       { label: "Headquarters",   value: "Milan, Italy",             src: S.wiki },
  founders: { label: "Founders",       value: "Luca Ferrari, Francesco Patarnello, Matteo Danieli, Luca Querella, Tomasz Greber", src: S.wiki },
  staff:    { label: "Own headcount",  value: "1,743 (2025), up from 712 (2024)", src: S.wiki },
  revenue:  { label: "Revenue",        value: "$1.31B (2025), up from $671M (2024)", src: S.wiki },
  ipo:      { label: "IPO",            value: "1 July 2026 on Nasdaq (BSP). Raised $1.68B at $29/share; closed day one at $40.50", src: S.wiki },
  acquired: { label: "Staff acquired", value: "1,830 full-time people came in through acquisitions; the company expects only a few hundred to remain once transformations finish in late 2026", src: S.tcProfile }
};


/* Products Bending Spoons built itself, rather than bought.
   The answer to "do they actually make anything?" is: yes, but almost all of it
   predates the acquisition strategy. */
window.SPOONS_BUILT = [
  {
    name: "Immuni",
    slug: "immuni",
    desc: "Italy's national COVID-19 contact-tracing app, built for the Ministry of Health.",
    period: "Launched 1 June 2020 · discontinued 31 December 2022",
    facts: [
      { k: "Commissioned by", v: "The Italian Ministry of Health and the Minister for Technological Innovation", s: S.wikiImmuni },
      { k: "Licence", v: "Open source (GNU AGPLv3), code published on GitHub", s: S.wikiImmuni },
      { k: "Downloads", v: "21,882,502 by shutdown; over 10 million by December 2020", s: S.wikiImmuni },
      { k: "Adoption", v: "About 12% of Italians aged 14–75, against a 60% target for effectiveness", s: S.wikiImmuni },
      { k: "Positive cases logged", v: "Around 2%", s: S.wikiImmuni }
    ],
    verdict: "Widely reported as a failure on adoption rather than engineering: uptake reached about 12% against a 60% target. It was switched off on 31 December 2022.",
    status: "dead", sources: [S.wikiImmuni, S.startupIt]
  },
  {
    name: "Live Quiz",
    slug: "live-quiz",
    desc: "Real-time trivia game show, an HQ Trivia-style live format.",
    period: "Built in-house during the 2013–2019 studio era",
    facts: [
      { k: "Origin", v: "Developed internally, not acquired", s: S.startupIt }
    ],
    verdict: "One of the two breakout hits that funded everything else. It belongs to the studio era, before the company became an acquirer.",
    status: "legacy", sources: [S.startupIt]
  },
  {
    name: "30 Day Fitness",
    slug: "30-day-fitness",
    desc: "Home workout and fitness challenge app.",
    period: "Built in-house during the 2013–2019 studio era",
    facts: [
      { k: "Origin", v: "Developed internally, not acquired", s: S.startupIt }
    ],
    verdict: "The other early in-house hit. Together with Live Quiz it made Bending Spoons a top mobile publisher before it bought a single company.",
    status: "legacy", sources: [S.startupIt]
  },
  {
    name: "Playond",
    slug: "playond",
    desc: "A subscription bundle of premium mobile games.",
    period: "Launched 2019 · shut down March 2020",
    facts: [
      { k: "Origin", v: "Built in-house, not acquired", s: S.wiki },
      { k: "Lifespan", v: "About one year", s: S.wiki },
      { k: "Catalogue", v: "Titles returned to their original developers", s: S.wiki }
    ],
    verdict: "The clearest case of Bending Spoons killing something of its own. It also appears in the graveyard below.",
    status: "dead", sources: [S.wiki]
  }
];

window.SPOONS = [
  {
    name: "Splice",
    slug: "splice",
    desc: "Mobile video editor for quick social cuts, bought from GoPro.",
    acquired: "2018-01-01", precision: "year", price: null,
    facts: [
      { k: "Acquired from", v: "GoPro, 2018", s: S.wiki }
    ],
    team: "No reporting has been published on what happened to the people who worked on Splice at GoPro. The app is developed from Milan today.",
    dispute: "Sources conflict on origin. Wikipedia records Splice as acquired from GoPro in 2018; several company profiles describe it instead as an early in-house hit. Wikipedia is the better-cited of the two, so it is listed here as an acquisition, but treat the provenance as contested.",
    product: "Still on the App Store and still updated. No documented shutdown, and no widely reported pricing controversy of the kind later acquisitions attracted.",
    status: "absorbed", sourcing: "thin",
    link: "https://spliceapp.com",
    sources: [S.wiki]
  },
  {
    name: "Playond",
    slug: "playond",
    desc: "A Netflix-style subscription bundle of premium mobile games, built in-house rather than bought.",
    acquired: "2019-01-01", precision: "year", price: null,
    facts: [
      { k: "Launched", v: "2019", s: S.wiki },
      { k: "Shut down", v: "March 2020, about a year later", s: S.wiki },
      { k: "Catalogue", v: "Titles returned to their original developers", s: S.wiki }
    ],
    team: "An internal Bending Spoons project, so no acquired team was involved. Staff moved to other products.",
    product: "Switched off in March 2020 and never revived. Every game in the catalogue went back to its original developer. This is the only entry on this page that is dead in the literal sense.",
    status: "dead", sourcing: "reported",
    link: null,
    sources: [S.wiki]
  },
  {
    name: "Remini",
    slug: "remini",
    desc: "AI photo restorer and AI-portrait generator; a repeat App Store chart-topper.",
    acquired: "2021-06-01", precision: "month", price: null,
    facts: [
      { k: "Acquired", v: "June 2021", s: S.wiki },
      { k: "Group revenue", v: "$1.31B in 2025, up from $671M in 2024; Remini is a principal driver", s: S.wiki }
    ],
    team: "Bought as a product, not a company. It has been developed by the Milan engineering group since, and is one of the few portfolio items the company has visibly staffed up rather than cut.",
    product: "Operating and actively developed. Remini is a repeat top-grossing app and a principal driver of group revenue. Nothing has been shut down or cut back.",
    status: "alive", sourcing: "reported",
    link: "https://remini.ai",
    sources: [S.wiki, S.f1, S.fortune]
  },
  {
    name: "FiLMiC Pro",
    slug: "filmic-pro",
    desc: "The professional cinema camera app for iPhone, used to shoot the feature film 'Tangerine'.",
    acquired: "2022-09-02", precision: "day", price: null,
    facts: [
      { k: "Acquired", v: "2 September 2022 (FiLMiC Inc.)", s: S.wiki },
      { k: "Layoffs", v: "The entire FiLMiC team, December 2023", s: S.wiki },
      { k: "Business model", v: "Moved from one-off purchase to subscription", s: S.tcProfile }
    ],
    pricing: [
      { who: "All users", was: "One-off purchase", now: "Subscription", change: "Model changed",
        note: "No before/after figure has been published; the change of model is what filmmakers object to.", s: S.tcProfile }
    ],
    cut: { pct: 100, label: "All staff", s: S.wiki },
    team: "The entire FiLMiC Inc. team was laid off in December 2023, roughly fifteen months after the deal. The people who had built the app for over a decade were gone in one round.",
    product: "Still on the App Store. The one-off purchase model became a subscription. Beyond that change and the December 2023 layoffs, no reporting on the app's development was found.",
    status: "gutted", sourcing: "reported",
    link: "https://www.filmicpro.com",
    sources: [S.wiki, S.tcProfile, S.ftm]
  },
  {
    name: "Evernote",
    slug: "evernote",
    desc: "The note-taking app that defined the 2010s productivity stack, with over 200 million registered users.",
    acquired: "2022-11-16", precision: "day", price: "$200M",
    facts: [
      { k: "Deal", v: "Agreed 16 Nov 2022, completed January 2023, $200M", s: S.wiki },
      { k: "Layoffs", v: "129 staff in February 2023; nearly all remaining staff by July 2023", s: S.tcProfile },
      { k: "Offices", v: "US and Chile operations closed; work moved to Europe", s: S.tcProfile },
      { k: "Free plan", v: "Cut to 50 notes and 1 notebook, November 2023", s: S.tcProfile },
      { k: "Price", v: "Pro plan $37/year pre-2023 → $250/year by 2026", s: S.pragmatic },
      { k: "Infrastructure", v: "Found running a Java 11 monolith on 750 hand-provisioned VMs; migrated in ~6 months", s: S.pragmatic }
    ],
    pricing: [
      { who: "Personal / Pro plan", was: "$37 a year", now: "$250 a year", change: "+576%",
        note: "Pre-2023 price against the 2026 price.", s: S.pragmatic },
      { who: "Free users", was: "Unlimited notes", now: "50 notes, 1 notebook", change: "Free tier gutted",
        note: "Changed November 2023.", s: S.tcProfile }
    ],
    cut: { pct: 100, label: "Nearly all", s: S.tcProfile },
    team: "129 people went in February 2023, then nearly everyone else by July. The US and Chile offices closed and the whole operation moved to Europe. Effectively nobody who built Evernote works on Evernote.",
    product: "The free plan was cut to 50 notes and one notebook. The Pro price went from $37 a year to $250 a year over three years. The engineering rebuild was substantial: the Java monolith was migrated off 750 hand-provisioned VMs in about six months. Follow the Money reported users describing sync failures, slow starts and crashes, and users moving to competitors.",
    status: "gutted", sourcing: "reported",
    link: "https://evernote.com",
    sources: [S.wiki, S.tcProfile, S.pragmatic, S.ftm, S.fortune]
  },
  {
    name: "Alight Motion",
    slug: "alight-motion",
    desc: "Mobile motion-graphics and visual-effects editor with a large creator following.",
    acquired: "2023-01-01", precision: "year", price: null,
    facts: [
      { k: "Acquired", v: "2023 (Alight Creative)", s: S.wiki }
    ],
    team: "No layoff figures have been published for Alight Creative. The company does not appear in the layoff reporting that covers the group's other deals.",
    product: "Still shipping and still widely used by hobbyist editors. No shutdown, and no documented pricing controversy on the scale of Harvest or Meetup.",
    status: "absorbed", sourcing: "thin",
    link: "https://alightmotion.com",
    sources: [S.wiki]
  },
  {
    name: "Mosaic Group",
    slug: "mosaic-group",
    desc: "IAC's bundle of utility apps: iTranslate, RoboKiller, Clime and others.",
    acquired: "2024-01-10", precision: "day", price: "$100M",
    facts: [
      { k: "Deal", v: "10 January 2024, about $100M, bought from IAC", s: S.wiki },
      { k: "Layoffs", v: "The entire workforce, about 330 people", s: S.wiki },
      { k: "Timing", v: "Within weeks of the deal closing", s: S.ftm }
    ],
    cut: { pct: 100, label: "All 330", s: S.wiki },
    team: "The entire workforce of about 330 people was laid off within weeks of closing. Of every deal on this page, this is the most complete clear-out: not a majority, all of them.",
    product: "The apps are still on the stores and still charging subscriptions. Nothing has been shut off. No reporting was found on how the products themselves have changed since the acquisition.",
    status: "gutted", sourcing: "reported",
    link: null,
    sources: [S.wiki, S.ftm, S.pragmatic]
  },
  {
    name: "Meetup",
    slug: "meetup",
    desc: "The original platform for organising real-world groups, running since 2002.",
    acquired: "2024-01-11", precision: "day", price: null,
    facts: [
      { k: "Acquired", v: "11 January 2024", s: S.wiki },
      { k: "Layoffs", v: "US team significantly reduced; operations moved to Europe", s: S.meetupBlog },
      { k: "Severance", v: "16 weeks of pay and up to 12 months of health insurance", s: S.meetupBlog },
      { k: "Investment pledged", v: "Nearly $50M over the following years", s: S.meetupBlog },
      { k: "Organiser fee", v: "Rose to about €21/month", s: S.ftm }
    ],
    pricing: [
      { who: "Group organisers", was: "Free for many organisers", now: "About €21 a month", change: "Fee introduced / doubled",
        note: "Follow the Money reports organiser fees more than doubling; some groups closed rather than pay.", s: S.ftm }
    ],
    cut: { pct: 75, label: "~75%", s: S.ftm },
    team: "CEO Luca Ferrari announced on 5 February 2024 that operations were moving from the US to Europe, which meant \"significantly reducing the size of the US-based team\". Leavers were offered sixteen weeks of pay and up to twelve months of health cover, unusually generous by the standards of the other deals here.",
    product: "Organiser fees rose to roughly €21 a month, and community groups have shut down rather than pay. Ferrari has publicly disputed the damage, saying organisers quit Meetup about as often as they did before the takeover. Bending Spoons also pledged nearly $50M of investment and a $50,000 community fund, so this is the deal with the strongest counter-argument attached.",
    status: "gutted", sourcing: "reported",
    link: "https://www.meetup.com",
    sources: [S.meetupBlog, S.ftm, S.wiki, S.tcRaise]
  },
  {
    name: "Hopin / StreamYard",
    slug: "hopin-streamyard",
    desc: "The virtual-events company once valued at $7.75B, plus StreamYard, Streamable and Superwave.",
    acquired: "2024-04-09", precision: "day", price: null,
    facts: [
      { k: "Acquired", v: "9 April 2024", s: S.wiki },
      { k: "Layoffs", v: "All staff: about 80 on StreamYard, about 70 on other products", s: S.pragmatic },
      { k: "Severance", v: "Estimated 3–4 months' salary", s: S.pragmatic },
      { k: "StreamYard revenue", v: "About $70M a year and growing at the time of sale", s: S.pragmatic },
      { k: "What Hopin paid", v: "$250M for StreamYard in 2021", s: S.pragmatic }
    ],
    cut: { pct: 100, label: "All ~150", s: S.pragmatic },
    team: "All roughly 150 remaining staff were let go, about 80 working on StreamYard and 70 on the other products, with severance estimated at three to four months. The StreamYard founders had offered to buy the company back independently; Bending Spoons bid higher.",
    product: "StreamYard was the asset: roughly $70M a year in revenue, for which Hopin itself had paid $250M in 2021. StreamYard and Streamable still operate. The Hopin events platform, the part associated with the $7.75B valuation, was wound down.",
    status: "gutted", sourcing: "reported",
    link: "https://streamyard.com",
    sources: [S.pragmatic, S.wiki, S.ftm, S.cafetech]
  },
  {
    name: "Issuu",
    slug: "issuu",
    desc: "Digital publishing platform for magazines, catalogues and portfolios.",
    acquired: "2024-07-19", precision: "day", price: null,
    facts: [
      { k: "Acquired", v: "19 July 2024", s: S.wiki }
    ],
    team: "No company-specific layoff figures have been published for Issuu. It is named in the acquisition lists but absent from the detailed layoff reporting.",
    product: "Live and publishing. No shutdown, layoff figure or pricing change has been reported. Issuu is listed here because of who owns it, not because of a documented outcome.",
    status: "absorbed", sourcing: "thin",
    link: "https://issuu.com",
    sources: [S.wiki, S.tcProfile]
  },
  {
    name: "WeTransfer",
    slug: "wetransfer",
    desc: "The Dutch file-sharing service loved for one thing: sending big files without an account.",
    acquired: "2024-07-31", precision: "day", price: "≈€433M",
    facts: [
      { k: "Acquired", v: "31 July 2024; €433M per the subsidiary annual report", s: S.ftm },
      { k: "Layoffs", v: "75% of staff, from over 350 down to roughly 88", s: S.tcWt },
      { k: "Announced", v: "8 September 2024, five weeks after closing", s: S.tcWt },
      { k: "Price", v: "€10/month → €23/month, a rise of about 130%", s: S.ftm },
      { k: "Free plan", v: "Capped at 10 transfers a month from December 2024", s: S.tcProfile }
    ],
    pricing: [
      { who: "One documented paid user", was: "€10 a month", now: "€23 a month", change: "+130%",
        note: "Reported by Follow the Money.", s: S.ftm },
      { who: "Free users", was: "Unlimited transfers", now: "10 transfers a month", change: "Capped",
        note: "From December 2024.", s: S.tcProfile }
    ],
    cut: { pct: 75, label: "75%", s: S.tcWt },
    team: "75% of a workforce of more than 350 was cut, leaving roughly 88 people. Luca Ferrari's public framing: \"the vision we developed is of a smaller, more sharply focused WeTransfer organization.\" The Amsterdam design culture and the WePresent editorial arm shrank with it.",
    product: "The no-account free transfer still exists but was capped at ten transfers a month in December 2024. One documented user's plan went from €10 to €23 a month, a rise of about 130%.",
    status: "gutted", sourcing: "reported",
    link: "https://wetransfer.com",
    sources: [S.tcWt, S.ftm, S.trWt, S.tcProfile]
  },
  {
    name: "Brightcove",
    slug: "brightcove",
    desc: "Enterprise online-video platform, listed on Nasdaq since 2012, serving broadcasters and large brands.",
    acquired: "2025-02-04", precision: "day", price: "$233M",
    facts: [
      { k: "Deal", v: "Announced November 2024, closed 4 February 2025, $233M all-cash", s: S.smb },
      { k: "Layoffs", v: "198 people, about 33% of a 600+ workforce", s: S.tvbe },
      { k: "Announced", v: "24 March 2025, seven weeks after closing", s: S.tvbe },
      { k: "Headcount before", v: "Over 600 worldwide, about 300 in the US", s: S.tvbe }
    ],
    cut: { pct: 33, label: "33%", s: S.tvbe },
    team: "198 of more than 600 employees were made redundant on 24 March 2025, roughly seven weeks after the deal closed. That is a third of the company, and a smaller proportion than most entries here. Brightcove's enterprise contracts need people to service them.",
    product: "Still running for broadcast and enterprise customers. No shutdown has been announced and the platform continues under existing contracts. No reporting on service changes was found.",
    status: "gutted", sourcing: "reported",
    link: "https://www.brightcove.com",
    sources: [S.tvbe, S.smb, S.wiki]
  },
  {
    name: "komoot",
    slug: "komoot",
    desc: "The German route planner for hiking, cycling and bikepacking, with a fiercely loyal community.",
    acquired: "2025-03-20", precision: "day", price: "≈$300M",
    facts: [
      { k: "Acquired", v: "20 March 2025, estimated about €300M", s: S.dcrBye },
      { k: "Headcount before", v: "About 150 people, mostly remote", s: S.brKomoot },
      { k: "Layoffs", v: "Reported at 75% (Follow the Money) and about 85% (DC Rainmaker), within the first two weeks", s: S.dcrBye },
      { k: "2025 changes", v: "Redesign plus a price increase; few of the original team remain", s: S.brRedesign }
    ],
    pricing: [
      { who: "New users (device sync to Garmin, Wahoo, Hammerhead)",
        was: "One-off region or World Pack purchase", now: "komoot Premium, \u20ac59.99 a year", change: "Recurring fee introduced",
        note: "From 27 February 2025. Region packs withdrawn. Existing map owners were grandfathered and offered \u20ac30 off year one. Note the paywall change was announced before the deal closed; Cycling Weekly headlined it \u201csold after it expands paywall\u201d.", s: S.dcrPaywall },
      { who: "UK users", was: "no monthly fee", now: "\u00a34.99 a month", change: "UK Premium price",
        note: "Reported March 2025.", s: S.roadcc }
    ],
    cut: { pct: 85, label: "75–85%", s: S.dcrBye },
    team: "komoot employed about 150 people, mostly remote, before the sale. Reported cuts range from 75% to roughly 85%, all within the first two weeks. Staff described being \"totally blindsided\". About 100 former colleagues turned up to a farewell gathering in May 2025.",
    product: "A 2025 redesign arrived alongside a price increase, and BikeRadar reported that few of the original team remained to build it. Follow the Money and DC Rainmaker both reported hostile community reaction. DC Rainmaker's assessment, quoted: when 85% of staff are fired, substantial new features are unlikely.",
    status: "gutted", sourcing: "reported",
    link: "https://www.komoot.com",
    sources: [S.dcrBye, S.dcr, S.brKomoot, S.brRedesign, S.roadcc, S.cw, S.ftm]
  },
  {
    name: "Harvest",
    slug: "harvest",
    desc: "Time-tracking and invoicing tool, a small-team and freelancer favourite since 2006.",
    acquired: "2025-06-10", precision: "day", price: null,
    facts: [
      { k: "Acquired", v: "10 June 2025", s: S.wiki },
      { k: "Price case 1", v: "A web designer's annual bill: $211.20 → $2,547.60, a twelvefold rise", s: S.bloomberg },
      { k: "Price case 2", v: "A UK consultancy's monthly bill: $130 → $2,110", s: S.bloomberg },
      { k: "Price case 3", v: "A US customer's annual charge: $2,800 → $23,000", s: S.bloomberg },
      { k: "Reported", v: "Bloomberg, 13 August 2026", s: S.bloomberg }
    ],
    pricing: [
      { who: "Richard Haldenby, Salentis (UK consultancy, 15-year customer)",
        was: "$130 a month", now: "$2,110 a month", change: "+1,523%",
        note: "Offered $1,309 a month if paid a year upfront. He called it \u201ca classic example of corporate greed\u201d.", s: S.yahooHarv },
      { who: "Mike Martin, web designer (13-year customer)",
        was: "$211.20 a year", now: "$2,547.60 a year", change: "+1,106% (12\u00d7)",
        note: "Bloomberg's lead example.", s: S.bloomberg },
      { who: "Anonymous US customer",
        was: "$2,800 a year", now: "$23,000 a year", change: "+721%",
        note: "Reported by Bloomberg.", s: S.yahooHarv }
    ],
    team: "No headcount figures have been published for Harvest specifically. The story here is not the layoffs.",
    product: "Harvest carries the largest documented price rises in the portfolio. Bloomberg reported in August 2026 that one web designer who had paid $211.20 a year for thirteen years faced a renewal at $2,547.60. A UK consultancy went from $130 to $2,110 a month; another customer from $2,800 to $23,000 a year. Harvest told reporters that legacy-plan customers saw steeper rises because the product had become \u201ca significantly more powerful\u201d tool, and that customers are notified 30 and 10 days before renewal and can change plans.",
    status: "gutted", sourcing: "reported",
    link: "https://www.getharvest.com",
    sources: [S.bloomberg, S.yahooHarv, S.hn, S.wiki]
  },
  {
    name: "MileIQ",
    slug: "mileiq",
    desc: "Automatic mileage tracking for expense claims; previously owned by Microsoft.",
    acquired: "2025-07-08", precision: "day", price: "$223M",
    facts: [
      { k: "Deal", v: "8 July 2025, $223M", s: S.wiki }
    ],
    team: "No company-specific layoff reporting has been published.",
    product: "Running and still billing. No shutdown or documented price scandal has been reported to date.",
    status: "absorbed", sourcing: "thin",
    link: "https://mileiq.com",
    sources: [S.wiki]
  },
  {
    name: "Vimeo",
    slug: "vimeo",
    desc: "The grown-up alternative to YouTube: filmmakers, agencies and business video.",
    acquired: "2025-09-10", precision: "day", price: "$1.38B",
    facts: [
      { k: "Deal", v: "Announced 10 September 2025, $1.38B, closed later that year", s: S.wiki },
      { k: "Share price", v: "$7.85 offer, against roughly $4 in preceding months", s: S.ftm },
      { k: "Layoffs", v: "Most of the workforce, including the entire video team", s: S.tcProfile },
      { k: "Announced", v: "January 2026", s: S.tcProfile }
    ],
    cut: { pct: null, label: "Most staff", s: S.tcProfile },
    team: "In January 2026 most of the workforce was cut, and the entire video team went with it: the engineers behind the encoding and player stack that was the reason to pay for Vimeo instead of uploading to YouTube.",
    product: "Still online, still hosting, still selling plans. Nothing has been switched off. What the loss of the video engineering group means for the platform is not yet documented either way.",
    status: "gutted", sourcing: "reported",
    link: "https://vimeo.com",
    sources: [S.tcProfile, S.wiki, S.ftm, S.fortune]
  },
  {
    name: "AOL",
    slug: "aol",
    desc: "The dial-up era itself. Still had millions of paying subscribers when it changed hands.",
    acquired: "2025-10-29", precision: "day", price: "$1.4B",
    facts: [
      { k: "Acquired", v: "29 October 2025, about $1.4B, from Yahoo", s: S.wiki },
      { k: "Layoffs", v: "More than 100 employees", s: S.tcProfile },
      { k: "Announced", v: "February 2026", s: S.tcProfile }
    ],
    cut: { pct: null, label: "100+ people", s: S.tcProfile },
    team: "More than 100 employees were eliminated in February 2026, about three months after the deal closed.",
    product: "AOL Mail and the portal still run, which matters to a subscriber base that has stayed loyal for decades and still pays monthly. That annuity is what $1.4B bought. Nothing has been shut down.",
    status: "gutted", sourcing: "reported",
    link: "https://www.aol.com",
    sources: [S.tcProfile, S.wiki, S.fortune, S.ftm]
  },
  {
    name: "Eventbrite",
    slug: "eventbrite",
    desc: "Ticketing and event discovery for independent organisers worldwide.",
    acquired: "2026-03-10", precision: "day", price: "$500M",
    facts: [
      { k: "Deal", v: "Announced December 2025, closed 10 March 2026, about $500M", s: S.wiki }
    ],
    team: "No layoff figures have been published since the deal closed in March 2026.",
    product: "Fully operational and processing tickets. No layoff figures or pricing changes have been reported since the deal closed.",
    status: "absorbed", sourcing: "thin",
    link: "https://www.eventbrite.com",
    sources: [S.wiki, S.tcIpo, S.ticketTailor]
  },
  {
    name: "Tractive",
    slug: "tractive",
    desc: "Austrian GPS trackers for dogs and cats: hardware plus a subscription.",
    acquired: "2026-05-18", precision: "day", price: "$900M",
    facts: [
      { k: "Deal", v: "Announced April 2026, closed 18 May 2026, $900M", s: S.wiki },
      { k: "Group plan", v: "1,830 people came in through acquisitions; only a few hundred expected to remain by late 2026", s: S.tcProfile }
    ],
    team: "No cuts confirmed at the time of writing. The company has said it took on 1,830 people through acquisitions and expects only a few hundred to remain once transformations finish in late 2026.",
    product: "Running normally. Physical hardware and a live tracking service are harder to run on a skeleton team than an app is, which makes this a genuine test of the model.",
    status: "alive", sourcing: "reported",
    link: "https://tractive.com",
    sources: [S.wiki, S.tcProfile, S.f1]
  },
  {
    name: "Airtable",
    slug: "airtable",
    desc: "No-code database and app builder, once valued at $11B.",
    acquired: "2026-08-04", precision: "day", price: "$1.285B",
    facts: [
      { k: "Deal", v: "4 August 2026, $1.285B", s: S.wiki },
      { k: "Context", v: "Announced nine days before Bloomberg's price-hike investigation", s: S.bloomberg }
    ],
    team: "The most recent deal. No cuts confirmed at the time of writing.",
    product: "Fully alive and fully functional. The deal closed nine days before Bloomberg published its account of price rises elsewhere in the portfolio. No changes to Airtable have been reported.",
    status: "alive", sourcing: "reported",
    link: "https://airtable.com",
    sources: [S.wiki, S.tcProfile, S.bloomberg]
  }
];
