import Image from 'next/image';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Apollo Transport - Luxury Chauffeur Services</title>
        <meta name="description" content="Experience premium chauffeur services with Apollo Transportation. Business, airport, event transportation in modern vehicles with exceptional chauffeurs." />
        <meta name="keywords" content="Chauffeur services, luxury transportation, airport transfers, event transportation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <div className="bg-gray-50 text-gray-800 font-sans">
        <header className="bg-indigo-600 text-white">
          <div className="max-w-7xl mx-auto p-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Apollo Transport</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-indigo-200">Home</a></li>
                <li><a href="/services" className="hover:text-indigo-200">Services</a></li>
                <li><a href="/contact" className="hover:text-indigo-200">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <section className="bg-white py-20 text-center">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-5xl font-bold mb-8 text-gray-900">Elevating Your Travel Experience</h2>
              <p className="text-lg text-gray-700 mb-12">Discover the true meaning of luxury transportation with Apollo's elite chauffeur services, available for business, special events, and more.</p>
              <a href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">Book Now</a>
            </div>
          </section>

          <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
              {[
                { title: 'Executive Transport', img: '/executive.jpg', desc: 'Reliable corporate transport for business professionals.' },
                { title: 'Event Transport', img: '/event.jpg', desc: 'Luxury rides for weddings, parties, and more.' },
                { title: 'Airport Transfers', img: '/airport.jpg', desc: 'Seamless travel to and from the airport.' }
              ].map((service) => (
                <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  <Image src={service.img} alt={service.title} width={600} height={400} className="rounded-lg object-cover mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-indigo-600 py-20 text-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Why Choose Apollo?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: 'On-time Service', desc: 'Guaranteed punctuality for all rides.' },
                  { title: 'Luxury Vehicles', desc: 'Travel in premium, comfortable cars.' },
                  { title: 'Professional Drivers', desc: 'Experienced and courteous chauffeurs.' },
                  { title: 'Customized Experience', desc: 'Tailored services for your needs.' }
                ].map((feature) => (
                  <div key={feature.title} className="bg-white text-indigo-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="mb-4">&copy; 2024 Apollo Transportation. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
              <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
