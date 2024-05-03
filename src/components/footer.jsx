export const Footer = () => {
  return(
    <div className="footer w-full h-fit bg-black text-[#6a6a6a] flex flex-col-reverse md:flex-row p-5 lg:px-10 xl:px-15 justify-around">
      {/* attributions */}
      <div className="lg:w-1/3">
        <p className="text-white font-bold">Content used: </p>
        <ul className="flex flex-wrap gap-4">
          <li>https://www.freepik.com</li>
          <li>https://icons8.com</li>
          <li>https://www.vecteezy.com</li>
          <li>https://lottiefiles.com</li>
        </ul>
      </div>
      {/* thanking to visit site */}
      <div className="flex justify-center lg:w-2/3 items-center lg:text-xl text-white font-bold">
        THANKS FOR VISITING
      </div>
    </div>
  )
}
export default Footer;