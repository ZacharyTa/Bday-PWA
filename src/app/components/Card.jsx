import React from 'react'; // Ensure React is in scope when using JSX

const Card = () => (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY TERRALYN!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Minecraft Buddy</h3>
        <p>Dear Tin,</p>
        <p>
          Happy birthday! I&apos;m glad I got to grow up with you, playing minecraft and watching cartoons together is valueable precious memory to me and I&apos;m grateful for you. You are a cheerful person and it&apos;s fun to be around you.
        </p>
        <img src={"/terralyn.png"} alt="terrlayn eating" style={{ width: '40%', height: 'auto' }} />
        <p className="name">- Zach</p>
      </div>
    </div>
  );

  Card.displayName = 'Card'; // Setting displayName explicitly for better debugging

export default Card;
  