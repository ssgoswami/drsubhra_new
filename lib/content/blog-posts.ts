export type BlogPostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  /** At most one should be true; otherwise first post is treated as featured. */
  featured?: boolean;
  /** Set true when a full post page exists for this slug. */
  hasFullPost?: boolean;
};

export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "checklist"; items: string[] }
  | { type: "note"; heading?: string; text: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; text: string; linkText: string; linkHref: string };

export type BlogPost = BlogPostPreview & {
  metaTitle: string;
  metaDescription: string;
  content: ContentBlock[];
};

/** Preview list - replace with CMS/MDX when ready */
export const blogPosts: BlogPostPreview[] = [
  {
    slug: "study-abroad-preparation-indian-students",
    title: "How Indian Students Can Prepare to Study Abroad",
    excerpt:
      "A practical, structured guide covering profile building, program selection, timelines, scholarships, and application documents for Indian students planning Masters or PhD abroad.",
    category: "Study Abroad",
    date: "Apr 2026",
    readTime: "12 min read",
    featured: true,
    hasFullPost: true,
  },
  {
    slug: "masters-admissions-europe-plan",
    title: "How to Plan for Masters Admissions in Europe",
    excerpt:
      "A practical timeline for shortlisting programs, preparing documents, and submitting high-quality applications.",
    category: "Masters",
    date: "Mar 2026",
    readTime: "6 min read",
  },
  {
    slug: "phd-finding-supervisor",
    title: "PhD Applications: Finding the Right Supervisor",
    excerpt:
      "Learn a structured method for identifying labs, evaluating fit, and writing focused outreach emails.",
    category: "PhD",
    date: "Mar 2026",
    readTime: "8 min read",
  },
  {
    slug: "postdoc-research-profile",
    title: "Postdoc Pathways: Building a Strong Research Profile",
    excerpt:
      "Key steps to position your publications, research statement, and long-term direction for competitive postdoc roles.",
    category: "Postdoc",
    date: "Feb 2026",
    readTime: "7 min read",
  },
  {
    slug: "sop-common-mistakes",
    title: "Statement of Purpose: Common Mistakes to Avoid",
    excerpt:
      "The most frequent SOP errors and how to build a clear narrative that aligns with your target program.",
    category: "Documents",
    date: "Feb 2026",
    readTime: "5 min read",
  },
  {
    slug: "research-methodology-university",
    title: "Research Methodology Skills for University Students",
    excerpt:
      "Why research design, literature review, and evidence-based thinking are essential for academic success.",
    category: "Research Methodology",
    date: "Jan 2026",
    readTime: "6 min read",
  },
  {
    slug: "career-path-after-studies",
    title: "Choosing a Career Path After Higher Studies",
    excerpt:
      "How to compare potential placements and long-term opportunities before selecting a degree path.",
    category: "Career Options",
    date: "Jan 2026",
    readTime: "7 min read",
  },
];

