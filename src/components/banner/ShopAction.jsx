import { MapPin, MoveRight } from 'lucide-react';

const ShopAction = () => {
  return (
    <div className="top-[468px] mt-10 flex w-full items-center gap-3 lg:absolute lg:right-68 lg:mt-0 lg:w-fit xl:top-[596px] xl:right-96">
      {/* Shop Now Button */}
      <button className="flex w-full items-center justify-between gap-12 rounded-xl border-2 border-white bg-transparent px-8 py-2 transition-colors hover:bg-white/10 md:w-auto lg:py-4 xl:py-5">
        <span className="font-medium tracking-wide text-white uppercase lg:text-lg xl:text-xl">
          Shop Now
        </span>
        <MoveRight className="h-8 w-8 stroke-[1.5px] text-white" />
      </button>

      {/* Location Button */}
      <button className="flex items-center justify-center rounded-xl border-2 border-white bg-transparent p-2 transition-colors hover:bg-white/10 lg:p-4 xl:p-5">
        <MapPin className="h-8 w-8 text-white" />
      </button>
    </div>
  );
};

export default ShopAction;
