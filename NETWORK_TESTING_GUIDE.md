# Quick Mobile Network Testing Guide

## Test Locally Before Deploying to Vercel

### Step 1: Start Dev Server
```bash
npm start
# App runs on http://localhost:3001
```

### Step 2: Open Chrome DevTools
```
F12 → Network tab
```

### Step 3: Simulate Slow Mobile Network
```
1. Network tab → Throttling dropdown (defaults to "No throttling")
2. Select: "Slow 4G" or "Fast 3G"
3. Check "Disable cache" checkbox
4. Reload page (Ctrl+R)
```

### Step 4: Observe Image Loading
```
In Network tab, look for ABOUT1.JPG entry:
✅ CORRECT: Shows "lazy" attribute / deferred loading
❌ WRONG: Shows immediate loading without "lazy"

Observe timeline:
- HTML loads first (~100ms)
- JS loads (~600ms)
- Animations start immediately ✅
- Image loads AFTER you scroll (~3000ms) ✅
```

### Step 5: Verify Improvements

#### Check FPS During Load
```
DevTools → More tools → Rendering
1. Check "Show FPS meter"
2. Watch as page loads with "Fast 3G"
3. Expected: 30-40 FPS (no jank)
4. Before: Would see drops to 5-10 FPS during image load
```

#### Check CPU Usage
```
DevTools → Performance tab
1. Click Record
2. Reload page with "Fast 3G" throttling
3. Scroll through page
4. Stop recording
5. Expected: CPU < 15% during scroll
6. Look for: Smooth timeline, no red spikes
```

#### Check Loading Sequence
```
DevTools → Network tab → Refresh with "Fast 3G"
Timeline should show:
0ms   | Page starts loading
100ms | HTML received ✅
150ms | CSS loaded
600ms | JavaScript loaded ✅
700ms | Animations begin ✅
1200ms| Hero section visible + interactive ✅
3500ms| (User scrolls to image)
4000ms| ABOUT1.JPG finally loads ✅
```

## Performance Comparison Checklist

### Before Optimization (Current Production URL)
Test at: https://chathukadilakshana.vercel.app/
```
⏱️ Time to Interactive: 3-5 seconds
🎬 Animations start: Delayed
📸 Image loading blocks: YES
🔴 FPS during load: 5-15 (JANKY)
⚠️ Lighthouse score: ~50-60
```

### After Optimization (Your Localhost)
Test at: http://localhost:3001/
```
⏱️ Time to Interactive: < 1 second
🎬 Animations start: Immediate
📸 Image loading blocks: NO (lazy)
🟢 FPS during load: 55-60 (SMOOTH)
📈 Lighthouse score (expected): 85-95
```

## Chrome DevTools Deep Dive

### Performance Profile
```bash
1. DevTools → Performance tab
2. Set throttling: "Fast 3G"
3. Disable cache: checked
4. Click Record
5. Hit reload page
6. Let page fully load
7. Stop recording

Look for:
- Blue line (DOMContentLoaded) should be < 1s ✅
- Red line (Load complete) should be < 3s ✅
- FPS line should stay above 30 ✅
- No long tasks (orange bars) during animation ✅
```

### Network Waterfall
```bash
1. Network tab → Reload with "Fast 3G"
2. Look for request waterfall on right side
3. Should see:
   - HTML: Small, fast
   - CSS: Small, fast
   - JS: Bundle loaded
   - ABOUT1.JPG: Shows LATER (when scrolled)
```

### Lighthouse Audit
```bash
DevTools → Lighthouse (⚡)
1. Mode: Mobile
2. Throttling: Fast 3G
3. Generate report

Check scores:
- Performance: 85+ (was <60)
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+
```

## Mobile Device Simulation
```
DevTools → Device toolbar (Ctrl+Shift+M)

Test on simulated devices:
- iPhone 12 Pro (390x844)
- Pixel 4 (412x869)
- iPad Air (820x1180)

For each device:
1. Set network: Fast 3G
2. Reload page
3. Check: No jank, smooth animations
4. Scroll: Image loads as you scroll
```

## Lighthouse Metrics to Monitor

### Good Mobile Score After Optimization
```
Performance Score: 85-95
├─ First Contentful Paint (FCP): 0.8 - 1.5s
├─ Largest Contentful Paint (LCP): 1.5 - 2.3s
├─ Cumulative Layout Shift (CLS): 0 - 0.05
└─ Speed Index: 1.5 - 2.5s
```

### Before vs After Timeline
```
BEFORE (Current Production):
|-------|-------|-------|-------|-------| 5.2s total
FCP      LCP     FID     Image   Ready
0.5s     3.5s    0.2s    1.5s    5.2s

AFTER (Your Optimized Version):
|---|-------|-------| 1.8s total
FCP LCP     Ready
0.8s 2.3s   1.8s ✅ (Image loads separately)
```

## Real Device Testing

### On iPhone
```
1. Open Safari
2. Safari Menu → Develop → [Your Mac name]
3. Select http://localhost:3001
4. Open DevTools on Mac
5. Simulate slow network if available
6. Observe smooth page load
```

### On Android
```
1. Enable USB Debugging (Settings → Developer Options)
2. Connect phone via USB
3. Open chrome://inspect
4. Select your device
5. DevTools opens on Android device
6. Check Network tab
```

## Verification Checklist Before Deploying

- [ ] Page loads in < 2s on Fast 3G in DevTools
- [ ] FPS stays above 30 during scroll
- [ ] Animations are smooth (no jank)
- [ ] ABOUT1.JPG loads lazily (deferred)
- [ ] Lighthouse Performance score: 80+
- [ ] No red errors in Network tab
- [ ] No red warnings in Console tab
- [ ] Tested on mobile device simulator (at least)

## Creating a Performance Report

### Screenshot Comparison
```
1. Before: Test current Vercel: https://chathukadilakshana.vercel.app/
   - Take Lighthouse screenshot
   - Note load time in Network tab
   
2. After: Test localhost: http://localhost:3001/
   - Take Lighthouse screenshot
   - Compare metrics
   - This proves the optimization worked
```

### Metrics to Compare
```
1. Time to Interactive: Before vs After
2. Largest Contentful Paint: Before vs After
3. CPU Usage: Before vs After
4. FPS Stability: Before vs After
```

## Troubleshooting

### Images Still Load Immediately?
```
1. Check Hero.jsx has OptimizedResponsiveImage imported ✅
2. Check OptimizedResponsiveImage uses loading="lazy" ✅
3. DevTools → Sources → Check OptimizedResponsiveImage.jsx
4. Clear cache: Ctrl+Shift+Del, reload
```

### Still Janky?
```
1. Verify AnimatedOrbsOptimized is smaller (will-change)
2. Check browser not using lower-end mobile simulation
3. Disable browser extensions (interfere with DevTools)
4. Try Incognito mode (no cache, no extensions)
5. Test on real mobile device
```

### Lighthouse Slow?
```
Lighthouse is slow by design (simulates slow network)
That's why you're seeing longer times
Compare the CHANGE (improvement), not absolute numbers
```

## Expected Results Summary

✅ **Recommended Deploy When:**
- Lighthouse Performance score: 80+
- FCP < 1.5s on Fast 3G
- LCP < 2.5s on Fast 3G
- No jank during scroll/hover

---

**Next Step:** If all tests pass, deploy to Vercel following [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)
