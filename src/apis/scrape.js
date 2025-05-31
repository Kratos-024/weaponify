import puppeteer from "puppeteer";

const t90TankGames = [
  "Call of Duty: Modern Warfare 3",
  "Call of Duty: Ghosts",
  "Battlefield 2",
  "Battlefield 3",
  "Battlefield 4",
  "Battlefield: Bad Company 2",
  "Project Reality: BF2",
  "Squad",
  "Armored Warfare",
  "Wargame: Red Dragon",
  "Combat Mission: Shock Force – Marines",
  "War Thunder",
  "Metro: Last Light",
  "Metro Exodus",
];

// Helper function to replace waitForTimeout
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTheAppearance = async () => {
  let browser;

  try {
    const launchConfigs = [
      {
        headless: false,
        executablePath:
          "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
      {
        headless: false,
        executablePath:
          "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
      {
        headless: false,
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          "--disable-dev-shm-usage",
        ],
      },
      {
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    ];

    let browserLaunched = false;
    for (let i = 0; i < launchConfigs.length && !browserLaunched; i++) {
      try {
        console.log(`Trying launch config ${i + 1}...`);
        browser = await puppeteer.launch(launchConfigs[i]);
        browserLaunched = true;
        console.log(`✓ Browser launched successfully with config ${i + 1}`);
      } catch (error) {
        console.log(`✗ Config ${i + 1} failed:`, error.message);
        if (i === launchConfigs.length - 1) {
          throw new Error("All browser launch configurations failed");
        }
      }
    }

    const imageUrls = [];

    for (const game of t90TankGames) {
      let page;

      try {
        console.log(`Starting search for: ${game}`);
        page = await browser.newPage();

        // Set longer timeout and better error handling
        page.setDefaultTimeout(30000);
        page.setDefaultNavigationTimeout(30000);

        await page.goto("https://www.google.com/", {
          waitUntil: "domcontentloaded",
          timeout: 30000,
        });

        await delay(2000);
        await page.waitForSelector("body"); // wait for some basic element first

        const [searchInput] = await page.waitForSelector(`.gLFyf`);
        await delay(20000);

        if (!searchInput) {
          throw new Error("Textarea element not found");
        }

        // You can then interact with searchInput as an ElementHandle:
        await searchInput.click({ clickCount: 3 });

        const searchQuery = `${game} T-90 tank screenshots`;
        await searchInput.type(searchQuery, { delay: 100 });

        //     await Promise.all([
        //       page.waitForNavigation({
        //         waitUntil: "domcontentloaded",
        //         timeout: 30000,
        //       }),
        //       page.keyboard.press("Enter"),
        //     ]);

        //     // Wait for results to load - FIXED
        //     await delay(3000);

        //     // Click on Images tab
        //     try {
        //       await page.click('a[href*="tbm=isch"]');
        //       await delay(2000);
        //     } catch (e) {
        //       console.log(`Could not click Images tab for ${game}`);
        //     }

        //     // Extract image URL
        //     const imageUrl = await page.evaluate(() => {
        //       // Try multiple selectors for images
        //       const selectors = [
        //         'img[data-src*="http"]',
        //         'img[src*="googleusercontent"]',
        //         'img[src*="gstatic"]',
        //         ".rg_i img",
        //         ".images_table img",
        //         'img[src*="http"]',
        //       ];

        //       for (const selector of selectors) {
        //         const imgs = document.querySelectorAll(selector);
        //         for (const img of imgs) {
        //           const src = img.src || img.dataset.src;
        //           if (
        //             src &&
        //             src.startsWith("http") &&
        //             !src.includes("logo") &&
        //             !src.includes("icon")
        //           ) {
        //             return src;
        //           }
        //         }
        //       }
        //       return null;
        //     });

        //     imageUrls.push({ game, imageUrl });
        //     console.log(`✓ ${game}: ${imageUrl || "No image found"}`);
        //   } catch (error) {
        //     console.error(`✗ Error for ${game}:`, error.message);
        //     imageUrls.push({ game, imageUrl: null });
        //   } finally {
        //     // Safely close the page
        //     if (page && !page.isClosed()) {
        //       try {
        //         await page.close();
        //       } catch (closeError) {
        //         console.log(
        //           `Warning: Could not close page for ${game}:`,
        //           closeError.message
        //         );
        //       }
        //     }
        //   }

        //   // Add delay between requests to be respectful - FIXED
        //   await delay(2000);
        // }

        // console.log("\n=== Final Results ===");
        // imageUrls.forEach(({ game, imageUrl }) => {
        //   console.log(`${game}: ${imageUrl || "NOT FOUND"}`);
        // });

        // return imageUrls;
      } catch (error) {
        console.error("Browser launch error:", error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Browser launch error:", error);
    throw error;
  }
};

getTheAppearance();
