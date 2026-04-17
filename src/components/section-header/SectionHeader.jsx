import CommonPattern from '../polygons/common-pattern';

export const SectionHeader = ({ title, description, cplClassname, cprClassname }) => {
  return (
    <div>
      <div className="flex justify-between">
        <CommonPattern className={cplClassname} />
        <CommonPattern className={cprClassname} />
      </div>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-black/75">{description}</p>
    </div>
  );
};
