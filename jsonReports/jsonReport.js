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
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests/visual",
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
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests/visual",
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
        "testDir": "/home/alexander/E2EPlaywrightInterial/tests/visual",
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
    "configFile": "/home/alexander/E2EPlaywrightInterial/visual.config.ts",
    "rootDir": "/home/alexander/E2EPlaywrightInterial/tests/visual",
    "quiet": false,
    "shard": null,
    "updateSnapshots": "missing",
    "version": "1.31.1",
    "workers": 4,
    "webServer": null
  },
  "suites": [
    {
      "title": "visual.spec.ts",
      "file": "visual.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [],
      "suites": [
        {
          "title": "Visual Regression Testing Example",
          "file": "visual.spec.ts",
          "line": 3,
          "column": 15,
          "specs": [
            {
              "title": "Full Page Snapshot",
              "ok": true,
              "tags": [],
              "tests": [
                {
                  "timeout": 30000,
                  "annotations": [],
                  "expectedStatus": "passed",
                  "projectName": "webkit",
                  "results": [
                    {
                      "workerIndex": 0,
                      "status": "passed",
                      "duration": 813,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-17T16:44:34.946Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "8324bb52c49185e48ff4-ca032b30f3ffd61e2f59",
              "file": "visual.spec.ts",
              "line": 4,
              "column": 7
            }
          ]
        }
      ]
    }
  ],
  "errors": []
}