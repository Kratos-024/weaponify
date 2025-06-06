import { getDatabase, set, ref, get } from "firebase/database";
import {
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  weaponAccessories,
  tnt,
  meleeWeapons,
  historicalWeapon,
} from "../../public/weapons";
import {
  type AiGenratedWeaponData,

  
} from "../../public/types/weapon";
import { app } from "../firebase/fireSdk";

const addWeapons = (
  weaponUrl: string,
  weaponModel: string,
  _id: string,
  sNo: number
) => {
  try {
    const db = getDatabase(app);

    set(ref(db, `weaponUrl/${weaponModel}/${_id}`), {
      urlString: weaponUrl,
      serialNumber: sNo,
      category: weaponModel,
      uniqueId: _id,
    });
  } catch (error) {
    console.log(error);
  }
};
const arrayWeapon = [
  assualtRifles,
  tanks,
  semiAutoMatic,
  sniperRefiles,
  weaponAccessories,
  tnt,
  meleeWeapons,
  historicalWeapon,
];
function addArrayOfWeaponsToDB() {
  arrayWeapon.map((weaponObject) => {
    weaponObject.map((item) => {
      try {
        addWeapons(item.sketchFabUrl, item.category, item.uniqueCode, item.sNo);
      } catch (error) {
        console.log(error);
      }
    });
  });
}


