import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="font-[Urbanist] flex flex-col items-center justify-start w-full min-h-screen pt-[15vh] px-4 sm:px-6 md:px-8">
        {/* Header */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full max-w-6xl">
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 bg-white p-6 rounded-xl ">
            <h1 className=" text-3xl sm:text-4xl md:text-4xl  ">
              Silver Rock Technology
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
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
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow">
            <img
              src="/public/team.jpg"
              alt="team"
              className="w-full object-cover"
            />{" "}
          </div>
        </header>

        {/* Our Values Section */}
        <section className="w-full mt-20 max-w-6xl">
          <h2 className=" text-3xl  mb-6 text-center">Our Values</h2>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1630386226447-af0a955c1009?q=80&w=1424&auto=format&fit=crop"
              alt="Values Landmark"
              className="w-full lg:w-1/2 rounded-xl shadow"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-1/2">
              <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/eban-medium.png"
                  alt="Respect Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1">Respect</h3>
                <p>
                  We recognize the worth of every individual and treat them
                  appropriately.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/nkyemu-medium.png"
                  alt="Professionalism Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1">Professionalism</h3>
                <p>
                  We deliver high quality services to our esteemed clients with
                  excellence.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/nsaa-medium.png"
                  alt="Client Value Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1">
                  Client Value Creation
                </h3>
                <p>
                  We ensure sustained value creation through innovative
                  solutions for our clients.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow flex flex-col items-center text-center">
                <img
                  src="https://www.adinkrasymbols.org/adinkra/anyi-me-aye-a-medium.png"
                  alt="Integrity Symbol"
                  className="w-12 h-12 mb-3"
                />
                <h3 className="font-bold text-lg mb-1">Integrity</h3>
                <p>
                  We do what is right at all times. We keep our word and honor
                  our commitments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="w-full max-w-6xl mt-20 px-2">
          <h2 className="text-3xl  mb-6 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Femi-Banigbe.png"
                alt="Femi Banigbe"
                className="w-full aspect-[3/4] object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">Femi Banigbe</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Raphael-Richardo-Emanuel-1-200x300.jpg"
                alt="Raphael Richardo Emanuel"
                className="w-full aspect-[3/4] object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">Raphael Richardo Emanuel</h3>
                <p className="text-gray-600">EVP Head of Operations</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow overflow-hidden">
              <img
                src="https://silverrocktech.com/wp-content/uploads/2017/05/Abolaji-Idowu.png"
                alt="Abolaji Idowu"
                className="w-full aspect-[3/4] object-contain"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-xl">Abolaji Idowu</h3>
                <p className="text-gray-600">EVP Finance and Global Strategy</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
