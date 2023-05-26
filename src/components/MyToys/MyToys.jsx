import React, { useContext, useEffect, useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import MyToysTable from '../Tables/MyToysTable';
import { AuthContext } from '../../Provider/AuthProvider';
import { Oval } from 'react-loader-spinner'
import { Link } from 'react-router-dom';


const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false)
  const [sortOrder, setSortOrder] = useState('ascending');

  useEffect(() => {
    fetch(`https://toy-marketplace-server-seven-eta.vercel.app/mytoys/${user?.email}`)
      .then(res => res.json())
      .then(result => {
        const sortedToys = result.sort((a, b) => {
          if (sortOrder === 'ascending') {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
        setMyToys(sortedToys)
        setLoading(false)
      })
  }, [user, update, sortOrder])

  return (
    <div>
      <PageTitle title="My toys" />
      <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-6 '>
        <Link to='/' className='text-xl text-secondary font-semibold '>Home / </Link>
        <span className='text-xl text-primary'>My Toys</span>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            {/* Sort buttons */}
            <div className='mb-6'>
              <button
                className={`px-4 py-2  ${sortOrder === 'ascending' ? 'bg-[#ff6799] text-white' : 'bg-gray-300 text-gray-500'} `}
                onClick={() => setSortOrder('ascending')}
              >
                Ascending
              </button>
              <button
                className={`px-4 py-2 ${sortOrder === 'descending' ? 'bg-[#ff6799] text-white' : 'bg-gray-300 text-gray-500'}`}
                onClick={() => setSortOrder('descending')}
              >
                Descending
              </button>
            </div>
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Picture
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Seller Name
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Seller Email
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sub-category
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Price
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Available Quantity
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Detail Description
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class=" bg-white divide-y divide-gray-200">
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
                      : (
                        myToys.map(myToy => <MyToysTable
                          key={myToy._id}
                          myToy={myToy}
                          setUpdate={setUpdate}
                          myToys={myToys}
                          setMyToys={setMyToys}
                        ></MyToysTable>)
                      )
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyToys;