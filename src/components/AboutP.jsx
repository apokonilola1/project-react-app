import styles from "../style";
import { socialMedia } from "../constants";

const AboutP = () => {
  return (
    <div>
      <img
        src="./src/assets/about.png"
        alt="bgImage"
        draggable="false"
        className={`left-0 w-full h-screen object-cover`}
      />

      <div
        className={`${styles.flexCenter} w-full absolute top-[180px] sm:top-[250px] text-[#eeeeee]`}
      >
        <h1
          className={`ml-[40px] sm:ml-[20%] font-crimsonn text-[30px] sm:text-[50px] xs:[48px] w-full xs:leading-[76.8px] ${styles.flexCenter}`}
        >
          ABOUT US
        </h1>

        <div
          className={`border-t-[3px] border-t-[#C7C7C7] absolute top-[70px] left-[40%] sm:-left-[7%] md:left-[7%] xl:left-[450px] sm:top-[140px] w-[30%] sm:ml-[400px]`}
        />

        <div
          className={`absolute top-[100px] sm:top-[140px] ${
            styles.flexCenter
          } ${`${styles.paragraph} text-[13px] sm:text-[30px] ml-[65px] mr-[35px] sm:ml-[30%] sm:mr-[10%] sm:mt-[70px] sm:leading-[45px] text-justify`}`}
        >
          <p>
            At Foto, we're passionate storytellers and skilled visual artists.
            With years of experience, we specialize in transforming moments into
            lasting memories through photography and videography. Whether it's a
            wedding, corporate event, family portrait, or commercial project,
            we're here to capture your unique story and create timeless
            treasures. Join us on this creative journey where moments become art
            at Foto.
          </p>
        </div>

        <div className="absolute flex flex-row mt-[600px] ml-[40px] md:mt-[880px] md:ml-[370px]">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutP;
