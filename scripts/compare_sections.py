import glob
import os
import re

pages = [
    ('AboutUs.tsx', '../www.modon.com/about-modon/about-us.html'),
    ('Careers.tsx', '../www.modon.com/about-modon/careers.html'),
    ('InvestorRelations.tsx', '../www.modon.com/about-modon/investor-relations.html'),
    ('MediaCentre.tsx', '../www.modon.com/about-modon/media-centre.html'),
    ('Procurement.tsx', '../www.modon.com/about-modon/procurement.html'),
    ('Whistleblowing.tsx', '../www.modon.com/about-modon/whistleblowing.html'),
    ('RealEstate.tsx', '../www.modon.com/real-estate.html'),
    ('Hospitality.tsx', '../www.modon.com/hospitality.html'),
    ('EventsTourism.tsx', '../www.modon.com/events-tourism.html'),
    ('AssetInvestmentManagement.tsx', '../www.modon.com/asset-investment-management.html'),
    ('Destinations.tsx', '../www.modon.com/destinations.html'),
    ('ContactUs.tsx', '../www.modon.com/contact-us.html'),
    ('TermsAndConditions.tsx', '../www.modon.com/terms-and-conditions.html'),
    ('PrivacyPolicy.tsx', '../www.modon.com/privacy-policy.html'),
    ('RealEstateBlog.tsx', '../www.modon.com/real-estate/blog.html'),
    ('AlNaseem.tsx', '../www.modon.com/real-estate/al-naseem-community.html'),
    ('Bashayer.tsx', '../www.modon.com/real-estate/bashayer.html'),
    ('HudayriyatGolfEstates.tsx', '../www.modon.com/real-estate/hudayriyat-golf-estates.html'),
    ('Muheira.tsx', '../www.modon.com/real-estate/muheira.html'),
    ('NawayefEast.tsx', '../www.modon.com/real-estate/nawayef-east.html'),
    ('NawayefParkviews.tsx', '../www.modon.com/real-estate/nawayef-parkviews.html'),
    ('NawayefVillage.tsx', '../www.modon.com/real-estate/nawayef-village.html'),
    ('TaraPark.tsx', '../www.modon.com/real-estate/tara-park.html'),
    ('Home.tsx', '../www.modon.com/home.html')
]

for tsx_name, html_path in pages:
    print(f"\n==================== {tsx_name} vs {html_path} ====================")
    if os.path.exists(f"src/pages/{tsx_name}"):
        with open(f"src/pages/{tsx_name}", 'r', encoding='utf-8') as f:
            tsx = f.read()
        # Find first section or hero
        hero_tsx = re.findall(r'<section[^>]*>[\s\S]*?<\/section>', tsx)
        if hero_tsx:
            print("TSX First Section:")
            print(hero_tsx[0][:300] + "...")
        else:
            print("TSX: NO SECTION FOUND")
    else:
        print("TSX: FILE NOT FOUND")

    if os.path.exists(html_path):
        with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
            html = f.read()
        # Find all sections
        sections = re.findall(r'<section[^>]*class=["\']([^"\']+)["\'][^>]*>', html)
        print(f"Original HTML Section Classes ({len(sections)} sections):")
        print(sections)
    else:
        print("HTML: FILE NOT FOUND")
