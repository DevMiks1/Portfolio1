/** @format */
import { Box, Text } from "@chakra-ui/react";
import journey from "../../assets/home/journey.png";
import profile from "../../assets/home/profile.png";
import webdevelopment from "../../assets/services/web-development-services.png"

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
          <Text>
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
          <Text py={5}>
            After graduation, I stumbled upon HTML tutorials on YouTube and was
            amazed by how people could create websites on their own. Intrigued,
            I decided to learn. Next, I explored CSS to style the website.
            Although I knew my creations were not perfect, I was thrilled to
            discover that I could do it. After mastering CSS, I delved into
            JavaScript to add dynamism to the website. I learned that adding
            animations and interactivity can attract more users.
          </Text>
          <Text pb={5}>
            In April 2023, I came across a Kodego commercial and decided to join
            their courses. I wanted to learn more and apply best practices.
            Kodego's full-stack web development curriculum taught various tech
            stacks, including Node.js, PHP, MongoDB, and MySQL. The projects
            assigned in the bootcamp were invaluable, as they helped me learn
            and troubleshoot errors on my own. I believe that hands-on
            experience with projects is more effective than just watching
            videos.
          </Text>
          <Text>
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
          <Text>
            {" "}
            "In this article, I'll discuss the essential tools needed to create
            a dynamic website from scratch. For beginners, you can start by
            creating your own website using HTML, CSS, and JavaScript (JS) for
            basic implementation and visual appeal. However, to create a fully
            functional website, you'll need to understand server-side
            programming.
          </Text>
          <Text py={5}>
            Firstly, let's talk about HTML, CSS, and JS. These languages are
            fundamental for creating a visually appealing and dynamic website.
            However, to create a full-fledged website, you'll need a server to
            handle requests and responses. This is where NodeJS and ExpressJS
            come in.
          </Text>
          <Text pb={5}>
            NodeJS and ExpressJS help you build a server that communicates with
            the client-side. Additionally, you'll need MongoDB as your database
            to store all your data.
          </Text>
          <Text pb={5}>
            Organizing your code is crucial for maintainability. For server-side
            code, you can start with an index.js or server.js file as the main
            file. Then, create models to structure your data, controllers to
            handle logic and authentication, and middleware for security
            measures like JWT tokens.
          </Text>
          <Text pb={5}>
            Don't forget your .env file to store sensitive information like
            tokens and passwords. Lastly, define your routes for different HTTP
            methods (e.g., POST, GET) and include middleware for authentication.
          </Text>
          <Text pb={5}>
            Once your server is set up, you can use Postman to test its
            functionality before integrating it into your frontend.
          </Text>
          <Text pb={5}>
            For deployment, you can use Render for the server and Vercel for the
            client-side. These tools will help you deploy your website smoothly.
          </Text>
          <Text>
            With these tools and practices, you can create a fully functional
            website that meets your needs and standards."
          </Text>
        </Box>
      ),
    },
    {
      id: 3,
      img: journey,
      alt: "journey logo",
      profile: profile,
      name: "Mikee",
      date: "Feb 28, 2024",
      title: "1",
      url: "2",
      description:
        "During my college years, I studied Computer Engineering, but I was uncertain about my career path. While we had programming exercises and laboratories focusing on Java and databases, I didn't find them enjoyable. At that time, I decided I wouldn't pursue a career as a programmer. Fast forward to our thesis days, our project was a Digital Word Board Game—an interactive touch screen monitor that could play Scrabble. Despite not writing a single line of code for it because I lacked the knowledge and motivation, I focused on the documentation instead. After graduation, I stumbled upon HTML tutorials on YouTube and was amazed by how people could create websites on their own. Intrigued, I decided to learn. Next, I explored CSS to style the website. Although I knew my creations were not perfect, I was thrilled to discover that I could do it. After mastering CSS, I delved into JavaScript to add dynamism to the website. I learned that adding animations and interactivity can attract more users. In April 2023, I came across a Kodego commercial and decided to join their courses. I wanted to learn more and apply best practices. Kodego's full-stack web development curriculum taught various tech stacks, including Node.js, PHP, MongoDB, and MySQL. The projects assigned in the bootcamp were invaluable, as they helped me learn and troubleshoot errors on my own. I believe that hands-on experience with projects is more effective than just watching videos. After completing the bootcamp, I noticed significant improvement in my coding skills and teamwork. My advice to aspiring developers is to code regularly, even if it's just for 1 or 2 hours a day. Also, when choosing courses, make wise decisions to avoid regrets.",
    },
  ],
};
