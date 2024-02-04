/** @format */

const ServicesInfoComponents = ({ currentItem }) => {
  const { id, image, description } = currentItem;
  return (
    <div key={id}>
      <div className="col-span-2 px-7">
        <div>
          <img src={image} alt="" className="w-full" />
        </div>

        <div>
          {description.map((desc, index) => (
            <p
              key={index}
              className="text-base pt-10 pb-5 dark:text-color-white"
              data-aos="zoom-in"
            >
              {desc.descriptions}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesInfoComponents;
