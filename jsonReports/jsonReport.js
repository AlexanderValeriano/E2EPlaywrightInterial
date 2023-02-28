{
  "config": {
    "forbidOnly": false,
    "fullyParallel": true,
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
          "tests/devisCodegen.test.ts"
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
          "tests/devisCodegen.test.ts"
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
          "tests/devisCodegen.test.ts"
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
      "title": "devisCodegen.test.ts",
      "file": "devisCodegen.test.ts",
      "column": 0,
      "line": 0,
      "specs": [
        {
          "title": "test",
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
                  "duration": 13211,
                  "errors": [],
                  "stdout": [],
                  "stderr": [],
                  "retry": 0,
                  "startTime": "2023-02-28T13:39:00.764Z",
                  "attachments": []
                }
              ],
              "status": "expected"
            }
          ],
          "id": "26ebd4030accb2088872-cf39d9783fc7338f1e06",
          "file": "devisCodegen.test.ts",
          "line": 3,
          "column": 5
        }
      ]
    }
  ],
  "errors": []
}