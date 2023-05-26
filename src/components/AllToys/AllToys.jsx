import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllToysTable from '../Tables/AllToysTable';
import { Oval } from 'react-loader-spinner';
import { ImSearch } from "react-icons/im";
import PageTitle from '../PageTitle/PageTitle';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [limit, setLimit] = useState(20);

    useEffect(() => {
        fetch("https://toy-marketplace-server-seven-eta.vercel.app/alltoys")
            .then(res => res.json())
            .then(result => {
                setToys(result);
                setLoading(false)
            })
    }, [])
    // search Handler
    const searchHandler = event => {
        const query = event.target.value;
        setSearchQuery(query);
    }

    const searchToys = toys.filter(toy =>
        toy.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const visibleToys = searchToys.slice(0, limit);
    return (
        <div>
            <PageTitle title="All Toys" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-6 '>
                <Link to='/' className='text-xl text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary'>All Toys</span>
            </div>

            <h1 className='text-4xl text-slate-600 text-center font-bold my-10 uppercase'>all Toys</h1>
            <div className="max-w-xs md:max-w-md mx-auto mb-6 relative">
                <input
                    type="text"
                    placeholder="Search by Toy Name"
                    className="block w-full p-2 pl-10 min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-slate-600 shadow-sm ring-1 ring-inset  focus:ring-1 focus:ring-inset focus:ring-[#ff6799] sm:text-sm sm:leading-6"
                    value={searchQuery}
                    onChange={searchHandler}
                />
                <span className="absolute top-1/2 left-2 transform -translate-y-1/2">
                    <ImSearch className='text-slate-600 text-xl  ' />
                </span>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                    <thead className='bg-[#8edbf448]'>
                        <tr>
                            <th className="py-3 px-4 bg-gray-100 border-b">Seller Name</th>
                            <th className="py-3 px-4 bg-gray-100 border-b">Toy Name</th>
                            <th className="py-3 px-4 bg-gray-100 border-b">Sub-category</th>
                            <th className="py-3 px-4 bg-gray-100 border-b">Price</th>
                            <th className="py-3 px-4 bg-gray-100 border-b">Available Quantity</th>
                            <th className="py-3 px-4 bg-gray-100 border-b"></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            loading ? <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}>
                                <Oval
                                    height={60}
                                    width={60}
                                    color="#2ebeef"
                                    wrapperStyle={{}}
                                    wrapperclassName=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#ff6799"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />
                            </div>
                                : (visibleToys.map(toy => <AllToysTable
                                    key={toy._id}
                                    toy={toy}

                                ></AllToysTable>))
                        }
                    </tbody>
                </table>
            </div>
            {searchToys.length > limit && (
                <div className="text-center mt-4">
                    <button
                        className="px-4 py-2 text-white bg-primary rounded-md"
                        onClick={() => setLimit(limit + 20)}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default AllToys;