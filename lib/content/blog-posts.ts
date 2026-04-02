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
    slug: "build-strong-profile-universities-abroad",
    title: "How to Build a Strong Profile for Universities Abroad",
    excerpt:
      "What does a strong study abroad profile actually mean? A practical guide for Indian students on grades, research, projects, LORs, and aligning your profile with the right programs.",
    category: "Profile Building",
    date: "Apr 2026",
    readTime: "13 min read",
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
  {
    slug: "build-strong-profile-universities-abroad",
    title: "How to Build a Strong Profile for Universities Abroad",
    metaTitle:
      "How to Build a Strong Profile for Universities Abroad | Dr. Subhra Sundar",
    metaDescription:
      "Learn what a strong study abroad profile really means for Indian students - grades, research, projects, SOP, LORs, and program fit.",
    excerpt:
      "What does a strong study abroad profile actually mean? A practical guide for Indian students on grades, research, projects, LORs, and aligning your profile with the right programs.",
    category: "Profile Building",
    date: "Apr 2026",
    readTime: "13 min read",
    hasFullPost: true,
    content: [
      {
        type: "p",
        text: "When Indian students ask \"Is my profile strong enough?\", they are usually thinking about one thing: their GPA. Sometimes they also think about test scores. What they are rarely thinking about is the fuller picture that international admissions committees actually consider.",
      },
      {
        type: "p",
        text: "A strong profile for universities abroad is not a single number. It is a coherent picture of who you are academically, what you have done with your time, where you are headed, and whether the program you are applying to is a genuine fit for both sides.",
      },
      {
        type: "p",
        text: "This guide breaks that picture down - what each element means, how much it matters, and what Indian students at different stages can do to strengthen theirs.",
      },
      {
        type: "h2",
        text: "Who This Guide Is For",
      },
      {
        type: "ul",
        items: [
          "Indian undergraduate and postgraduate students preparing to apply to Master's or PhD programs abroad in the next one to three years",
          "Students who are unsure whether their current academic profile is competitive and want to understand what they can do about it",
          "Students who have started building their CV but are not confident they are doing it with the right things in mind",
          "Anyone who wants an honest, specific answer to the question: what does a strong profile actually look like?",
        ],
      },
      {
        type: "p",
        text: "This guide is most useful when you have at least a year - ideally more - before your intended application date. Profile building takes time. The advice here is not for students applying in the next few weeks.",
      },
      {
        type: "h2",
        text: "What Universities Actually Mean by Profile",
      },
      {
        type: "p",
        text: "When an admissions committee evaluates a profile, they are trying to answer a few core questions:",
      },
      {
        type: "ul",
        items: [
          "Can this student handle the academic demands of our program?",
          "Does this student have the background and curiosity to contribute meaningfully?",
          "Is there evidence of independent thinking, initiative, or research potential?",
          "Does this student's stated direction make sense given what they have done so far?",
        ],
      },
      {
        type: "p",
        text: "Profile is shorthand for the sum of evidence that helps them answer those questions. It includes your academic record, research and project experience, professional background, the quality of your recommendations, and how all of it is framed through your application documents.",
      },
      {
        type: "p",
        text: "What it does not mean is a long list of certificates, workshops, and competitions with no coherent thread. Admissions committees read enough applications to recognise when someone has been collecting credentials rather than building genuine depth.",
      },
      {
        type: "h2",
        text: "How Profile Expectations Differ by Program Type",
      },
      {
        type: "p",
        text: "This is where many Indian students make their first mistake - treating profile building as a generic task rather than one that should be tailored to the specific type of program they are targeting.",
      },
      {
        type: "h3",
        text: "Master's programs (professionally oriented)",
      },
      {
        type: "p",
        text: "These programs typically value strong academic performance, relevant internship or industry experience, clear professional goals, and a well-reasoned case for why graduate study is the next logical step. Research experience is a positive, but not always essential.",
      },
      {
        type: "h3",
        text: "Master's programs (research-oriented or thesis-based)",
      },
      {
        type: "p",
        text: "These lean closer to PhD expectations. Research experience, thesis work, faculty alignment, and intellectual direction matter more than industry credentials.",
      },
      {
        type: "h3",
        text: "PhD programs",
      },
      {
        type: "p",
        text: "Research experience is not a nice-to-have - it is central. Committees want to see evidence that you understand what research involves, that you have contributed to original work, and that you have a specific intellectual direction you want to pursue. Publications and faculty alignment are significant advantages.",
      },
      {
        type: "p",
        text: "Knowing which type of program you are targeting should shape how you spend the next twelve to eighteen months.",
      },
      {
        type: "h2",
        text: "Academic Record - What It Signals and What to Do About It",
      },
      {
        type: "p",
        text: "Your academic record is typically the first thing committees look at. It signals how you have performed in a structured environment, how much rigor your coursework involved, and whether you are likely to handle graduate-level demands.",
      },
      {
        type: "ul",
        items: [
          "**CGPA matters, but context matters too.** A 7.8 from a demanding program at a competitive institution may carry more weight than a 9.2 from a program known for lenient grading. Committees at strong universities often have some familiarity with the Indian higher education landscape, though this is not uniform.",
          "**Trajectory matters.** If your grades were lower early and improved significantly, that pattern is worth noting in your SOP. It signals growth and self-correction, not just performance.",
          "**Subject-specific performance.** For a student applying to a materials science PhD, strong grades in core materials science and physics courses matter more than an overall CGPA. Committees look at performance in the areas most relevant to your intended program.",
          "**If your grades are not ideal:** Redirect energy toward building strength elsewhere - research experience, projects, strong LORs from people who know your work closely, and a well-argued SOP. A lower GPA supported by a substantive research record and clear faculty alignment is often a more compelling file than a high GPA with nothing else behind it.",
        ],
      },
      {
        type: "h2",
        text: "Research Experience - The Factor Most Students Underestimate",
      },
      {
        type: "p",
        text: "For PhD applications and research-oriented Master's programs, research experience is the single most differentiating factor between competitive and weak profiles.",
      },
      {
        type: "p",
        text: "Many Indian students do not pursue research during their undergraduate or postgraduate years because it simply is not part of their curriculum. This is a real disadvantage - but one that can be addressed with deliberate effort.",
      },
      {
        type: "p",
        text: "Research experience does not have to mean a published paper. It can include:",
      },
      {
        type: "ul",
        items: [
          "A final-year thesis with a defined research question and methodology",
          "A project supervised by a faculty member, even informally",
          "A summer research internship at a national institute or university",
          "Contribution to a faculty-led research project as an assistant",
          "Independently initiated work that demonstrates problem framing, data collection, and analysis",
        ],
      },
      {
        type: "p",
        text: "What matters is genuine intellectual engagement - that you identified a problem, worked through it systematically, and can speak to what you did and what you found. If you are still in undergraduate or postgraduate study, approaching a faculty member in your department now - even to ask whether you can assist on a project - is one of the most direct steps you can take.",
      },
      {
        type: "h2",
        text: "Projects, Internships, and Work Experience",
      },
      {
        type: "p",
        text: "For professionally oriented Master's programs, relevant internships and work experience are often more persuasive than research credentials. The key word is relevant.",
      },
      {
        type: "ul",
        items: [
          "**For STEM students:** Substantive personal or academic projects - particularly those that are documented or presented - add real credibility. A well-maintained GitHub repository with meaningful contributions, or a project presented at a departmental seminar, signals engagement beyond coursework.",
          "**For students with work experience:** One or more years of relevant professional experience can strengthen a professionally oriented Master's application considerably, provided you can articulate what you learned and why graduate study is the logical next step.",
          "**What to avoid:** Adding experiences that bear no connection to your stated direction. If your SOP says you want to pursue environmental science, an unrelated internship requires clear explanation. If it cannot be explained coherently, it adds noise rather than signal.",
        ],
      },
      {
        type: "h2",
        text: "Publications and Presentations - When They Matter",
      },
      {
        type: "p",
        text: "For PhD applications to research-intensive programs, a publication - even a conference paper or co-authored journal article - can significantly strengthen a profile. That said, publications should not be pursued for their own sake.",
      },
      {
        type: "p",
        text: "A paper in a low-quality journal, or one produced with minimal intellectual contribution, is often recognised as such. Committees at strong institutions are familiar with the landscape of predatory journals and padded CVs.",
      },
      {
        type: "ul",
        items: [
          "**A publication genuinely helps when** it appears in a recognisable venue, you can speak clearly to your specific contribution, and it connects directly to the research direction in your application.",
          "**If you do not have a publication:** A strong thesis, a well-documented project, or a poster presented at a departmental or national symposium can serve a similar function - demonstrating that you are capable of engaging with original work and communicating it clearly.",
        ],
      },
      {
        type: "h2",
        text: "Letters of Recommendation - Quality Over Familiarity",
      },
      {
        type: "p",
        text: "Indian students often choose recommenders based on seniority - \"my HOD,\" \"a well-known professor\" - rather than on direct knowledge of their work. This is one of the most common and costly mistakes in profile building.",
      },
      {
        type: "p",
        text: "A letter from a senior professor who barely knows you is far less useful than a letter from a junior faculty member who supervised your thesis for six months and can describe, with specificity, what you did, how you think, and what your potential looks like.",
      },
      {
        type: "p",
        text: "Strong letters of recommendation:",
      },
      {
        type: "ul",
        items: [
          "Come from someone who has worked with you closely in an academic or professional context",
          "Describe specific instances of your work, thinking, or problem-solving",
          "Speak to your research potential, intellectual curiosity, or professional capability - not just your attendance or grades",
          "Are tailored, at least in part, to the type of program you are applying to",
        ],
      },
      {
        type: "p",
        text: "What this means for profile building: identify early who your eventual recommenders could be, and build genuine working relationships with them. A project completed well under a faculty member's guidance creates the raw material for a letter that actually helps your application.",
      },
      {
        type: "h2",
        text: "Statement of Purpose - Where Your Profile Comes Together",
      },
      {
        type: "p",
        text: "Your Statement of Purpose is not a separate document - it is the frame through which your entire profile is read. A strong SOP takes everything you have done and shows why it adds up to a coherent direction.",
      },
      {
        type: "p",
        text: "This is why profile building and SOP writing are inseparable. A student who has done meaningful research, can name faculty at target programs whose work interests them, and can articulate a clear question they want to pursue - that student can write a genuinely convincing SOP.",
      },
      {
        type: "p",
        text: "A student who has accumulated unrelated activities for resume purposes will find it difficult to write an SOP that feels honest and specific. The profile shapes the SOP, and the SOP reveals whether the profile has any real substance.",
      },
      {
        type: "h2",
        text: "Extracurricular Depth and Other Contributions",
      },
      {
        type: "p",
        text: "Extracurricular activities are rarely decisive for graduate applications, particularly in STEM. But when they are relevant and sustained, they can reinforce an impression of intellectual engagement, leadership, or communication ability.",
      },
      {
        type: "p",
        text: "The standard to apply is relevance and depth. A student who has consistently written about science for a college magazine, or who has taught mathematics to school students over two years, or who has organised academic events in their department - these activities say something coherent about the person. A long list of clubs, competitions, and one-off events typically says little.",
      },
      {
        type: "h2",
        text: "Can Students from Ordinary Colleges Still Build a Strong Profile?",
      },
      {
        type: "p",
        text: "Yes - and this is worth addressing directly, because it is a question many Indian students carry quietly without asking.",
      },
      {
        type: "p",
        text: "Students from non-elite or less well-known colleges in India often assume that their institution's reputation is a ceiling on their profile. It is not. Admissions committees at most serious universities are evaluating what you have done, not just where you studied. The name of your college matters less than what you made of the opportunities available to you there.",
      },
      {
        type: "p",
        text: "Here is what actually moves the needle:",
      },
      {
        type: "ul",
        items: [
          "**Research under a faculty member's supervision.** Even at smaller colleges, there are often faculty members conducting research or working on funded projects. Approaching them proactively, contributing meaningfully, and sustaining that involvement over a semester or more creates something concrete and credible regardless of institutional brand.",
          "**Independent projects with documented outcomes.** A student who built something, analysed something, or solved something - and can demonstrate it clearly - is more compelling than a student from a prestigious institution who has coasted on the name.",
          "**Strong letters from people who genuinely know your work.** A recommender at a smaller institution who knows you closely and can speak to your specific abilities is often more useful than a well-known name who cannot say much beyond generalities.",
          "**Supplementary research exposure.** National institutes like IITs, IISc, TIFR, IISER, and CSIR labs offer summer fellowship programs open to students from all institutions. These are competitive, but accessible to students who apply early, prepare well, and demonstrate genuine research interest.",
          "**Clear intellectual direction.** A student from any background who can articulate a specific research question, name faculty doing relevant work at target programs, and connect their experience to a coherent goal - that student has done the work that most applicants skip.",
        ],
      },
      {
        type: "p",
        text: "Students from non-elite colleges may need to do more to demonstrate capability than students whose institution's name does some of the work for them. But it is not a different kind of work. It is the same work - done with more intention and more documentation.",
      },
      {
        type: "h2",
        text: "Aligning Your Profile With Your Target Programs",
      },
      {
        type: "p",
        text: "The strongest profiles are not impressive in the abstract - they are clearly relevant to a specific purpose. A student applying to computational linguistics programs should have a profile that makes sense for that field: relevant coursework, projects involving language data, and familiarity with faculty whose work connects to what the student has done.",
      },
      {
        type: "p",
        text: "This alignment comes from research. Before building toward applications, spend time understanding:",
      },
      {
        type: "ul",
        items: [
          "What faculty at your target programs are actively working on",
          "What the program considers its core strengths",
          "What recently admitted students' backgrounds look like, where available",
          "What the admissions page emphasises as important for applicants",
        ],
      },
      {
        type: "p",
        text: "This research then shapes the next twelve months - which projects to pursue, which skills to develop, which faculty to consider contacting, and how to frame your direction in your SOP.",
      },
      {
        type: "h2",
        text: "The Difference Between Meaningful Profile Building and CV Padding",
      },
      {
        type: "p",
        text: "Many services encourage students to accumulate credentials: online certificates, short internships, competitions, workshop attendances. The implicit logic is that more is better. It is not.",
      },
      {
        type: "p",
        text: "Admissions committees read enough applications to distinguish between a student who has done meaningful work and a student who has been told to fill a CV. The former has a coherent thread. The latter has a long list that does not add up to a clear picture.",
      },
      {
        type: "p",
        text: "The question to ask about any activity, project, or experience is not \"does this look good?\" but \"can I speak to this honestly, and does it connect to where I am going?\" If the answer to either part is no, the credential is not serving you.",
      },
      {
        type: "h2",
        text: "Common Mistakes in Profile Building",
      },
      {
        type: "ul",
        items: [
          "**Starting too late.** Research experience, a meaningful thesis, a sustained relationship with a potential recommender - these cannot be assembled in a few months. Starting one to two years ahead gives you the time to build something real.",
          "**Optimising for the CV rather than for genuine learning.** Work done for resume purposes rather than genuine interest tends to produce mediocre outcomes that read as such.",
          "**Choosing recommenders for their title rather than their knowledge of your work.** A letter from someone who cannot speak specifically to what you have done is not a strong letter, regardless of who signed it.",
          "**Treating all programs as identical.** Some value research experience; others do not. Some prioritise industry background; others are indifferent to it. Understanding the specific expectations of each program type is basic preparation that many students skip.",
          "**Spreading effort across too many things.** Doing five things at 60 percent is less convincing than doing two things at full depth. Sustained engagement matters more than breadth.",
          "**Applying to PhD programs without any knowledge of the faculty.** A profile that shows no awareness of the department's current work is a weak application regardless of credentials. Faculty alignment is not optional for research programs.",
        ],
      },
      {
        type: "h2",
        text: "A Practical Profile Building Checklist",
      },
      {
        type: "checklist",
        items: [
          "Identified target program type: professionally oriented Masters, research Masters, or PhD",
          "Assessed academic record and noted subject-specific performance in relevant areas",
          "Identified research or project opportunities available now",
          "Approached or planned to approach faculty for research involvement",
          "Noted skills, tools, or subject areas to develop in the next six to twelve months",
          "Identified two to three potential recommenders and started building meaningful working relationships",
          "Reviewed faculty research areas at three to five target programs",
          "Started or completed a thesis, independent project, or research internship",
          "Documented all significant work: what you did, what the outcome was, what you learned",
          "Assessed whether current extracurricular involvement reflects genuine depth",
          "Reviewed admissions requirements for target programs to understand what matters most for each",
        ],
      },
      {
        type: "note",
        heading: "Important note",
        text: "Admissions expectations, program structures, and application requirements vary by country, institution, and year. What is described here reflects broad patterns across internationally competitive programs, not the specific requirements of any single institution. Always verify requirements directly from the program's official admissions page. Requirements around test scores, language proficiency, portfolio submissions, and research background may differ significantly between programs.",
      },
      {
        type: "h2",
        text: "When Students Should Seek Guidance",
      },
      {
        type: "p",
        text: "Many students do not struggle because they lack potential. They struggle because they are not sure which weaknesses actually matter, which strengths to build on, and how to align their profile with realistic target programs. That is often the point where external guidance becomes useful - not to tell you what to do, but to help you see your situation more clearly and make better decisions with the time you have.",
      },
      {
        type: "p",
        text: "Profile building in isolation also carries a specific risk: you can spend a year doing things that feel productive but do not actually strengthen your application for the programs you are targeting. A second perspective - from someone who understands both the academic landscape and the realities of admissions - can save you from that.",
      },
      {
        type: "cta",
        text: "If you are serious about studying abroad and want more clarity in how you build your profile, shortlist programs, and prepare your applications, my mentorship may help. I work with students in a personalized, academically grounded way to help them think clearly and prepare strategically.",
        linkText: "Explore the mentorship program",
        linkHref: "/mentorship",
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "A strong profile for universities abroad is not built in a semester. It is built through sustained, intentional decisions about how you spend your academic time - what you work on, who you work with, what you learn, and how you frame it all.",
      },
      {
        type: "p",
        text: "The students who build the strongest profiles are not always the most naturally talented. They are the ones who understood what mattered early enough to do something about it, chose depth over breadth, and built a coherent story from the work they did.",
      },
      {
        type: "p",
        text: "That story is what universities abroad are looking for. And it takes time - and honest self-assessment - to tell it well.",
      },
      {
        type: "faq",
        items: [
          {
            q: "How early should I start building my profile for studying abroad?",
            a: "Ideally, one to two years before you plan to apply. Some elements - like building a meaningful relationship with a potential recommender, or completing a substantial research project - cannot be done in a few months. The earlier you begin, the more options you have and the more genuine your profile can become.",
          },
          {
            q: "Does a low GPA automatically disqualify me from competitive programs abroad?",
            a: "Not automatically. A lower GPA can be offset by strong research experience, a well-argued SOP, and credible recommendations from people who know your work closely. A low GPA with nothing else behind it is harder to overcome. Addressing it honestly in your SOP and letting other elements carry weight is a more effective approach than hoping committees will overlook the number.",
          },
          {
            q: "Do I need publications to apply for a PhD abroad?",
            a: "Not always, but meaningful research experience of some kind is important. Publications are a significant advantage for competitive programs, but a strong thesis, well-documented project, or clear research contribution can serve a similar function. What matters is that you can demonstrate genuine engagement with the research process.",
          },
          {
            q: "How do I know which elements of my profile matter most for my specific program?",
            a: "Research the program directly. Read about faculty research areas, review what the admissions page emphasises, and where possible, look at the profiles of recently admitted students. For PhD programs, research background and faculty alignment tend to dominate. For professional Master's programs, relevant experience and clear professional direction carry more weight.",
          },
          {
            q: "Is research experience at an Indian institution valued by universities abroad?",
            a: "Yes, without qualification. Research experience at reputable Indian institutions - IITs, IISc, TIFR, IISER, CSIR labs, and others - is well regarded by international programs. What matters is the quality of the work, not the geography. A substantive project at a strong Indian institution carries far more weight than a superficial attachment to an international lab.",
          },
          {
            q: "How many extracurricular activities should I include in my application?",
            a: "There is no target number. Include what is genuine, sustained, and relevant. Three meaningful activities you can speak to specifically are more convincing than ten brief entries. Committees are not counting activities - they are looking for evidence of character, consistency, and genuine engagement.",
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
