#!/usr/bin/env node
/* eslint-disable no-console */

const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = path.join(__dirname, "../audit-results");
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function runLighthouse(url, options = {}) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  options.port = chrome.port;

  try {
    const runnerResult = await lighthouse(url, options);
    await chrome.kill();
    return runnerResult;
  } catch (error) {
    await chrome.kill();
    throw error;
  }
}

async function auditPage(url, pageName) {
  console.log(`\n🔍 Auditing ${pageName} (${url})...`);

  const options = {
    logLevel: "info",
    output: "json",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  };

  try {
    const result = await runLighthouse(url, options);

    // Save full report
    const reportPath = path.join(OUTPUT_DIR, `${pageName}-lighthouse.json`);
    fs.writeFileSync(reportPath, JSON.stringify(result.lhr, null, 2));

    // Extract scores
    const scores = {
      performance: Math.round(result.lhr.categories.performance.score * 100),
      accessibility: Math.round(
        result.lhr.categories.accessibility.score * 100,
      ),
      bestPractices: Math.round(
        result.lhr.categories["best-practices"].score * 100,
      ),
      seo: Math.round(result.lhr.categories.seo.score * 100),
    };

    // Extract issues
    const issues = {
      performance: result.lhr.audits,
      accessibility: result.lhr.audits,
      seo: result.lhr.audits,
    };

    return { scores, issues, lhr: result.lhr };
  } catch (error) {
    console.error(`❌ Error auditing ${pageName}:`, error.message);
    return null;
  }
}

async function generateReport(results) {
  const reportPath = path.join(OUTPUT_DIR, "audit-report.md");

  let report = "# Website Performance, Accessibility & SEO Audit Report\n\n";
  report += `Generated: ${new Date().toISOString()}\n\n`;
  report += "## Executive Summary\n\n";

  // Calculate averages
  const avgScores = {
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  };

  const validResults = results.filter((r) => r !== null);
  validResults.forEach((result) => {
    avgScores.performance += result.scores.performance;
    avgScores.accessibility += result.scores.accessibility;
    avgScores.bestPractices += result.scores.bestPractices;
    avgScores.seo += result.scores.seo;
  });

  Object.keys(avgScores).forEach((key) => {
    avgScores[key] = Math.round(avgScores[key] / validResults.length);
  });

  report += `| Metric | Score |\n`;
  report += `|--------|-------|\n`;
  report += `| Performance | ${avgScores.performance}/100 |\n`;
  report += `| Accessibility | ${avgScores.accessibility}/100 |\n`;
  report += `| Best Practices | ${avgScores.bestPractices}/100 |\n`;
  report += `| SEO | ${avgScores.seo}/100 |\n\n`;

  // Detailed results per page
  report += "## Detailed Results\n\n";
  validResults.forEach((result) => {
    report += `### ${result.pageName}\n\n`;
    report += `| Category | Score |\n`;
    report += `|----------|-------|\n`;
    report += `| Performance | ${result.scores.performance}/100 |\n`;
    report += `| Accessibility | ${result.scores.accessibility}/100 |\n`;
    report += `| Best Practices | ${result.scores.bestPractices}/100 |\n`;
    report += `| SEO | ${result.scores.seo}/100 |\n\n`;

    // Key issues
    if (result.issues) {
      report += "#### Key Issues\n\n";

      // Accessibility issues
      const a11yAudits = Object.values(result.issues).filter(
        (audit) => audit.id && audit.id.startsWith("accessibility"),
      );
      const a11yFailures = a11yAudits.filter(
        (audit) => audit.score !== null && audit.score < 1,
      );

      if (a11yFailures.length > 0) {
        report += "**Accessibility Issues:**\n";
        a11yFailures.slice(0, 10).forEach((audit) => {
          report += `- ${audit.title}: ${audit.description}\n`;
        });
        report += "\n";
      }

      // SEO issues
      const seoAudits = Object.values(result.issues).filter(
        (audit) => audit.id && audit.id.startsWith("seo"),
      );
      const seoFailures = seoAudits.filter(
        (audit) => audit.score !== null && audit.score < 1,
      );

      if (seoFailures.length > 0) {
        report += "**SEO Issues:**\n";
        seoFailures.slice(0, 10).forEach((audit) => {
          report += `- ${audit.title}: ${audit.description}\n`;
        });
        report += "\n";
      }

      // Performance opportunities
      const perfAudits = Object.values(result.issues).filter(
        (audit) => audit.id && audit.id.startsWith("performance"),
      );
      const perfOpportunities = perfAudits.filter(
        (audit) =>
          audit.score !== null &&
          audit.score < 1 &&
          audit.details &&
          audit.details.type === "opportunity",
      );

      if (perfOpportunities.length > 0) {
        report += "**Performance Opportunities:**\n";
        perfOpportunities.slice(0, 10).forEach((audit) => {
          report += `- ${audit.title}: ${audit.description}\n`;
        });
        report += "\n";
      }
    }
  });

  fs.writeFileSync(reportPath, report);
  console.log(`\n✅ Report generated: ${reportPath}`);
}

async function main() {
  console.log("🚀 Starting comprehensive website audit...\n");
  console.log(`Base URL: ${BASE_URL}\n`);

  const pages = [
    { path: "/", name: "home" },
    { path: "/about", name: "about" },
    { path: "/services", name: "services" },
    { path: "/blog", name: "blog" },
    { path: "/contact", name: "contact" },
    { path: "/utilities", name: "utilities" },
  ];

  const results = [];

  for (const page of pages) {
    const url = `${BASE_URL}${page.path}`;
    const result = await auditPage(url, page.name);
    if (result) {
      result.pageName = page.name;
      result.url = url;
      results.push(result);
    }
    // Small delay between audits
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  await generateReport(results);
  console.log("\n✅ Audit complete!");
}

main().catch(console.error);
