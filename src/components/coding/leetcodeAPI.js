// Fetches data from our own Vercel Serverless Function (/api/leetcode)
export const fetchLeetCodeData = async (username) => {
    try {
      const response = await fetch(`/api/leetcode?username=${username}`);
      
      if (!response.ok) {
        console.warn("API request failed. Ensure you are running with 'vercel dev' locally or deployed.");
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error("LeetCode Data Error:", error);
      return null;
    }
  };
