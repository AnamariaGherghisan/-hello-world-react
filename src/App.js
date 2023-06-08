import React from 'react';
import { Introduction } from './components/Introduction';
import './index.css';

const App = () => {
  return (
    <div className="app">
      <Introduction
        fullName="Anamaria Gherghisan"
        imageSrc="https://media.licdn.com/dms/image/D4E03AQGtA6kpy6hzlg/profile-displayphoto-shrink_400_400/0/1680328709464?e=1691625600&v=beta&t=ZMHuQa2lMIZrOgI9bafJUaI7PrLutbvo7D-Gq8A-GA4"
        description = "As a highly motivated and dedicated individual, I am currently pursuing a front-end development course, specializing in JavaScript, HTML, React, and CSS. With a diverse academic background in Journalism and Laboratory Technology, I bring a unique combination of skills to the world of coding.

        My experience as a journalist has honed my communication skills, enabling me to effectively articulate ideas and collaborate with team members. I have developed a keen eye for detail and a strong ability to analyze complex information, which translates well into writing clean and efficient code.
        
        Furthermore, my work history in warehouse operations and production has instilled in me a strong work ethic and a commitment to meeting deadlines. I am accustomed to working in fast-paced environments, where attention to detail and problem-solving skills are crucial. These qualities make me a resilient and adaptable individual, ready to tackle any coding challenge that comes my way.
        
        I am passionate about learning and constantly expanding my skill set. Through my front-end development course, I have gained a solid foundation in web development principles and best practices. I am eager to leverage my knowledge and apply it to real-world projects, continuously refining my coding abilities.
        
        Overall, I bring a unique blend of soft skills, such as effective communication, attention to detail, and problem-solving, alongside a strong desire to learn and grow in the field of coding. I am excited to embark on a career where I can combine my diverse background and technical expertise to create innovative and user-friendly digital experiences."
      />
    </div>
  );
};

export default App;


