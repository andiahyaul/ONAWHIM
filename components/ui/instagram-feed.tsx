"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  postUrl: string;
  timestamp: string;
}

interface InstagramFeedProps {
  title?: string;
  subtitle?: string;
  instagramHandle?: string;
  instagramUrl?: string;
}

export function InstagramFeed({
  title = "Follow Our Journey",
  subtitle = "Stay connected with ONAWHIM on Instagram",
  instagramHandle = "@onawhim",
  instagramUrl = "https://instagram.com/onawhim"
}: InstagramFeedProps) {
  // Mock Instagram posts - in a real implementation, you'd fetch from Instagram API
  // https://www.instagram.com/onawhim._/p/DJbz3Y9TPnl/
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      imageUrl: "https://media.discordapp.net/attachments/1387043965714300974/1389927958969450526/Screenshot_2025-07-02_at_18.15.15.png?ex=686666c9&is=68651549&hm=81749d8a531f10ee242f7ab35a68380efa10908fdc710f1f4e74e4e95493d4e7&=&format=webp&quality=lossless&width=1192&height=1492",
      caption: "exploration 101: very demure very cuteesssssy tumbler strap🌷🎀",
      likes: 247,
      comments: 18,
      postUrl: `${instagramUrl}/p/DJbz3Y9TPnl`,
      timestamp: "7w"
    },
    {
      id: "2", 
      imageUrl: "https://media.discordapp.net/attachments/1387043965714300974/1389927991752261715/Screenshot_2025-07-02_at_18.15.05.png?ex=686666d0&is=68651550&hm=2d4c19ddae684c57878a15f47b1ee1d86a76f640927ba77f3cd8d624c2e2c11c&=&format=webp&quality=lossless&width=1192&height=1492",
      caption: "Behind the scenes of our latest photoshoot 📸",
      likes: 189,
      comments: 12,
      postUrl: `${instagramUrl}/p/DJiR6FDzpN3`,
      timestamp: "5h"
    },
    {
      id: "3",
      imageUrl: "https://media.discordapp.net/attachments/1387043965714300974/1389928024383688715/Screenshot_2025-07-02_at_18.14.57.png?ex=686666d8&is=68651558&hm=c6fe73ccbc083674f06ff7b7be96d164f6c0601d4689bdeecce0e3354d46dc6d&=&format=webp&quality=lossless&width=1188&height=1492",
      caption: "Minimalist elegance meets bold statements 💫",
      likes: 312,
      comments: 24,
      postUrl: `${instagramUrl}/p/DJiR9fXT_jN`,
      timestamp: "1d"
    },
    {
      id: "4",
      imageUrl: "https://media.discordapp.net/attachments/1387043965714300974/1389928049365221496/Screenshot_2025-07-02_at_18.14.48.png?ex=686666de&is=6865155e&hm=bd6e473b5b40ae57880537b24bc88f622c1c476a7be2aa9bb9bdcca0dc8cab8a&=&format=webp&quality=lossless&width=1507&height=1492",
      caption: "Every piece tells a story. What's yours? 🌟",
      likes: 156,
      comments: 9,
      postUrl: `${instagramUrl}/p/DLCfKVLxaM5`,
      timestamp: "2d"
    }
  ];

  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl  md:text-5xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg font-inter text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-neutral-900 dark:text-neutral-100 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium"
          >
            <span>{instagramHandle}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mockPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
              onClick={() => window.open(post.postUrl, '_blank')}
            >
              <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <div className="text-center text-white space-y-3">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <p className="text-xs opacity-75">{post.timestamp} ago</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Caption */}
              <p className="mt-3 text-sm text-neutral-600 font-inter dark:text-neutral-400 line-clamp-2">
                {post.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Follow {instagramHandle}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}