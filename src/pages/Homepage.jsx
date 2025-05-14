import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="font-[Urbanist] flex flex-col items-center justify-center w-full min-h-screen pt-[7vh] px-5">
        {/* Hero Section */}
        <header className="flex items-center w-full h-[80vh] bg-[url('https://images.unsplash.com/photo-1561259244-1a7b8bf08b15?q=80&w=1470&auto=format&fit=crop')] bg-center bg-cover mt-15 rounded-2xl">
          <div className="flex flex-col justify-center items-center opacity-100 w-full max-w-[600px] bg-white mx-4 p-6 rounded-xl text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl ">
              Connect, Transform, Lead
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-2">
              Empowering businesses to connect with markets, transform
              operations, and lead confidently into the digital future.
            </p>
          </div>
        </header>

        {/* Who Are We */}
        <section className="flex flex-col  items-center justify-center lg:flex-row w-full h-[60vh] gap-6">
          <div className="lg:w-1/2 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl ">Who Are We?</h1>
            <p className="text-base sm:text-lg mt-2">
              We are a management advisory and execution support firm helping
              telecom, media, and digital businesses grow faster through
              strategic insight, operational excellence, and innovative
              solutions.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-300 rounded-2xl flex flex-col justify-center items-center p-4">
                <h1 className="text-xl sm:text-2xl font-bold">21+</h1>
                <p className="text-sm sm:text-base">Years of Experience</p>
              </div>
              <div className="bg-gray-300 rounded-2xl flex flex-col justify-center items-center p-4">
                <h1 className="text-xl sm:text-2xl font-bold">200+</h1>
                <p className="text-sm sm:text-base">Completed Projects</p>
              </div>
              <div className="bg-gray-300 rounded-2xl col-span-1 sm:col-span-2 flex flex-col justify-center items-center p-4">
                <h1 className="text-xl sm:text-2xl font-bold">100%</h1>
                <p className="text-sm sm:text-base">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="flex flex-col w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl ">Our Services</h1>
          <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
            <button className="w-full md:w-1/3 h-16 bg-black rounded-lg text-white text-base md:text-lg font-medium">
              Managed Service
            </button>
            <button className="w-full md:w-1/3 h-16 bg-gray-300 rounded-lg text-base md:text-lg font-medium">
              Advisory Services
            </button>
            <button className="w-full md:w-1/3 h-16 bg-gray-300 rounded-lg text-base md:text-lg font-medium">
              Program Management Services
            </button>
          </div>
          <header className="flex items-start w-full h-[70vh] bg-[url(https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] mt-4 rounded-xl p-4">
            <div className="flex items-center bg-white opacity-90 font-medium text-base sm:text-lg md:text-xl text-center p-6 rounded-2xl w-full max-w-2xl h-[30vh]">
              Leveraging on the in-depth and broad of experience and expertise
              of our founding partners, Silver Rock Technology Holdings offers
              support to our client in taking off the full responsibility for
              Network Management (partly or wholly), or the management of 24/7
              help/service desk functions, as well as network deployment
              services.
            </div>
          </header>
        </section>

        {/* Business Focus */}
        <section className="flex flex-col w-full mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">
            Business Focus
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Card 1: Telecom */}
            <div className="bg-gray-200 p-6 rounded-2xl">
              <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-sm">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">
                Telecom
              </h2>
              <p className="text-sm sm:text-base">
                Global mobile data traffic will grow by 8 fold over the period
                2015 – 2020. Mobile data traffic will grow as a compound annual
                growth rate of 53% to reach an average of 30.6 Exabyte per month
              </p>
            </div>

            {/* Card 2: Media */}
            <div className="bg-gray-200 p-6 rounded-2xl">
              <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-sm">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">
                Media
              </h2>
              <p className="text-sm sm:text-base">
                Advances in telecom broadband network and mobile devices have
                opened up brand new markets to the Media and Entertainment
                industry. Consumers have changed the way they consume content.
              </p>
            </div>

            {/* Card 3: Digital */}
            <div className="bg-gray-200 p-6 rounded-2xl">
              <div className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full text-sm">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">
                Digital
              </h2>
              <p className="text-sm sm:text-base">
                The launch of Apple’s iPhone in 2007 was a catalyst for change
                in telecom and ICT; reshaping communication and interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="w-full flex flex-col mt-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4">Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
              01
            </div>
            <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1627423893729-3a79f48ff473?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
              02
            </div>
            <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
              03
            </div>
            <div className="h-100 rounded-2xl bg-[url(https://images.unsplash.com/photo-1673661905247-76404fb2f5c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover text-white flex justify-center items-center text-xl font-semibold">
              04
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;
