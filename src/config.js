/**
 * SALVAGE AGENDA CONFIGURATION
 * 
 * Developer Note: Update `BOOK_PURCHASE_URL` and `DEFAULT_BOOK_PRICE` here
 * to link to your live payment gateway (Paystack, Flutterwave, Stripe, WhatsApp, etc.).
 */

export const SITE_CONFIG = {
  // Configurable Purchase Destination
  BOOK_PURCHASE_URL: "#checkout", // Replace with actual payment link or leave as #checkout to trigger modal
  
  // Configurable Book Price Placeholder
  DEFAULT_BOOK_PRICE: "[BOOK PRICE]", // Editable price placeholder (e.g., "15,000" or "25")
  CURRENCY_SYMBOL: "₦",

  // Book Meta Details
  TITLE: "SALVAGE AGENDA",
  SUBTITLE: "Raising the Next Generation in a World That Has Already Changed",
  AUTHOR: "Patrick Anietie John",
  AUTHOR_TITLE: "Founder of Awesome Planet & Family Consultant",
  
  // WhatsApp Bonus Community
  BONUS_COMMUNITY: "SALVAGE AGENDA WHATSAPP COMMUNITY",
  
  // Image Assets
  BOOK_COVER_IMAGE: "/assets/book-cover.jpg",
  AUTHOR_PORTRAIT_IMAGE: "/assets/author-portrait.jpg"
};

export const CHAPTERS_DATA = [
  {
    number: "01",
    roman: "CHAPTER ONE",
    title: "PARENTAL HISTORY: WHAT EVERY GENERATION GOT RIGHT AND WRONG",
    summary: "An honest audit of past parenting paradigms—preserving timeless wisdom while courageously identifying the blind spots of previous generations.",
    details: "This chapter breaks down the historical models of parenting that shaped today's adults. It examines how survival mindset, authoritarian control, and implicit traditions provided stability in previous decades but often left emotional gaps that cannot withstand the complexities of modern digital life."
  },
  {
    number: "02",
    roman: "CHAPTER TWO",
    title: "THE NEW CURRICULUM",
    summary: "Navigating AI, algorithms, digital exposure, and shifting economic landscapes with a modernized strategy.",
    details: "School curricula focus on academic grades, but the world demands critical thinking, digital discernment, adaptability, and emotional stamina. Learn how to construct a home curriculum that equips your child to thrive in a landscape dominated by artificial intelligence and hyper-connectivity."
  },
  {
    number: "03",
    roman: "CHAPTER THREE",
    title: "TAKE BACK CONTROL",
    summary: "How to regain intentional parental leadership without resorting to fear-based dominance.",
    details: "Control in the modern era is not achieved through aggressive enforcement or intimidation. True parental control is built through clarity, boundaries, presence, and relational authority that commands respect rather than demanding obedience out of fear."
  },
  {
    number: "04",
    roman: "CHAPTER FOUR",
    title: "THE POWER OF GENUINE MODELING",
    summary: "Why children inherit who you are, not just what you preach—and how to bridge the gap between advice and action.",
    details: "Children have hyper-sensitive hypocrisy detectors. This chapter provides a compelling framework for authentic parental modeling—showing how your handling of conflict, money, integrity, and stress speaks far louder than any lecture."
  },
  {
    number: "05",
    roman: "CHAPTER FIVE",
    title: "COMMUNICATION: THE MOST UNDERESTIMATED PARENTING TOOL",
    summary: "Moving from interrogation to authentic dialogue so your child feels safe bringing their real struggles to you.",
    details: "Discover how to transform daily interactions from administrative check-ins or interrogations into safe harbors for honest conversation. When children know they will be heard without instant condemnation, home becomes their primary trusted counsel."
  },
  {
    number: "06",
    roman: "CHAPTER SIX",
    title: "VALUES: RAISING A CHILD WITH A COMPASS, NOT JUST A CERTIFICATE",
    summary: "Instilling unshakeable moral grounding, discipline, faith, and character that guide them when you are not in the room.",
    details: "Certificates open doors, but character determines whether those doors stay open. This chapter lays out practical strategies for embedding discipline, respect, faith, responsibility, and an internal moral compass that operates anywhere in the world."
  }
];

export const AUDIENCE_TARGETS = [
  "Parents seeking a proven, modernized approach to raising resilient children.",
  "Upcoming parents preparing for the realities of modern parenthood.",
  "Adults preparing for family life who want to build an intentional household.",
  "Adults wanting to understand their own upbringing and close inherited generational gaps.",
  "Parents who want to preserve discipline while dramatically improving emotional connection.",
  "Parents who want their children to think independently rather than follow crowd mentality.",
  "Parents who want their children to be able to discuss difficult things openly without fear."
];
