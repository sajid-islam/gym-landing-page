import { products } from '@/app/data/products';
import { SectionHeader } from '../section-header/SectionHeader';
import ProductCard from './ProtuctCard';

const OurProducts = () => {
  return (
    <section>
      <SectionHeader
        title="Our Products"
        description="Fuel Your Workouts with Protein-Packed Nutrition"
        cplClassname={'left-10 md:left-32 size-20 md:size-auto'}
        cprClassname={'size-20 md:size-auto'}
      />
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
