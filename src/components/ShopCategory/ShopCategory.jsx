import React, { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShopCategoryCard from './ShopCategoryCard';

const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const initialDisplayCount = 8;

    useEffect(() => {
        fetch('https://toy-marketplace-server-seven-eta.vercel.app/allToys')
            .then(res => res.json())
            .then(result => {
                setToys(result);
            });
    }, []);

    const handleSeeMore = () => {
        setShowAll(true);
    };

    const getTabName = (index) => {
        switch (index) {
            case 1:
                return 'Classic Character Dolls';
            case 2:
                return 'Pixar Dolls';
            case 3:
                return 'Princess Dolls';
            default:
                return 'All';
        }
    };

    const filteredToys = toys.filter(toy => {
        if (selectedTab === 0) {
            return true;
        } else {
            return toy.sub_category === getTabName(selectedTab);
        }
    });

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    return (
        <div>
            <div className='mt-32 mb-12'>
                <h1 className='text-center text-4xl font-bold text-slate-600 uppercase mb-3'>
                    We Love Trends
                </h1>
                <p className='text-secondary text-center font-bold'>Featured Products</p>
            </div>
            <Tabs
                selectedIndex={selectedTab}
                onSelect={handleTabSelect}
                className=''
            >
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Disney Classic</Tab>
                    <Tab>Pixar</Tab>
                    <Tab>Disney Princess</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#2ebfef26] p-8'>
                        {filteredToys
                            .slice(0, showAll ? filteredToys.length : initialDisplayCount)
                            .map(toy => (
                                <ShopCategoryCard key={toy._id} toy={toy} />
                            ))}
                    </div>
                    {!showAll && filteredToys.length > initialDisplayCount && (
                        <div className='text-center mt-4'>
                            <button
                                className='bg-[#ff6799] hover:bg-[#ff679ac0] duration-300 text-white font-semibold py-2 px-4 rounded active:scale-95'
                                onClick={handleSeeMore}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#2ebfef26] p-8'>
                        {filteredToys
                            .filter(toy => toy.sub_category === 'Classic Character Dolls')
                            .slice(0, showAll ? filteredToys.length : initialDisplayCount)
                            .map(toy => (
                                <ShopCategoryCard key={toy._id} toy={toy} />
                            ))}
                    </div>
                    {!showAll && filteredToys.filter(toy => toy.sub_category === 'Classic Character Dolls').length > initialDisplayCount && (
                        <div className='text-center mt-4'>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                                onClick={handleSeeMore}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#2ebfef26] p-8'>
                        {filteredToys
                            .filter(toy => toy.sub_category === 'Pixar Dolls')
                            .slice(0, showAll ? filteredToys.length : initialDisplayCount)
                            .map(toy => (
                                <ShopCategoryCard key={toy._id} toy={toy} />
                            ))}
                    </div>
                    {!showAll && filteredToys.filter(toy => toy.sub_category === 'Pixar Dolls').length > initialDisplayCount && (
                        <div className='text-center mt-4'>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                                onClick={handleSeeMore}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 bg-[#2ebfef26] p-8'>
                        {filteredToys
                            .filter(toy => toy.sub_category === 'Princess Dolls')
                            .slice(0, showAll ? filteredToys.length : initialDisplayCount)
                            .map(toy => (
                                <ShopCategoryCard key={toy._id} toy={toy} />
                            ))}
                    </div>
                    {!showAll && filteredToys.filter(toy => toy.sub_category === 'Princess Dolls').length > initialDisplayCount && (
                        <div className='text-center mt-4'>
                            <button
                                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
                                onClick={handleSeeMore}
                            >
                                See More
                            </button>
                        </div>
                    )}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;
