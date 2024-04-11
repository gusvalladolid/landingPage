  const Content = () => {
      return (
      <div className="pl-5 pr-5">
        <div className="relative isolate overflow-hidden bg-[#1d1d1d] px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 py">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-red-900">Fellisse Background</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">Story Telling</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-50 ">
                  Fellisse, a psychic for hire, is visited by several clients in her office. Her services are mainly the treatment of psychological traumas or the curing of phobias through the process of entering her client’s mind by detaching herself from her body and assuming a spiritual form. Once inside the psyche, the environment that results embodies the trauma or fears of the host, as such the surroundings tend to be rather hostile in turn. Her ultimate goal is to traverse the client’s mind space and locate their Anguish Nucleus and return to the material world.

                  Once the Anguish Nucleus is seized, the environment will begin to collapse since the trauma has been removed from its center. So Fellisse needs to escape before she is destroyed alongside the trauma of her client. Once outside, depending on the difficulty of the retrieval, she charges the client accordingly and assures them that their trauma will not bother them anymore.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src={"/src/assets/report.jpeg"}
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-50 lg:max-w-lg">
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Gameplay Mechanics.</h2>
                  <p className="mt-6">
                  The gameplay revolves around exploring the environment and scouring for objects that may be useful during the traversal. Blockades will often occur at parts which must be cleared through puzzles, that when solved will show the way forward. All leading up until reaching the core of the environment, which must once again be solved in order to bring the case to a close.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Sound Design.</h2>
                  <p className="mt-6">
                    The soundtrack in the game features original compositions from the development
                    team’s sound specialist. The sounds featured in the game are guaranteed to instill unease
                    and fear into your heart, as you delve into the deepest recesses of the mind’s darkness.
                    A warning is also fair when sound can put you in the highest level of alert, so it is
                    recommended to play with headphones and at a level where you can enjoy the ambiance
                    while also making sure no loud noises frighten you terribly.
                    <em> (Warning: This is a horror game, as such loud sounds are part of the experience. It is
                    recommended from those suffering from certain conditions that increase their sensitivity
                    to loud noises to take precautionary measures as to ensure their integrity.)</em>
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Advanced Puzzle Solving.</h2>
                  <p className="mt-6">
                  Progression is marked by solving several puzzles that can be found in the mental
                  environment. During testing, these puzzles have proven to take some time to complete.
                  So while the puzzles test your wit, the terrors will test your grit. All that can be said is to
                  take one’s time solving the puzzles and enjoy figuring them out. While terrors do await
                  in this experience, there is no need for it to not be fun.
                  Some puzzles may be familiar while others aren’t. Enjoy the first experience, for you
                  can only experience it for the first time once.
                  </p>
                  
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Environme Exploration.</h2>
                  <p className="mt-6">
                  Explore unique environments, molded by the characters’ traumas and fear. Brave the
                  horrors that your clients couldn’t in an effort to spare them of their torment. Ranging
                  from the ventilation system of a building that is infested with insects, to a hospital that
                  encompasses the horrors that can occur in places where life is meant to be saved.
                  Each character brings their horror to Fellise’s table and it is up to you to help her
                  navigate safely and fulfill her end of the deal.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Horrors of the mind.</h2>
                  <p className="mt-6">
                  Claustrophobia, entomophobia, hemophobia, to name a few. Fear is something that can
                  be labeled, as not everybody is afraid of the same thing. But what is true, is that while
                  someone may not be scared by these, for instance, they are at unease, uncomfortable
                  with what they’re doing. That is the goal of this experience, that no matter if you’re
                  afraid or not, the game will find a way to crawl under your skin and make you feel its
                  horrors.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-800">Check our content! Teaser and Soundtrack.</h2>
                  <p className="mt-6">
                  You can find on youtube already the <a href="https://www.youtube.com/watch?v=kQbmwu5Wn6o" target="_blank" rel="noreferrer" className="text-red-800">main soundtrack of the game</a> and also the <a className="text-red-800" href="https://www.youtube.com/watch?v=N6nXJuDFJYg" target="_blank" rel="noreferrer">teaser with sound</a> if you want to take a look on it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
  };

  export default Content;