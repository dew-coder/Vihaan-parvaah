import PregnantWoman from "../../assets/img/hero-preg-woman.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="my-6 mx-20  flex justify-center items-center gap-20 flex-col">
      <div className="flex justify-between items-center gap-10">
        {/* Left Part */}
        <div className=" flex flex-col justify-center items-start gap-1 tracking-wider">
          <p className="text-3xl text-white">
            <span className="text-6xl e font-bold text-black">Ask </span>
            <span className="text-gray-800"> your</span>
          </p>
          <p className="py-2 text-6xl font-bold bg-gradient-to-r from-black to-gray-100 text-transparent bg-clip-text">
            Pregnency Question
          </p>
          <p className="text-xl  text-gray-800">for Your Better Health</p>
        </div>
        <div>
          <img src={"https://images.herzindagi.info/image/2023/Sep/4-months-pregnant-workout.jpg"} alt="mother" className="aspect-auto w-80" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center gap-10">
        <div className="flex flex-col justify-center items-center gap-6">
          <Link to="/chat">
        <button className=" bg-slate-950 text-white  text-xl px-3 py-2 rounded-2xl hover:bg-black">
          Ask Your Queries From Our ChatBot
        </button>
      </Link>
          <div className="text-gray-500  text-2xl tracking-wide">
            <span>
              Be the{"  "}
              <span className="text-black text-4xl font-bold">Best Mother</span>
            </span>
            {"  "}
            <span>
              of your{"  "}
              <span className="text-4xl text-black  text-transparent bg-clip-text">
                Child
              </span>
            </span>
          </div>
          <div className="text-black-200 text-sm  text-center w-1/2 flex justify-center items-center">
          Set forth on an enchanting adventure teeming with delight and eager anticipation. Embrace your role as the guiding light for your little one, welcoming both the physical transformations and emotional shifts with a heart brimming with love and unbridled excitement.
          </div>
        </div>
        <div className="ratio ratio-16x9 aspect-video w-full flex justify-center items-start">
          <iframe
            src="https://www.youtube.com/embed/Z6qsvKS4Q10?si=sYP7Y8SxTEsJ4_gZ"
            title="YouTube video"
            allowfullscreen
            className="rounded-3xl w-4/5 h-[57vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
