import { MapPin, Clock } from "lucide-react";
import { useInView } from "../../../components/hooks/useInView";

const Contact = () => {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full py-20 px-4 md:px-8 bg-gray-50"
    >
      <div className="container mx-auto">
        <div>
        <h2 className={`text-4xl sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-blue-800 font-bold mb-12 text-center ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700`}>
Get In touch        
</h2>

        </div>
        <div className={`max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-700`}>
          <div className="grid md:grid-cols-2">
            {/* Map Image */}
            <div className="h-[300px] relative">
              <img
                src="https://images.pexels.com/photos/1738434/pexels-photo-1738434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Office Location"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Contact Information */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              
              {/* Location */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-800 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">10 Jungle Road</p>
                  <p className="text-gray-600">East Legon, Accra</p>
                  <p className="text-gray-600">Ghana</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-blue-100 text-blue-800 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-xl transition-colors duration-300 font-semibold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;