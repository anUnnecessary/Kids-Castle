import React from 'react';


const Blogs = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-5xl font-bold">1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                    <p className="py-6">An access token is a credential that authorizes a client application to access protected resources on behalf of a user. It is typically short-lived and contains information about the user's identity and permissions. Access tokens are used in stateless authentication systems like JSON Web Tokens (JWTs). <br />

                        <span className='font-bold'>Refresh Token</span>: A refresh token is a long-lived credential used to obtain a new access token when the current one expires. It is securely stored and only used by the client-side application to request a new access token from the authentication server. <br />

                        <span className='font-bold'>How They Work:</span> The client application obtains an access token and refresh token by authenticating with the server. The access token is included in each request to access protected resources. When the access token expires, the client uses the refresh token to request a new access token from the server without requiring user login. The server verifies the refresh token and issues a new access token.

                        Storage on the Client-side: Access tokens are typically stored in memory or browser storage (e.g., localStorage or sessionStorage). However, storing them in browser storage can be vulnerable to cross-site scripting (XSS) attacks. It is recommended to store them in memory and discard them when no longer needed. Refresh tokens should be stored securely, preferably in an HTTP-only cookie or other secure storage mechanisms provided by the platform or framework used. This helps mitigate the risk of cross-site scripting attacks.</p>
                    <h1 className="text-5xl font-bold">2.Compare SQL and NoSQL databases?</h1>
                    <p className='py-6'><span className='font-bold'>SQL Databases:</span>

                        Relational data model with tables and predefined schemas.
                        Standardized query language (SQL) for data manipulation and retrieval.
                        Rigid schema structure, requiring schema modifications for changes.
                        Vertically scalable with hardware upgrades.
                        ACID transactions ensure data integrity and reliability.
                        Suitable for complex relationships, structured data, and transactions.
                        <br />

                        <span className='font-bold'>NoSQL Databases:</span>


                        Flexible data models, including key-value, document, columnar, and graph.
                        Various query languages, often different from SQL, with limited querying capabilities in some cases.
                        Schema-less or flexible schema structure.
                        Horizontally scalable with distributed architecture.
                        Eventual consistency and relaxed transactional guarantees.
                        Suitable for handling large amounts of unstructured or semi-structured data, real-time data, and high scalability requirements.</p>

                    <h1 className="text-5xl font-bold">3.What is express js?</h1>
                    <p className='py-6'>Express.js is a minimalistic and flexible web application framework for Node.js. It provides a set of features and tools that simplify the process of building web applications and APIs.</p>
                    <h1 className="text-5xl font-bold">4.What is MongoDB aggregate and how does it work?</h1>
                    <p className='py-6'>MongoDB's aggregate is a powerful pipeline-based framework used for performing complex data aggregation operations on collections of documents. It allows you to process and transform data in a flexible and efficient manner.</p>
                </div>

            </div>

        </div>
        
    );
};

export default Blogs;