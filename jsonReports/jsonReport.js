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
      "title": "e2e/e2e-search.spec.ts",
      "file": "e2e/e2e-search.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [],
      "suites": [
        {
          "title": "Search Results",
          "file": "e2e/e2e-search.spec.ts",
          "line": 4,
          "column": 15,
          "specs": [
            {
              "title": "Should Find Search Results",
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
                      "duration": 2915,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-15T13:10:24.331Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "94505ed210397eb389a3-c900c731c2dc44b51c95",
              "file": "e2e/e2e-search.spec.ts",
              "line": 5,
              "column": 7
            }
          ]
        }
      ]
    },
    {
      "title": "e2e/e2e-submit-resetForm.spec.ts",
      "file": "e2e/e2e-submit-resetForm.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [],
      "suites": [
        {
          "title": "Feedback Form",
          "file": "e2e/e2e-submit-resetForm.spec.ts",
          "line": 5,
          "column": 15,
          "specs": [
            {
              "title": "Reset feedback form",
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
                      "workerIndex": 1,
                      "status": "passed",
                      "duration": 3197,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-15T13:10:24.335Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "44df47f5ee3b4b3591ee-cdd190e8a5c2618b5859",
              "file": "e2e/e2e-submit-resetForm.spec.ts",
              "line": 16,
              "column": 7
            },
            {
              "title": "Submit feedback form",
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
                      "workerIndex": 1,
                      "status": "passed",
                      "duration": 2194,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-15T13:10:27.805Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "44df47f5ee3b4b3591ee-0941dfaa8bbf9e46c3c1",
              "file": "e2e/e2e-submit-resetForm.spec.ts",
              "line": 27,
              "column": 7
            }
          ]
        }
      ]
    }
  ],
  "errors": []
}