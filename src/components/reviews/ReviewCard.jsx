import { Star } from 'lucide-react';
import Image from 'next/image';

const ReviewCard = ({ review }) => {
  return (
    <div className="flex w-full flex-col justify-between rounded-3xl bg-black p-8 shadow-lg ring-1 ring-white/5 transition-transform hover:scale-[1.02]">
      <div>
        <h3 className="text-xl font-semibold text-white">{review.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-gray-400">{review.description}</p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative size-12 overflow-hidden rounded-full border border-white/10">
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white">{review.name}</span>
            <span className="text-xs text-gray-500">{review.role}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < Math.floor(review.rating) ? '#FBBF24' : 'transparent'}
                className={i < Math.floor(review.rating) ? 'text-amber-400' : 'text-gray-700'}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-gray-500">({review.rating})</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
