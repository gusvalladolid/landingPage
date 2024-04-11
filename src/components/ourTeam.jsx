import alejandroProfile from "../../assets/Img/pumpum.jpg"

const people = [
  {
    name: 'Alejandro García',
    role: 'Leader',
    imageUrl:alejandroProfile,
  },
  {
    name: 'Kevin Cruz',
    role: 'Game Developer',
    imageUrl:'/assets/Img/Kevin.png',
  },
  {
    name: 'Joshua Aviles',
    role: 'Audio Engineer',
    imageUrl:'/assets/Img/Joshua.png',
  },
  {
    name: 'Gustavo Valladolid',
    role: 'Developer',
    imageUrl:'/assets/Img/gustavo.png',
  },
  {
    name: 'Fabian Escobar',
    role: 'Creative Director',
    imageUrl:'/assets/Img/fabian.jpg',
  },
  {
    name: 'Miguel Velarde',
    role: 'Game Developer',
    imageUrl:'/assets/Img/velarde.jpg',
  },
  {
    name: 'Alex Barraza',
    role: 'Project Manager',
    imageUrl:'/assets/Img/alex.png',
  },
  {
    name: 'Miguel Gamboa',
    role: 'Game Designer',
    imageUrl:'/assets/Img/gamboa.jpg',
  },
]

export default function OurTeam() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
          Team PsyMind is a group of developers, brought together by their interest in creating
          horror experiences. PsyMind began with the envisioning of a horror experience that
          takes you to ghastly locations akin to experiencing purgatory, that is, the boundary
          between life and death, while in the shoes of a medium.
          That idea kept evolving and had additions and subtractions until we reached the idea of
          “Fellisse”, a medium for hire that would be separated from her body and experience this
          boundary. That is the main idea for the game, while the demo introduces her character
          and what she does and specializes in.
          PsyMind is composed of 8 people, all specializing in certain fields, like game design,
          sound design, game development, marketing and web applications. Through these
          skills, the vision of the team is being realized and can be experienced in the upcoming
          “Fellisse.”
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-red-800">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}