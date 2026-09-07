import assert from 'node:assert/strict'
import { setTimeout } from 'node:timers/promises'

const base = new URL(process.argv[2] ?? 'http://127.0.0.1:8080')
let html

for (let attempt = 0; attempt < 30; attempt++) {
  try {
    const response = await fetch(base, { signal: AbortSignal.timeout(2000) })
    assert.equal(response.status, 200)
    assert.match(response.headers.get('content-type') ?? '', /text\/html/)
    html = await response.text()
    break
  } catch (error) {
    if (attempt === 29) throw error
    await setTimeout(1000)
  }
}

assert.match(html, /<title>Lymdun\.moe<\/title>/)
assert.match(html, /id="app"/)
const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"\s]+\.(?:js|css))"/g)]
assert(assets.some(([, path]) => path.endsWith('.js')), 'Missing built JavaScript')
assert(assets.some(([, path]) => path.endsWith('.css')), 'Missing built CSS')

for (const [, path] of assets) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(5000) })
  assert.equal(response.status, 200, path)
  assert.match(response.headers.get('content-type') ?? '', path.endsWith('.js') ? /javascript/ : /text\/css/)
  assert((await response.text()).length > 0, `Empty asset: ${path}`)
}

console.log(`HTTP smoke check passed: site HTML and ${assets.length} built assets`)
