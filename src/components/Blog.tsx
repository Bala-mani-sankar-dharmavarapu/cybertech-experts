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
    return <IconComponent className="h-16 w-16" />;
  };

  return (
    <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
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
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {getImageIcon(post.image)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
