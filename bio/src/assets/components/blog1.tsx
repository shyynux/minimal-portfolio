import Footer from "./footer";
import Header from "./header";
import queue from "../images/q.avif";
import sqs from "../images/sqs.png";


const MessagingQueue = () => {
    return (
        <>
        <Header />
        <div className="py-10 m-4
        mt-20
        px-10
        shadow-md
        items-center
        justify-center
        text-zinc-500
        hover:shadow-xl
        ">
        <div className="px-20 font-mono
        justify-content
        text-left
       ">
      <h1 className="text-2xl font-bold text-black">What are messaging queues? </h1>
      <img src={queue} alt="messaging queue" />
      <br />
      <p>
        One day a team-mate told me during a call to poll some messages from SQS, I was like ‘What’s SQS or polling’, they told me it is an asynchronous queue. I was like whaaat (in my mind), I was a new joinee(shy), I felt so dumb. But I hope you don’t (and you shouldn’t), so today we are going to understand -
      </p>
      <br />
      <h2 className="font-semibold text-black"> 💡 What is a messaging queue?</h2>
      <p >
        A messaging queue is a way for services to communicate with each other without having to wait for a response(asynchronously). Messages are stored in a queue until they are processed, and each message is only processed once.
      </p>
      
      <p>
        Message queues can be used to break down complex tasks into smaller, more manageable ones, and to make systems more scalable and reliable. They are used in serverless and micro-services architectures.
      </p>
      <br />

      <p>
        A component called a producer adds a message to the queue. The message is stored on the queue until another component called a consumer retrieves the message and processes it.
      </p>
      
      <h3>A simple example:</h3>
      <p>
        Imagine a website that sells products. When a customer places an order, the website creates a message and puts it in a queue. A separate process then picks up the message from the queue and processes the order.
      </p>
      
      <p>
        This allows the website to continue processing other orders while the first order is being processed. It also makes the website more reliable, because if one process fails, another process can pick up the messages from the queue and continue processing them.
      </p>
      <br />
     
      <h2 className="font-semibold text-black"> 💡 Some popular messaging queues:</h2>
      <ul>
        <li>Amazon SQS: Amazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components.</li>
        <li>Rabbit MQ: An open-source message broker that implements the Advanced Message Queuing Protocol (AMQP).</li>
        <li>Azure Service Bus: A cloud-based message broker that provides reliable and scalable messaging services for applications.</li>
        <li>Apache Kafka: A distributed streaming platform that allows applications to process streams of data in real time.</li>
        <li>Apache ActiveMQ: ActiveMQ is a popular messaging service that facilitates disparate data at scale in enterprise systems.</li>
      </ul>

      <p>
        What and when to use should be decided according to the scale, service, tech stack choice etc. factors.
      </p>
     <br />
      <img src={sqs} alt="SQS Logo" />
     <br />

      <h2 className="font-semibold text-black">💡 Useful terms associated with SQS</h2>
      <p>
        <strong>Amazon SQS (Simple Queue Service):</strong> As mentioned above, it is a messaging queue service. Our system has producers, consumers using the queue i.e., SQS. The queue stores each message on multiple Amazon SQS servers to ensure that messages are not lost if a server fails.
      </p>
      <p>
        <strong>Producer:</strong> The service or application that sends messages to a queue.
      </p>
      <p>
        <strong>Consumer:</strong> The service that retrieves and processes messages from a queue, which were placed there by producers.
      </p>
      <p>
        <strong>The Queue:</strong> The specific messaging queue being used (e.g., SQS has both simple and FIFO options).
      </p>
      <p>
        <strong>Polling:</strong> The process of checking a queue for new messages.
      </p>
      <p>
        By default, short polling is used, where your application sends a ReceiveMessage request to AWS SQS. SQS checks a subset of servers for messages and sends a response immediately, even if no messages are found. On the other hand, long polling waits for new messages, checking all servers for a specific duration, and returns a response if messages are found, otherwise, it sends an empty response when the polling wait time expires.
      </p>
      <p>
        <strong>Dead-letter Queue (DLQ):</strong> A queue that stores messages that cannot be processed successfully by other source queues. This can happen for various reasons, such as if the message is invalid, too large, or if the consumer crashes. However, they are not created automatically; we need to create them first.
      </p>
      <p>
        <strong>Queue Attributes:</strong> These include maximum message size, message retention period, redrive policy, and visibility timeout, which all affect how the messaging queue functions.
      </p>
     <br />

      <p>
        I really hope this information will help in understanding MQs better. If you want to read more on this topic I will recommend a few resources -
      </p>
      <ul>
        <li><a href="https://aws.amazon.com/message-queue/" className="hover:text-purple-500"> → Amazon SQS Official Website</a></li>
        <li><a href="Amazon-SQS-official-documentation" className="hover:text-purple-500"> → Amazon SQS Official Documentation</a></li>
        <li><a href="https://www.rabbitmq.com/getstarted.html" className="hover:text-purple-500"> → Rabbit MQ - Getting Started</a></li>
      </ul>

      <p>
        Let me know what messaging queue you used for your service and why.
      </p>

      <p>
        Have a nice day. 🤍
      </p>
        </div>
        <Footer />
        </div>
        </>
    )
};

export default MessagingQueue;