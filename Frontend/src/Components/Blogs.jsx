// Blog Section Component
import { useState } from "react";
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import blogsData from "../data/blogs.json";
import BlogDetail from "./BlogDetail";

const Blogs = ({ darkMode }) => {
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
        setIsDetailOpen(true);
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    };

    const handleCloseBlog = () => {
        setIsDetailOpen(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => setSelectedBlog(null), 300);
    };

    return (
        <>
            <section
                id="blogs"
                className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-black via-[#1a0f0a] to-black"
            >
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16 space-y-4">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#ff6b35] rounded-full"></div>
                            <BookOpen className="w-8 h-8 text-[#ff6b35]" />
                            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#ff6b35] rounded-full"></div>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <span className="text-orange-gradient">Tech</span>{" "}
                            <span className="text-white">Insights</span>
                        </h2>
                        <p className="text-lg text-[#e0e0e0] max-w-2xl mx-auto">
                            Deep dives into backend engineering, performance optimization, and modern web development
                        </p>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogsData.blogs.map((blog, index) => (
                            <article
                                key={blog.id}
                                className="glass-card rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,107,53,0.3)]"
                                onClick={() => handleBlogClick(blog)}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Hero Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={blog.heroImage}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-[#ff6b35] text-white text-xs font-semibold">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 space-y-4">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-[#a0a0a0]">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-[#ff6b35] transition-colors">
                                        {blog.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-[#e0e0e0] text-sm line-clamp-3">
                                        {blog.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.slice(0, 3).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs text-[#ff8c42]"
                                            >
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <div className="pt-4 flex items-center gap-2 text-[#ff6b35] font-semibold group-hover:gap-3 transition-all">
                                        <span>Read Article</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Detail Modal */}
            {selectedBlog && (
                <BlogDetail
                    blog={selectedBlog}
                    isOpen={isDetailOpen}
                    onClose={handleCloseBlog}
                />
            )}
        </>
    );
};

export default Blogs;
