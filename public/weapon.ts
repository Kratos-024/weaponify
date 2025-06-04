import OpenAI from "openai";
import type { ResponseWeaponData } from "./types/weapon";

const fakeSpecTech = [
  {
    title: "",
    points: ["", ""],
    dimensionsAndWeight: {
      weight: "",
      length: "",
      width: "",
      height: "",
    },
    armament: {
      mainGun: "",
      secondary: "",
      coaxial: "",
      ammunitionCapacity: "",
    },
    performance: {
      engine: "",
      maxSpeed: "",
      range: "",
      crew: "",
    },
  },
];

const fakeAppearance = [
  {
    title: "",
    points: ["", ""],
  },
];

const fakeHistory = [
  {
    title: "",
    points: ["", "", "", ""],
  },
];
const fakeWeapon: ResponseWeaponData = {
  name: "",
  id: "",
  specsTech: fakeSpecTech,
  appearance: fakeAppearance,
  history: fakeHistory,
  sketchFabUrl: "",
};

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

async function GetTheWeaponData(
  sketchFabUrl: string,
  imgUrls: string[],
  uniqueCode: string
) {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
    messages: [
      {
        role: "user",
        content: `
Generate only a valid JavaScript object structure that contains technical specifications, design details, history, and appearance of the HK416 weapon. 
**Return only code**, no explanation, no markdown, no extra text, no things like \`\`\`json or javascript as text.
Use structured arrays/objects with fields like: name, specsTech, appearance, history, uniqueCode, and sketchFabUrl.

Dont change the uniqueCode
i added html in sketchFabUrl dont change that and i added img urls dont change that also:
const ak47specsAndTech = [
  {
    title: "Development and Design",
    points: [
      "The AK-47 (Avtomat Kalashnikova 1947) was developed by Mikhail Kalashnikov in the Soviet Union after World War II to provide a reliable and simple automatic weapon for infantry.",
      "Its design prioritizes ease of manufacturing, durability, and functionality in harsh conditions like mud, sand, and extreme weather.",
      "Adopted by the Soviet military in 1949, the AK-47 set a new standard for assault rifles worldwide.",
      "The weapon features a gas-operated, rotating bolt mechanism and is known for its ability to function with minimal maintenance.",
      "Its design has influenced numerous derivatives, including the AKM, which became even more widespread globally.",
    ],
  },
  {
    dimensionsAndWeight: {
      weight: "3.47 kg (without magazine)",
      length: "870 mm (stock extended)",
      width: "Not standardized",
      height: "Not standardized",
    },
    armament: {
      mainGun: "7.62×39mm cartridge",
      firingModes: "Semi-automatic and fully automatic",
      magazine: "30-round detachable box magazine",
    },
    performance: {
      rateOfFire: "600 rounds/min",
      effectiveRange: "350 m (point target), 800 m (area target)",
      maxRange: "1000 m",
      muzzleVelocity: "715 m/s",
      crew: "1 (individual soldier)",
    },
  },
];

const ak47appearance = [
  {
    title: "Appearance in Popular Culture / Media",
    points: [
      "The AK-47 is featured in countless war films, action movies, and documentaries due to its historical significance and widespread use.",
      "It is often symbolized as a weapon of revolution and resistance, appearing on flags, posters, and propaganda worldwide.",
      "It has become an icon in global media as a symbol of conflict zones and guerrilla warfare.",
      "The rifle's rugged silhouette is one of the most recognized firearm designs in history.",
    ],
  },
  {
    title: "Video Games Appearance",
    points: [
      ${imgUrls},
    ],
  },
];

const ak47history = [
  {
    title: "Introduction",
    points: [
      "The AK-47 was introduced in the late 1940s as the Soviet Union sought to replace bolt-action rifles with more efficient automatic firearms.",
      "It quickly gained prominence due to its simplicity, reliability, and effectiveness in a wide range of combat scenarios.",
    ],
  },
  {
    title: "Production and Deployment",
    points: [
      "Mass production of the AK-47 began in 1949, and it was adopted as the standard issue rifle for Soviet troops.",
      "Over 100 million units (including variants) have been produced, making it the most widely used assault rifle in the world.",
      "It has been used by more than 100 countries and numerous non-state actors across decades of global conflict.",
    ],
  },
  {
    title: "Combat History and Operational Use",
    points: [
      "First saw action during the early Cold War conflicts such as the Vietnam War, where it was used by North Vietnamese forces.",
      "It became a staple weapon in African and Middle Eastern conflicts throughout the 20th and 21st centuries.",
      "Its ruggedness and ease of use made it ideal for insurgents, militias, and national armies alike.",
    ],
  },
  {
    title: "Modern Upgrades and Current Status",
    points: [
      "Variants like the AKM and AK-103 have replaced the original AK-47 in most military applications.",
      "Some versions now include accessory rails, improved materials, and enhanced ergonomics for modern warfare.",
      "Despite newer designs, the AK-47 and its variants remain active in many global conflicts.",
    ],
  },
  {
    title: "Conclusion",
    points: [
      "The AK-47 is more than just a weapon—it's a global icon of armed struggle and resilience.",
      "Its combination of durability, ease of use, and mass production has ensured its place in military history.",
      "Whether in the hands of state armies or rebel groups, the AK-47 remains one of the most influential firearms ever made.",
    ],
  },
];

const ak47: Weapon = [
  { name: "AK-47" },
  { specsTech: ak47specsAndTech },
  { appearance: ak47appearance },
  { history: ak47history },
  {
    uniqueCode: ${uniqueCode},
    sketchFabUrl:
      ${sketchFabUrl},
  },
];

`,
      },
    ],
  });

  return completion.choices[0].message.content;
}

export { GetTheWeaponData, fakeWeapon };
