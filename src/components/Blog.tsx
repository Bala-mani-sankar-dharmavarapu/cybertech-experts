import React from "react";
import { ArrowRight, User, Server, Monitor } from "lucide-react";
import { BlogPost } from "../types";

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Top 10 Phishing Attacks of 2025 & How to Stop Them",
      category: "Security",
      image: "User",
    },
    {
      id: "2",
      title: "Why Every Business Needs Malware Simulation",
      category: "Training",
      image: "Server",
    },
    {
      id: "3",
      title:
        "Protecting Your Brand from Cybercriminals: Takedown Services Explained",
      category: "Brand Protection",
      image: "Monitor",
    },
  ];

  const getImageIcon = (imageName: string) => {
    const icons: { [key: string]: React.ComponentType<any> } = {
      User,
      Server,
      Monitor,
    };
    const IconComponent = icons[imageName] || User;
    return <IconComponent className="h-12 w-12" />;
  };

  return (
    <section
      id="blog"
      className="py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-gray-800/30"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Center Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent animate-slide-in-left hover:animate-text-glow transition-all duration-500">
              Resources &
            </span>
            <br />
            <span className="text-purple-400 drop-shadow-lg animate-fade-in-up hover:animate-text-glow transition-all duration-500">
              Insights
            </span>
          </h2>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  {getImageIcon(post.image)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-base group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                  <span className="text-xs font-medium">Read More</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
