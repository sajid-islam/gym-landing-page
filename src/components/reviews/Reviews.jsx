import { reviews } from '@/app/data/reviews';
import { SectionHeader } from '../section-header/SectionHeader';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <section>
      <SectionHeader
        title={'What Our Clients Are Saying'}
        description={'Real Stories, Real Results - Hear From Our Athletes'}
        cplClassname={'-rotate-120 left-10 md:left-20  size-20 md:size-auto'}
        cprClassname={'rotate-90 left-0 size-20 md:size-auto'}
      />
      <div className="mt-12 grid grid-cols-1 gap-8 rounded-4xl bg-gray-200 p-4 md:grid-cols-2 md:p-8 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
