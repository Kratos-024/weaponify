import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:
    "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",
  dangerouslyAllowBrowser: true,
});

async function GetTheWeaponData(
  sketchFabUrl: string,
  name: string,
  uniqueCode: string
) {
  const completion = await openai.chat.completions.create({
    model: "deepseek/deepseek-r1-0528-qwen3-8b:free",
    messages: [
      {
        role: "user",
        content: `
Generate only a valid JavaScript object structure that contains technical specifications, design details, history, and appearance of the {Weapon name i giving to you}. 
**Return only code**, no explanation, no markdown, no extra text, no things like \`\`\`json or javascript as text.
Use structured arrays/objects with fields like: name, specsTech, appearance, history, uniqueCode, and sketchFabUrl.

Dont change the uniqueCode
i added html in sketchFabUrl dont change that and i added Name dont change that also:
 type SpecTech = {
  title?: string;
  points?: string[];
  dimensionsAndWeight?: {
    weight: string;
    length: string;
    width: string;
    height: string;
  };
  armament?: {
    mainGun?: string;
    secondary?: string;
    coaxial?: string;
    ammunitionCapacity?: string;
  };
  performance?: {
    engine?: string;
    maxSpeed?: string;
    range?: string;
    crew?: string;
  };
};

type Appearance = {
  title: string;
  points: string[];
};

type History = {
  title: string;
  points: string[];
};
Give me final array which will be like this
i want only this output nothing else
[
  {  name: ${name}},
  {  specsTech: SpecTech[]},
  {  appearance: Appearance[]},
  {  history: History[]},
  {uniqueCode: ${uniqueCode},
  sketchFabUrl: ${sketchFabUrl}}]
  

  for example like if you want to know how much data and how data should be there here is the exampel data 
  [
  {
    "name": "AK-74"
  },
  {
    "specsTech": [
      {
        "title": "Kalashnikov-derived",
        "points": [
          "Gas-operated",
          "Bolt-action",
          "Receives 7.62x39mm round which has been replaced by the 5.45x39mm in modern variants"
        ],
        "dimensionsAndWeight": {
          "weight": "3.12 kg (empty)",
          "length": "890 mm",
          "width": "53 mm",
          "height": "210 mm"
        },
        "armament": {
          "mainGun": "7.62x39mm (originally) / 5.45x39mm (modern)",
          "secondary": "None",
          "coaxial": "None",
          "ammunitionCapacity": "30 rounds"
        },
        "performance": {
          "engine": "Recoil-operated",
          "maxSpeed": "NA",
          "range": "NA",
          "crew": "1"
        }
      }
    ]
  },
  {
    "appearance": [
      {
        "title": "Appearance",
        "points": [
          "Stainless steel finish with black plastic furniture",
          "Standard AK-74 features - long, rectangular stock with wooden handle grips",
          "Magazine capacity: 30 rounds"
        ]
      }
    ]
  },
  {
    "history": [
      {
        "title": "Development History",
        "points": [
          "Designed by Mikhail Kalashnikov, introduced in 1974",
          "Replaces AKM in Soviet service, based on the M43 design",
          "Uses direct impingement gas system with a compensator",
          "Named after the year of introduction"
        ]
      }
    ]
  },
  {
    "uniqueCode": "978a546f-8a86-4fe9-ba58-c7febf38a663",
    "sketchFabUrl": "<div class=\"sketchfab-embed-wrapper\"><iframe title=\"AK-74\" frameborder=\"0\" allowfullscreen mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" allow=\"autoplay; fullscreen; xr-spatial-tracking\" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src=\"https://sketchfab.com/models/44c6581b852a4a03a0cd509be06f0dd8/embed\"></iframe><p style=\"font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;\">\n  <a href=\"https://sketchfab.com/3d-models/ak-74-44c6581b852a4a03a0cd509be06f0dd8?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8\" target=\"_blank\" rel=\"nofollow\" style=\"font-weight: bold; color: #1CAAD9;\"> AK-74 </a> by <a href=\"https://sketchfab.com/dimalukomo?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8\" target=\"_blank\" rel=\"nofollow\" style=\"font-weight: bold; color: #1CAAD9;\"> madridista_9248 </a> on <a href=\"https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=44c6581b852a4a03a0cd509be06f0dd8\" target=\"_blank\" rel=\"nofollow\" style=\"font-weight: bold; color: #1CAAD9;\">Sketchfab</a></p></div>"
  }
]
  make sure that the output which will you generate will look like above
`,
      },
    ],
  });

  return completion.choices[0].message.content;
}

export { GetTheWeaponData };
