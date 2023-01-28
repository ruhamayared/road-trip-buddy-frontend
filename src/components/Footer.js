import Ruhama from "./img/Ruhama-person.png"
import Brandon from "./img/Brandon-person.png"
import Rae from "./img/Rae-person.png"
import Sam from "./img/Sam-person.png"
import Github from "./img/GitHub.png"
import Linkedin from "./img/Linkedin.png"

export default function Footer() {
  const teamMembers = [
    {
      name: "Ruhama",
      linkedinLink: "",
      linkedinImg: Linkedin,
      githubLink: "https://github.com/ruhamayared",
      githubImg: Github,
      personImg: Ruhama,
    },
    {
      name: "Samantha",
      linkedinLink: "",
      linkedinImg: Linkedin,
      githubLink: "https://github.com/samwhitford11",
      githubImg: Github,
      personImg: Sam,
    },
    {
      name: "Rae",
      linkedinLink: "",
      linkedinImg: Linkedin,
      githubLink: "https://github.com/raeoxfordhebron",
      githubImg: Github,
      personImg: Rae,
    },
    {
      name: "Brandon",
      linkedinLink: "",
      linkedinImg: Linkedin,
      githubLink: "https://github.com/BrandonHaupt",
      githubImg: Github,
      personImg: Brandon,
    },
  ]

  return (
    <div className="footerContainer">
      {teamMembers.map((team, idx) => (
        <div className="teamContainer" key={idx}>
          <img src={team.personImg} alt="shiloette of a person" />
          <div className="social">
            <a href={team.githubLink} target="_blank" rel="noopener noreferrer">
              <img src={team.githubImg} alt="placeholder" target="_blank" />
            </a>
            <a href={team.linkedinLink} target="_blank" rel="noopener noreferrer">
              <img src={team.linkedinImg} alt="placeholder" target="_blank" />
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
