import Image from "next/image";
import Hero from "./components/Hero";
import beachVolley from "@/public/beach-volley.jpg";
import volleyBall from "@/public/volley-ball.jpg";
import restaurant from "@/public/barra-beach-restaurant.jpeg"; // Add a new image for the restaurant section
import swimmingPool from "@/public/swimming-pool.jpg"; // Add a new image for the swimming pool section
import Card from "./components/Card";

const features = [
  {
    title: "Beach Volleyball Courts",
    description:
      "Enjoy our professional-grade sand pitches designed for both casual play and competitive tournaments.",
    icon: "🏐",
  },
  {
    title: "Swimming Pool",
    description:
      "Relax or train in our Olympic-sized swimming pool with lifeguards on duty.",
    icon: "🏊‍♂️",
  },
  {
    title: "On-site Restaurant",
    description:
      "Refuel with delicious meals and refreshing drinks at our beachfront restaurant.",
    icon: "🍔",
  },
];

const pricing = [
  {
    plan: "Casual Play",
    price: "$10/hour",
    features: ["Access to Volleyball Courts", "Basic Amenities"],
  },
  {
    plan: "Family Package",
    price: "$30/day",
    features: ["Swimming Pool Access", "Restaurant Discounts", "Free Parking"],
    popular: true,
  },
  {
    plan: "Event Hosting",
    price: "$200/event",
    features: ["Private Volleyball Court", "Catering Services", "Custom Setup"],
  },
];

const latestUpdates = [
  {
    title: "Upcoming Volleyball Tournament",
    content:
      "Join us for an exciting beach volleyball tournament this weekend! Open to all skill levels.",
    image: beachVolley,
  },
  {
    title: "New Menu at the Restaurant",
    content:
      "Our restaurant now offers a variety of fresh seafood dishes and tropical cocktails!",
    image: restaurant,
  },
  {
    title: "Swimming Lessons for Kids",
    content:
      "Enroll your kids in our swimming lessons program and help them build confidence in the water.",
    image: swimmingPool,
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        image={beachVolley}
        title={"Welcome to Beach Sports Arena"}
        subTitle={
          "Your ultimate destination for beach volleyball, swimming, dining, and fun under the sun!"
        }
        buttonLink={"/book-now"}
        buttonTitle={"Book Now"}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <Card key={index}>
                <span className="text-5xl text-blue-600 mb-4 block">
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Activities for Kids Section (Fresh Look) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src={volleyBall.src}
                alt="Fun Activities for Kids"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Fun Activities for Kids
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Bring your little ones for a day of fun and learning! From
                swimming lessons to sandcastle building contests, we offer a
                variety of activities tailored for kids.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
                <li>Swimming lessons with certified instructors</li>
                <li>Sandcastle building workshops</li>
                <li>Mini-games and team activities</li>
              </ul>
              <a
                href="/kids-activities"
                className="inline-block mt-6 bg-yellow-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section (Fresh Look) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Host Your Private Event With Us
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our beachfront venue is perfect for hosting unforgettable events
                like birthdays, corporate gatherings, or weddings. Enjoy a
                one-of-a-kind experience with stunning views and customizable
                catering.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
                <li>Private beach volleyball courts</li>
                <li>Customizable catering options</li>
                <li>Dedicated event coordinators</li>
              </ul>
              <a
                href="/private-events"
                className="inline-block mt-6 bg-indigo-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-600 transition duration-300"
              >
                Plan Your Event
              </a>
            </div>
            <div className="flex justify-center order-2 lg:order-2">
              <Image
                src={volleyBall.src}
                alt="Private Events"
                width={500}
                height={300}
                className="rounded-lg shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((pricing, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg ${
                  pricing.popular
                    ? "border-4 border-blue-600 bg-white relative"
                    : "bg-gray-50"
                } hover:shadow-xl transition-shadow duration-300`}
              >
                {pricing.popular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  {pricing.plan}
                </h3>
                <p className="text-4xl font-bold text-center text-gray-900 mb-6">
                  {pricing.price}
                </p>
                <ul className="text-gray-600 text-center space-y-2 mb-6">
                  {pricing.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a
                  href="/book-now"
                  className="block w-full bg-blue-600 text-white py-3 rounded-full text-center font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Latest Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((post, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={post.image.src}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg mb-4 h-96"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <a
                  href="/updates"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        style={{
          backgroundImage: `url(${beachVolley.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit?</h2>
          <p className="text-lg mb-12">
            Experience the ultimate beach sports adventure today!
          </p>
          <a
            href="/book-now"
            className="bg-white text-blue-600 py-4 px-12 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Book Your Spot Now
          </a>
        </div>
      </section>
    </main>
  );
}
