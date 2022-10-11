## About Appium

- Open source test automation framework which supports native , hybrid and web apps
- cross-platform compatibility
- Uses vendor provided framework for test automation
  -iOS : XCUITest
  -Android: UIAutomator
  -Windows: WinAppDriver
- Free to use any test runner and test framework

## About WebDriverIO

Javascript e2e automation framework for web automation and it supports automating mobile apps using Appium.

## Why WebDriverIO

- Easy to get started
- Easy readable code
- Front-end friendly
- Active community supports
- Open Source

## Pre-requisite:

- Nodejs
- Java JDK Setup - Set JAVA_HOME path
- Android Studio Setup

  - Set ANDROID_HOME path
  - Verify echo $ANDROID_HOME
  - If it is blank then setup the path with the help of below mentioned steps

           ```
           vim ~/.zshenv
           export  ANDROID_HOME="/Users/username/Library/Android/sdk"
           export PATH = $ANDROID_HOME/platform-tools:$PATH
           export PATH = $ANDROID_HOME/tools:$PATH
           ```

  - Appium Desktop inspector
  - Install Appium driver for android and iOS

    `appium driver install xcuitest`

    `appium driver install uiautomator2`

## Project Setup

- Create a folder and initialize it with below command:

```
 npm init -y
```

- Install WebDriverIO CLI

```
 npm install @wdio/cli
```

- Setup config

```
npx wdio config
```
