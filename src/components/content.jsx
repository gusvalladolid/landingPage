  const Content = () => {
      return (
      <div className="pl-5 pr-5">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 py">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">Fellisse Background</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Story Telling</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                    eget aliquam. Quisque id at vitae feugiat egestas.
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>
                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                    semper sed amet vitae sed turpis id.
                  </p>
                  <ul role="list" className="mt-8 space-y-8 text-gray-600">
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900">Lorem Impsum.</strong> Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                        blanditiis ratione.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
                        ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                      </span>
                    </li>
                    <li className="flex gap-x-3">
                      <span>
                        <strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
                        vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                      </span>
                    </li>
                  </ul>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
                  <p className="mt-6">
                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                    turpis ipsum eu a sed convallis diam.
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