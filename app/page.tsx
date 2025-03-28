import Hero from "./components/Hero";
import beachVolley from "@/public/beach-volley.jpg";

const featured = [
  {
    title: "Feature One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Feature Two",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Feature Three",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "- John Doe",
  },
  {
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "- Jane Smith",
  },
];

const pricing = [
  {
    plan: "Basic Plan",
    price: "$9.99",
    features: ["Feature 1", "Feature 2", "Limited Support"],
  },
  {
    plan: "Pro Plan",
    price: "$19.99",
    features: ["Feature 1", "Feature 2", "Priority Support"],
    popular: true,
  },
  {
    plan: "Enterprise Plan",
    price: "$49.99",
    features: ["Feature 1", "Feature 2", "24/7 Support"],
  },
];

const latestUpdates = [
  {
    title: "Blog Post Title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Blog Post Title",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Blog Post Title",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero
        image={beachVolley}
        title={"Lorem ipsum dolor sit."}
        subTitle={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus architecto voluptates officia nisi quis. Dicta ex reprehenderit vitae aut quos!"
        }
        buttonLink={"/signup"}
        buttonTitle={"Get Started"}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featured.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
                <p className="text-right text-gray-800 font-semibold">
                  {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((pricing, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl shadow-lg ${
                  pricing.popular
                    ? "border-4 border-blue-600 bg-white"
                    : "bg-gray-50"
                } hover:shadow-xl transition-shadow duration-300`}
              >
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
                  href="/signup"
                  className="block w-full bg-blue-600 text-white py-3 rounded-full text-center font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Choose Plan
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
            Latest News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestUpdates.map((post, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <a
                  href="/blog"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-12">
            Join thousands of satisfied customers today!
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 py-4 px-12 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </main>
  );
}
