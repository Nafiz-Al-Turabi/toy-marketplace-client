import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white p-8 max-w-lg mx-auto">
                <div class="text-center">
                    <img src="https://i.ibb.co/3T562NF/404.gif" class="mx-auto max-w-full h-auto" alt="404 Image" />
                    <h1 class="text-4xl font-semibold text-gray-800 mt-8">Sorry, we couldn't find that page.</h1>
                    <p class="text-gray-600 mt-4">Please check the URL or go back to the homepage.</p>
                    <Link href="/" class="mt-6 inline-block bg-primary text-white font-semibold px-6 py-3 rounded">Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;