import React from 'react'

const Aboutpage = () => {
  return (
    <>
<div className="relative w-full h-[40vh]">
  <div className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-no-repeat bg-center z-0" />
  <div className="absolute inset-0 bg-black/50 z-10 backdrop-blur-sm border border-blue-600/10" />
  <div className="absolute inset-0  bg-blue-950/50 backdrop-blur-sm shadow-md -z-1" />
  
  <h2 className="absolute inset-0 z-20 flex items-center justify-center text-white text-7xl font-bold">
    ABOUT US
  </h2>
</div>

      <div className="relative font-[Urbanist] flex flex-col items-center justify-start w-full min-h-screen pt-[8vh] px-4 sm:px-6 md:px-8">

        {/* Header */}
        
        <header className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl">
  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 bg-white p-6 rounded-xl">
    <h1 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold">
      Silver Rock Technology
    </h1>
            <p className="text-base sm:text-lg md:text-xl pt-2">
              We are a management advisory and execution support firm
              specializing in telecoms, media, and digital industries. Our goal
              is to be the leading advisory firm in Africa and emerging markets,
              delivering strategic insights, technical expertise, financial
              acumen, and operational excellence—all backed by end-to-end
              execution support for our clients.
            </p>
            <p className="text-base sm:text-lg md:text-xl">
              We provide outsourcing support for managed services engagement...
            </p>
          </div>
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow h-auto mt-4">
            <img
              src="/team.jpg"
              alt="team"
              className="w-full object-cover"
            />{" "}
          </div>
        </header>

        {/* Our Values Section */}
        <section className="w-full mt-20 max-w-6xl min-h-screen mb-8">
        

  <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-17">
    
    {/* Image on the right */}
    <div className="lg:w-1/2">
      <img
        src="/about_1.png.webp"
        alt="Our Vision"
        className="w-full h-auto object-cover"
      />
    </div>


    {/* Text on the left */}
    <div className="lg:w-1/2 text-lg md:text-xl text-gray-800 space-y-6">
    <h2 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-8 text-start">
    Our Vision
  </h2>
      <strong> At Silver Rock Technologies, our vision is clear:</strong> 
      <p className="pt-2">
        A connected, intelligent, and prosperous Africa leading the global digital revolution. <br />
        We are building the technologies that will shape education, finance, communication, and everyday life.
      </p>
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-8 ">
        Join us on this journey.
      </p>
    </div>
  </div>


          <h2 className=" text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold  mb-12 text-center">Our Values</h2>
          <div className="flex flex-col lg:flex-row gap-10 items-center">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
          <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/eban-medium.png"
                  alt="Respect Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1 text-blue-800">Respect</h3>
                <p>
                  We recognize the worth of every individual and treat them
                  appropriately.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/nkyemu-medium.png"
                  alt="Professionalism Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1 text-blue-800 ">Professionalism</h3>
                <p>
                  We deliver high quality services to our esteemed clients with
                  excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/nsaa-medium.png"
                  alt="Client Value Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1 text-blue-800">
                  Client Value Creation
                </h3>
                <p>
                  We ensure sustained value creation through innovative
                  solutions for our clients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/anyi-me-aye-a-medium.png"
                  alt="Integrity Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1 text-blue-800">Integrity</h3>
                <p>
                  We do what is right at all times. We keep our word and honor
                  our commitments.
                </p>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1630386226447-af0a955c1009?q=80&w=1424&auto=format&fit=crop"
              alt="Values Landmark"
              className="w-full lg:w-1/2 rounded-xl shadow"
            />
            
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className=" w-full mt-20">
          <h2 className="text-6xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-8 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Femi-Banigbe.png"
                alt="Femi Banigbe"
                className="w-full object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl text-blue-800">Femi Banigbe</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Raphael-Richardo-Emanuel-1-200x300.jpg"
                alt="Raphael Richardo Emanuel"
                className="w-full  object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl text-blue-800">Raphael Richardo Emanuel</h3>
                <p className="text-gray-600">EVP Head of Operations</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Abolaji-Idowu.png"
                alt="Abolaji Idowu"
                className="w-full  object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="text-blue-800 font-bold text-xl">Abolaji Idowu</h3>
                <p className="text-gray-600">EVP Finance and Global Strategy</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutpage