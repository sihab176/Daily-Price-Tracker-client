import React from 'react';
import Rating from 'react-rating';

const ViewReview = () => {
const reviews = [
  {
    name: "John Evans",
    status: "Verified Buyer",
    rating: 5,
    comment:
      "Really happy with my blinds. They fit perfectly and the fabric chosen looks great. I recommended 62 blinds to a family member who has now placed an order herself.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Nichols",
    status: "Verified Buyer",
    rating: 5,
    comment:
      "Thanks you did a great job for us and would be happy to use you again in the future.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Elson",
    status: "Verified Buyer",
    rating: 5,
    comment:
      "Very competitive prices and quality workmanship on the finished products, can highly recommend. I was so impressed will be placing another order for additional items in the near future.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

    return (
        <div>
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-8 relative">
              {/* Quotation mark decoration */}
              <div className="absolute top-4 left-6 text-gray-200 text-7xl font-serif">
                "
              </div>

              <div className="flex items-center mb-6 relative z-10">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500">{review.status}</p>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <Rating
                  initialValue={review.rating}
                  size={25}
                  readonly
                  allowFraction
                  fillColor="#F59E0B"
                  emptyColor="#E5E7EB"
                  className="mb-2"
                />
                <p className="text-gray-600 text-lg leading-relaxed">
                  {review.comment}
                </p>
              </div>

              <div className="absolute bottom-4 right-6 text-gray-200 text-7xl font-serif transform rotate-180">
                "
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default ViewReview;