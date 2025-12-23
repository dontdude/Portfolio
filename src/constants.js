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

  // Resume (Single Source of Truth)
  // Updating this link will automatically update vercel.json rewrites via the sync script.
  resume: "https://drive.google.com/file/d/1F-f6xfpSFAglxvcBIuT9rwrP765F-HTd/view?usp=sharing",
};

module.exports = { LINKS };
