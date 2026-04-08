const BannerBg = () => {
  return (
    <div className="absolute top-0 right-0 left-0 -z-10 hidden px-5 md:block">
      <svg viewBox="0 0 1700 1088" className="h-full w-full" preserveAspectRatio="none">
        <path
          d="M0 251.708C0 282.839 18.5107 310.989 47.0931 323.324L369.907 462.64C398.489 474.975 417 503.125 417 534.255L417 1010C417 1053.08 451.922 1088 495 1088L1622 1088C1665.08 1088 1700 1053.08 1700 1010L1700 206C1700 162.922 1665.08 128 1622 128L1370.56 128C1335.22 128 1306.56 99.3462 1306.56 64C1306.56 28.6538 1277.91 0 1242.56 0L222.178 0C183.132 0 150.103 28.8706 144.879 67.5649L142.957 81.8047C138.148 117.424 107.743 144 71.801 144C32.1464 144 0 176.146 0 215.801L0 251.708Z"
          // className="fill-black lg:fill-red-500 xl:fill-blue-600"
          className="fill-black"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default BannerBg;
