import React from 'react'
import Card from '../components/Card'

export default function Reflection(){
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-100">Reflection — Final Tour Summary</h1>
        <p className="text-sm text-slate-400 mt-1">An article-style reflection with key takeaways, insights and future directions.</p>
      </div>

      <Card className="p-8">
        <h2 className="text-xl text-slate-100 font-semibold mb-3">Key Learnings & Insights</h2>
        <p className="text-slate-300 text-justify mb-4">The Educational Tour provided hands-on exposure to industry practices such as cybersecurity fundamentals, networking infrastructure, edtech innovations and forward-looking applications like VR for tourism and emergency response systems. These visits reinforced the importance of combining technical skills with communication and problem-solving, and they revealed real-world contexts where certifications, DevOps practices and effective documentation unlock impact.</p>

        <h3 className="text-lg text-slate-100 font-medium mt-4">Skills Gained</h3>
        <ul className="list-disc ml-6 text-slate-300 mt-2">
          <li>Understanding of enterprise-level cybersecurity and compliance considerations</li>
          <li>Practical networking and infra workflow exposure (CCNA/CCNP lab concepts)</li>
          <li>Awareness of AI/EdTech pipelines and continuous feedback tooling</li>
          <li>Applied UX and content documentation for tourism and VR solutions</li>
          <li>Perspective on emergency tech — data flows for disaster response systems</li>
        </ul>

        <h3 className="text-lg text-slate-100 font-medium mt-4">Next Steps</h3>
        <p className="text-slate-300">Document and publish a few targeted case studies from the tour, complete certification paths for deeper credibility, and keep building portfolio artifacts such as small demos or micro-projects inspired by the visits.</p>
      </Card>
    </div>
  )
}
