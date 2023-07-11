import React, { useEffect, useState } from 'react'
import { FiGrid } from 'react-icons/fi'
import { motion } from 'framer-motion'

const category = () => { const [category, setCategory] = useState([]); 
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/api/getCategory');
                const data = await response.json();
                if (response.ok) {
                    setCategory(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div>
            <div className='flex ml-4 mb-7'>
                <FiGrid className='text-3xl mb-[-40%] ml-6 ' />
                <button className='bg-green-500 rounded-lg py-1 px-4 ml-2'>
                    <p className='text-white font-bold text-xl'>CATEGORIES</p>
                </button>
            </div>

            <div className="grid gap-16 mx-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
                {category.map((wow) => (
                    <motion.div

                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-black  shadow-lg h-fit rounded-lg overflow-hidden"
                    >
                        <img
                            src={wow.categoryImage}
                            alt="Blog Post"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-4 text-white">{wow.name}</h2>


                        </div>
                    </motion.div>))}
             </div>


        </div>
    )

}

export default category