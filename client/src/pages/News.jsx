import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Blog from "../components/Blog";

const News = () => {
  const blogs = [
    {
      id: 1,
      title: "Unlocking the Mind: A Journey Through the World of Pornography",
      content:
        "In a world where accessibility to explicit content is just a click away, many individuals silently battle the grip of pornography. For some, it's a harmless distraction; for others, it's a dark spiral into addiction, shame, and secrecy. Journey to Porn by Cornelius Bankole takes you on a raw, unfiltered exploration of this sensitive subject, unraveling the layers of psychology, societal influence, and personal experiences surrounding pornography.This book isn’t just about the problem—it’s about understanding why. Why is pornography so addictive? What draws people to it? What role do upbringing, relationships, and mental health play in this journey? Cornelius Bankole doesn’t shy away from the tough questions or the gritty truths. Instead, he provides a compassionate yet no-nonsense narrative that sheds light on an issue many are afraid to address The Gateway: Explore the first encounters with pornography—how curiosity turns into habit and why so many fail to notice the early signs of addiction.The Spiral: Discover the hidden costs—emotionally, relationally, and mentally—of becoming trapped in a cycle of shame and secrecy. Breaking Free: Read real-life accounts and transformative strategies for reclaiming control, rebuilding confidence, and restoring a sense of self-worth. One particularly gripping excerpt reads: There’s no such thing as ‘harmless curiosity’ when it comes to pornography. What begins as a spark of intrigue can ignite a wildfire of dependency, consuming parts of you that you didn’t even know were vulnerable. Why You Need This Book Journey to Porn is more than a book; it’s a lifeline for anyone struggling with porn addiction or seeking to support someone on this journey. Whether you’re looking for understanding, healing, or hope, this book offers practical insights, emotional clarity, and actionable steps toward freedom.",
      author: "Alice Smith",
      publishedAt: "2024-12-01T08:00:00Z",
      tags: ["JavaScript", "Web Development", "Frameworks"],
    },
    {
      id: 1,
      title: "Embracing New Beginnings",
      content: `As the new year approaches, it’s an opportunity to start fresh, set intentions, and create a
mindset that supports growth and happiness. Mental preparation is key to building the resilience
and focus needed to navigate the year ahead with confidence.
Here are 10 ways to mentally prepare yourself for a fulfilling new year:
1. Reflect on the Past Year
Take time to review the highs, lows, and lessons of the previous year. Understanding where
you’ve been provides clarity and direction for where you want to go.
2. Set Intentional Goals
Choose goals that align with your values and priorities. Break them into achievable steps to
avoid overwhelm and maintain motivation throughout the year.
3. Declutter Your Mind
Let go of mental baggage by forgiving yourself and others, releasing regrets, and focusing on
what truly matters. A clear mind creates space for new possibilities.
4. Create a Vision for the Year
Visualize how you want the year to unfold. Whether through journaling, vision boards, or
affirmations, imagining your ideal year helps set a positive tone.
5. Build a Routine That Supports Your Mental Health
Establish habits that promote balance, such as regular exercise, mindfulness practices, and
adequate sleep. Consistency in self-care routines enhances emotional resilience.
6. Surround Yourself with Positivity
Evaluate the people, environments, and influences in your life. Prioritize relationships and
spaces that uplift, inspire, and motivate you.
7. Learn from Past Challenges
Identify lessons from last year’s obstacles and use them as tools for growth. Turning setbacks
into stepping stones builds confidence and prepares you for future challenges.
8. Practice Gratitude Daily
Start the year with an attitude of gratitude. Regularly acknowledging the good in your life fosters
a positive mindset and attracts more joy.
9. Set Boundaries for Peace of Mind
Protect your mental health by setting clear boundaries in your relationships, work, and
commitments. Learning to say no can free up energy for what truly matters.
10. Embrace Flexibility and Openness
Life is unpredictable, and staying open to change allows you to adapt and thrive. Approach the
new year with curiosity and a willingness to explore new opportunities.`,
      author: "Alice Smith",
      publishedAt: "2024-12-01T08:00:00Z",
      tags: ["JavaScript", "Web Development", "Frameworks"],
    },
    {
      id: 1,
      title: "Finding Balance",
      content: `The holiday season can be both joyful and exhausting. Between shopping, cooking, hosting,
traveling, and meeting year-end deadlines, it’s easy to lose sight of your own well-being. Holiday
burnout can sneak up on you, leaving you feeling drained instead of delighted.
1. Plan Ahead
Avoid last-minute scrambling by creating a schedule for holiday tasks. Break larger goals, like
shopping or meal preparation, into smaller steps and tackle them over time.
2. Stick to a Budget
Overspending can lead to financial stress, which contributes to burnout. Set a realistic budget
for gifts, events, and other holiday expenses, and stay within your limits.
3. Simplify Your Celebrations
Not every holiday tradition needs to be done perfectly—or even at all. Choose the activities and
traditions that bring you the most joy and let go of anything that feels more like an obligation.
4. Say No to Overcommitting
It’s tempting to say “yes” to every party, gathering, or request, but this can leave you feeling
stretched thin. Prioritize what matters most and politely decline anything that doesn’t align with
your priorities.
5. Carve Out Quiet Time
Amid the hustle and bustle, schedule moments of stillness. Spend 10–15 minutes each day
meditating, journaling, or simply sitting in silence to recharge your mental and emotional
batteries.
6. Delegate Tasks
You don’t have to handle everything yourself. Ask family members or friends to help with
shopping, decorating, cooking, or planning so you can share the workload.
7. Be Mindful of Your Energy Levels
Pay attention to how you’re feeling throughout the season. If you notice signs of exhaustion or
stress, take a step back and prioritize rest, even if that means skipping an event or two.
8. Limit Screen Time
Constant emails, notifications, and social media updates can add to the overwhelm. Set
boundaries for screen time, and focus on being present with loved ones instead of glued to your
devices.
9. Stay Active
Physical activity is a powerful stress reliever. Whether it’s taking a walk, attending a yoga class,
or dancing to holiday tunes, find ways to keep moving and boost your energy.
10. Celebrate Progress, Not Perfection
Remind yourself that the holidays don’t have to be flawless to be meaningful. Appreciate the
small wins and moments of connection, even if things don’t go exactly as planned.`,
      author: "Alice Smith",
      publishedAt: "2024-12-01T08:00:00Z",
      tags: ["JavaScript", "Web Development", "Frameworks"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="bg-[#000] px-10 py-4 italic h-screen"
    >
      <div className="flex flex-col gap-5">
        <div className="text-[#ffd01d] font-black md:text-[48px] text-[48px]">
          BLOGS
        </div>
        <h1 className="text-[1.8rem] font-black text-[#dad7d4]">
          WHAT WE'VE BEEN UP
        </h1>
        <div className="flex flex-col gap-4 w-full bg-[#000] ">
          {blogs.map((blog) => (
            <Blog blog={blog} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default News;
