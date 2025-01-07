type Section = {
  title: string;
  content?: string;
  list?: string[];
  subsections?: {
    title: string;
    content: string;
    list?: string[];
  }[];
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: {
    intro: string;
    sections: Section[];
    takeaways: string[];
  };
};

export const blogPosts = {
  posts: [
    {
      "slug": "how-to-maintain-mindful-eating",
      "title": "How to Maintain Mindful Eating in a Fast-Paced World",
      "excerpt": "Learn how to balance healthy eating with a demanding schedule, incorporating practical tips for mindful meals even during busy workdays...",
      "content": {
        "intro": "In today's fast-paced world, eating has often become a mindless activity—something we do while working, scrolling through our phones, or rushing between meetings. Mindful eating is about bringing our full attention back to the experience of eating and nourishing our bodies.",
        "sections": [
          {
            "title": "The Challenges of Modern Life",
            "content": "Many of us face common obstacles to mindful eating:",
            "list": [
              "Packed schedules with back-to-back meetings",
              "Desk lunches and working through meals",
              "Constant digital distractions",
              "Stress and emotional eating"
            ]
          },
          {
            "title": "Practical Strategies for Mindful Eating",
            "subsections": [
              {
                "title": "1. Create a Dedicated Eating Space",
                "content": "Designate a specific area for meals, away from your workspace. This physical separation helps create a mental boundary between work and eating time."
              },
              {
                "title": "2. The 5-Minute Rule",
                "content": "Before each meal, take just 5 minutes to transition from work mode to eating mode.",
                "list": [
                  "Take a few deep breaths",
                  "Express gratitude for your meal",
                  "Observe the colors, smells, and presentation of your food"
                ]
              }
            ]
          }
        ],
        "takeaways": [
          "Start small with achievable goals",
          "Create dedicated eating spaces and times",
          "Use simple mindfulness techniques",
          "Be patient with yourself as you develop new habits"
        ]
      }
    },
    {
      "slug": "habits-of-successful-health-conscious-professionals",
      "title": "Habits of Highly Successful, Health-Conscious Professionals",
      "excerpt": "Discover daily routines that fuel productivity and well-being, as practiced by leading professionals in New York City and beyond...",
      "content": {
        "intro": "Success in today's demanding professional landscape requires more than just career expertise—it demands a holistic approach to health and wellness. Learn how top professionals maintain peak performance while prioritizing their well-being.",
        "sections": [
          {
            "title": "Morning Rituals for Success",
            "content": "The most successful professionals often share common morning practices that set the tone for their entire day:",
            "list": [
              "Early rising (typically between 5:30-6:30 AM)",
              "Mindful movement or exercise before work",
              "Nutritious breakfast with protein and healthy fats",
              "Short meditation or breathing exercises"
            ]
          },
          {
            "title": "Workplace Wellness Strategies",
            "subsections": [
              {
                "title": "1. Strategic Breaks",
                "content": "Regular breaks maintain focus and prevent burnout.",
                "list": [
                  "90-minute focused work blocks",
                  "5-minute movement breaks every hour",
                  "Outdoor walks for important calls",
                  "Standing or walking meetings"
                ]
              },
              {
                "title": "2. Mindful Nutrition",
                "content": "Successful professionals view food as fuel for performance.",
                "list": [
                  "Meal prep on weekends",
                  "Healthy snacks readily available",
                  "Hydration tracking throughout the day",
                  "Strategic caffeine consumption"
                ]
              }
            ]
          },
          {
            "title": "Evening Recovery Routines",
            "content": "Quality recovery is as important as productive work hours.",
            "list": [
              "Digital sunset 1-2 hours before bed",
              "Evening relaxation rituals",
              "Consistent sleep schedule",
              "Next-day preparation"
            ]
          }
        ],
        "takeaways": [
          "Consistency in daily routines creates sustainable success",
          "Prevention through self-care is better than recovery from burnout",
          "Small, strategic breaks enhance rather than hinder productivity",
          "Health-conscious habits compound over time for greater achievement"
        ]
      }
    },
    {
      "slug": "the-power-of-virtual-coaching",
      "title": "The Power of Virtual Coaching: Taking Control of Your Health Anywhere",
      "excerpt": "From flexible scheduling to personalized accountability, see how online coaching can transform your life, no matter where you are...",
      "content": {
        "intro": "Virtual coaching has revolutionized the way we approach personal wellness, making expert guidance and support accessible to everyone, regardless of location or schedule. Discover how this modern approach to health coaching can fit seamlessly into your lifestyle.",
        "sections": [
          {
            "title": "The Evolution of Health Coaching",
            "content": "Virtual coaching has transformed traditional wellness support:",
            "list": [
              "24/7 access to resources and guidance",
              "No geographical limitations",
              "Flexible scheduling options",
              "Enhanced privacy and comfort"
            ]
          },
          {
            "title": "Benefits of Virtual Coaching",
            "subsections": [
              {
                "title": "1. Personalized Attention",
                "content": "Virtual coaching provides tailored support that adapts to your unique needs.",
                "list": [
                  "Custom program design",
                  "Regular progress tracking",
                  "Adjustable strategies based on feedback",
                  "Direct communication channels"
                ]
              },
              {
                "title": "2. Enhanced Accountability",
                "content": "Digital tools and regular check-ins keep you motivated and on track.",
                "list": [
                  "Regular video check-ins",
                  "Progress tracking apps",
                  "Goal-setting frameworks",
                  "Community support options"
                ]
              }
            ]
          },
          {
            "title": "Making the Most of Virtual Coaching",
            "content": "Success with virtual coaching comes from active engagement:",
            "list": [
              "Setting clear, measurable goals",
              "Maintaining open communication",
              "Utilizing provided resources fully",
              "Celebrating small victories"
            ]
          }
        ],
        "takeaways": [
          "Virtual coaching provides flexibility without sacrificing quality",
          "Technology enhances rather than replaces personal connection",
          "Success comes from consistent engagement and communication",
          "Online resources provide ongoing support between sessions"
        ]
      }
    }
  ]
} satisfies { posts: BlogPost[] };

export function getAllPosts() {
  return blogPosts.posts;
}

export function getPostBySlug(slug: string) {
  return blogPosts.posts.find(post => post.slug === slug);
} 