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
                      "duration": 1092,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-22T11:05:18.951Z",
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
            },
            {
              "title": "Single Element Snapshot",
              "ok": false,
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
                      "status": "failed",
                      "duration": 927,
                      "error": {
                        "message": "A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts-snapshots/page-title-webkit-linux.png, writing actual.",
                        "stack": "Error: A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts-snapshots/page-title-webkit-linux.png, writing actual.\n    at /home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts:12:45"
                      },
                      "errors": [
                        {
                          "location": {
                            "file": "/home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts",
                            "column": 45,
                            "line": 12
                          },
                          "message": "Error: A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts-snapshots/page-title-webkit-linux.png, writing actual.\n\n\u001b[90m   at \u001b[39mvisual.spec.ts:12\n\n\u001b[0m \u001b[90m 10 |\u001b[39m     \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39mgoto(\u001b[32m\"https://www.example.com\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 11 |\u001b[39m     \u001b[36mconst\u001b[39m pageElement \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m page\u001b[33m.\u001b[39m$(\u001b[32m\"h1\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 12 |\u001b[39m     expect(\u001b[36mawait\u001b[39m pageElement\u001b[33m?\u001b[39m\u001b[33m.\u001b[39mscreenshot())\u001b[33m.\u001b[39mtoMatchSnapshot(\u001b[32m\"page-title.png\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m\u001b[0m\n\n\u001b[2m    at /home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts:12:45\u001b[22m"
                        }
                      ],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-22T11:05:20.367Z",
                      "attachments": [
                        {
                          "name": "video",
                          "contentType": "video/webm",
                          "path": "/home/alexander/E2EPlaywrightInterial/test-results/visual-Visual-Regression-Testing-Example-Single-Element-Snapshot-webkit/video.webm"
                        },
                        {
                          "name": "screenshot",
                          "contentType": "image/png",
                          "path": "/home/alexander/E2EPlaywrightInterial/test-results/visual-Visual-Regression-Testing-Example-Single-Element-Snapshot-webkit/test-failed-1.png"
                        }
                      ],
                      "errorLocation": {
                        "file": "/home/alexander/E2EPlaywrightInterial/tests/visual/visual.spec.ts",
                        "column": 45,
                        "line": 12
                      }
                    }
                  ],
                  "status": "unexpected"
                }
              ],
              "id": "8324bb52c49185e48ff4-ad0f97b73f4a7a32d0e7",
              "file": "visual.spec.ts",
              "line": 9,
              "column": 7
            }
          ]
        }
      ]
    }
  ],
  "errors": []
}