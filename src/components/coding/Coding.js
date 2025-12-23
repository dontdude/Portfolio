import React, { useEffect, useState } from "react";
import "./Coding.css";
import Zoom from "react-reveal/Zoom";
import { fetchLeetCodeData } from "./leetcodeAPI";
import { LINKS } from "../../constants";

const Coding = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Extract username from "https://leetcode.com/dontdude/" -> "dontdude"
  const getUsername = (url) => {
      if (!url) return "dontdude";
      const parts = url.split('/').filter(Boolean);
      return parts[parts.length - 1]; 
  }
  const username = getUsername(LINKS.leetcode);

  useEffect(() => {
    const getData = async () => {
        setLoading(true);
        const result = await fetchLeetCodeData(username);
        if (result) {
            setData(result);
            setError(false);
        } else {
            setError(true);
        }
        setLoading(false);
    };
    getData();
  }, [username]);

  if (loading) return null; // Or return <></> to hide until loaded
  if (error || !data) return null;

  // Partial visibility check
  const showStats = !!data.matchedUser;
  const showActivity = data.recentAcSubmissionList && data.recentAcSubmissionList.length > 0;

  // If both are missing, hide entire section
  if (!showStats && !showActivity) return null;

  // Helper to find count by difficulty
  const getCount = (difficulty) => {
    if (!data || !data.matchedUser) return 0;
    const stats = data.matchedUser.submitStats.acSubmissionNum;
    const found = stats.find(s => s.difficulty === difficulty);
    return found ? found.count : 0;
  }

  // Calculate degrees for donut chart
  const getDonutStyle = () => {
    if (!showStats) return {};
    const total = getCount("All") || 1;
    const easy = getCount("Easy");
    const medium = getCount("Medium");
    
    const easyDeg = (easy / total) * 360;
    const mediumDeg = easyDeg + (medium / total) * 360;
    const hardDeg = 360; 
    
    return {
        "--easy-deg": `${easyDeg}deg`,
        "--medium-deg": `${mediumDeg}deg`,
        "--hard-deg": `${hardDeg}deg`
    };
  };

  return (
    <section className="coding" id="coding">
      <div className="container">
        <h3 className="title">{"< Problem Solving />"}</h3>
        
        <div className="coding-cont">
           {/* Stats Card */}
           {showStats && (
             <Zoom bottom>
              <div className="stats-card">
                  <div className="stat-circle" style={getDonutStyle()}>
                      <div className="stat-content">
                          <h3>{getCount("All")}</h3>
                          <p>Solved</p>
                      </div>
                  </div>
                  
                  {data.matchedUser.profile && (
                      <div style={{marginBottom: '10px'}}>
                          <span>Global Ranking: <strong>{data.matchedUser.profile.ranking.toLocaleString()}</strong></span>
                      </div>
                  )}
                  
                  <div className="stat-details">
                      <div className="stat-item">
                          <span>Easy</span>
                          <h4 className="easy">{getCount("Easy")}</h4>
                      </div>
                      <div className="stat-item">
                          <span>Medium</span>
                          <h4 className="medium">{getCount("Medium")}</h4>
                      </div>
                      <div className="stat-item">
                          <span>Hard</span>
                          <h4 className="hard">{getCount("Hard")}</h4>
                      </div>
                  </div>
                  
                  <a href={LINKS.leetcode} target="_blank" rel="noopener noreferrer" className="btn_shadow" style={{marginTop: '20px'}}>
                     View Profile <i className="fas fa-external-link-alt" style={{marginLeft: '5px'}}></i>
                  </a>
              </div>
             </Zoom>
           )}
           
           {/* Recent Activity */}
           {showActivity && (
             <Zoom bottom>
            <div className="activity-list">
                <h3 style={{marginBottom: '20px', fontSize: '20px'}}>Recent Activity</h3>
                <div className="activity-scroll">
                  {loading ? (
                      <p>Loading activity...</p>
                  ) : error ? (
                      <p>Unable to fetch activities.</p>
                  ) : data.recentAcSubmissionList && data.recentAcSubmissionList.length > 0 ? (
                      data.recentAcSubmissionList.slice(0, 8).map((sub, index) => (
                          <div className="activity-item" key={index}>
                              <div className="activity-info">
                                  <h4>{sub.title}</h4>
                                  <p>Language: {sub.lang}</p>
                              </div>
                              <div className="activity-status">
                                  <span className="status Accepted">
                                      Accepted
                                  </span>
                                  {/* Timestamp is unix epoch string */}
                                  <span className="activity-meta">{new Date(parseInt(sub.timestamp) * 1000).toLocaleDateString()}</span>
                              </div>
                          </div>
                      ))
                  ) : (
                      <p>No recent activity found.</p>
                  )}
                </div>
            </div>
           </Zoom>
           )}
        </div>
      </div>
    </section>
  );
};

export default Coding;
