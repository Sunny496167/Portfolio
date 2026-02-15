// Blog Detail Modal Component
import { useEffect } from "react";
import { X, Calendar, Clock, User, ArrowLeft } from "lucide-react";

const BlogDetail = ({ blog, isOpen, onClose }) => {
    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    if (!blog) return null;

    const renderContent = (item, index) => {
        switch (item.type) {
            case 'paragraph':
                return (
                    <p key={index} className="text-lg text-[#e0e0e0] leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                );

            case 'heading':
                const HeadingTag = `h${item.level}`;
                const headingClasses = {
                    2: 'text-3xl font-bold text-white mb-6 mt-12',
                    3: 'text-2xl font-bold text-white mb-4 mt-8'
                };
                return (
                    <HeadingTag key={index} className={headingClasses[item.level]}>
                        {item.text}
                    </HeadingTag>
                );

            case 'list':
                return (
                    <ul key={index} className="space-y-3 mb-6 ml-6">
                        {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-start gap-3 text-[#e0e0e0]">
                                <span className="inline-block w-2 h-2 rounded-full bg-[#ff6b35] mt-2 flex-shrink-0"></span>
                                <span dangerouslySetInnerHTML={{ __html: listItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>').replace(/`(.*?)`/g, '<code class="px-2 py-0.5 rounded bg-orange-500/10 text-[#ff8c42] font-mono text-sm">$1</code>') }} />
                            </li>
                        ))}
                    </ul>
                );

            case 'image':
                return (
                    <figure key={index} className="my-8 rounded-xl overflow-hidden">
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto rounded-xl"
                        />
                        {item.caption && (
                            <figcaption className="text-center text-sm text-[#a0a0a0] mt-3 italic">
                                {item.caption}
                            </figcaption>
                        )}
                    </figure>
                );

            case 'code':
                return (
                    <pre key={index} className="bg-black/60 border border-orange-500/20 rounded-xl p-6 overflow-x-auto mb-6">
                        <code className="text-sm text-[#e0e0e0] font-mono whitespace-pre">
                            {item.code}
                        </code>
                    </pre>
                );

            default:
                return null;
        }
    };

    return (
        <div
            className={`fixed inset-0 z-[100] transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative h-full overflow-y-auto">
                <div className="min-h-full py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Close Button - Fixed */}
                        <button
                            onClick={onClose}
                            className="fixed top-6 right-6 z-[110] p-3 rounded-full glass-card border-orange-glow hover:bg-orange-500/20 transition-all group"
                            aria-label="Close blog"
                        >
                            <X className="w-6 h-6 text-[#ff6b35] group-hover:rotate-90 transition-transform" />
                        </button>

                        {/* Back Button */}
                        <button
                            onClick={onClose}
                            className="inline-flex items-center gap-2 text-[#ff6b35] hover:text-[#ff8c42] mb-8 transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-semibold">Back to Blogs</span>
                        </button>

                        {/* Blog Content Card */}
                        <article className="glass-card rounded-3xl overflow-hidden">
                            {/* Hero Image */}
                            <div className="relative h-96 overflow-hidden">
                                <img
                                    src={blog.heroImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                                {/* Title Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#ff6b35] text-white text-sm font-semibold mb-4">
                                        {blog.category}
                                    </span>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        {blog.title}
                                    </h1>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap items-center gap-6 text-sm text-[#e0e0e0]">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{blog.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{blog.readTime} read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 sm:p-12">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-orange-500/20">
                                    {blog.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-lg bg-orange-500/10 border border-orange-500/20 text-sm text-[#ff8c42]"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Blog Content */}
                                <div className="prose prose-invert max-w-none">
                                    {blog.content.map((item, index) => renderContent(item, index))}
                                </div>

                                {/* Footer */}
                                <div className="mt-16 pt-8 border-t border-orange-500/20">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-[#a0a0a0] mb-2">Written by</p>
                                            <p className="text-lg font-semibold text-white">{blog.author}</p>
                                        </div>
                                        <button
                                            onClick={onClose}
                                            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff6b35] to-[#d94f1f] text-white font-semibold hover:from-[#ff8c42] hover:to-[#ff6b35] transition-all"
                                        >
                                            Close Article
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
