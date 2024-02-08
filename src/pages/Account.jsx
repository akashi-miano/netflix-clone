import SaveShows from "../components/SaveShows";

const Account = () => {
  return <section>
    <div className="text-white w-full">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/1925d12b-edb9-4aca-ae4d-8e2777116b47/SO-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Sign Up background image"  className="w-full h-[550px] object-cover"/>
      <div className="absolute top-0 left-0 bg-black/60 w-full h-[550px]"></div>
      <div className="absolute top-[40%] md:top-[30%] left-[50%] -translate-x-[50%]">
        <h1 className="text-5xl font-bold">My Shows</h1>
      </div>
      <SaveShows/>
    </div>
  </section>;
};

export default Account;
