
// Vercel Serverless Function to proxy LeetCode GraphQL requests
// This runs on the server side, bypassing CORS restrictions.

export default async function handler(req, res) {
    const { username } = req.query;
  
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
  
    const LEETCODE_API_ENDPOINT = "https://leetcode.com/graphql";
  
    const query = `
      query getUserData($username: String!) {
        matchedUser(username: $username) {
          username
          submitStats: submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
          profile {
            ranking
            realName
            userAvatar
          }
        }
        recentAcSubmissionList(username: $username, limit: 10) {
          title
          titleSlug
          timestamp
          statusDisplay
          lang
        }
      }
    `;
  
    try {
      const response = await fetch(LEETCODE_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Referer": "https://leetcode.com", // Often required by LeetCode
        },
        body: JSON.stringify({
          query,
          variables: { username },
        }),
      });
  
      const data = await response.json();
  
      if (data.errors) {
         console.error("LeetCode GraphQL Errors:", data.errors);
         return res.status(500).json({ error: "Failed to fetch data from LeetCode", details: data.errors });
      }
  
      return res.status(200).json(data.data);
  
    } catch (error) {
      console.error("Server Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
