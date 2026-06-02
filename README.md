# SauceDemo Automation Test

## Requirements

* Node.js v18 atau lebih baru
* npm

## Project Structure

Automation test berada pada folder:

```text
submission/
└── automation/
```

Pastikan seluruh perintah dijalankan dari folder `automation`.

## Installation

Masuk ke folder automation:

```bash
cd automation
```

Install dependency:

```bash
npm install
```

## Run All Tests

```bash
npx playwright test
```

## Run Specific Test

Menjalankan test login saja:

```bash
npx playwright test tests/login.spec.js
```

## View HTML Report

```bash
npx playwright show-report
```

## Browser Configuration

Automation test dijalankan pada:

* Google Chrome
* Microsoft Edge

## Framework

* Playwright
* JavaScript
* Page Object Model (POM)


## AI Usage Disclosure

Selama pengerjaan submission ini, saya menggunakan beberapa AI tools sebagai pendukung proses pengerjaan:

* ChatGPT: digunakan untuk membantu brainstorming test scenario, review struktur dokumentasi.
* Claude: digunakan sebagai penulisan automation test Playwright.


