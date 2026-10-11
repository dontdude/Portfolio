import goxecImg from "../assets/goxec_architecture.png";
import runbookDemo from "../assets/runbook_demo.gif";


const FeaturedProjectsData = [
  {
    id: 1,
    title: "Goxec",
    category: "Distributed System",
    img: goxecImg,
    description: "A distributed remote code execution engine in Go with a Token Bucket gateway, Redis Streams consumer groups, PEL crash recovery, and DLQ for poison payloads — achieving <500ms cold-start latency (down from ~3s) via Docker-out-of-Docker (DooD), with a live WebSocket execution UI.",
    techStack: ["Go (Golang)", "Docker (DooD)", "Redis Streams", "Token Bucket", "WebSockets", "React"],
    repoUrl: "https://github.com/dontdude/goxec",
    liveUrl: "", // Add if deployed
    features: [
      "Token Bucket gateway + Redis Streams consumer groups with PEL crash recovery and DLQ; <500ms cold starts.",
      "Live container execution monitoring with WebSockets and Page Visibility API lifecycles (sub-50ms updates, ~30% less sync overhead).",
    ]
  },
  {
    id: 2,
    title: "Runbook-assistant",
    category: "AI Document Assistant (RAG + MCP)",
    img: runbookDemo,
    description: "A production-grade RAG document assistant rebuilt from open source: hybrid search (keyword + vector fused by RRF) with cross-encoder reranking (recall@1 0.64 to 0.79 on an 89-case golden set), SSE citation-backed answers with token/cost tracking, an MCP server for Claude Desktop, and a minimal React chat/upload/search UI.",
    techStack: ["Java", "Spring Boot", "PostgreSQL (pgvector)", "Hybrid Search (RRF)", "MCP", "React", "SSE"],
    repoUrl: "https://github.com/dontdude/Runbook-assistant",
    liveUrl: "", // Add if deployed
    features: [
      "RAG service in Java: hybrid search + cross-encoder rerank, recall@1 0.64 to 0.79; citation-backed SSE answers.",
      "MCP server (Claude Desktop-compatible) with JWT per-user scoping and rate limits; retrieval metrics fail CI on regression.",
      "React web UI: JWT login, SSE streaming with citation chips, live rerank A/B toggle.",
    ]
  }
];

export default FeaturedProjectsData;
