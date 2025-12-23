const fs = require('fs');
const path = require('path');
const { LINKS } = require('../src/constants');

const VERCEL_CONFIG_PATH = path.join(__dirname, '../vercel.json');

// Define mappings from LINKS keys to Vercel rewrite sources
const REWRITE_MAPPINGS = {
  resume: '/resume',
  linkedin: '/linkedin',
  github: '/github',
  leetcode: '/leetcode',
  codeforces: '/codeforces',
  gfg: '/gfg',
  medium: '/medium'
};

function updateRewrites() {
  try {
    if (!fs.existsSync(VERCEL_CONFIG_PATH)) {
      console.error('❌ vercel.json not found!');
      process.exit(1);
    }

    const vercelConfig = JSON.parse(fs.readFileSync(VERCEL_CONFIG_PATH, 'utf8'));
    
    // Initialize rewrites if not present
    if (!vercelConfig.rewrites) {
      vercelConfig.rewrites = [];
    }

    // Filter out existing automatic rewrites to avoid duplicates (we will re-add them)
    const manualRewrites = vercelConfig.rewrites.filter(r => 
      !Object.values(REWRITE_MAPPINGS).includes(r.source)
    );

    const newRewrites = Object.entries(REWRITE_MAPPINGS).map(([key, source]) => {
      const destination = LINKS[key];
      if (!destination) {
        console.warn(`⚠️ Warning: No URL found for ${key} in constants.js`);
        return null;
      }
      return { source, destination };
    }).filter(Boolean);

    // Combine manual rewrites (if any preserved) with new ones
    // We put new ones first or last? Vercel matches top down.
    // Let's put them at the end or replace entirely?
    // The user might have other rewrites. We filtered out the ones we manage.
    
    vercelConfig.rewrites = [...manualRewrites, ...newRewrites];

    fs.writeFileSync(VERCEL_CONFIG_PATH, JSON.stringify(vercelConfig, null, 2));
    console.log('✅ vercel.json rewrites updated successfully!');
    
    // Log changes
    newRewrites.forEach(r => {
      console.log(`   ${r.source} -> ${r.destination}`);
    });

  } catch (error) {
    console.error('❌ Error updating rewrites:', error);
    process.exit(1);
  }
}

updateRewrites();
