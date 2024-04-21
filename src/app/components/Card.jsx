export default () => (
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
          Happy birthday! I'm glad I got to grow up with you, playing minecraft and watching cartoons together is valueable precious memory to me and I'm grateful for you. You are a cheerful person and it's fun to be around you.
        </p>
        <img src={"/terralyn.png"} alt="terrlayn eating" style={{ width: '45%', height: 'auto' }} />
        <p className="name">- Zach</p>
      </div>
    </div>
  );
  