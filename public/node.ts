import { v4 as uuidv4 } from "uuid";
import { JSDOM } from "jsdom";

function createWeaponObjects(weapons: any[], category: any) {
  let count = 0;

  return weapons.map((weapon) => {
    // Parse HTML using jsdom

    const dom = new JSDOM(weapon);
    const doc = dom.window.document;
    const anchor = doc.querySelector('a[href*="sketchfab.com/3d-models"]');

    const name = anchor?.textContent?.trim() ?? "Unknown";

    return {
      sNo: count++,
      category,
      name,
      sketchFabUrl: weapon,
      uniqueCode: uuidv4(),
    };
  });
}