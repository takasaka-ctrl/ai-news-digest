#!/usr/bin/env node

/**
 * AI News Digest Generator
 */

const fs = require('fs');
const path = require('path');

const today = new Date().toISOString().split('T')[0];

console.log(`Generating digest for ${today}...`);

// TODO: ニュース取得・生成ロジックを実装
