import { motion } from "framer-motion"

import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


const Wip = () => {

  return (
    <div className="flex flex-col h-screen">
        <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex bg-black-100 p-8 rounded-2xl text-center w-[50%]'
        >
            <h1 className="">Work In Progress</h1>
        </motion.div>
        </div>
    </div>
  );
};

export default SectionWrapper(Wip, "");