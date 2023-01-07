import styles from "../styles"

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex min-w-[210px] flex-1 flex-col sm:max-w-[250px]">
    <div
      className={`${styles.flexCenter} h-[70px] w-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="h-1/2 w-1/2 object-contain" />
    </div>
    <h1 className="mt-[26px] text-[24px] font-bold leading-[30.24px] text-white">
      Title {title}
    </h1>
    <p className="mt-[16px] flex-1 text-[18px] font-normal leading-[32.4px] text-[#B0B0B0]">
      {subtitle}
    </p>
  </div>
)

export default NewFeatures
