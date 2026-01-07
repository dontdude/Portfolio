import goxecImg from "../assets/goxec_architecture.png";


const FeaturedProjectsData = [
  {
    id: 1,
    title: "Goxec",
    category: "Distributed System",
    img: goxecImg,
    description: "A high-performance Distributed Remote Code Execution Engine built with Go. It utilizes a custom Docker-out-of-Docker (DooD) architecture to achieve sub-500ms cold starts, outperforming traditional nested virtualization. Designed for fault tolerance and scale.",
    techStack: ["Go (Golang)", "Docker", "Redis Streams", "WebSockets", "React"],
    repoUrl: "https://github.com/dontdude/goxec",
    liveUrl: "", // Add if deployed
    features: [
      "Architected a fault-tolerant Distributed System achieving <500ms cold-start latency.",
      "Guaranteed Zero Job Loss using Redis Streams Consumer Groups & PEL for crash recovery.",
      "96% artifact size reduction (800MB -> 30MB) via Multi-Stage Alpine builds.",
    ]
  }
];

export default FeaturedProjectsData;