export const fullPosts: BlogPost[] = [
  {
    slug: "study-abroad-preparation-indian-students",
    title: "How Indian Students Can Prepare to Study Abroad",
    metaTitle:
      "How Indian Students Can Prepare to Study Abroad | Dr. Subhra Sundar",
    metaDescription:
      "A practical guide for Indian students planning Master's or PhD abroad. Learn how to build your profile, plan timelines, and prepare strategically.",
    excerpt:
      "A practical, structured guide covering profile building, program selection, timelines, scholarships, and application documents for Indian students planning Masters or PhD abroad.",
    category: "Study Abroad",
    date: "Apr 2026",
    readTime: "12 min read",
    featured: true,
    hasFullPost: true,
    content: [
      {
        type: "p",
        text: "Most students who want to study abroad know what they want. What they are less clear on is what preparation actually involves - and how early it needs to begin.",
      },
      {
        type: "p",
        text: "This guide is not about motivation. It is about structure. It covers what reputed universities abroad genuinely look for, what takes time to build, and what you can start working on now - regardless of whether you are in your second year of undergraduate study, finishing a Masters, or already working and reconsidering your options.",
      },
      {
        type: "h2",
        text: "Who This Guide Is For",
      },
      {
        type: "ul",
        items: [
          "Indian undergraduate students in STEM, social sciences, or humanities considering a Masters or PhD abroad",
          "Indian postgraduate students planning to apply to PhD or research programs internationally",
          "Working professionals considering a Masters abroad for a career shift or advancement",
          "Students who feel overwhelmed by the volume of generic advice online and want something more honest and practical",
        ],
      },
      {
        type: "p",
        text: "If you are looking for a ranked list of universities or a scholarship guarantee, this is not that guide. If you want to understand what serious preparation looks like, read on.",
      },
      {
        type: "h2",
        text: "Why Early Preparation Changes Everything",
      },
      {
        type: "p",
        text: "Students who get into strong programs abroad rarely got there by accident. Most of them started thinking seriously one to three years before they applied.",
      },
      {
        type: "p",
        text: "Starting early gives you time to:",
      },
      {
        type: "ul",
        items: [
          "Build a research or professional profile that is genuinely competitive",
          "Make considered choices about programs and countries, not reactive ones",
          "Write application documents that reflect real depth",
          "Explore funding options before deadlines close",
          "Address weak areas - grades, skills, language scores - before they become problems",
        ],
      },
      {
        type: "p",
        text: "Students who start late tend to fall into one of two patterns: applying to many programs hoping something will land, or applying only to well-known names without understanding fit. Neither serves them well.",
      },
      {
        type: "h2",
        text: "Step 1 - Know What You Actually Want",
      },
      {
        type: "p",
        text: "Before looking at any university website, spend real time with these questions.",
      },
      {
        type: "h3",
        text: "Why do you want to study abroad?",
      },
      {
        type: "p",
        text: "\"Better opportunities\" is not an answer - it is a placeholder. Universities admit students with intellectual direction. More importantly, you need clarity to make good decisions for yourself.",
      },
      {
        type: "h3",
        text: "What do you want to study, and why?",
      },
      {
        type: "p",
        text: "The more specific your answer, the stronger your applications will be. \"I want to study machine learning\" is far weaker than \"I am interested in computer vision applied to medical imaging, specifically in low-resource diagnostic settings.\"",
      },
      {
        type: "h3",
        text: "Masters or PhD?",
      },
      {
        type: "p",
        text: "These are fundamentally different paths. A Masters is typically coursework-heavy, shorter (one to two years in most countries), and prepares you for industry or further study. A PhD is a research degree requiring you to produce original knowledge over three to five years. The motivation, profile, and application documents required are quite different.",
      },
      {
        type: "h3",
        text: "Research-oriented or professionally oriented?",
      },
      {
        type: "p",
        text: "Research-oriented students often aim for PhD programs or research-track Masters. Professionally oriented students may benefit more from taught Masters programs with strong industry links. Neither is superior - but confusing the two leads to mismatched applications.",
      },
      {
        type: "p",
        text: "Your answers to these questions shape every decision that follows.",
      },
      {
        type: "h2",
        text: "Step 2 - Understand What Programs Look For",
      },
      {
        type: "p",
        text: "Across most reputed universities abroad, the following factors carry weight:",
      },
      {
        type: "ul",
        items: [
          "**Academic record** - Your grades, the institution, and the rigor of your coursework. Context matters: a 7.5 CGPA from a demanding program may read stronger than a 9.0 from a less competitive one.",
          "**Research or project experience** - Especially for PhD and research Masters applications. Publications, thesis work, research internships, and independent projects signal intellectual initiative.",
          "**Letters of recommendation** - Strong LORs from academics or supervisors who know your work closely carry real weight. Generic letters do not.",
          "**Statement of Purpose** - Your argument for why you, why this program, and why now. It requires genuine reflection, not a retelling of your academic timeline.",
          "**English language proficiency** - Most programs require IELTS or TOEFL. Requirements vary. Always verify from the official program page.",
          "**Test scores where applicable** - GRE is no longer required by many programs but some still ask for it. Check each program individually.",
        ],
      },
      {
        type: "p",
        text: "Admissions committees read hundreds of files. A clear, specific, honest profile stands out.",
      },
      {
        type: "h2",
        text: "Step 3 - Build Your Profile With Purpose",
      },
      {
        type: "p",
        text: "Profile building is not about padding a CV. It is about doing meaningful work and being able to speak to it clearly.",
      },
      {
        type: "ul",
        items: [
          "**Grades matter, but context matters too.** If your GPA is lower than ideal, demonstrate depth elsewhere - research projects, a strong final-year thesis, or relevant professional experience.",
          "**Research experience is highly valued.** If you are still in undergraduate or postgraduate study, approach faculty in your department for involvement in their research. Even a sustained semester-long project done seriously adds real credibility.",
          "**Professional experience counts.** For professionally oriented programs, relevant industry work shows you have tested your interests outside the classroom.",
          "**Depth over breadth.** Two or three serious, sustained involvements are more convincing than ten superficial ones. Choose activities with intention, not to fill lines on a CV.",
        ],
      },
      {
        type: "h2",
        text: "Step 4 - Think Carefully About Country and Program Choice",
      },
      {
        type: "p",
        text: "Country choice is one area where Indian students most often rely on secondhand information. \"Germany is free.\" \"USA has better research.\" \"UK is only one year.\" These simplifications lead to poor decisions.",
      },
      {
        type: "p",
        text: "Each country has a different academic structure, funding model, visa pathway, and cultural environment. Consider:",
      },
      {
        type: "ul",
        items: [
          "**Research culture vs. taught programs** - Countries like Germany, the Netherlands, and Scandinavia have strong research traditions. Others have well-developed professional programs. Know which you need.",
          "**Full cost of studying** - A program with no tuition may have high living costs. A fee-paying program may offer scholarships that significantly reduce the total. Calculate both.",
          "**Language requirements** - Many European programs are taught in English, but daily life outside the university may require local language ability.",
          "**Post-study work options** - Visa and work permit rules change. Check the official immigration authority of each country for current policies.",
          "**Program fit** - The most important factor. Look at faculty research areas, program structure, and whether the department is genuinely strong in your specific area of interest.",
        ],
      },
      {
        type: "p",
        text: "Narrow your shortlist to three to five countries and ten to fifteen programs based on fit, not rankings alone.",
      },
      {
        type: "h2",
        text: "Step 5 - Scholarships and Financial Planning",
      },
      {
        type: "p",
        text: "Studying abroad carries significant costs even in countries with low or no tuition. Financial planning is essential.",
      },
      {
        type: "p",
        text: "Some scholarship programs worth researching - always verify current availability and eligibility from official sources:",
      },
      {
        type: "ul",
        items: [
          "**DAAD (Germany)** - Various levels of study and research",
          "**Erasmus Mundus Joint Masters** - EU-funded, for international students, highly competitive",
          "**Fulbright-Nehru (USA)** - For Indian students going to the United States",
          "**Commonwealth Scholarships (UK)** - For students from Commonwealth countries",
          "**Chevening (UK)** - One-year Masters, for future leaders",
        ],
      },
      {
        type: "p",
        text: "For PhD programs, many universities in Europe and North America fund doctoral students through research or teaching assistantships. A fully funded PhD is a realistic goal if your profile is competitive and you apply where funding is available.",
      },
      {
        type: "p",
        text: "Start scholarship research early. Many have annual deadlines requiring planning six to twelve months ahead.",
      },
      {
        type: "h2",
        text: "Step 6 - Get Your Documents Right",
      },
      {
        type: "ul",
        items: [
          "**Statement of Purpose** - Not a personal essay, but an academic argument. Address your intellectual journey, what you have done, what you want to study and why, why this specific program, and what you bring to it. Be specific. Avoid generic language.",
          "**Curriculum Vitae** - Academic CV format, not a corporate resume. List education, research experience, publications, presentations, projects, awards, and relevant skills.",
          "**Letters of Recommendation** - Choose recommenders who know your academic work closely. Give them at least four to six weeks and provide context about the programs you are applying to.",
          "**Transcripts** - Official transcripts from all institutions attended. Check whether certified translations are required.",
          "**Language test scores** - Book IELTS or TOEFL well in advance. Official score reports take time to process and send.",
        ],
      },
      {
        type: "h2",
        text: "Step 7 - Plan Your Timeline",
      },
      {
        type: "p",
        text: "Most Masters programs have application deadlines between November and March for the following academic year. PhD programs vary - some have rolling admissions, others fixed annual cycles.",
      },
      {
        type: "ul",
        items: [
          "**18-24 months before** - Clarify goals, identify profile gaps, begin building research or professional experience",
          "**12-18 months before** - Research programs and countries in depth, begin preparing for language tests, identify recommenders",
          "**9-12 months before** - Take language tests, draft SOP, prepare CV, approach recommenders formally",
          "**6-9 months before** - Finalise program shortlist, begin applications, note scholarship deadlines",
          "**3-6 months before** - Submit applications, apply for scholarships, prepare for potential interviews",
          "**After offers** - Evaluate carefully, accept, and apply for a student visa from the official government authority",
        ],
      },
      {
        type: "p",
        text: "Students applying to PhD programs should also allow time for identifying and contacting potential supervisors - this process alone can take several months.",
      },
      {
        type: "h2",
        text: "Common Mistakes Indian Students Make",
      },
      {
        type: "ul",
        items: [
          "**Applying without genuine fit.** Choosing a university because it appears in a ranking, without checking whether the faculty or program structure matches your goals, is a common and costly mistake.",
          "**Leaving documents to the last minute.** A strong SOP cannot be written over a weekend. Give yourself weeks, not days.",
          "**Relying on secondhand information.** Online forums and seniors' experiences are useful starting points - not authoritative sources. Requirements, tuition, scholarships, and visa rules change. Always verify from official sources.",
          "**Treating the SOP as a CV summary.** Your SOP should explain your thinking and intellectual direction, not repeat your resume.",
          "**Not contacting potential PhD supervisors.** For research PhD programs, especially in Europe, identifying and reaching out to faculty before applying is often expected. A well-written, specific email can meaningfully strengthen your application.",
          "**Underestimating financial preparation.** Visa fees, flights, initial deposits, and the first months abroad all require money before any stipend or scholarship begins.",
        ],
      },
      {
        type: "h2",
        text: "A Practical Preparation Checklist",
      },
      {
        type: "checklist",
        items: [
          "Clarified academic goal: Masters vs PhD, research vs professional",
          "Identified three to five target countries based on genuine fit",
          "Researched ten to fifteen specific programs",
          "Assessed current profile: GPA, projects, research experience",
          "Identified gaps and started addressing them",
          "Booked or completed IELTS or TOEFL",
          "Identified three recommenders and spoken to them",
          "Started drafting SOP",
          "Prepared academic CV",
          "Researched relevant scholarships and noted deadlines",
          "Contacted potential PhD supervisors where applicable",
          "Organised transcripts and supporting documents",
          "Created an application tracking spreadsheet",
        ],
      },
      {
        type: "note",
        heading: "Important note on changing requirements",
        text: "Program requirements, scholarship eligibility, tuition structures, visa rules, and English test policies change regularly. The frameworks in this guide are intended to be evergreen, but specific details - deadlines, fee amounts, test score cutoffs, funding availability - should always be verified directly from the official website of the university, scholarship body, or government immigration authority.",
      },
      {
        type: "h2",
        text: "When Students Should Seek Guidance",
      },
      {
        type: "p",
        text: "There is a point in preparation where general guides are no longer enough. When the decisions become specific - which programs to apply to, how to position your profile, how to write an SOP that reflects your actual intellectual direction - working with someone who can read your situation closely makes a real difference.",
      },
      {
        type: "cta",
        text: "If you are serious about studying abroad and want more clarity in how you build your profile, shortlist programs, and prepare your applications, my mentorship may help. I work with students in a personalized, academically grounded way to help them make stronger decisions and prepare more strategically.",
        linkText: "Explore the mentorship program",
        linkHref: "/mentorship",
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Preparing to study abroad from India is not a single task. It is a process that involves honest self-assessment, deliberate profile building, careful research, and methodical application preparation. The students who do it well are not necessarily the most brilliant - they are the ones who started early, thought clearly, and chose programs based on genuine fit rather than name recognition or last-minute availability.",
      },
      {
        type: "p",
        text: "The goal is not just an admission letter. It is to find a program where you can do meaningful work, grow intellectually, and build a career that reflects your actual interests. That kind of outcome starts well before the application deadline.",
      },
      {
        type: "faq",
        items: [
          {
            q: "When should an Indian student start preparing to study abroad?",
            a: "Ideally one to two years before the intended start date. This allows enough time to build your profile, prepare documents properly, research scholarships, and handle logistics without rushing. Starting later is not impossible, but it narrows your options considerably.",
          },
          {
            q: "Is a Masters degree necessary before applying for a PhD abroad?",
            a: "Not always. Some countries and programs accept direct PhD entry from a Bachelor's degree. In the USA, many PhD programs include coursework equivalent to a Masters in the first two years. In most European countries, a Masters is expected. Check the specific requirements of each program you are considering.",
          },
          {
            q: "How important is CGPA for study abroad applications?",
            a: "It matters, but context matters too. The reputation of your institution, the difficulty of your program, and your overall academic trajectory all factor in. A strong research record, a well-argued SOP, and credible recommendations can support an application even when the GPA is not exceptional.",
          },
          {
            q: "Can Indian students get fully funded opportunities to study abroad?",
            a: "Yes. Fully funded opportunities exist, particularly for PhD programs in Europe and North America, and through scholarships like DAAD, Erasmus Mundus, and Fulbright-Nehru. Competition is significant. Always verify current eligibility and availability from official sources.",
          },
          {
            q: "Is the GRE still required for Masters and PhD applications?",
            a: "Many universities, particularly in the USA, have made GRE optional or removed the requirement entirely. Some programs still require it. Check the admissions page for every program on your shortlist individually.",
          },
          {
            q: "How do I know if a program is a good fit for me?",
            a: "Look beyond rankings. Read about faculty in your area of interest, the program structure, and recent alumni outcomes. If possible, contact a current student. Fit is about alignment between what you want to do and what the program is genuinely set up to support.",
          },
        ],
      },
    ],
  },
];

export function getFullPost(slug: string): BlogPost | undefined {
  return fullPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPostPreview {
  const explicit = blogPosts.find((p) => p.featured);
  return explicit ?? blogPosts[0];
}

export function getListingPosts(): BlogPostPreview[] {
  const featured = getFeaturedPost();
  return blogPosts.filter((p) => p.slug !== featured.slug);
}

export function getBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map((p) => p.category))).sort((a, b) =>
    a.localeCompare(b),
  );
}
