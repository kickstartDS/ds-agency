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
