// .storybook/test-runner.ts
import {
  TestRunnerConfig,
  getStoryContext,
  waitForPageReady,
} from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, story) {
    const context = await getStoryContext(page, story);
    await waitForPageReady(page);
    await page.setViewportSize(context.parameters.viewport);
    await page.waitForTimeout(1000);

    await page.evaluate(() => {
      if (!document.querySelectorAll(".preview--wrapper").length) {
        const previewWrapper = document.createElement("div");
        previewWrapper.className = "preview--wrapper";
        const preview = document.createElement("div");
        preview.className = "preview";
        previewWrapper.appendChild(preview);
        while (document.body.firstChild) {
          preview.appendChild(document.body.firstChild);
        }
        document.body.appendChild(previewWrapper);
      }
    });

    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: story.id,
      failureThresholdType: "percent",
      failureThreshold: 0.2,
      updatePassedSnapshot: true,
    });
  },
};
export default config;
