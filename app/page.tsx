'use client';

import { useChat } from 'ai/react';
import type { Message } from 'ai/react';

export default function Chat() {
  const initialMessages = [
    {
      role: 'user', content: `write a blog from point of view of Spark Capital about a new company. the outline should follow the same as this example blog:
    Service businesses are the lifeblood of the American economy. Every year, millions of Americans take the leap to start their own business. An HVAC technician spins out on their own. A marketer quits their 9-to-5 to start consulting while traveling the world. A doula takes the jump to start their own independent practice. A teenager hustles nights and weekends detailing cars to save up for college. No matter what the service, these entrepreneurs take pride in serving their customers and are empowered by being their own boss.

    Yet, when you delve into the dozens of steps required to start a business, the task seems insurmountable. Setting up a bank account, building a website, acquiring your first customer, collecting payments, maintaining compliance, paying taxes, and the list goes on. You’re expected to quickly become an expert in legal, finance, sales, marketing, and more — when all you want to do is turn your skills into a business. Historically, franchises solved this problem by creating an established brand and systems for entrepreneurs to launch and operate their own business. The downside of this approach: the average franchise costs $100K in start-up costs and takes 15% of gross revenues — all for outdated software and simple processes.
    
    Why isn’t it as easy to start a business as it is to send money to your friends?
    
    Enter Durable. I’m thrilled to announce our Series A investment in Durable, an AI-powered all-in-one platform for business owners that makes it radically easier to start and grow a service business.
    
    The first time I used Durable’s product, I was struck by the power of its simplicity. Their AI-powered website builder was a 100 times simpler, more valuable, and more convincing in the first 30 seconds than existing solutions in the market. It was a gut punch. Then I tried Durable’s brand builder. Another gut punch. Then I set up payments. Another gut punch. The vision became clear: Durable is creating the “easy button” for business owners. By leveraging AI, they’re creating a dead simple product that eliminates the complexities of starting and running a business. By removing this friction, Durable can unlock consumption and tap into latent demand in the market today — ultimately propelling these business owners forward.
    
    When I first met founder James Clift, I immediately gravitated toward his personal story of entrepreneurship. In high school, he ran a web development agency building websites for people. In college, he founded a window cleaning company, earning $38K in his first 4 months. James embodied the entrepreneurial spirit of his customers. He was his customer. His vision for a world in which every individual can start a business seamlessly, combined with his product chops and competitive spirit, was a clear recipe for success.
    
    At Spark Capital, we’re excited about the potential of AI to transform product experiences. This could be foundational models, such as Anthropic and Adept, that enable new experiences or the end experiences themselves, such as Descript and Grammarly. We believe Durable’s product will power a new age of entrepreneurship, fueled by AI.
    
    We couldn’t be more excited to partner with James and the entire Durable team (they’re hiring!), and an awesome group of co-investors, like Altman Capital, Lorimer Ventures, South Park Commons, Torch Capital, and more. Welcome, Durable!
    
    ----

    Use facts and details about the new company below:

     ` }
  ] as Message[];

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat-finetune',
    initialMessages,
  });
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map(m => {
        if (m.content.includes("write a blog from point of view of Spark Capital about a new company.")) {
          return <div key={m.id}></div>
        }
        if (m.role === 'user') {
          return <div key={m.id}></div>
        }
        return (
          <div key={m.id} className="whitespace-pre-wrap">
            {/* {m.role === 'user' ? 'User: ' : 'AI: '} */}
            {m.content}
          </div>
        )
      })}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Enter company details here"
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
