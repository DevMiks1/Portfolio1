/** @format */
import { Box, Text } from "@chakra-ui/react";
import journey from "../../assets/home/journey.png";
import profile from "../../assets/home/profile.png";
import webdevelopment from "../../assets/services/web-development-services.png";
import tailwindReact from "../../assets/blogs/tailwind-react.png"

export const BlogsInfoData = {
  Blogs: [
    {
      id: 1,
      img: journey,
      alt: "journey logo",
      profile: profile,
      name: "Mikee",
      date: "Feb 28, 2024",
      title: "How To Pursue Career And Find Your Path",
      url: "how-to-pursue-career-and-find-your-path",
      description: (
        <Box>
          <Text data-aos="zoom-in">
            During my college years, I studied Computer Engineering, but I was
            uncertain about my career path. While we had programming exercises
            and laboratories focusing on Java and databases, I didn't find them
            enjoyable. At that time, I decided I wouldn't pursue a career as a
            programmer. Fast forward to our thesis days, our project was a
            Digital Word Board Game—an interactive touch screen monitor that
            could play Scrabble. Despite not writing a single line of code for
            it because I lacked the knowledge and motivation, I focused on the
            documentation instead"{" "}
          </Text>
          <Text py={5} data-aos="zoom-in">
            After graduation, I stumbled upon HTML tutorials on YouTube and was
            amazed by how people could create websites on their own. Intrigued,
            I decided to learn. Next, I explored CSS to style the website.
            Although I knew my creations were not perfect, I was thrilled to
            discover that I could do it. After mastering CSS, I delved into
            JavaScript to add dynamism to the website. I learned that adding
            animations and interactivity can attract more users.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            In April 2023, I came across a Kodego commercial and decided to join
            their courses. I wanted to learn more and apply best practices.
            Kodego's full-stack web development curriculum taught various tech
            stacks, including Node.js, PHP, MongoDB, and MySQL. The projects
            assigned in the bootcamp were invaluable, as they helped me learn
            and troubleshoot errors on my own. I believe that hands-on
            experience with projects is more effective than just watching
            videos.
          </Text>
          <Text data-aos="zoom-in">
            After completing the bootcamp, I noticed significant improvement in
            my coding skills and teamwork. My advice to aspiring developers is
            to code regularly, even if it's just for 1 or 2 hours a day. Also,
            when choosing courses, make wise decisions to avoid regrets.
          </Text>
        </Box>
      ),
    },
    {
      id: 2,
      img: webdevelopment,
      alt: "webdevelopment tools",
      profile: profile,
      name: "Mikee",
      date: "Feb 29, 2024",
      title: "Key Elements for Building a Full Blast Website",
      url: "key-elements-for-building-a-full-blast-website",
      description: (
        <Box>
          <Text data-aos="zoom-in">
            {" "}
            In this article, I'll discuss the essential tools needed to create a
            dynamic website from scratch. For beginners, you can start by
            creating your own website using HTML, CSS, and JavaScript (JS) for
            basic implementation and visual appeal. However, to create a fully
            functional website, you'll need to understand server-side
            programming.
          </Text>
          <Text py={5} data-aos="zoom-in">
            Firstly, let's talk about HTML, CSS, and JS. These languages are
            fundamental for creating a visually appealing and dynamic website.
            However, to create a full-fledged website, you'll need a server to
            handle requests and responses. This is where NodeJS and ExpressJS
            come in.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            NodeJS and ExpressJS help you build a server that communicates with
            the client-side. Additionally, you'll need MongoDB as your database
            to store all your data.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            Organizing your code is crucial for maintainability. For server-side
            code, you can start with an index.js or server.js file as the main
            file. Then, create models to structure your data, controllers to
            handle logic and authentication, and middleware for security
            measures like JWT tokens.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            Don't forget your .env file to store sensitive information like
            tokens and passwords. Lastly, define your routes for different HTTP
            methods (e.g., POST, GET) and include middleware for authentication.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            Once your server is set up, you can use Postman to test its
            functionality before integrating it into your frontend.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            For deployment, you can use Render for the server and Vercel for the
            client-side. These tools will help you deploy your website smoothly.
          </Text>
          <Text data-aos="zoom-in">
            With these tools and practices, you can create a fully functional
            website that meets your needs and standards.
          </Text>
        </Box>
      ),
    },
    {
      id: 3,
      img: tailwindReact,
      alt: "tailwind and react",
      profile: profile,
      name: "Mikee",
      date: "Feb 29, 2024",
      title: "Using Frameworks to Simplify Your Code",
      url: "using-frameworks-to-usimplify-your-code",
      description: (
        <Box>
          <Text data-aos="zoom-in">
            In this article, we will discuss how and when to learn these topics,
            the prerequisites required, and the basic fundamentals. Once you
            have a good understanding of the basics, you can level up your
            tools. In my case, I will study React for frontend development and
            Tailwind CSS for styling. Using these frameworks can make your
            coding experience easier and more comfortable.
          </Text>

          <Text py={5} data-aos="zoom-in">
            For learning React, you can refer to the documentation, watch
            tutorials on platforms like YouTube, and choose a learning method
            that suits you best. I always recommend referring to the official
            documentation as it provides detailed guidance, including patch
            notes that highlight any changes and best practices.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            My advice for learning these technologies is to take it step by step
            and not rush. Work on multiple projects to fully understand their
            purpose and meaning.
          </Text>
          <Text pb={5} data-aos="zoom-in">
            Tailwind CSS is a framework that is similar to normal CSS, so if you
            already have a good grasp of CSS, learning Tailwind CSS will be
            easier. You can refer to the Tailwind CSS documentation to learn
            more. Once you are comfortable with Tailwind CSS, you can explore
            other tools. I recommend checking out Next.js and TypeScript.
          </Text>
          <Text data-aos="zoom-in">
            Stay tuned for the next article, where we will discuss Next.js and
            TypeScript in more detail.
          </Text>
        </Box>
      ),
    },
  ],
};
