// -----------------------------------------------------------------------------
// CENTRALIZED COMPONENT CONSTANTS
// -----------------------------------------------------------------------------
// ⚠️ IMPORTANT: If you change any links here (especially 'resume'), you MUST run:
//     npm run sync-rewrites
// This updates 'vercel.json' so that 'your-site.com/resume' redirects to the new link.
// -----------------------------------------------------------------------------

const LINKS = {
  // Social Profiles
  linkedin: "https://www.linkedin.com/in/chandan-dontdude/",
  github: "https://github.com/dontdude",
  leetcode: "https://leetcode.com/dontdude/",
  codeforces: "https://codeforces.com/profile/dontDude",
  gfg: "https://auth.geeksforgeeks.org/user/dontdude/practice",
  medium: "https://medium.com/@dontdude",

  // Resume Links (Dynamic Serving)
  // Default is International. India specific link is used based on timezone.
  resume: "https://drive.google.com/file/d/1kjdDO5u6ywvHLU2ozIiR1snS5URR9Xnz/view", // International
  resume_india: "https://drive.google.com/file/d/1TJBvqi9wSMtO8u5JOlmbLB3Xf5ZDpg4Y/view", // India
};

module.exports = { LINKS };
