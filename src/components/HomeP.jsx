import styles from "../style";

const HomeP = () => {
  return (
    <div>
      <img
        src="./src/assets/home.png"
        alt="bgImage"
        className={`left-0 w-full h-screen object-cover`}
      />

      <div className={`w-full top-[86%] absolute`}>
        <p
          className={`font-crimsonn text-[16px] text-white md:ml-[90px] sm:ml-[100px] mr-[70px] sxs:ml-[70px] text-center ${styles.flexCenter}`}
        >
          In every picture, there's a story waiting to be told.
        </p>
      </div>
    </div>
  );
};

export default HomeP;
