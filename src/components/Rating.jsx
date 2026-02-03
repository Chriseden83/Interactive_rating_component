import { useState } from 'react';
import StarIcon from '../assets/icon-star.svg';
import ThankYou from '../assets/illustration-thank-you.svg';

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingSelection = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitRating = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <article className="font-primary flex flex-col w-[clamp(327px,90vw,412px)] bg-[linear-gradient(135deg,#232A34,#181E27)] p-6 rounded-xl">
      {isSubmitted ? (
        <div className="flex flex-col items-center p-6 text-center gap-6">
          <img src={ThankYou} alt="Thank You Illustration" className="w-44" />
          <div className="bg-grey-medium px-4 py-1 rounded-full text-preset-5 text-orange mt-2">
            <p className="pt-1">You selected {selectedRating} out of 5</p>
          </div>
          <p className="text-white text-preset-2 leading-preset-2 font-bold mt-2">
            Thank You!
          </p>
          <p className="text-grey-light leading-preset-5-regular text-preset-5">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <div className="bg-grey-medium w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center brightness-105">
            <img src={StarIcon} alt="Star Icon" className="w-4 text-primary" />
          </div>
          <h1 className="text-white text-preset-2 leading-preset-2 font-bold">
            How did we do?
          </h1>

          <p className="text-grey-light leading-preset-5-regular text-preset-5">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                className={`w-12 h-12 md:w-14 md:h-14 pt-1 bg-grey-medium rounded-full text-grey-light flex justify-center items-center cursor-pointer hover:bg-white transition-colors font-bold hover:text-grey-dark ${selectedRating === rating ? 'bg-orange text-grey-very-dark' : ''}`}
                onClick={() => handleRatingSelection(rating)}
              >
                {rating}
              </button>
            ))}
          </div>
          <div className="mt-2">
            <button
              className="bg-orange w-full py-3 text-grey-very-dark rounded-full text-dark-gray uppercase font-bold hover:bg-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleSubmitRating}
              disabled={!selectedRating}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Rating;
