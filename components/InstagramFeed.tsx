import React, { useEffect, useState } from 'react';
import { ExternalLink, Heart, Loader } from 'lucide-react';
import { INSTAGRAM_TOKEN, INSTAGRAM_FEED } from '../constants';

interface InstaApiPost {
  id: string;
  media_url: string;
  permalink: string;
  caption: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  thumbnail_url?: string;
  username?: string;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstaApiPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // If no token is provided, skip fetching and use fallback logic in render
    if (!INSTAGRAM_TOKEN) {
        return;
    }

    const fetchInstagramPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,username&access_token=${INSTAGRAM_TOKEN}&limit=4`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch instagram posts');
        }

        const data = await response.json();
        if (data.data) {
          setPosts(data.data);
        } else {
            setError(true);
        }
      } catch (err) {
        console.error("Instagram Fetch Error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Use fallback data if no token or error
  const displayPosts = (INSTAGRAM_TOKEN && !error && posts.length > 0) ? posts : INSTAGRAM_FEED.map(post => ({
      id: post.id,
      media_url: post.image,
      permalink: 'https://www.instagram.com/prabhaav.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      caption: post.caption,
      media_type: 'IMAGE' as const
  }));

  if (loading) {
      return (
          <div className="flex justify-center items-center py-12">
              <Loader className="w-6 h-6 animate-spin text-gold" />
          </div>
      );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
      {displayPosts.map((post) => (
        <a 
            key={post.id} 
            href={post.permalink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg bg-brand-red-light block cursor-pointer border border-pale/10"
        >
          {post.media_type === 'VIDEO' ? (
             <img 
                src={post.thumbnail_url || post.media_url} 
                alt={post.caption || 'Instagram Video'} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
             />
          ) : (
             <img 
                src={post.media_url} 
                alt={post.caption || 'Instagram Post'} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
             />
          )}
          
          <div className="absolute inset-0 bg-brand-red/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <ExternalLink className="w-6 h-6 text-pale mb-2" />
            <p className="text-pale text-xs font-medium line-clamp-2">
                {post.caption ? post.caption : 'View on Instagram'}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default InstagramFeed;