const getEachWeapon = async (id: string, name: string) => {
  try {
    const db = getDatabase(app);
    const snapshot = await get(ref(db, `weaponData/${name}/${id}`));

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};
const addDataWeapon = async (weaponData: AiGenratedWeaponData) => {
  try {
    const db = getDatabase(app);
    const name = weaponData[0].name;
    const id = weaponData[4].uniqueCode;

    await set(ref(db, `weaponData/${name}/${id}`), {
      sketchFabUrl: weaponData[4].sketchFabUrl,
      id,
      name,
      specsTech: weaponData[1].specsTech,
      appearance: weaponData[2].appearance,
      history: weaponData[3].history,
    });
    console.log(`Weapon data for ${name} saved successfully.`);
    return true;
  } catch (error) {
    console.error("Error saving weapon data:", error);
    throw error;  // re-throw to let caller handle it
  }
};

const addWeaponToDB = async (weapon: AiGenratedWeaponData) => {
  try {
    const response = await addDataWeapon(weapon);
    console.log(weapon[0].name)
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};




// export const hk416Data: AiGenratedWeaponData = [
//   {
//     name: "HK416 Full ReWorked"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The HK416 was manufactured by the renowned German company Heckler & Koch, known for producing high-quality firearms used worldwide by military and law enforcement agencies. This rifle utilizes the 5.56×45mm NATO caliber, making it compatible with standard NATO ammunition, facilitating interoperability with allied forces.",
//           "It features a robust gas-operated, short-stroke piston system with a rotating bolt, which significantly improves reliability and reduces fouling compared to traditional direct impingement designs. This system enhances the rifle's durability in adverse environments such as dust, mud, and sand.",
//           "The HK416 boasts a cyclic rate of fire of approximately 850 rounds per minute, providing a balance between controlled automatic fire and manageable recoil for effective target engagement in close to medium range combat scenarios.",
//           "Its barrel length measures 14.5 inches (370 mm), optimized for a balance between maneuverability and ballistic performance. The rifle achieves a muzzle velocity of approximately 910 meters per second, delivering consistent accuracy and lethality.",
//           "Magazines compatible with the HK416 include the widely used STANAG magazines in 20, 30, or 40-round capacities, allowing soldiers flexibility based on mission requirements. The firing modes vary among semi-automatic, full-automatic, and three-round burst depending on the variant and configuration.",
//           "The rifle’s weight, at around 3.85 kilograms unloaded with a standard barrel, provides an optimal balance that allows soldiers to carry it comfortably without compromising stability or accuracy during rapid movements."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approximately 3.85 kg (unloaded, standard barrel length 14.5 inches), balancing durability and portability for infantry use.",
//           length: "Overall length with stock extended is about 880 mm, providing a good compromise between maneuverability and accuracy.",
//           width: "Approximately 75 mm, designed to be ergonomic and compatible with tactical attachments.",
//           height: "About 220 mm, compact enough for ease of handling in close quarters."
//         },
//         armament: {
//           mainGun: "5.56×45mm NATO assault rifle chambered weapon system, modular with various optics and accessories support.",
//           secondary: "Optional under-barrel grenade launcher like the M320 or M203 can be mounted to expand tactical capabilities.",
//           coaxial: "No coaxial weapon system, as this is an individual infantry rifle.",
//           ammunitionCapacity: "Standard 30-round STANAG magazines; options for high-capacity magazines such as 100-round Beta C-Mag drum magazines."
//         },
//         performance: {
//           engine: "Short-stroke gas piston system with a rotating bolt for enhanced reliability, reduced fouling, and better heat management compared to direct impingement.",
//           maxSpeed: "Not applicable as a handheld weapon; optimized for quick handling and rapid target acquisition.",
//           range: "Effective combat range up to 500 meters with iron sights, extendable beyond 600 meters when using optical sights.",
//           crew: "Operated by a single soldier, designed for ease of use, rapid reload, and maintenance in field conditions."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Build",
//         points: [
//           "The HK416 features a sleek, matte black or flat dark earth finish designed to minimize reflections and provide a tactical advantage by blending into various operational environments. Its construction utilizes high-strength polymers and aircraft-grade aluminum to balance durability and weight reduction.",
//           "It comes equipped with a quad-rail handguard featuring Picatinny rails on all four sides, allowing the attachment of a wide array of tactical accessories such as lights, lasers, grips, and bipods tailored to the mission’s requirements.",
//           "The telescoping stock is adjustable to six positions, allowing operators to customize the length of pull for comfort, shooting stance, and body armor accommodation.",
//           "Ambidextrous controls, including the fire selector and magazine release, ensure that both right- and left-handed shooters can operate the weapon efficiently without compromising speed or safety."
//         ]
//       },
//       {
//         title: "Optics and Attachments",
//         points: [
//           "The rifle’s flat-top receiver with a continuous Picatinny rail system supports an extensive range of optics, from simple red dot sights for rapid target acquisition to magnified scopes like the ACOG for mid-to-long range engagements.",
//           "Muzzle devices such as flash suppressors, compensators, and sound suppressors can be mounted easily, adapting the weapon to stealth or recoil management needs.",
//           "Tactical lasers and infrared illuminators can be attached for enhanced target designation in low-light or night operations.",
//           "The rifle supports mounting under-barrel grenade launchers such as the M320 or M203, significantly expanding its firepower capabilities."
//         ]
//       },
//       {
//         title: "Ergonomics",
//         points: [
//           "The pistol grip features a rubberized texture for enhanced grip security and comfort during prolonged use or adverse weather conditions.",
//           "The bolt catch and forward assist have been ergonomically redesigned to improve tactile feedback and allow quicker manual operation when clearing malfunctions or performing tactical reloads.",
//           "Its modular architecture supports quick changes to barrels, handguards, and stocks, enabling soldiers to rapidly configure the weapon to different combat roles or personal preferences."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Origins and Development",
//         points: [
//           "The HK416 was developed by Heckler & Koch beginning in 2001 as an improvement over the widely used M4 carbine platform, aiming to solve reliability issues caused by the direct impingement gas system used in the M4 and M16 rifles.",
//           "Adopting a short-stroke gas piston system, the HK416 was designed to offer better resistance to fouling and overheating, thereby increasing operational reliability in harsh conditions such as desert and jungle warfare.",
//           "The weapon was initially adopted by U.S. special operations forces, including the elite Delta Force, which rigorously tested and deployed the rifle in combat operations worldwide."
//         ]
//       },
//       {
//         title: "Combat Proven",
//         points: [
//           "The HK416 gained widespread recognition after being used by SEAL Team 6 during Operation Neptune Spear, the raid on Osama bin Laden's compound in 2011, highlighting its effectiveness and reliability in critical, high-stakes missions.",
//           "The rifle has been extensively field-tested in various environments, ranging from urban warfare in the Middle East to jungle operations in Southeast Asia, proving its adaptability and durability under diverse operational stresses.",
//           "Its robust design has earned it a reputation as a dependable rifle, favored by numerous special forces and military units around the globe."
//         ]
//       },
//       {
//         title: "Global Adoption",
//         points: [
//           "Today, the HK416 is in service with over 20 countries worldwide, including Germany, France, Norway, and the United States, marking it as one of the most successful modern assault rifles in contemporary military history.",
//           "The rifle family includes various barrel length options, from compact 10.4-inch barrels suitable for close quarters combat to longer 16.5-inch barrels optimized for accuracy at range.",
//           "In addition to military use, civilian variants like the MR556 and MR223 are produced for law enforcement and civilian markets, adapting the rifle platform to a wide range of users and legal frameworks."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "64b92e06-ecb6-461f-90ba-d730d7d96150",
//     sketchFabUrl: '<div class="sketchfab-embed-wrapper"> <iframe title="HK416 Full ReWorked" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="640" height="480" src="https://sketchfab.com/models/669a9ee17dc44580b53425a08c2f83d0/embed?ui_theme=dark"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/hk416-full-reworked-669a9ee17dc44580b53425a08c2f83d0?utm_medium=embed&utm_campaign=share-popup&utm_content=669a9ee17dc44580b53425a08c2f83d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> HK416 Full ReWorked </a> by <a href="https://sketchfab.com/moco80?utm_medium=embed&utm_campaign=share-popup&utm_content=669a9ee17dc44580b53425a08c2f83d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> MojoLeeDa </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=669a9ee17dc44580b53425a08c2f83d0" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
//   }
// ];



// export const ak47Data: AiGenratedWeaponData = [
//   {
//     name: "AK-47"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The AK-47, officially known as the Avtomat Kalashnikova model 1947, was designed by Mikhail Kalashnikov and introduced in 1947 by the Soviet Union. It fires the 7.62×39mm cartridge, which delivers substantial stopping power with manageable recoil for both trained and conscripted soldiers.",
//           "It operates using a long-stroke gas piston system with a rotating bolt, which provides exceptional reliability and resistance to fouling in harsh environments such as dirt, mud, and sand. This simple yet robust mechanism allows the AK-47 to function even under adverse battlefield conditions where maintenance is difficult.",
//           "The cyclic rate of fire is approximately 600 rounds per minute, balancing controlled automatic fire and manageable recoil for effective suppression and engagement at short to medium ranges.",
//           "The standard barrel length measures about 16.3 inches (415 mm), optimized for stable ballistics and accuracy in typical combat scenarios. The rifle has an effective firing range of about 300–400 meters with iron sights, suitable for most infantry engagements.",
//           "Magazines have a typical capacity of 30 rounds, made from steel or polymer, designed for ruggedness and easy reloads under pressure.",
//           "The AK-47 weighs around 4.3 kilograms unloaded, making it heavier than many modern assault rifles but favored for its durability and reliability in all climates."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approximately 4.3 kg (unloaded), known for its rugged construction and durability.",
//           length: "Overall length is about 880 mm, providing a balance between maneuverability and stability.",
//           width: "Approximately 75 mm, designed with ergonomics for ease of handling and control.",
//           height: "About 195 mm, compact enough for rapid handling in close quarters."
//         },
//         armament: {
//           mainGun: "7.62×39mm caliber assault rifle, the primary infantry weapon of Soviet and many post-Soviet states.",
//           secondary: "No standard secondary weapon, but can be complemented with under-barrel grenade launchers in modern variants.",
//           coaxial: "None, as this is an individual infantry rifle.",
//           ammunitionCapacity: "Standard 30-round detachable box magazines, with optional drum magazines available for increased capacity."
//         },
//         performance: {
//           engine: "Long-stroke gas piston system with a rotating bolt for maximum reliability and ease of maintenance.",
//           maxSpeed: "Not applicable; designed for infantry use with emphasis on durability and ease of use.",
//           range: "Effective combat range up to 400 meters with iron sights; improved accuracy possible with optics.",
//           crew: "Operated by a single soldier; simple design enables quick training and operation."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Build",
//         points: [
//           "The AK-47 has a distinctive design characterized by its curved magazine, wooden stock, and simple yet robust construction. The wooden components are traditionally made from laminated birch or other durable woods, giving the weapon a classic appearance while providing solid durability.",
//           "Its steel receiver and barrel assembly are treated with a black phosphate finish to protect against corrosion and wear, allowing the rifle to withstand harsh environments and rough handling.",
//           "The rifle features a fixed wooden stock or folding metal stock variants for different operational needs, providing versatility for infantry in different combat roles.",
//           "The weapon’s controls, including the charging handle, safety lever, and magazine release, are designed for ease of use, with the large safety lever doubling as a dust cover to protect the internals from debris."
//         ]
//       },
//       {
//         title: "Sights and Accessories",
//         points: [
//           "Equipped with simple iron sights comprising a front post and a rear notch adjustable for elevation, the AK-47’s sighting system is durable and easy to use under stress.",
//           "Many modern variants and aftermarket accessories provide rails and mounts for optical sights, improving accuracy and versatility.",
//           "Muzzle devices such as compensators or flash suppressors can be fitted depending on tactical needs, with some models adapted for suppressor attachments.",
//           "While originally not designed for modular attachments, newer versions of the AK platform have been adapted to accept tactical lights, lasers, grips, and grenade launchers."
//         ]
//       },
//       {
//         title: "Ergonomics",
//         points: [
//           "Though heavier than many modern rifles, the AK-47 is praised for its simplicity and ease of operation, making it accessible to soldiers with minimal training.",
//           "The wide trigger guard accommodates gloved hands, and the overall weight distribution contributes to controllable recoil despite the powerful 7.62×39mm round.",
//           "The rifle’s straightforward construction allows for quick field stripping and maintenance without specialized tools."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Designed by Mikhail Kalashnikov during World War II, the AK-47 was adopted by the Soviet Armed Forces in 1949 as a reliable, easy-to-manufacture assault rifle for mass infantry use.",
//           "Its design emphasized simplicity, reliability, and low production costs, enabling rapid mass production and distribution across the Warsaw Pact and allied nations.",
//           "The AK-47 quickly became the symbol of Soviet military power and was widely exported and copied worldwide, with numerous variants developed over the decades."
//         ]
//       },
//       {
//         title: "Combat History and Impact",
//         points: [
//           "The AK-47 has seen extensive combat in almost every major conflict since its introduction, including the Korean War, Vietnam War, numerous Middle Eastern conflicts, and ongoing engagements across Africa and Asia.",
//           "Its ruggedness, ease of use, and reliability under harsh conditions made it a favored weapon among irregular forces, guerrilla fighters, and conventional armies alike.",
//           "The rifle’s widespread use and iconic design have made it one of the most recognized and influential firearms in history."
//         ]
//       },
//       {
//         title: "Legacy and Variants",
//         points: [
//           "The AK-47 spawned a family of rifles and derivatives, including the AKM, AK-74, and countless licensed and unlicensed copies used globally.",
//           "It remains in service today with many military and paramilitary forces, often updated with modern accessories and improvements to maintain combat relevance.",
//           "The AK-47’s design principles continue to influence modern assault rifle development, emphasizing reliability and ease of use over extreme precision."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "7ab0c4ef-8ecb-4c24-b5fe-3afed1d6f30d",
//     sketchFabUrl: '<div class="sketchfab-embed-wrapper"> <iframe title="AK-47" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ZMhWW9znpiBAhxDSomqX2kSSfg/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-47-ZMhWW9znpiBAhxDSomqX2kSSfg?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK-47 </a> by <a href="https://sketchfab.com/millenia3d?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Azure Midsummer (millenia3d) </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ZMhWW9znpiBAhxDSomqX2kSSfg" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
//   }
// ];


// export const ak74Data: AiGenratedWeaponData = [
//   {
//     name: "AK-74"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The AK-74 is a Soviet-designed assault rifle introduced in the early 1970s as a modernization of the iconic AK-47 platform. It fires the smaller 5.45×39mm cartridge, which provides higher velocity, flatter trajectory, and reduced recoil compared to the older 7.62×39mm round.",
//           "The rifle uses a gas-operated, long-stroke piston system with a rotating bolt, ensuring excellent reliability and robustness in harsh environmental conditions such as dust, mud, and extreme temperatures.",
//           "The cyclic rate of fire is approximately 600 rounds per minute, allowing controlled automatic fire suitable for infantry engagements at medium ranges.",
//           "Barrel length measures around 415 mm (16.3 inches), similar to the AK-47, providing a balance of accuracy and maneuverability.",
//           "The effective range extends up to 500 meters, with improved accuracy and penetration compared to the AK-47 due to the modernized cartridge and rifling.",
//           "The rifle typically uses 30-round detachable box magazines made of lightweight polymer, contributing to overall weight reduction and durability.",
//           "Weight unloaded is approximately 3.3 kilograms, significantly lighter than the AK-47, making it easier to carry and handle during prolonged operations."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approximately 3.3 kg unloaded, designed for greater mobility and ease of handling.",
//           length: "Overall length is about 940 mm, providing a slightly longer weapon profile for enhanced ballistic performance.",
//           width: "Approximately 70 mm, maintaining compact ergonomics.",
//           height: "About 195 mm, consistent with traditional Kalashnikov design."
//         },
//         armament: {
//           mainGun: "5.45×39mm caliber assault rifle, standard issue in many former Soviet and post-Soviet states.",
//           secondary: "No standard secondary armament, but can be fitted with under-barrel grenade launchers in modern configurations.",
//           coaxial: "None, as it is an individual infantry weapon.",
//           ammunitionCapacity: "30-round detachable polymer magazines, designed for lightweight and durability."
//         },
//         performance: {
//           engine: "Long-stroke gas piston with rotating bolt, known for extreme reliability and ease of maintenance.",
//           maxSpeed: "Not applicable; intended for infantry use with emphasis on handling and reliability.",
//           range: "Effective firing range up to 500 meters, improved over previous AK models.",
//           crew: "Operated by a single soldier; designed for ease of use and rapid training."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "The AK-74 retains the classic Kalashnikov silhouette but incorporates modern materials such as synthetic polymer stocks and handguards to reduce weight and improve durability.",
//           "Its design includes a distinctive muzzle brake that significantly reduces recoil and muzzle climb during automatic fire, enhancing accuracy.",
//           "The weapon features a stamped steel receiver for ease of manufacturing and weight reduction compared to the milled receivers of earlier AK models.",
//           "Controls and ergonomics remain familiar to users of earlier Kalashnikov rifles, including the prominent safety lever and charging handle placement.",
//           "The weapon is often fitted with side rails to mount optics, allowing soldiers to equip red dot sights or scopes for enhanced targeting."
//         ]
//       },
//       {
//         title: "Sights and Accessories",
//         points: [
//           "The AK-74 is equipped with rugged iron sights featuring a front post and a rear tangent sight adjustable for elevation up to 1,000 meters.",
//           "Modern variants frequently incorporate Picatinny rails or proprietary mounting systems to support optics, tactical lights, and laser aiming devices.",
//           "The muzzle device doubles as a flash suppressor and compensator, effectively reducing visible signature and recoil.",
//           "Stock options include fixed polymer stocks, folding metal stocks for airborne or vehicle troops, and adjustable stocks in some modernized versions."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "The reduced recoil and lighter weight of the AK-74 improve shooter control and accuracy, particularly in full-auto mode.",
//           "The rifle’s modular design allows for straightforward field maintenance without specialized tools, maintaining the hallmark reliability of the Kalashnikov family.",
//           "Textured grips and polymer furniture provide a secure hold in various weather conditions."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Developed by the Soviet Union in response to NATO’s adoption of small-caliber high-velocity rounds, the AK-74 was introduced in the early 1970s to replace the AK-47 and AKM.",
//           "Its 5.45×39mm cartridge was designed to improve range, accuracy, and terminal ballistics while reducing recoil and ammunition weight.",
//           "The rifle saw its first widespread deployment in the Soviet–Afghan War, where its reliability and improved ergonomics were tested in rugged combat conditions."
//         ]
//       },
//       {
//         title: "Combat and Legacy",
//         points: [
//           "The AK-74 became the standard issue rifle for Soviet and later Russian forces, as well as various allied nations, maintaining a significant role in global infantry arsenals.",
//           "Its design influenced many derivative rifles and modernization programs, keeping the Kalashnikov platform relevant in the 21st century.",
//           "The rifle has been widely exported and remains in use in conflicts worldwide, favored for its balance of durability, firepower, and ease of use."
//         ]
//       },
//       {
//         title: "Modernization and Variants",
//         points: [
//           "Numerous upgrades and variants of the AK-74 exist, including models with improved barrel rifling, optics mounts, and accessory compatibility.",
//           "The platform continues to evolve with newer versions like the AK-12, which incorporate modern tactical features while retaining the classic AK reliability.",
//           "The AK-74’s impact on assault rifle design is profound, symbolizing the evolution from large-caliber battle rifles to lighter, more controllable infantry weapons."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "978a546f-8a86-4fe9-ba58-c7febf38a663",
//     sketchFabUrl: '<div class="sketchfab-embed-wrapper"> <iframe title="AK-74" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/44c6581b852a4a03a0cd509be06f0dd8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-74-44c6581b852a4a03a0cd509be06f0dd8?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK-74 </a> by <a href="https://sketchfab.com/dimalukomo?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> madridista_9248 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
//   }
// ];


// export const ak103Data: AiGenratedWeaponData = [
//   {
//     name: "AK-103"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The AK-103 is a modernized variant of the AK-47 series, chambered for the 7.62×39mm cartridge, combining the rugged reliability of the classic Kalashnikov design with improved materials and manufacturing techniques.",
//           "It features a gas-operated, long-stroke piston system with a rotating bolt, renowned for durability and operation under harsh conditions including dirt, mud, and extreme weather.",
//           "The cyclic rate of fire is about 600 rounds per minute, offering a balanced combination of firepower and controllability in both semi-automatic and fully automatic modes.",
//           "The barrel length measures approximately 415 mm, consistent with the AKM and AK-47, optimizing effective range and accuracy while maintaining maneuverability.",
//           "The AK-103 has an effective firing range of around 400 meters, with reliable terminal ballistics for infantry engagements at short to medium distances.",
//           "Standard magazines hold 30 rounds and are constructed from durable polymer to reduce weight while maintaining structural integrity.",
//           "The unloaded weight is roughly 3.6 kg, heavier than the AK-74 but still manageable for infantry soldiers in various combat scenarios."
//         ],
//         dimensionsAndWeight: {
//           weight: "3.6 kg unloaded, balancing durability and maneuverability.",
//           length: "Overall length approximately 943 mm, providing effective ballistic performance.",
//           width: "About 70 mm, maintaining the ergonomic profile typical of Kalashnikov rifles.",
//           height: "Around 195 mm, consistent with the AK platform."
//         },
//         armament: {
//           mainGun: "7.62×39mm assault rifle, widely used due to its stopping power and availability.",
//           secondary: "No standard secondary weapon, but compatible with grenade launchers and other attachments.",
//           coaxial: "None, as this is an individual infantry weapon.",
//           ammunitionCapacity: "30-round detachable polymer magazines, optimized for durability and weight."
//         },
//         performance: {
//           engine: "Gas-operated, long-stroke piston system with rotating bolt, ensuring high reliability.",
//           maxSpeed: "N/A (infantry weapon).",
//           range: "Effective range about 400 meters.",
//           crew: "Operated by a single soldier, designed for ease of training and maintenance."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "The AK-103 maintains the classic AK appearance with a modern twist, featuring synthetic polymer furniture including the stock, handguard, and pistol grip, which improves durability and reduces weight compared to wood.",
//           "It incorporates a muzzle brake that effectively reduces recoil and muzzle rise, improving control during automatic fire.",
//           "The stamped steel receiver offers strength while facilitating cost-effective mass production.",
//           "This model often includes side-mounted rails for optical sights, allowing quick attachment of scopes, red dots, and night vision devices.",
//           "The overall design keeps the rugged simplicity and ease of maintenance that the AK series is famous for."
//         ]
//       },
//       {
//         title: "Sights and Accessories",
//         points: [
//           "The AK-103 uses traditional iron sights with a front post and rear tangent sight adjustable for distances up to 1,000 meters.",
//           "It supports various optics mounting systems including Picatinny rails, enabling users to customize the rifle for different missions.",
//           "The rifle can be fitted with under-barrel grenade launchers and other tactical accessories.",
//           "Polymer furniture is resistant to weather and rough handling, ensuring reliability in combat."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "The reduced recoil compared to older AK models improves shooter comfort and accuracy, especially in automatic mode.",
//           "The weight distribution and grip design offer better control and handling in close-quarters combat as well as open environments.",
//           "Maintenance is straightforward, with minimal disassembly required to clean or replace parts."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "The AK-103 was developed in the 1990s as part of Russia’s effort to modernize its infantry rifles while maintaining compatibility with the widely used 7.62×39mm cartridge.",
//           "It is part of the AK-100 series which introduced polymer furniture and other modern improvements over the classic AKM design.",
//           "The rifle was intended to offer a balance of power, reliability, and modern ergonomic features for Russian forces and export customers."
//         ]
//       },
//       {
//         title: "Combat Use and Export",
//         points: [
//           "The AK-103 has seen widespread use by Russian military and police forces as well as numerous international clients, especially in countries that prefer the 7.62×39mm round.",
//           "Its robust design has proven effective in diverse environments, from urban warfare to jungle and desert combat.",
//           "The rifle has been exported extensively and remains a popular choice for armed forces and paramilitary groups worldwide."
//         ]
//       },
//       {
//         title: "Legacy and Upgrades",
//         points: [
//           "The AK-103 continues the legacy of the Kalashnikov family with enhanced durability and user-friendly features.",
//           "Ongoing upgrades include improved sighting systems, ergonomic improvements, and compatibility with modern tactical accessories.",
//           "It represents the enduring appeal of the Kalashnikov design philosophy: simplicity, ruggedness, and effectiveness."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "e26502a9-8427-48c8-a485-c1d0e38b542f",
//     sketchFabUrl: '<div class="sketchfab-embed-wrapper"> <iframe title="AK 103" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/863dbd7b0aa54a839ccdfe43d98c778a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-103-863dbd7b0aa54a839ccdfe43d98c778a?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK 103 </a> by <a href="https://sketchfab.com/Frostoise?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Frostoise </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
//   }
// ];

// export const m4CarbineData: AiGenratedWeaponData = [
//   {
//     name: "M4 Carbine"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The M4 Carbine is a 5.56×45mm NATO, gas-operated, air-cooled, magazine-fed, selective fire carbine with a telescoping stock, designed for close quarters and versatility.",
//           "It uses a direct impingement gas system with a rotating bolt, offering a lighter weight and reduced recoil compared to piston-driven rifles.",
//           "The standard magazine capacity is 30 rounds, compatible with all M16 magazines, allowing interoperability in ammunition supply.",
//           "Effective range is approximately 500 to 600 meters, suitable for infantry engagements at short to medium ranges.",
//           "The cyclic rate of fire is around 700 to 950 rounds per minute, providing controlled automatic fire capabilities.",
//           "The carbine weighs approximately 3.4 kg (7.5 lbs) unloaded, balancing portability and firepower for rapid maneuvering.",
//           "It has a barrel length of 14.5 inches (370 mm), making it shorter and more maneuverable than the M16, optimized for urban and close-quarters combat."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 3.4 kg (7.5 lbs) unloaded.",
//           length: "Overall length about 840 mm (33 inches) with stock extended, and 757 mm (29.75 inches) with stock collapsed.",
//           width: "Approximately 64 mm (2.5 inches).",
//           height: "Around 264 mm (10.4 inches) including sights."
//         },
//         armament: {
//           mainGun: "5.56×45mm NATO caliber rifle.",
//           secondary: "Compatible with under-barrel grenade launchers such as the M203.",
//           coaxial: "None as it is an individual weapon.",
//           ammunitionCapacity: "30-round detachable box magazines standard."
//         },
//         performance: {
//           engine: "Direct impingement gas-operated, rotating bolt system.",
//           maxSpeed: "N/A (manually operated weapon).",
//           range: "Effective range of 500–600 meters depending on target type.",
//           crew: "Operated by a single infantry soldier."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "The M4 Carbine features a collapsible stock, making it adaptable to different combat environments and soldier body types.",
//           "It has a flat-top receiver with a Picatinny rail system to mount a wide variety of optics, sights, and accessories.",
//           "The barrel is shorter than the M16, providing better maneuverability in tight spaces without sacrificing too much range.",
//           "Durable polymer handguards and stock reduce weight and improve handling.",
//           "Flash suppressor fitted at the muzzle reduces muzzle flash signature during firing."
//         ]
//       },
//       {
//         title: "Sights and Accessories",
//         points: [
//           "Equipped with adjustable iron sights and a removable carrying handle on earlier models.",
//           "Modern M4 variants have full-length Picatinny rails for mounting red dot sights, scopes, lasers, and tactical lights.",
//           "Supports attachment of under-barrel grenade launchers, foregrips, and suppressors for mission-specific configurations.",
//           "Ambidextrous controls on newer variants improve usability for left- and right-handed shooters."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "The collapsible stock allows easy adjustment of length of pull for different users or combat gear setups.",
//           "Lightweight design and balance enhance maneuverability and reduce fatigue during extended operations.",
//           "Charging handle positioned at the rear allows quick manual cycling.",
//           "The modular design facilitates field maintenance and rapid component replacement."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Developed in the 1980s as a shorter, lighter alternative to the M16 rifle for use by infantry, vehicle crews, and special operations forces.",
//           "Officially adopted by the U.S. military in the mid-1990s and saw extensive service in conflicts such as Iraq and Afghanistan.",
//           "Designed to provide increased maneuverability and versatility in urban and close-quarters combat while maintaining compatibility with standard 5.56mm ammunition."
//         ]
//       },
//       {
//         title: "Service and Variants",
//         points: [
//           "The M4 Carbine has been adopted by many military and law enforcement units worldwide.",
//           "Numerous variants exist, including the M4A1 with fully automatic fire, the SOPMOD kit with advanced accessories, and various improvements to ergonomics and durability.",
//           "Its design heavily influenced the development of modern carbines and personal defense weapons."
//         ]
//       },
//       {
//         title: "Legacy and Impact",
//         points: [
//           "The M4 remains a key infantry weapon in the U.S. and allied forces, prized for its adaptability and performance in diverse combat environments.",
//           "Ongoing upgrades focus on enhanced optics integration, suppressors, and new barrel materials to extend service life and improve accuracy.",
//           "The M4 Carbine set the standard for modular assault rifles in the 21st century."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "ee6e82f9-1c49-42bc-b49b-bd44b3a566c0",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="M4 Carbine" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/b516a8416b1044a7839b4a89dc24ca38/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m4-carbine-b516a8416b1044a7839b4a89dc24ca38?utm_medium=embed&utm_campaign=share-popup&utm_content=b516a8416b1044a7839b4a89dc24ca38" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M4 Carbine </a> by <a href="https://sketchfab.com/sinnik?utm_medium=embed&utm_campaign=share-popup&utm_content=b516a8416b1044a7839b4a89dc24ca38" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SINNIK </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=b516a8416b1044a7839b4a89dc24ca38" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const ak103Data: AiGenratedWeaponData = [
//   {
//     name: "AK 103"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The AK-103 is a modernized variant of the AK-47 series, chambered for the 7.62×39mm cartridge, combining the rugged reliability of the classic Kalashnikov design with improved materials and manufacturing techniques.",
//           "It features a gas-operated, long-stroke piston system with a rotating bolt, renowned for durability and operation under harsh conditions including dirt, mud, and extreme weather.",
//           "The cyclic rate of fire is about 600 rounds per minute, offering a balanced combination of firepower and controllability in both semi-automatic and fully automatic modes.",
//           "The barrel length measures approximately 415 mm, consistent with the AKM and AK-47, optimizing effective range and accuracy while maintaining maneuverability.",
//           "The AK-103 has an effective firing range of around 400 meters, with reliable terminal ballistics for infantry engagements at short to medium distances.",
//           "Standard magazines hold 30 rounds and are constructed from durable polymer to reduce weight while maintaining structural integrity.",
//           "The unloaded weight is roughly 3.6 kg, heavier than the AK-74 but still manageable for infantry soldiers in various combat scenarios."
//         ],
//         dimensionsAndWeight: {
//           weight: "3.6 kg unloaded, balancing durability and maneuverability.",
//           length: "Overall length approximately 943 mm, providing effective ballistic performance.",
//           width: "About 70 mm, maintaining the ergonomic profile typical of Kalashnikov rifles.",
//           height: "Around 195 mm, consistent with the AK platform."
//         },
//         armament: {
//           mainGun: "7.62×39mm assault rifle, widely used due to its stopping power and availability.",
//           secondary: "No standard secondary weapon, but compatible with grenade launchers and other attachments.",
//           coaxial: "None, as this is an individual infantry weapon.",
//           ammunitionCapacity: "30-round detachable polymer magazines, optimized for durability and weight."
//         },
//         performance: {
//           engine: "Gas-operated, long-stroke piston system with rotating bolt, ensuring high reliability.",
//           maxSpeed: "N/A (infantry weapon).",
//           range: "Effective range about 400 meters.",
//           crew: "Operated by a single soldier, designed for ease of training and maintenance."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "The AK-103 maintains the classic AK appearance with a modern twist, featuring synthetic polymer furniture including the stock, handguard, and pistol grip, which improves durability and reduces weight compared to wood.",
//           "It incorporates a muzzle brake that effectively reduces recoil and muzzle rise, improving control during automatic fire.",
//           "The stamped steel receiver offers strength while facilitating cost-effective mass production.",
//           "This model often includes side-mounted rails for optical sights, allowing quick attachment of scopes, red dots, and night vision devices.",
//           "The overall design keeps the rugged simplicity and ease of maintenance that the AK series is famous for."
//         ]
//       },
//       {
//         title: "Sights and Accessories",
//         points: [
//           "The AK-103 uses traditional iron sights with a front post and rear tangent sight adjustable for distances up to 1,000 meters.",
//           "It supports various optics mounting systems including Picatinny rails, enabling users to customize the rifle for different missions.",
//           "The rifle can be fitted with under-barrel grenade launchers and other tactical accessories.",
//           "Polymer furniture is resistant to weather and rough handling, ensuring reliability in combat."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "The reduced recoil compared to older AK models improves shooter comfort and accuracy, especially in automatic mode.",
//           "The weight distribution and grip design offer better control and handling in close-quarters combat as well as open environments.",
//           "Maintenance is straightforward, with minimal disassembly required to clean or replace parts."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "The AK-103 was developed in the 1990s as part of Russia’s effort to modernize its infantry rifles while maintaining compatibility with the widely used 7.62×39mm cartridge.",
//           "It is part of the AK-100 series which introduced polymer furniture and other modern improvements over the classic AKM design.",
//           "The rifle was intended to offer a balance of power, reliability, and modern ergonomic features for Russian forces and export customers."
//         ]
//       },
//       {
//         title: "Combat Use and Export",
//         points: [
//           "The AK-103 has seen widespread use by Russian military and police forces as well as numerous international clients, especially in countries that prefer the 7.62×39mm round.",
//           "Its robust design has proven effective in diverse environments, from urban warfare to jungle and desert combat.",
//           "The rifle has been exported extensively and remains a popular choice for armed forces and paramilitary groups worldwide."
//         ]
//       },
//       {
//         title: "Legacy and Upgrades",
//         points: [
//           "The AK-103 continues the legacy of the Kalashnikov family with enhanced durability and user-friendly features.",
//           "Ongoing upgrades include improved sighting systems, ergonomic improvements, and compatibility with modern tactical accessories.",
//           "It represents the enduring appeal of the Kalashnikov design philosophy: simplicity, ruggedness, and effectiveness."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "e26502a9-8427-48c8-a485-c1d0e38b542f",
//     sketchFabUrl: '<div class="sketchfab-embed-wrapper"> <iframe title="AK 103" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/863dbd7b0aa54a839ccdfe43d98c778a/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ak-103-863dbd7b0aa54a839ccdfe43d98c778a?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> AK 103 </a> by <a href="https://sketchfab.com/Frostoise?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Frostoise </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=863dbd7b0aa54a839ccdfe43d98c778a" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'
//   }
// ];

// export const m24SniperRifleData: AiGenratedWeaponData = [
//   {
//     name: "M24 Sniper Rifle"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The M24 Sniper Weapon System (SWS) is a bolt-action rifle designed for precision shooting, chambered in 7.62×51mm NATO (.308 Winchester).",
//           "Based on the Remington 700 platform, the M24 was selected as the standard sniper rifle for the U.S. Army in 1988.",
//           "The rifle is equipped with a free-floating, match-grade barrel to enhance accuracy and reduce barrel vibration during firing.",
//           "It uses a 5-round internal magazine, though aftermarket versions may include detachable magazines.",
//           "M24 features a fully adjustable stock for length of pull and cheek height, accommodating a variety of shooter preferences.",
//           "It has an effective range of approximately 800 to 1,000 meters depending on ammunition and conditions.",
//           "The rifle is typically outfitted with a Leupold Mark 4 10x40mm fixed-power scope for precision aiming."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 5.4 kg (12 lbs) with optics.",
//           length: "Overall length: 1,092 mm (43 inches).",
//           width: "Varies with optics and accessories.",
//           height: "Varies depending on scope and bipod setup."
//         },
//         armament: {
//           mainGun: "7.62×51mm NATO (.308 Winchester) bolt-action rifle.",
//           secondary: "None (sniper role specific).",
//           coaxial: "N/A.",
//           ammunitionCapacity: "5-round internal magazine."
//         },
//         performance: {
//           engine: "Manual bolt-action system.",
//           maxSpeed: "N/A (manually operated weapon).",
//           range: "Effective range of 800–1,000 meters.",
//           crew: "Operated by a single sniper, often supported by a spotter."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Features a heavy-contour, free-floating barrel for improved accuracy and heat dissipation.",
//           "The rifle has a distinctive long barrel and no muzzle device, focusing on accuracy rather than concealment.",
//           "M24 stocks are made of composite materials and often come in camouflage or matte black finishes.",
//           "It includes a full-length rail for mounting scopes and night vision equipment.",
//           "The rifle is commonly fitted with a Harris-style bipod for stability during prone shooting."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Equipped with a Leupold Mark 4 fixed 10x scope as standard.",
//           "Modern variants may use variable zoom optics or thermal/night vision attachments.",
//           "Iron sights are generally not included, focusing entirely on precision optics.",
//           "The scope is mounted via a Picatinny rail, ensuring secure and customizable placement."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "Stock adjustments allow for customized fit, improving shooter comfort and accuracy.",
//           "Textured grip surfaces and ergonomic design ensure control under various conditions.",
//           "Bolt handle is oversized for smooth and fast cycling even with gloves.",
//           "Low recoil and stability make it ideal for long-range, accurate engagements."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Adopted by the U.S. Army in 1988 as a replacement for older sniper rifles like the M21.",
//           "Developed from the Remington 700 long-action platform to accommodate possible future caliber changes.",
//           "Used in a wide range of conflicts including Iraq, Afghanistan, and other theaters of operation."
//         ]
//       },
//       {
//         title: "Upgrades and Variants",
//         points: [
//           "M24A2 introduced a modular stock, detachable magazine, and suppressor capability.",
//           "M24A3 variant chambered in .300 Winchester Magnum to extend effective range.",
//           "Eventually replaced in U.S. military service by the M2010 Enhanced Sniper Rifle, but still in use globally."
//         ]
//       },
//       {
//         title: "Legacy",
//         points: [
//           "The M24 is renowned for its rugged reliability, exceptional accuracy, and modular upgrade potential.",
//           "It set the standard for modern military sniper rifles and remains in service in various armed forces worldwide.",
//           "Its proven design has influenced many civilian and military precision rifles that followed."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "1452b79c-d1e8-435e-8fa3-8aa79ddb9d78",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="M24 Sniper Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1dafeafd87a94bd9b5da96a22db61bb4/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m24-sniper-rifle-1dafeafd87a94bd9b5da96a22db61bb4?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M24 Sniper Rifle </a> by <a href="https://sketchfab.com/miranda81?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> João Miranda </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1dafeafd87a94bd9b5da96a22db61bb4" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const remington700Data: AiGenratedWeaponData = [
//   {
//     name: "Remington 700"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The Remington 700 is a bolt-action rifle widely used in both civilian and military applications.",
//           "It is chambered in various calibers, including .308 Winchester, .30-06 Springfield, and .300 Winchester Magnum.",
//           "Introduced in 1962, it is known for its accuracy, strong action, and widespread customization options.",
//           "Features a dual-lug bolt with a short 90-degree throw and internal magazine (some versions use detachable box magazines).",
//           "It includes a drilled and tapped receiver for scope mounting and is often paired with high-power optics.",
//           "Barrels are free-floating on many models, contributing to consistent precision shooting.",
//           "Trigger pull is adjustable, and the X-Mark Pro trigger system is common in recent models."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 3.6–4.5 kg (8–10 lbs), depending on configuration.",
//           length: "Varies from 1,040 mm to 1,200 mm (41 to 47 inches).",
//           width: "Depends on stock and scope setup.",
//           height: "Variable depending on scope and cheek rest."
//         },
//         armament: {
//           mainGun: "Bolt-action rifle chambered in various calibers (typically .308 or .30-06).",
//           secondary: "None.",
//           coaxial: "N/A.",
//           ammunitionCapacity: "4 to 5-round internal magazine; aftermarket DBM (detachable box magazine) versions available."
//         },
//         performance: {
//           engine: "Manual bolt-action.",
//           maxSpeed: "N/A.",
//           range: "Effective range around 800–1,000 meters depending on caliber and load.",
//           crew: "Single operator; commonly used by hunters, marksmen, and law enforcement."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Classic rifle silhouette with a synthetic or wooden stock, depending on model.",
//           "Barrels are usually stainless steel or blued carbon steel.",
//           "Bolt handle is knurled or oversized for ease of use.",
//           "Stock designs vary from basic hunting to tactical sniper-style with adjustable cheek rests and rails.",
//           "The action is robust and often the basis for custom precision rifle builds."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "No iron sights in most models; optics mounting is standard.",
//           "Compatible with a wide range of scopes and night vision systems.",
//           "Picatinny or Weaver rails are common upgrades.",
//           "Scopes usually range from 3–9x to 5–25x magnification depending on use case."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "Comfortable shoulder stock with good balance and recoil mitigation.",
//           "Textured grips and fore-ends for better handling.",
//           "Smooth bolt operation with consistent cycling.",
//           "Some variants include recoil pads, adjustable length of pull, and pistol grips for precision use."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Legacy",
//         points: [
//           "Developed and released by Remington Arms in 1962, initially for hunting and sporting purposes.",
//           "Its strong and reliable action made it popular in competitive shooting and custom precision builds.",
//           "Widely used as the base rifle for the M24 Sniper Weapon System and M40 sniper rifle series in military service.",
//           "Its civilian popularity and military adoption helped make it one of the best-selling bolt-action rifles ever produced."
//         ]
//       },
//       {
//         title: "Variants and Usage",
//         points: [
//           "M24 (U.S. Army) and M40 (U.S. Marine Corps) are military derivatives of the Remington 700.",
//           "Countless civilian variants exist, from lightweight hunting models to heavy-barrel tactical sniper builds.",
//           "Used by law enforcement and SWAT teams across the world for its reliability and precision.",
//           "Frequently used as a base rifle for competitive shooting in PRS and benchrest formats."
//         ]
//       },
//       {
//         title: "Cultural Impact",
//         points: [
//           "Known as the benchmark for bolt-action rifles in terms of reliability and customization.",
//           "Popular in video games, movies, and TV shows where sniper rifles are featured.",
//           "Often the go-to choice for custom long-range builds in the shooting sports community."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "30ffd62b-fa67-40f6-886e-dbfc044cdd48",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Remington 700" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4c9726610f6b4440bea20fb55a03b117/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/remington-700-4c9726610f6b4440bea20fb55a03b117?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Remington 700 </a> by <a href="https://sketchfab.com/Nitropunch?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Nitropunch </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4c9726610f6b4440bea20fb55a03b117" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const barrettM82Data: AiGenratedWeaponData = [
//   {
//     name: "Barrett M82"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The Barrett M82, also known as the M107 in U.S. military service, is a semi-automatic anti-materiel sniper rifle.",
//           "Chambered for the powerful .50 BMG (12.7×99mm NATO) cartridge.",
//           "Gas-operated, rotating bolt mechanism with short-recoil operation.",
//           "Fitted with a large muzzle brake to reduce recoil and enhance shooter stability.",
//           "Comes with a Picatinny rail system for mounting scopes and accessories.",
//           "Detachable box magazine typically holds 10 rounds.",
//           "Designed to disable vehicles, radar units, and other military equipment at long range."
//         ],
//         dimensionsAndWeight: {
//           weight: "13.5 – 14 kg (29.7 – 31 lbs) unloaded, depending on model.",
//           length: "1,448 mm (57 in) for standard model.",
//           width: "Varies with scope and rail attachments.",
//           height: "Varies with optics and bipod installed."
//         },
//         armament: {
//           mainGun: ".50 BMG (12.7×99mm NATO) semi-automatic rifle.",
//           secondary: "None.",
//           coaxial: "N/A.",
//           ammunitionCapacity: "10-round detachable box magazine."
//         },
//         performance: {
//           engine: "Semi-automatic, gas-recoil operation.",
//           maxSpeed: "N/A.",
//           range: "Effective range up to 1,800 meters; maximum range over 2,000 meters.",
//           crew: "Single operator; typically deployed by a sniper team."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Large, intimidating silhouette with a long, heavy barrel and prominent muzzle brake.",
//           "Often equipped with a bipod and high-power scope for long-range precision.",
//           "Futuristic and rugged aesthetic due to robust construction and large caliber.",
//           "Includes an integrated carrying handle in many versions.",
//           "Side ejection port and ergonomic pistol grip design."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Standard Picatinny rail allows for the attachment of various scopes.",
//           "Usually paired with high magnification optics (e.g., 10x or higher).",
//           "May include backup iron sights or night vision scopes.",
//           "Compatible with military-grade laser rangefinders and ballistic computers."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "Designed for prone or supported firing positions due to size and weight.",
//           "Equipped with a bipod and recoil pad for operator comfort.",
//           "Recoil is significant but mitigated with advanced muzzle brake and recoil system.",
//           "Ambidextrous controls are limited due to the weapon’s design focus."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Legacy",
//         points: [
//           "Developed in the early 1980s by Barrett Firearms Manufacturing, USA.",
//           "First widely successful semi-automatic rifle chambered in .50 BMG.",
//           "Adopted by U.S. military as the M107 for long-range anti-materiel applications.",
//           "Also used by over 60 military forces around the world.",
//           "Pioneered the modern anti-materiel rifle category."
//         ]
//       },
//       {
//         title: "Variants and Usage",
//         points: [
//           "Variants include M82A1, M82A2 (shoulder-fired), and M107 (U.S. military designation).",
//           "Used in military conflicts from the Gulf War to modern-day engagements.",
//           "Deployed for disabling enemy vehicles, equipment, and explosive ordnance disposal.",
//           "Also used in long-range sniper competitions and civilian long-distance shooting."
//         ]
//       },
//       {
//         title: "Cultural Impact",
//         points: [
//           "Featured prominently in movies, games, and media as the ultimate sniper rifle.",
//           "Known for its destructive power and iconic look.",
//           "Symbolizes long-range precision and military firepower in pop culture."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "3b4edf77-ef96-4b31-9b96-737e271b0153",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Barrett M82" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2017ae12781c4995a88f4da147a59274/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/barrett-m82-2017ae12781c4995a88f4da147a59274?utm_medium=embed&utm_campaign=share-popup&utm_content=2017ae12781c4995a88f4da147a59274" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Barrett M82 </a> by <a href="https://sketchfab.com/jeandiz?utm_medium=embed&utm_campaign=share-popup&utm_content=2017ae12781c4995a88f4da147a59274" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Mateusz Woliński </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2017ae12781c4995a88f4da147a59274" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const fnScarHData: AiGenratedWeaponData = [
//   {
//     name: "Low-Poly FN SCAR-H"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The FN SCAR-H (Heavy) is a battle rifle developed by FN Herstal for the U.S. Special Operations Command (SOCOM).",
//           "Chambered in 7.62×51mm NATO (.308 Winchester) for greater stopping power and range.",
//           "Features a short-stroke gas piston system for improved reliability in harsh conditions.",
//           "Equipped with ambidextrous controls and adjustable buttstock.",
//           "Modular design supports various barrel lengths and attachments.",
//           "Low-poly model includes SF (Special Forces) inspired attachments like suppressors and optics."
//         ],
//         dimensionsAndWeight: {
//           weight: "3.6 – 4.0 kg (7.9 – 8.8 lbs) depending on configuration.",
//           length: "997 mm (39.3 in) with standard barrel.",
//           width: "Varies with attachments.",
//           height: "Depends on optics and stock configuration."
//         },
//         armament: {
//           mainGun: "7.62×51mm NATO automatic rifle.",
//           secondary: "None.",
//           coaxial: "N/A.",
//           ammunitionCapacity: "Standard 20-round detachable box magazine."
//         },
//         performance: {
//           engine: "Gas-operated, rotating bolt.",
//           maxSpeed: "N/A.",
//           range: "Effective range up to 800 meters.",
//           crew: "Operated by a single soldier; ideal for designated marksman roles."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Angular, modern tactical rifle profile with rails on all sides.",
//           "Low-poly model mimics real design with added fictional SF-style enhancements.",
//           "Flat dark earth and matte black colors are common themes.",
//           "Folding and telescoping stock with adjustable cheek rest.",
//           "Minimalistic polygon count for game-optimized performance."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Typically outfitted with reflex or ACOG-style optics in SF configuration.",
//           "Integrated backup iron sights (BUIS).",
//           "Custom optics setup in the low-poly version to reflect Special Forces usage."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "Ambidextrous safety, mag release, and charging handle.",
//           "Compact and modular for field adaptability.",
//           "Low recoil and solid weight balance improve user control.",
//           "Configured for versatile roles from CQB to long-range engagements."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Developed in the mid-2000s by Belgian company FN Herstal.",
//           "Designed as part of the SCAR program for U.S. SOCOM.",
//           "SCAR-H was intended to replace older battle rifles like the M14.",
//           "Highly favored for reliability and adaptability in combat scenarios."
//         ]
//       },
//       {
//         title: "Variants and Use Cases",
//         points: [
//           "Variants include SCAR-H CQC (Close Quarters Combat) and SCAR-H SV (Sniper Variant).",
//           "Deployed by military and special forces globally.",
//           "Used in missions where greater firepower and range are required than 5.56mm rifles offer."
//         ]
//       },
//       {
//         title: "In Games and Media",
//         points: [
//           "Frequently appears in military-themed video games due to its distinct look and high-caliber profile.",
//           "Often depicted with custom optics and suppressors.",
//           "Symbolizes modern battle rifle power and modularity in pop culture."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "678687c2-ecc0-4ddb-bfeb-86b09cfc2195",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Low-Poly FN SCAR-H, SF inspired attachments" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6687ac94f30d4d8abd0fb3df6924c650/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-fn-scar-h-sf-inspired-attachments-6687ac94f30d4d8abd0fb3df6924c650?utm_medium=embed&utm_campaign=share-popup&utm_content=6687ac94f30d4d8abd0fb3df6924c650" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Low-Poly FN SCAR-H, SF inspired attachments </a> by <a href="https://sketchfab.com/notcplkerry?utm_medium=embed&utm_campaign=share-popup&utm_content=6687ac94f30d4d8abd0fb3df6924c650" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> notcplkerry </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6687ac94f30d4d8abd0fb3df6924c650" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];


// export const m1AbramsData: AiGenratedWeaponData = [
//   {
//     name: "M1 Abrams"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The M1 Abrams is a third-generation American main battle tank developed by Chrysler Defense (now General Dynamics).",
//           "Equipped with a 120mm smoothbore gun (M256), capable of engaging both armored and soft targets.",
//           "Uses a multi-fuel gas turbine engine (Honeywell AGT1500), providing high mobility.",
//           "Composite armor with depleted uranium layers for enhanced survivability.",
//           "Advanced fire-control system with thermal imaging and laser rangefinder."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 62 metric tons (68 short tons)",
//           length: "9.77 m (32.1 ft) including gun",
//           width: "3.66 m (12 ft)",
//           height: "2.44 m (8 ft)"
//         },
//         armament: {
//           mainGun: "120mm smoothbore cannon (M256)",
//           secondary: "1× .50 cal (12.7 mm) M2HB machine gun, 2× 7.62 mm M240 machine guns",
//           coaxial: "M240 coaxial machine gun",
//           ammunitionCapacity: "42 rounds (main gun), thousands of rounds for secondary"
//         },
//         performance: {
//           engine: "Honeywell AGT1500 gas turbine",
//           maxSpeed: "67.7 km/h (42 mph) on road",
//           range: "426 km (265 miles)",
//           crew: "4 (commander, gunner, loader, driver)"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Boxy, low-profile turret with sloped armor for deflection.",
//           "Reactive and composite armor modules integrated for protection.",
//           "Track-driven hull with skirted sides to minimize debris.",
//           "Dust- and sand-resistant intake/exhaust for desert operations.",
//           "Model shows full exterior with detailed weapon mounts and sensors."
//         ]
//       },
//       {
//         title: "Sights and Sensors",
//         points: [
//           "Advanced thermal imaging and night vision optics.",
//           "Laser rangefinder and ballistic computer integrated.",
//           "Panoramic commander's sight for 360° battlefield awareness.",
//           "Fire control system allows accurate firing on the move."
//         ]
//       },
//       {
//         title: "Mobility and Power",
//         points: [
//           "Gas turbine engine provides rapid acceleration despite weight.",
//           "Hydropneumatic suspension system allows cross-country mobility.",
//           "Supports desert, urban, and forest operations with high reliability.",
//           "Tracks allow traversal over mud, sand, and light water obstacles."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Developed in the 1970s to replace the M60 Patton tank.",
//           "Entered service in 1980 and remains in active use worldwide.",
//           "Manufactured by General Dynamics; multiple variants in use (M1A1, M1A2 SEP, etc.).",
//           "Continuously upgraded to meet modern battlefield demands."
//         ]
//       },
//       {
//         title: "Combat History",
//         points: [
//           "Widely used in Gulf War, Iraq War, and Afghanistan conflicts.",
//           "Praised for survivability, accuracy, and shock value.",
//           "Performed exceptionally in both open desert and urban warfare.",
//           "Known for successful tank-on-tank engagements with minimal losses."
//         ]
//       },
//       {
//         title: "Cultural and Media Appearances",
//         points: [
//           "Featured in numerous video games like Battlefield, Call of Duty, and Arma.",
//           "Appears in films and documentaries about modern warfare.",
//           "Symbol of U.S. armored might in pop culture."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "2e0f5a21-cbf8-4ba3-91d7-ac56821e810a",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="M1 Abrams" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/2577a4eccbc74b2da6dba5bfd09b7511/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m1-abrams-2577a4eccbc74b2da6dba5bfd09b7511?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M1 Abrams </a> by <a href="https://sketchfab.com/Artem.Goyko?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Artem Goyko </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2577a4eccbc74b2da6dba5bfd09b7511" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const sr25Data: AiGenratedWeaponData = [
//   {
//     name: "SR-25 Marksman Rifle"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The SR-25 (Stoner Rifle-25) is a semi-automatic precision rifle developed by Knight's Armament Company.",
//           "Chambered in 7.62×51mm NATO (.308 Winchester), ideal for long-range engagements.",
//           "Uses direct impingement gas system similar to the AR-15/M16 design.",
//           "Free-floating barrel enhances accuracy, often match-grade quality.",
//           "Highly modular with support for various optics, suppressors, and bipods."
//         ],
//         dimensionsAndWeight: {
//           weight: "4.5 – 5.0 kg (9.9 – 11 lbs) depending on configuration.",
//           length: "970–1118 mm (38–44 in) depending on barrel and stock.",
//           width: "Standard AR-style width, slightly bulkier due to caliber.",
//           height: "Varies with mounted optics."
//         },
//         armament: {
//           mainGun: "7.62×51mm NATO semi-automatic rifle.",
//           secondary: "None.",
//           coaxial: "N/A.",
//           ammunitionCapacity: "10 or 20-round detachable box magazines."
//         },
//         performance: {
//           engine: "Direct impingement, rotating bolt.",
//           maxSpeed: "N/A.",
//           range: "Effective range of approximately 800–1000 meters.",
//           crew: "Single operator; used by designated marksmen and snipers."
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Tactical, sleek design resembling enlarged AR-15 platform.",
//           "Picatinny rails for optics, lasers, and accessories.",
//           "Black matte finish for low visibility in field operations.",
//           "Adjustable stock and ergonomic pistol grip for precision handling.",
//           "This 3D model reflects a detailed marksman setup including scope and suppressor."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Typically equipped with high-magnification scopes or variable zoom optics.",
//           "Can use backup iron sights (BUIS) in case of optic failure.",
//           "Model showcases a mounted long-range scope ideal for mid-to-long-distance shooting."
//         ]
//       },
//       {
//         title: "Ergonomics and Handling",
//         points: [
//           "Low recoil due to heavy barrel and gas system.",
//           "Comfortable handling for prone or supported firing positions.",
//           "Optimized for sustained precision fire rather than CQB use.",
//           "Excellent balance between power and accuracy for military and police roles."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Use",
//         points: [
//           "Developed in the early 1990s by Eugene Stoner and Knight’s Armament Company.",
//           "Designed as a semi-auto sniper alternative to bolt-action rifles.",
//           "Used by U.S. military units, especially in SOCOM and Marine Corps.",
//           "Predecessor to modern military rifles like the M110 SASS."
//         ]
//       },
//       {
//         title: "Combat and Deployment",
//         points: [
//           "Deployed in conflicts including Iraq and Afghanistan.",
//           "Valued for quicker follow-up shots compared to bolt-action rifles.",
//           "Often used in overwatch, urban combat, and recon roles."
//         ]
//       },
//       {
//         title: "In Games and Pop Culture",
//         points: [
//           "Commonly featured in tactical shooters and sniper games.",
//           "Praised in media for its mix of precision and semi-auto firepower.",
//           "Often modeled with bipods, suppressors, and variable scopes."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "a1abc417-0b71-4a00-a5fc-30ef0df92d82",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="SR-25 Marksman Rifle" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9ed1dda47fe24fdab7237a711292126e/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/sr-25-marksman-rifle-9ed1dda47fe24fdab7237a711292126e?utm_medium=embed&utm_campaign=share-popup&utm_content=9ed1dda47fe24fdab7237a711292126e" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SR-25 Marksman Rifle </a> by <a href="https://sketchfab.com/Raul_Guns?utm_medium=embed&utm_campaign=share-popup&utm_content=9ed1dda47fe24fdab7237a711292126e" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Raul_Guns </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9ed1dda47fe24fdab7237a711292126e" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];

// export const m60PattonTankData: AiGenratedWeaponData = [
//   {
//     name: "M60 Patton Tank (3D Scan)"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The M60 Patton is a second-generation American main battle tank introduced in 1960.",
//           "Equipped with a 105 mm M68 rifled gun, based on the British L7.",
//           "Powered by a Continental AVDS-1790-2 V12, air-cooled twin-turbo diesel engine.",
//           "Heavy rolled homogeneous steel armor with improved turret and glacis protection.",
//           "Hydraulic gun stabilizer and ballistic computer introduced in later variants."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 52 metric tons",
//           length: "9.44 m (with gun forward)",
//           width: "3.63 m",
//           height: "3.27 m"
//         },
//         armament: {
//           mainGun: "105 mm M68 rifled cannon",
//           secondary: "1× .50 cal (12.7 mm) M85 machine gun, 1× 7.62 mm M73 or M240 machine gun",
//           coaxial: "7.62 mm machine gun",
//           ammunitionCapacity: "63 rounds (main gun), over 10,000 rounds for secondary"
//         },
//         performance: {
//           engine: "Continental AVDS-1790-2 diesel engine",
//           maxSpeed: "48 km/h (30 mph)",
//           range: "480 km (300 miles)",
//           crew: "4 (commander, gunner, loader, driver)"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Classic Cold War-era shape with a rounded cast turret.",
//           "Commander's cupola with .50 cal machine gun mounted on top.",
//           "Tracks with side skirts and visible return rollers.",
//           "Distinctive gun barrel with fume extractor and bore evacuator.",
//           "Model includes authentic weathering from real-life 3D scan."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Equipped with M17 rangefinder in early variants.",
//           "Later models had thermal sights and laser rangefinders.",
//           "Gunner’s primary sight integrated with stabilizer system.",
//           "Commander has independent sight in M60A3 variant."
//         ]
//       },
//       {
//         title: "Mobility and Engineering",
//         points: [
//           "Torsion bar suspension system provides moderate off-road ability.",
//           "Diesel engine offers better range and reliability than gasoline predecessors.",
//           "Wide tracks allow traversal over rough and muddy terrain.",
//           "Armor thickness and slope optimized for deflection and survivability."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Use",
//         points: [
//           "Developed as a successor to the M48 Patton during the Cold War.",
//           "Entered service in 1960 with the U.S. Army and Marine Corps.",
//           "Widely exported to allied nations including Egypt, Israel, Turkey, and Taiwan.",
//           "Variants include M60A1, M60A2 (with a missile system), and M60A3."
//         ]
//       },
//       {
//         title: "Combat Deployment",
//         points: [
//           "Extensively used in Middle East conflicts like the Yom Kippur War and Gulf War.",
//           "Still used by several countries in modernized forms.",
//           "Proven reliable and rugged in desert warfare.",
//           "Some upgraded with ERA and thermal sights for extended service life."
//         ]
//       },
//       {
//         title: "Media and Pop Culture",
//         points: [
//           "Appears in games such as War Thunder and Battlefield.",
//           "Used in military training videos and documentaries.",
//           "One of the most recognizable tanks of the Cold War era."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "6bfb892e-61c6-4c8c-bf7d-ebe23f61960e",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="M60 Patton Tank (3D Scan)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/a4760d3a61f0425c97353592e6cb3589/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/m60-patton-tank-3d-scan-a4760d3a61f0425c97353592e6cb3589?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> M60 Patton Tank (3D Scan) </a> by <a href="https://sketchfab.com/kryik1023?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Renafox </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=a4760d3a61f0425c97353592e6cb3589" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const t90Data: AiGenratedWeaponData = [
//   {
//     name: "T-90"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "The T-90 is a modern Russian main battle tank developed from the T-72 platform.",
//           "Armed with a 125 mm 2A46 smoothbore main gun with autoloader.",
//           "Equipped with Kontakt-5 explosive reactive armor (ERA) and advanced composite armor.",
//           "Features the Shtora-1 active protection system to counter guided missiles.",
//           "Digital fire control system and thermal imaging sights for night operations."
//         ],
//         dimensionsAndWeight: {
//           weight: "46.5 tons",
//           length: "9.63 m (with gun forward)",
//           width: "3.78 m",
//           height: "2.22 m"
//         },
//         armament: {
//           mainGun: "125 mm 2A46M smoothbore cannon",
//           secondary: "1× 12.7 mm NSVT anti-aircraft machine gun",
//           coaxial: "1× 7.62 mm PKT machine gun",
//           ammunitionCapacity: "43 rounds (main gun), 300–600 rounds for machine guns"
//         },
//         performance: {
//           engine: "V-92S2 12-cylinder diesel engine, 1000 hp",
//           maxSpeed: "60 km/h",
//           range: "550 km (with external tanks)",
//           crew: "3 (commander, gunner, driver)"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Low profile turret with rounded frontal armor for reduced radar signature.",
//           "Infrared dazzlers and laser detection system on front for active defense.",
//           "Distinctive snorkel equipment allows for deep fording capabilities.",
//           "Sloped glacis plate and side skirts for added protection.",
//           "Compact hull and autoloader allow operation with only 3 crew members."
//         ]
//       },
//       {
//         title: "Sights and Optics",
//         points: [
//           "Equipped with thermal imaging and laser rangefinder.",
//           "Fire control system integrates input from multiple optics.",
//           "Commander's panoramic sight for target acquisition.",
//           "Night vision available for both commander and gunner."
//         ]
//       },
//       {
//         title: "Mobility and Engineering",
//         points: [
//           "High power-to-weight ratio allows excellent off-road performance.",
//           "Tracks designed for rough terrain and snow operations.",
//           "NBC (nuclear, biological, chemical) protection suite included.",
//           "Deep fording capability with preparation system for river crossings."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Use",
//         points: [
//           "Developed in the early 1990s by Uralvagonzavod as a successor to the T-80.",
//           "Entered service with the Russian Army in 1993.",
//           "Exported to countries like India (T-90S Bhishma), Algeria, and Vietnam.",
//           "Variants include T-90A, T-90MS (modernized), and T-90M (Proryv-3)."
//         ]
//       },
//       {
//         title: "Combat Deployment",
//         points: [
//           "Deployed in Chechnya, Syria, and ongoing conflicts including Ukraine.",
//           "T-90A and T-90M used in active combat with improved survivability.",
//           "Export versions customized based on end-user requirements.",
//           "Used in tank biathlon competitions to showcase capabilities."
//         ]
//       },
//       {
//         title: "Media and Pop Culture",
//         points: [
//           "Featured in military simulators and games like ArmA, War Thunder, and Call of Duty.",
//           "Prominently displayed in Russian military parades.",
//           "Often used as a symbol of modern Russian armored force."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "c02f536f-17f8-4c7b-ac70-d0b605e4927f",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="T-90" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9bb8af8876a6478aa92089eff058d4db/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/t-90-9bb8af8876a6478aa92089eff058d4db?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> T-90 </a> by <a href="https://sketchfab.com/alexxx_xarchenko?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> alexxx_xarchenko </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9bb8af8876a6478aa92089eff058d4db" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];


// export const mossberg500ModelData: AiGenratedWeaponData = [
//   {
//     name: "Mossberg 500 - Model"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Pump-action shotgun produced by O.F. Mossberg & Sons since 1961.",
//           "Highly modular design with interchangeable barrels and accessories.",
//           "Aluminum receiver and dual extractors for reliable cycling.",
//           "Ambidextrous safety located on top of the receiver.",
//           "Designed for military, law enforcement, hunting, and home defense use."
//         ],
//         dimensionsAndWeight: {
//           weight: "3.0 – 3.5 kg (varies by model)",
//           length: "101 – 120 cm",
//           barrelLength: "47 – 76 cm options available",
//           gauge: "12, 20, and .410 bore variants available"
//         },
//         armament: {
//           action: "Pump-action",
//           capacity: "5+1 to 8+1 rounds depending on tube and shell size",
//           compatibleAmmunition: "2¾ inch, 3 inch shells"
//         },
//         performance: {
//           effectiveRange: "30–50 meters",
//           rateOfFire: "Manual pump-action; depends on user",
//           sights: "Bead sight standard; tactical variants may include rails or ghost ring sights",
//           recoil: "Moderate, varies with ammunition"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Traditional shotgun layout with synthetic or wooden stocks.",
//           "Matte blued or parkerized finish for corrosion resistance.",
//           "Modular platform allows for tactical upgrades and barrel swaps.",
//           "Common tactical features include heat shields, extended magazine tubes, and Picatinny rails.",
//           "Often configured for hunting, tactical, or marine applications."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Extensively used by military and law enforcement worldwide.",
//           "Popular in home defense setups due to reliability and simplicity.",
//           "Hunting models optimized for upland birds, deer, and small game.",
//           "Frequently used in training and sport shooting."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Launched in 1961 by Mossberg as a competitor to Remington 870.",
//           "Favored for its affordable price, reliability, and rugged construction.",
//           "Adopted by U.S. military in variants like the 500A and 590A1.",
//           "One of the few pump-action shotguns to pass U.S. military MIL-SPEC 3443E."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Widely featured in video games such as Call of Duty, Battlefield, and Resident Evil.",
//           "Seen in films and TV shows as a standard pump-action shotgun archetype.",
//           "Recognized for its distinct silhouette and customizable features."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "a0219ea9-0c2f-44f4-a431-f38a22d3e725",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Mossberg 500 - Model" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/ccc8de8945434bfd89caeb63064d8d26/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/mossberg-500-model-ccc8de8945434bfd89caeb63064d8d26?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Mossberg 500 - Model </a> by <a href="https://sketchfab.com/davewatts?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Dave Watts </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=ccc8de8945434bfd89caeb63064d8d26" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const winchesterModel1897Data: AiGenratedWeaponData = [
//   {
//     name: "Winchester Model 1897"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Designed by John Browning and produced by Winchester Repeating Arms Company.",
//           "One of the earliest successful pump-action shotguns.",
//           "Exposed hammer and external tube magazine design.",
//           "Notable for its slam-fire capability (firing by holding trigger and pumping).",
//           "Used extensively in military service, hunting, and sporting applications."
//         ],
//         dimensionsAndWeight: {
//           weight: "Around 3.6 kg",
//           length: "100 – 130 cm depending on barrel length",
//           barrelLength: "50 – 76 cm options",
//           gauge: "12 and 16 gauge variants"
//         },
//         armament: {
//           action: "Pump-action with exposed hammer",
//           capacity: "5+1 rounds (tube magazine)",
//           compatibleAmmunition: "12 or 16 gauge shells (2¾ inch)"
//         },
//         performance: {
//           effectiveRange: "30–50 meters",
//           rateOfFire: "Manual pump-action; fast with slam-fire",
//           sights: "Bead front sight",
//           recoil: "Moderate to heavy depending on load"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Classic exposed hammer design with wooden stock and foregrip.",
//           "Steel receiver and blued finish typical of pre-WWII firearms.",
//           "Slam-fire capability was advantageous in trench warfare.",
//           "Often equipped with bayonet lug and heat shield in military versions.",
//           "Solid and takedown frame options were produced."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Widely used in WWI, WWII, and even Korea in trench warfare roles.",
//           "Known as the 'Trench Gun' in U.S. military service.",
//           "Popular among hunters, law enforcement, and sport shooters post-war.",
//           "Highly collectible due to historic value and rugged design."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Designed in 1897 by John Browning; produced until 1957.",
//           "Adopted by U.S. Army during WWI for close combat effectiveness.",
//           "Military versions included bayonet mounts and heat shields.",
//           "Over one million units produced by the end of production."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Seen in many historical films and games such as Call of Duty and Battlefield.",
//           "Recognized for its unique slam-fire capability in gameplay mechanics.",
//           "Symbol of early 20th-century American firearms innovation."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "07876444-7cfe-4b47-8b59-e6e53ee55e7e",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Winchester Model 1897" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6194ecd23344442fb23f5820f895a0d8/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/winchester-model-1897-6194ecd23344442fb23f5820f895a0d8?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Winchester Model 1897 </a> by <a href="https://sketchfab.com/buh-late?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> buh </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6194ecd23344442fb23f5820f895a0d8" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const ithaca37Data: AiGenratedWeaponData = [
//   {
//     name: "Ithaca 37"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Developed by Ithaca Gun Company based on John Browning’s design.",
//           "Bottom-ejecting pump-action shotgun, ideal for both right and left-handed users.",
//           "Known for reliability, simple design, and smooth action.",
//           "Used in military, police, and civilian markets since the 1930s."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 3.4 – 3.9 kg",
//           length: "100 – 120 cm depending on configuration",
//           barrelLength: "18.5 – 30 inches",
//           gauge: "12, 16, 20, and 28 gauge variants"
//         },
//         armament: {
//           action: "Pump-action, bottom-ejecting",
//           capacity: "4+1 to 7+1 rounds (tube magazine)",
//           compatibleAmmunition: "Standard 2¾ inch shells"
//         },
//         performance: {
//           effectiveRange: "30 – 50 meters",
//           rateOfFire: "Manually cycled; can be slam-fired in older models",
//           sights: "Bead or ghost ring front sight depending on model",
//           recoil: "Moderate"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Distinctive bottom-loading and bottom-ejecting mechanism.",
//           "Steel receiver with wooden stock and fore-end (in classic models).",
//           "Modern variants include synthetic stocks for tactical or hunting roles.",
//           "Minimal snagging parts makes it ideal for home defense or combat use."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Used by U.S. military from WWII through Vietnam era.",
//           "Popular with law enforcement agencies across the U.S.",
//           "Favored by sportsmen for hunting birds and small game.",
//           "Still produced today due to high demand and classic reliability."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Introduced in 1937 as the successor to the Remington Model 17.",
//           "Based on a John Browning patent, refined by Ithaca’s engineers.",
//           "Military 'riot' versions saw combat during major 20th-century conflicts.",
//           "Still in production with Ithaca Gun Company and other licensed makers."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Appeared in many action and war films, including 'The Matrix' and 'Heat'.",
//           "Recognizable for its smooth lines and bottom-ejection port.",
//           "Used in video games like Call of Duty and Resident Evil."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "62a0cf17-8f36-4c20-bab4-8e32dd238700",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Ithaca 37" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6aa11fdd57ee4e2bbd51b9b648c8f71c/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ithaca-37-6aa11fdd57ee4e2bbd51b9b648c8f71c?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ithaca 37 </a> by <a href="https://sketchfab.com/ulfen?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ulfen </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6aa11fdd57ee4e2bbd51b9b648c8f71c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];



// export const remington870ShotgunData: AiGenratedWeaponData = [
//   {
//     name: "Remington 870 Shotgun"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Pump-action shotgun widely used for hunting, sport shooting, and law enforcement.",
//           "Introduced by Remington Arms in 1950 and remains in production today.",
//           "Renowned for its reliability, versatility, and rugged construction.",
//           "Receiver is milled from a solid billet of steel for strength.",
//           "Modular platform with various barrel lengths, stocks, and finishes."
//         ],
//         dimensionsAndWeight: {
//           weight: "3.2–3.6 kg (depending on model)",
//           length: "100–110 cm (varies by barrel length)",
//           barrelLength: "46–76 cm options available",
//           gauge: "12-gauge, also available in 16, 20, 28 gauge, and .410 bore"
//         },
//         armament: {
//           action: "Pump-action (manually operated slide)",
//           capacity: "4+1 to 7+1 rounds (depending on magazine and shell size)",
//           compatibleAmmunition: "2¾ inch, 3 inch, and 3½ inch shells (12-gauge variant)"
//         },
//         performance: {
//           effectiveRange: "30–50 meters (slug effective range up to 100 m)",
//           rateOfFire: "Manually operated; depends on user speed",
//           sights: "Bead sight (standard), some variants include ghost ring or optics rail",
//           recoil: "Moderate to high depending on shell type"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Traditional wooden or synthetic stock options.",
//           "Tubular magazine located beneath the barrel.",
//           "Robust and simple construction with very few moving parts.",
//           "Available in various finishes including matte black, polished steel, and camouflage.",
//           "Optional features include extended magazines, tactical lights, and breacher muzzles."
//         ]
//       },
//       {
//         title: "Use and Modularity",
//         points: [
//           "Highly modular—supports a wide range of aftermarket accessories.",
//           "Used for home defense, sport, police, and military use.",
//           "Short-barrel tactical versions popular among SWAT and military units.",
//           "Hunting variants feature longer barrels and chokes for improved accuracy."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Usage",
//         points: [
//           "Developed in the late 1940s and launched in 1950 by Remington Arms.",
//           "Over 11 million units produced, making it one of the best-selling shotguns in history.",
//           "Used globally in civilian, law enforcement, and military contexts.",
//           "Still manufactured in multiple variants including 870 Express, Wingmaster, and Tactical."
//         ]
//       },
//       {
//         title: "Media and Pop Culture",
//         points: [
//           "Iconic presence in video games like Call of Duty, Rainbow Six, and Resident Evil.",
//           "Appears in numerous films and TV shows as a reliable shotgun archetype.",
//           "Recognized for its distinctive pump-action sound and rugged profile."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "a743af23-67de-44eb-b18d-816c9477c121",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Remington 870 Shotgun" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6db0ad4764d14eee8f063eea3600071b/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/remington-870-shotgun-6db0ad4764d14eee8f063eea3600071b?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Remington 870 Shotgun </a> by <a href="https://sketchfab.com/milinam2002?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Andrei Milin </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6db0ad4764d14eee8f063eea3600071b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const glock19Data: AiGenratedWeaponData = [
//   {
//     name: "Glock 19"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Compact semi-automatic pistol manufactured by Glock Ges.m.b.H (Austria).",
//           "Widely used by military, law enforcement, and civilian shooters.",
//           "Polymer frame with a short-recoil operated, locked-breech system.",
//           "Black skin variant is a common tactical finish."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 670 g (unloaded)",
//           length: "187 mm",
//           barrelLength: "102 mm",
//           caliber: "9×19mm Parabellum"
//         },
//         armament: {
//           action: "Short recoil, locked-breech",
//           capacity: "15+1 rounds (standard), extended mags available",
//           compatibleAmmunition: "9mm Luger (9×19mm)"
//         },
//         performance: {
//           effectiveRange: "50 meters",
//           rateOfFire: "Semi-automatic",
//           sights: "Fixed iron sights or optional tritium night sights",
//           recoil: "Mild to moderate"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Black polymer frame and slide finish enhance tactical concealment.",
//           "Textured grip with finger grooves for improved control.",
//           "Integrated accessory rail for lights or lasers.",
//           "Compact size makes it ideal for concealed carry and duty use."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Favored by military, law enforcement, and special forces worldwide.",
//           "Commonly used in civilian markets for personal defense and sport shooting.",
//           "Easy maintenance and high reliability in harsh conditions.",
//           "Known for its 'Safe Action' trigger system preventing accidental discharge."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Introduced in the late 1980s as a compact alternative to Glock 17.",
//           "Quickly gained popularity due to its balance of size, weight, and firepower.",
//           "Adopted by various agencies including FBI, NYPD, and many others.",
//           "Glock's reputation for simplicity and durability contributed to its success."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Frequently seen in action films and TV shows due to real-world usage.",
//           "Common in video games like Call of Duty, PUBG, and Rainbow Six Siege.",
//           "Often portrayed as a reliable sidearm for law enforcement or protagonists."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "7692308c-1c6d-4e9b-ac00-c36bb0a19913",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Glock 19 / Black Skin" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/5d20a74409424edfb5d15c94700914bf/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/glock-19-black-skin-5d20a74409424edfb5d15c94700914bf?utm_medium=embed&utm_campaign=share-popup&utm_content=5d20a74409424edfb5d15c94700914bf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Glock 19 / Black Skin </a> by <a href="https://sketchfab.com/Archivz?utm_medium=embed&utm_campaign=share-popup&utm_content=5d20a74409424edfb5d15c94700914bf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> ArchViz </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5d20a74409424edfb5d15c94700914bf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const sigSauerP226Data: AiGenratedWeaponData = [
//   {
//     name: "Sig Sauer P226"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Full-sized, service-type pistol designed by SIG Sauer.",
//           "Widely used by military and law enforcement forces worldwide.",
//           "Renowned for accuracy, durability, and reliability.",
//           "Double-action/single-action trigger mechanism with decocking lever."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 964 g (unloaded)",
//           length: "196 mm",
//           barrelLength: "112 mm",
//           caliber: "9×19mm Parabellum (also available in .40 S&W, .357 SIG, .22 LR)"
//         },
//         armament: {
//           action: "Short recoil, locked breech",
//           capacity: "15+1 rounds (9mm standard magazine)",
//           compatibleAmmunition: "9mm Luger / .40 S&W / .357 SIG"
//         },
//         performance: {
//           effectiveRange: "Up to 50 meters",
//           rateOfFire: "Semi-automatic",
//           sights: "Fixed contrast sights or SIGLITE night sights",
//           recoil: "Moderate"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Metal frame with ergonomic grip and balanced weight distribution.",
//           "External decocker allows safe lowering of the hammer.",
//           "Picatinny rail for tactical accessories on newer models.",
//           "Classic and professional black finish commonly used by armed forces."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Adopted by U.S. Navy SEALs, British Armed Forces, and other elite units.",
//           "Popular in law enforcement and security due to reliability.",
//           "Used in both combat and civilian self-defense contexts.",
//           "Preferred in competitions for its consistent accuracy."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Adoption",
//         points: [
//           "Developed in the 1980s as SIG Sauer's entry into the U.S. military trials.",
//           "Though not selected for the M9 contract, became highly respected worldwide.",
//           "Served with distinction in multiple global conflicts and tactical operations.",
//           "Upgraded versions like the P226R and P226 MK25 introduced over time."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Featured in movies like ‘Lethal Weapon’, ‘John Wick’, and ‘Skyfall’.",
//           "Appears in games like Rainbow Six Siege, Counter-Strike, and Battlefield.",
//           "Seen as a symbol of elite operatives due to real-world adoption."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "9d88e296-c0b9-468c-8e57-0d49317b9fdd",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Sig Sauer P226" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e3d4f1ab22f342f4a0891743353c114c/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/sig-sauer-p226-e3d4f1ab22f342f4a0891743353c114c?utm_medium=embed&utm_campaign=share-popup&utm_content=e3d4f1ab22f342f4a0891743353c114c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Sig Sauer P226 </a> by <a href="https://sketchfab.com/Alexcanot?utm_medium=embed&utm_campaign=share-popup&utm_content=e3d4f1ab22f342f4a0891743353c114c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Alexcanot </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e3d4f1ab22f342f4a0891743353c114c" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const berettaM9Data: AiGenratedWeaponData = [
//   {
//     name: "Beretta M9"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Standard-issue sidearm of the U.S. Armed Forces (until replaced by M17).",
//           "Double-action/single-action semi-automatic pistol.",
//           "Known for reliability and high-capacity magazine.",
//           "Open-slide design improves cycling and reliability."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 944 g (unloaded)",
//           length: "217 mm",
//           barrelLength: "125 mm",
//           caliber: "9×19mm Parabellum"
//         },
//         armament: {
//           action: "Short recoil, locked breech",
//           capacity: "15+1 rounds",
//           compatibleAmmunition: "9mm Luger"
//         },
//         performance: {
//           effectiveRange: "Up to 50 meters",
//           rateOfFire: "Semi-automatic",
//           sights: "3-dot fixed sights",
//           recoil: "Moderate"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Ergonomic grip with ambidextrous safety/decocker.",
//           "Exposed barrel and slide cuts reduce weight and jamming.",
//           "Durable matte black finish.",
//           "Military-grade build quality for harsh environments."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Used by U.S. military from 1985 to 2017.",
//           "Still popular among civilians and police.",
//           "Suitable for personal defense and tactical operations.",
//           "Frequently used in firearms training programs."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Legacy",
//         points: [
//           "Adopted after trials to replace the M1911 pistol.",
//           "Produced by Beretta USA for decades.",
//           "Served in Iraq, Afghanistan, and other major conflicts.",
//           "Replaced by the SIG Sauer M17 in U.S. service, but still widely respected."
//         ]
//       },
//       {
//         title: "In Pop Culture",
//         points: [
//           "Seen in countless movies like ‘Die Hard’, ‘Lethal Weapon’, and ‘The Matrix’.",
//           "Popular in video games such as Call of Duty, Battlefield, and Resident Evil.",
//           "Iconic silhouette makes it a recognizable symbol of military handguns."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "4f171a66-8160-4128-acf5-be36764031ee",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="Low-Poly Beretta M9" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/15c1e7bfe2f84f218d506edea97696da/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-beretta-m9-15c1e7bfe2f84f218d506edea97696da?utm_medium=embed&utm_campaign=share-popup&utm_content=15c1e7bfe2f84f218d506edea97696da" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Low-Poly Beretta M9 </a> by <a href="https://sketchfab.com/notcplkerry?utm_medium=embed&utm_campaign=share-popup&utm_content=15c1e7bfe2f84f218d506edea97696da" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> notcplkerry </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=15c1e7bfe2f84f218d506edea97696da" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const dshkData: AiGenratedWeaponData = [
//   {
//     name: "DShK"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Soviet heavy machine gun designed in the 1930s by Vasily Degtyaryov.",
//           "Chambered for 12.7×108mm cartridge.",
//           "Air-cooled, belt-fed, recoil-operated.",
//           "Effective for anti-aircraft and ground support roles."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 34 kg (gun only)",
//           length: "1,450 mm",
//           barrelLength: "1,000 mm",
//           caliber: "12.7×108mm"
//         },
//         armament: {
//           action: "Recoil-operated, open bolt",
//           rateOfFire: "600 rounds per minute",
//           effectiveRange: "Up to 2,000 meters (ground targets), 1,500 meters (air targets)",
//           feedSystem: "50-round belt"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Large barrel with cooling jacket to prevent overheating.",
//           "Mounted typically on a wheeled mount or vehicle turret.",
//           "Open bolt design for sustained fire.",
//           "Heavy and robust build suited for prolonged use."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Used extensively by Soviet and post-Soviet forces.",
//           "Employed for infantry support, anti-aircraft defense, and mounted on vehicles.",
//           "Widely exported and used in numerous conflicts worldwide.",
//           "Still in service with many countries due to reliability and power."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Introduced in 1938, replacing older heavy machine guns in Red Army.",
//           "Saw extensive use in World War II, Korean War, and beyond.",
//           "Upgraded variants like DShK-M and NSV were later developed.",
//           "Considered a classic example of Soviet heavy machine gun design."
//         ]
//       },
//       {
//         title: "In Popular Culture",
//         points: [
//           "Frequently seen in war movies and documentaries about Soviet forces.",
//           "Appears in many military video games as a heavy support weapon.",
//           "Symbolizes heavy firepower in ground and anti-aircraft combat."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "b4250096-4236-48ee-86d4-098cc83a36a4",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="DShK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d60ae4a05b054da6af45defd8b498c5d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/dshk-d60ae4a05b054da6af45defd8b498c5d?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> DShK </a> by <a href="https://sketchfab.com/carbuni?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Carbuni </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=d60ae4a05b054da6af45defd8b498c5d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const nsvData: AiGenratedWeaponData = [
//   {
//     name: "NSV 12.7 \"Utes\""
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Soviet heavy machine gun designed in the late 1960s by G.I. Nikitin, Y. V. Sokolov, and V.I. Volkov.",
//           "Chambered for 12.7×108mm cartridge.",
//           "Gas-operated, belt-fed, air-cooled.",
//           "Designed to replace the DShK and improve reliability and rate of fire."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 25 kg (gun only)",
//           length: "1,460 mm",
//           barrelLength: "1,070 mm",
//           caliber: "12.7×108mm"
//         },
//         armament: {
//           action: "Gas-operated, open bolt",
//           rateOfFire: "700 rounds per minute",
//           effectiveRange: "Up to 1,500–2,000 meters",
//           feedSystem: "50-round belt"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Robust and streamlined for easier maintenance and reliability.",
//           "Typically mounted on vehicles, tripods, or anti-aircraft mounts.",
//           "Has a quick-change barrel for sustained fire.",
//           "More compact and lighter than its predecessor, the DShK."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Widely used by Soviet and Russian forces and many allied countries.",
//           "Used for infantry support, vehicle armament, and anti-aircraft defense.",
//           "Effective against light armor, personnel, and low-flying aircraft.",
//           "Still actively used in various conflicts worldwide."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Developed in the late 1960s and introduced in the 1970s.",
//           "Adopted as a reliable heavy machine gun for ground and vehicle use.",
//           "Replaced older heavy machine guns like the DShK in many roles.",
//           "Has various modernized versions and mounts for diverse applications."
//         ]
//       },
//       {
//         title: "In Popular Culture",
//         points: [
//           "Appears in military documentaries and video games focusing on Cold War and modern warfare.",
//           "Known for its distinctive sound and heavy hitting power.",
//           "Symbolizes heavy automatic firepower in modern infantry and vehicle combat."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "4f64a7a1-c7b9-4d42-a929-ba588dda2c7e",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="low-poly NSV 12,7 &quot;Utes&quot;" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8c5204a9ed1a43c2b35636aecca5a683/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-nsv-127-utes-8c5204a9ed1a43c2b35636aecca5a683?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> low-poly NSV 12,7 &quot;Utes&quot; </a> by <a href="https://sketchfab.com/DU1701?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> D_U </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
// export const kordData: AiGenratedWeaponData = [
//   {
//     name: "Kord 12-7mm"
//   },
//   {
//     specsTech: [
//       {
//         title: "Technical Specifications",
//         points: [
//           "Russian heavy machine gun developed in the 1990s as an improved successor to the NSV.",
//           "Chambered for 12.7×108mm cartridge.",
//           "Gas-operated, belt-fed, air-cooled.",
//           "Designed for vehicle mounting and infantry support roles."
//         ],
//         dimensionsAndWeight: {
//           weight: "Approx. 25 kg (gun only)",
//           length: "1,680 mm",
//           barrelLength: "1,050 mm",
//           caliber: "12.7×108mm"
//         },
//         armament: {
//           action: "Gas-operated, open bolt",
//           rateOfFire: "600–650 rounds per minute",
//           effectiveRange: "Up to 2,000 meters",
//           feedSystem: "50-round belt"
//         }
//       }
//     ]
//   },
//   {
//     appearance: [
//       {
//         title: "Design and Features",
//         points: [
//           "Modernized design with enhanced reliability and durability.",
//           "Equipped with a quick-change barrel for sustained fire.",
//           "Typically mounted on vehicles, tripods, or naval platforms.",
//           "Distinctive large muzzle brake to reduce recoil."
//         ]
//       },
//       {
//         title: "Usage and Role",
//         points: [
//           "Used by Russian armed forces and exported to several countries.",
//           "Provides heavy fire support against infantry, light vehicles, and low-flying aircraft.",
//           "Commonly mounted on armored vehicles and technicals.",
//           "Replaced older heavy machine guns in many applications."
//         ]
//       }
//     ]
//   },
//   {
//     history: [
//       {
//         title: "Development and Deployment",
//         points: [
//           "Developed in the late 1980s, entering service in the 1990s.",
//           "Improved upon the NSV by enhancing accuracy and reducing weight.",
//           "Widely adopted for various combat roles including vehicle armament.",
//           "Remains in active service and continues to be manufactured."
//         ]
//       },
//       {
//         title: "In Popular Culture",
//         points: [
//           "Seen in modern military documentaries and video games.",
//           "Represents modern Russian heavy machine gun technology.",
//           "Known for its high power and versatility."
//         ]
//       }
//     ]
//   },
//   {
//     uniqueCode: "c5c7eba8-3c87-493a-9d22-6266d9c19a04",
//     sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="low-poly Kord 12.7" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/20c24336ba1f42fba3af34f53aa7b22d/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-kord-127-20c24336ba1f42fba3af34f53aa7b22d?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> low-poly Kord 12.7 </a> by <a href="https://sketchfab.com/DU1701?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> D_U </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=20c24336ba1f42fba3af34f53aa7b22d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
//   }
// ];
export const nsvData: AiGenratedWeaponData = [
  {
    name: "NSV 12-7 Utes"
  },
  {
    specsTech: [
      {
        title: "Technical Specifications",
        points: [
          "Soviet heavy machine gun designed in the late 1960s by G.I. Nikitin, Y. V. Sokolov, and V.I. Volkov.",
          "Chambered for 12.7×108mm cartridge.",
          "Gas-operated, belt-fed, air-cooled.",
          "Designed to replace the DShK and improve reliability and rate of fire."
        ],
        dimensionsAndWeight: {
          weight: "Approx. 25 kg (gun only)",
          length: "1,460 mm",
          barrelLength: "1,070 mm",
          caliber: "12.7×108mm"
        },
        armament: {
          action: "Gas-operated, open bolt",
          rateOfFire: "700 rounds per minute",
          effectiveRange: "Up to 1,500–2,000 meters",
          feedSystem: "50-round belt"
        }
      }
    ]
  },
  {
    appearance: [
      {
        title: "Design and Features",
        points: [
          "Robust and streamlined for easier maintenance and reliability.",
          "Typically mounted on vehicles, tripods, or anti-aircraft mounts.",
          "Has a quick-change barrel for sustained fire.",
          "More compact and lighter than its predecessor, the DShK."
        ]
      },
      {
        title: "Usage and Role",
        points: [
          "Widely used by Soviet and Russian forces and many allied countries.",
          "Used for infantry support, vehicle armament, and anti-aircraft defense.",
          "Effective against light armor, personnel, and low-flying aircraft.",
          "Still actively used in various conflicts worldwide."
        ]
      }
    ]
  },
  {
    history: [
      {
        title: "Development and Deployment",
        points: [
          "Developed in the late 1960s and introduced in the 1970s.",
          "Adopted as a reliable heavy machine gun for ground and vehicle use.",
          "Replaced older heavy machine guns like the DShK in many roles.",
          "Has various modernized versions and mounts for diverse applications."
        ]
      },
      {
        title: "In Popular Culture",
        points: [
          "Appears in military documentaries and video games focusing on Cold War and modern warfare.",
          "Known for its distinctive sound and heavy hitting power.",
          "Symbolizes heavy automatic firepower in modern infantry and vehicle combat."
        ]
      }
    ]
  },
  {
    uniqueCode: "4f64a7a1-c7b9-4d42-a929-ba588dda2c7e",
    sketchFabUrl: `<div class="sketchfab-embed-wrapper"> <iframe title="low-poly NSV 12,7 &quot;Utes&quot;" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8c5204a9ed1a43c2b35636aecca5a683/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/low-poly-nsv-127-utes-8c5204a9ed1a43c2b35636aecca5a683?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> low-poly NSV 12,7 &quot;Utes&quot; </a> by <a href="https://sketchfab.com/DU1701?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> D_U </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=8c5204a9ed1a43c2b35636aecca5a683" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`
  }
];

// addWeaponToDB(nsvData)



























export { addArrayOfWeaponsToDB, addWeaponToDB, getEachWeapon };
