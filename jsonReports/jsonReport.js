{
  "config": {
    "forbidOnly": false,
    "fullyParallel": false,
    "globalSetup": null,
    "globalTeardown": null,
    "globalTimeout": 0,
    "grep": {},
    "grepInvert": null,
    "maxFailures": 0,
    "metadata": {},
    "preserveOutput": "always",
    "projects": [
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "chromium",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      },
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "firefox",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      },
      {
        "outputDir": "/home/alexander/E2EPlaywrightInterial/test-results",
        "repeatEach": 1,
        "retries": 0,
        "name": "webkit",
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests",
        "testIgnore": [],
        "testMatch": [
          "**/?(*.)@(spec|test).*"
        ],
        "timeout": 30000
      }
    ],
    "reporter": [
      [
        "dot",
        null
      ],
      [
        "json",
        {
          "outputFile": "jsonReports/jsonReport.js"
        }
      ],
      [
        "html",
        {
          "open": "never"
        }
      ]
    ],
    "reportSlowTests": {
      "max": 5,
      "threshold": 15000
    },
    "configFile": "/home/alexander/E2EPlaywrightInterial/playwright.config.ts",
    "rootDir": "/home/alexander/E2EPlaywrightInterial/tests",
    "quiet": false,
    "shard": null,
    "updateSnapshots": "missing",
    "version": "1.31.1",
    "workers": 4,
    "webServer": null
  },
  "suites": [
    {
      "title": "example.test.ts",
      "file": "example.test.ts",
      "column": 0,
      "line": 0,
      "specs": [
        {
          "title": "Negative Scenario for login",
          "ok": true,
          "tags": [],
          "tests": [
            {
              "timeout": 30000,
              "annotations": [],
              "expectedStatus": "passed",
              "projectName": "chromium",
              "results": [
                {
                  "workerIndex": 0,
                  "status": "passed",
                  "duration": 2825,
                  "errors": [],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-03-13T16:03:52.554Z",
                  "attachments": []
                }
              ],
              "status": "expected"
            }
          ],
          "id": "7492e6456b96468f1b9c-02e4b53d49ab322d82e0",
          "file": "example.test.ts",
          "line": 9,
          "column": 6
        },
        {
          "title": "Positive Scenario with logout",
          "ok": true,
          "tags": [],
          "tests": [
            {
              "timeout": 30000,
              "annotations": [],
              "expectedStatus": "passed",
              "projectName": "chromium",
              "results": [
                {
                  "workerIndex": 0,
                  "status": "passed",
                  "duration": 4988,
                  "errors": [],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-03-13T16:03:55.594Z",
                  "attachments": []
                }
              ],
              "status": "expected"
            }
          ],
          "id": "7492e6456b96468f1b9c-964dc5aba4347e608ad6",
          "file": "example.test.ts",
          "line": 17,
          "column": 6
        }
      ]
    }
  ],
  "errors": []
}