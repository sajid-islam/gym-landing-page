import { Plus, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-[2rem] bg-black p-3">
      {/* Image Container */}
      <div className="relative flex items-center justify-center overflow-hidden rounded-[1.5rem]">
        <Image src={product.image} alt={product.name} className="" />
      </div>

      {/* Product Details */}
      <div className="px-2 pb-2">
        <h3 className="mb-2 text-sm font-light text-white">{product.name}</h3>

        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-white">
              {product.currency}
              {product.price.toFixed(2)}
            </span>
            {/* Rating Stars */}
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < Math.floor(product.rating) ? '#22c55e' : 'transparent'}
                  className={i < Math.floor(product.rating) ? 'text-green-500' : 'text-gray-600'}
                />
              ))}
            </div>
          </div>

          {/* Add Button */}
          <Button className={'p-4'}>
            <Plus size={32} strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
