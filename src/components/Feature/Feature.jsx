import FeatureImage from "../../assets/img/feature.png";

const Feature = () => {
  return (
    <div className="w-full flex justify-center items-center gap-20">
      <div className="w-2/5">
        <img src={"https://images.herzindagi.info/image/2023/Sep/4-months-pregnant-workout.jpg"} />
      </div>

      <div className="w-2/5  text-white flex flex-col gap-6">
        <ul className="ml-5 list-disc text-gray-500 list-outside flex gap-5 flex-col text-lg">
          <li className="">
            Pregnancy brings anticipation and excitement as new life is
            anticipated, creating an atmosphere of joy.
          </li>
          <li className="">
            Expectant mothers experience physical changes such as weight gain
            and hormonal shifts, alongside a range of emotions from joy to
            occasional
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
