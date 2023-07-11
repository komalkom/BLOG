import React, { useEffect, useState } from 'react'
import { FiGrid, FiUser } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { AiOutlineCalendar } from 'react-icons/ai'
const featuredpost = () => { const [blogPosts, setBlogPosts] = useState([]);
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getPost');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

  return (
    <div>
            <div>
            <div className='flex ml-4 mb-7 mt-5'>
             <FiGrid className='text-3xl mb-[-40%] ml-6 ' />
             <button className='bg-green-500 rounded-lg py-1 px-4 ml-2 '>
                    <p className='text-white font-bold text-xl'>FEATURED POSTS</p>
                </button>
             </div>{/* <button>Posts</button> */}
                
                <div className="grid gap-16 mx-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

                    {blogPosts.map((post) => (
                        <motion.div

                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black  shadow-lg h-fit rounded-lg overflow-hidden"
                        >
                            <img
                                src={post.Image}
                                alt="Blog Post"
                                className="w-full h-40 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold mb-4 text-white">{post.title}</h2>
                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <AiOutlineCalendar className="mr-2" />
                                    {post.date}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <FiUser className="mr-2" />
                                    {post.author}
                                </div>
                                <p className="text-gray-700 mt-4"></p>
                                <button className="bg-[#FF6701] text-white px-4 py-2 rounded-md mt-4">
                                    Read More
                                </button>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
    </div>
  )
}

export default featuredpost