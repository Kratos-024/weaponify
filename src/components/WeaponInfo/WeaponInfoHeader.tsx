import { useState } from "react";
import SketchfabModelViewer from "../ModelViewer";
import { WeaponDescLeft } from "./WeaponDesc";

export default function WeaponInfoHeader() {
  const [activeSection, setActiveSection] = useState<string>("history");

  return (
    <section>
      <div className="xl:max-w-[1480px] mx-auto mt-9 px-4">
        <div className="space-y-6">
          <div>
            <h2 className="font-semibold text-[28px] mb-4">RPG T-90 Tank</h2>
            <p className="text-[16px] leading-relaxed">
              Donec dapibus tellus sem, quis aliquam libero pharetra non. Nam
              vitae fermentum leo. Pellentesque bibendum dui eu mi tempor
              sodales. Integer gravida odio in sem laoreet tempus. Nunc vehicula
              nibh mauris, id bibendum metus facilisis iaculis. Phasellus
              suscipit dictum lacus eu auctor. Duis commodo faucibus lectus, et
              accumsan quam egestas at. Praesent eros mi, condimentum sit amet
              felis quis, hendrerit ullamcorper turpis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="h-[500px]">
              <SketchfabModelViewer />
            </div>
            <div>
              <WeaponDescLeft />
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-wrap gap-4 mb-8 ">
              <button
                onClick={() => setActiveSection("history")}
                className={`pb-4 cursor-pointer px-2 text-xl font-semibold transition-colors duration-200 ${
                  activeSection === "history"
                    ? ""
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                History
              </button>{" "}
              <button
                onClick={() => setActiveSection("appearance")}
                className={`pb-4 cursor-pointer px-2 text-xl font-semibold transition-colors duration-200 ${
                  activeSection === "appearance"
                    ? ""
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Appearance in Video Games
              </button>{" "}
              <button
                onClick={() => setActiveSection("techspec")}
                className={`pb-4 cursor-pointer px-2 text-xl font-semibold transition-colors duration-200 ${
                  activeSection === "techspec"
                    ? ""
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Tech Specification
              </button>
            </div>

            <div className="min-h-[200px]">
              <div className="text-gray-700 leading-relaxed">
                <p
                  className={`${
                    activeSection === "history" ? "block" : "hidden"
                  }`}
                >
                  The1 T-90 is 3a third-generation Russian main battle tank
                  developed in the 1990s. It was designed as an advanced version
                  of the T-72, incorporating modern fire control systems,
                  reactive armor, and improved protection. The T-90 was first
                  introduced in 1992 and has been used extensively by the
                  Russian Armed Forces and exported to various countries
                  including India, Algeria, and others. It has seen combat in
                  various conflicts and continues to be upgraded with modern
                  technology.
                </p>
                <p
                  className={`${
                    activeSection === "appearance" ? "block" : "hidden"
                  }`}
                >
                  {" "}
                  The2 T-90 is 3a third-generation Russian main battle tank
                  developed in the 1990s. It was designed as an advanced version
                  of the T-72, incorporating modern fire control systems,
                  reactive armor, and improved protection. The T-90 was first
                  introduced in 1992 and has been used extensively by the
                  Russian Armed Forces and exported to various countries
                  including India, Algeria, and others. It has seen combat in
                  various conflicts and continues to be upgraded with modern
                  technology.
                </p>
                <div
                  className={`${
                    activeSection === "techspec" ? "block" : "hidden"
                  }`}
                >
                  The3 T-90 is 3a third-generation Russian main battle tank
                  developed in the 1990s. It was designed as an advanced version
                  of the T-72, incorporating modern fire control systems,
                  reactive armor, and improved protection. The T-90 was first
                  introduced in 1992 and has been used extensively by the
                  Russian Armed Forces and exported to various countries
                  including India, Algeria, and others. It has seen combat in
                  various conflicts and continues to be upgraded with modern
                  technology.
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Dimensions & Weight
                      </h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Weight: 46.5 tons (combat loaded)</li>
                        <li>Length: 9.53 m (gun forward)</li>
                        <li>Width: 3.78 m</li>
                        <li>Height: 2.23 m</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Armament</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Main Gun: 125mm 2A46M smoothbore cannon</li>
                        <li>Secondary: 12.7mm NSVT machine gun</li>
                        <li>Coaxial: 7.62mm PKT machine gun</li>
                        <li>Ammunition: 43 rounds (main gun)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Performance</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Engine: 1000 hp V-92S2 diesel</li>
                        <li>Max Speed: 60 km/h (road)</li>
                        <li>Range: 550 km</li>
                        <li>Crew: 3 (commander, gunner, driver)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
