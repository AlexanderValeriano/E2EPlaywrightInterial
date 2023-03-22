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
      "title": "login-visual.spec.ts",
      "file": "login-visual.spec.ts",
      "column": 0,
      "line": 0,
      "specs": [],
      "suites": [
        {
          "title": "Login Page Visual Tests",
          "file": "login-visual.spec.ts",
          "line": 5,
          "column": 15,
          "specs": [
            {
              "title": "Login Form",
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
                      "duration": 2621,
                      "errors": [],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-22T11:49:11.100Z",
                      "attachments": []
                    }
                  ],
                  "status": "expected"
                }
              ],
              "id": "d579c0da0f3cc52235b7-4514081ed2a04b3b7bce",
              "file": "login-visual.spec.ts",
              "line": 16,
              "column": 7
            },
            {
              "title": "Login Error Message",
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
                      "duration": 3365,
                      "error": {
                        "message": "A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/login-visual.spec.ts-snapshots/login-error-webkit-linux.png, writing actual.",
                        "stack": "Error: A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/login-visual.spec.ts-snapshots/login-error-webkit-linux.png, writing actual.\n    at LoginPage.snapshotErrorMessage (/home/alexander/E2EPlaywrightInterial/page-objects/LoginPage.ts:39:50)\n    at /home/alexander/E2EPlaywrightInterial/tests/visual/login-visual.spec.ts:22:5"
                      },
                      "errors": [
                        {
                          "location": {
                            "file": "/home/alexander/E2EPlaywrightInterial/page-objects/LoginPage.ts",
                            "column": 50,
                            "line": 39
                          },
                          "message": "Error: A snapshot doesn't exist at /home/alexander/E2EPlaywrightInterial/tests/visual/login-visual.spec.ts-snapshots/login-error-webkit-linux.png, writing actual.\n\n\u001b[90m   at \u001b[39m../../page-objects/LoginPage.ts:39\n\n\u001b[0m \u001b[90m 37 |\u001b[39m   }\u001b[0m\n\u001b[0m \u001b[90m 38 |\u001b[39m   \u001b[36masync\u001b[39m snapshotErrorMessage() {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 39 |\u001b[39m     expect(\u001b[36mawait\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39merrorMessage\u001b[33m.\u001b[39mscreenshot())\u001b[33m.\u001b[39mtoMatchSnapshot(\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 40 |\u001b[39m       \u001b[32m\"login-error.png\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 |\u001b[39m     )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 42 |\u001b[39m   }\u001b[0m\n\n\u001b[2m    at LoginPage.snapshotErrorMessage (/home/alexander/E2EPlaywrightInterial/page-objects/LoginPage.ts:39:50)\u001b[22m\n\u001b[2m    at /home/alexander/E2EPlaywrightInterial/tests/visual/login-visual.spec.ts:22:5\u001b[22m"
                        }
                      ],
                      "stdout": [],
                      "stderr": [],
                      "retry": 0,
                      "startTime": "2023-03-22T11:49:14.133Z",
                      "attachments": [
                        {
                          "name": "video",
                          "contentType": "video/webm",
                          "path": "/home/alexander/E2EPlaywrightInterial/test-results/login-visual-Login-Page-Visual-Tests-Login-Error-Message-webkit/video.webm"
                        },
                        {
                          "name": "screenshot",
                          "contentType": "image/png",
                          "path": "/home/alexander/E2EPlaywrightInterial/test-results/login-visual-Login-Page-Visual-Tests-Login-Error-Message-webkit/test-failed-1.png"
                        }
                      ],
                      "errorLocation": {
                        "file": "/home/alexander/E2EPlaywrightInterial/page-objects/LoginPage.ts",
                        "column": 50,
                        "line": 39
                      }
                    }
                  ],
                  "status": "unexpected"
                }
              ],
              "id": "d579c0da0f3cc52235b7-98a075c223df9ff8719d",
              "file": "login-visual.spec.ts",
              "line": 20,
              "column": 7
            }
          ]
        }
      ]
    }
  ],
  "errors": []
}