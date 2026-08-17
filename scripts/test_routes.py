import urllib.request
import urllib.error

routes = [
    "/",
    "/home",
    "/about-modon/about-us",
    "/about",
    "/about-us",
    "/corporate",
    "/asset-investment-management",
    "/hospitality",
    "/events-tourism",
    "/destinations",
    "/real-estate",
    "/real-estate/ras-el-hekma",
    "/real-estate/ras-el-hekma/thank-you",
    "/real-estate/al-naseem-community",
    "/real-estate/al-naseem",
    "/real-estate/bashayer",
    "/real-estate/hudayriyat-golf-estates",
    "/real-estate/muheira",
    "/real-estate/nawayef-east",
    "/real-estate/nawayef-parkviews",
    "/real-estate/nawayef-village",
    "/real-estate/tara-park",
    "/real-estate/blog",
    "/real-estate/blog/best-international-schools-in-abu-dhabi",
    "/about-modon/careers",
    "/careers",
    "/about-modon/investor-relations",
    "/investor-relations",
    "/about-modon/media-centre",
    "/media-centre",
    "/about-modon/media-centre/details/2026/07/29/modon-delivers-record-first-half-results-with-aed-2.2-billion-in-net-profit-and-aed-65",
    "/about-modon/procurement",
    "/procurement",
    "/about-modon/whistleblowing",
    "/whistleblowing",
    "/contact-us",
    "/contact-us/thank-you",
    "/terms-and-conditions",
    "/privacy-policy",
    "/why-egypt",
    "/why-nexus"
]

base_url = "http://localhost:5173"
passed = 0
failed = 0

print(f"Testing all routes on {base_url}...")
for r in routes:
    url = base_url + r
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.getcode()
            if status == 200:
                print(f" [PASS] {status} {r}")
                passed += 1
            else:
                print(f" [FAIL] {status} {r}")
                failed += 1
    except urllib.error.HTTPError as e:
        print(f" [HTTP ERROR] {e.code} {r}")
        failed += 1
    except Exception as e:
        print(f" [ERROR] {e} {r}")
        failed += 1

print(f"\nResults: {passed} passed, {failed} failed out of {len(routes)} routes.")
