import { Accordion } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import PageTitle from '../PageTitle/PageTitle';


const Blog = () => {
    return (
        <div>
            <PageTitle title="Blog" />
            <div className='bg-[#8edbf448] text-center md:text-left py-6 pl-2 mb-6 md:mb-6 '>
                <Link to='/' className='text-xl  text-secondary font-semibold '>Home / </Link>
                <span className='text-xl text-primary '>Blog</span>
            </div>
            <Accordion arrowIcon={HiOutlineArrowCircleDown}>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            An access token is a short-lived credential used to access protected resources on behalf of a user. A refresh token is a long-lived credential used to obtain a new access token when the current one expires.

                            On the client-side, the access token can be stored in an HTTP header or a cookie, while the refresh token should be stored securely, preferably in an HTTP-only cookie or a secure storage mechanism provided by the client platform.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        Compare SQL and NoSQL databases?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            SQL Databases:
                            <li> Structured and organized with predefined schemas</li>
                            <li> Tabular format using SQL for data manipulation</li>
                            <li> Strong data consistency and integrity (ACID properties)</li>
                            <li> Suitable for complex relationships and strict consistency</li>
                            <li> Examples: MySQL, PostgreSQL, Oracle</li>

                            NoSQL Databases:
                            <li> Handle unstructured or semi-structured data</li>
                            <li> Various data models (key-value, document, columnar, graph)</li>
                            <li> High scalability, flexibility, and performance</li>
                            <li> Sacrifice some consistency for availability and partition tolerance </li>
                            <li> Ideal for dynamic, rapidly changing data and big data applications</li>
                            <li> Examples: MongoDB, Cassandra, Redis</li>
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is express js? What is Nest JS?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Express.js:
                            <li> A minimal and flexible web application framework for Node.js, providing features for handling HTTP requests, routing, and middleware management. It is lightweight, unopinionated, and widely used.</li>

                            NestJS:
                            <li> A progressive, opinionated framework built on top of Express.js for building efficient and scalable server-side applications with Node.js. It emphasizes modularity, dependency injection, and uses TypeScript for enhanced development experience.</li>
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>
                        What is MongoDB aggregate and how does it work
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            The `aggregate` method in MongoDB is used to perform complex data aggregation operations on collections. It processes data through a pipeline of stages, where each stage performs a specific operation on the input data and passes the results to the next stage. The stages can include operators and expressions for filtering, grouping, sorting, projecting, and performing calculations. It provides a flexible way to analyze, transform, and summarize data within a collection.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default Blog;