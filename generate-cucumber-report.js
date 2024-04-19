
const report = require("multiple-cucumber-html-reporter")
const chalk = require("chalk")

const options = {
  jsonDir: 'reports/cucumber-json',
  reportPath: 'reports/cucumber_report'
}

try {
  reporter.generate(options)
} catch (e) {
  console.log(chalk.red(`Could not generate cypress reports`))
  console.log(chalk.red(`${e}`))
}