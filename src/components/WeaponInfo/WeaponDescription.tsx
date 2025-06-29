import { useState } from "react";
import type { ResponseWeaponData } from "../../types/weapon";

export const WeaponDescription = ({
  weaponData,
}: {
  weaponData: ResponseWeaponData;
}) => {
  const history = weaponData["history"];
  const specsTech = weaponData["specsTech"];
  const appearances = weaponData["appearance"];

  const [activeSection, setActiveSection] = useState<string>("history");

  return (
    <section>
      {" "}
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
            <div
              className={`${activeSection === "history" ? "block" : "hidden"}`}
            >
              {history.map((item, index) => (
                <div key={index} className="space-y-2 ">
                  <h3 className="text-[28px] font-semibold ">{item.title}</h3>
                  <div className="mb-4">
                    {item.points.map((point, idx) => (
                      <p key={idx}>{point}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`${
                activeSection === "appearance" ? "block" : "hidden"
              }`}
            >
              {appearances.map((appearance) => {
                return (
                  <div
                    key={appearance.points + appearance.title}
                    className="space-y-2"
                  >
                    <h3 className="text-[28px] font-semibold">
                      {appearance.title}
                    </h3>
                    <div className="mb-4 ">
                      {appearance.points.map((point, idx) =>
                        point.includes("http") ? (
                          <img src={point} />
                        ) : (
                          <p key={idx}>{point}</p>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className={`${activeSection === "techspec" ? "block" : "hidden"}`}
            >
              {specsTech.map((section, index) => {
                if (section.title && section.points) {
                  return (
                    <div key={index} className="space-y-2">
                      <h3 className="text-[28px] font-semibold">
                        {section.title}
                      </h3>
                      <div className="mb-4">
                        {section.points.map((point, idx) => (
                          <p key={idx}>{point}</p>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (
                  section.dimensionsAndWeight &&
                  section.armament &&
                  section.performance
                ) {
                  return (
                    <div key={index} className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">
                          Dimensions & Weight
                        </h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Weight: {section.dimensionsAndWeight.weight}</li>
                          <li>Length: {section.dimensionsAndWeight.length}</li>
                          <li>Width: {section.dimensionsAndWeight.width}</li>
                          <li>Height: {section.dimensionsAndWeight.height}</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Armament</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Main Gun: {section.armament.mainGun}</li>
                          <li>Secondary: {section.armament.secondary}</li>
                          <li>Coaxial: {section.armament.coaxial}</li>
                          <li>
                            Ammunition: {section.armament.ammunitionCapacity}
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Performance</h4>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Engine: {section.performance.engine}</li>
                          <li>Max Speed: {section.performance.maxSpeed}</li>
                          <li>Range: {section.performance.range}</li>
                          <li>Crew: {section.performance.crew}</li>
                        </ul>
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
