import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
const Blog = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <div className="px-4 lg:px-36 mb-8">
        <div className="bg-blue-300 text-white mb-8 py-36">
            <p className="text-center text-4xl font-bold">Question & Answer</p>
        </div>
      <Fragment>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </AccordionHeader>
          <AccordionBody>
            Access tokens should be stored in a secure storage mechanism such as
            an HTTP-only cookie or local storage, depending on the specific
            requirements of your application. Refresh tokens should be stored in
            a more secure manner, such as in an HTTP-only cookie with the
            "secure" attribute set, or within a secure storage mechanism like
            the browser's encrypted storage. Take precautions to protect against
            cross-site scripting (XSS) attacks by implementing measures such as
            output encoding and proper input validation. Regularly review and
            rotate the refresh tokens to minimize the risk in case of token
            leakage or compromise
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            Compare SQL and NoSQL databases?
          </AccordionHeader>
          <AccordionBody>
            Data Structure: <br />
            SQL databases are based on a structured schema, using tables with
            predefined columns and rows. NoSQL databases are schema-less or have
            flexible schemas, allowing for dynamic and unstructured data
            storage. <br />
            Query Language: <br />
            SQL databases use Structured Query Language (SQL) for defining and
            manipulating the data. NoSQL databases have various query languages
            depending on the specific database type, such as document-oriented
            (e.g., MongoDB), key-value (e.g., Redis), columnar (e.g.,
            Cassandra), or graph-based (e.g., Neo4j). <br />
            Scalability: <br /> SQL databases generally scale vertically,
            meaning they require hardware upgrades to handle increased data
            loads. NoSQL databases are designed to scale horizontally, allowing
            for distributed systems and adding more servers to handle increased
            data loads. <br />
            Data Consistency:
            <br />
            SQL databases prioritize data consistency, ensuring that all data
            conforms to predefined rules and constraints. NoSQL databases often
            prioritize availability and partition tolerance over strict
            consistency, allowing for eventual consistency or trading off
            consistency for high availability. <br />
            Use Cases: <br /> SQL databases are commonly used for applications
            that require complex queries, strict data integrity, and ACID
            (Atomicity, Consistency, Isolation, Durability) transaction
            properties, such as financial systems or relational data models.
            NoSQL databases excel in handling large volumes of rapidly changing
            and unstructured data, making them suitable for applications like
            real-time analytics, content management systems, social networks,
            and IoT platforms.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is express js? What is Nest JS?
          </AccordionHeader>
          <AccordionBody>
            Express.js is a fast and minimalist web application framework for
            Node.js. It provides a simple and flexible way to build web
            applications and APIs by providing a set of features and middleware
            that handle routing, request/response handling, and other common web
            development tasks. <br />
            Nest.js is a progressive Node.js framework for building scalable and
            efficient server-side applications. It is built on top of Express.js
            and provides an additional layer of abstraction and organization to
            help developers create modular, testable, and maintainable code.
            Nest.js utilizes TypeScript and follows the principles of
            Object-Oriented Programming, Dependency Injection, and Decorators,
            making it a popular choice for building complex enterprise
            applications.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            What is MongoDB aggregate and how does it work?
          </AccordionHeader>
          <AccordionBody>
            MongoDB's aggregate is a framework for data analysis in MongoDB. It
            uses a pipeline of stages to process and transform data. Each stage
            applies a specific operation and passes the result to the next
            stage. It allows you to perform complex queries, aggregations, and
            transformations on your data.
          </AccordionBody>
        </Accordion>
      </Fragment>
    </div>
  );
};

export default Blog;
