import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28 cursor-pointer flex flex-col" key={technology.name} onClick={() => window.open(technology.link, "_blank")}>
          {/* <BallCanvas icon={technology.icon}/> */}
          <img src={technology.icon} className="contain-content max-h-28 w-auto" />
          <p className="cursor-pointer text-center mt-1 hover:text-[#915eff]">{technology.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")