#!/bin/bash

# Script de test SEO pour LafiaTech
# Usage: bash test-seo.sh

echo "╔════════════════════════════════════════════════════════════╗"
echo "║         TEST SEO - LafiaTech (www.lafia.tech)              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

SITE_URL="https://www.lafia.tech"
PASS="✅"
FAIL="❌"
WARN="⚠️"

echo "🔍 Test 1: Vérification de l'accessibilité du site"
echo "────────────────────────────────────────────────────"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL)
if [ "$HTTP_CODE" = "200" ]; then
    echo "$PASS Site accessible (HTTP $HTTP_CODE)"
else
    echo "$FAIL Site non accessible (HTTP $HTTP_CODE)"
fi
echo ""

echo "🤖 Test 2: Vérification de robots.txt"
echo "────────────────────────────────────────────────────"
ROBOTS=$(curl -s $SITE_URL/robots.txt)
if echo "$ROBOTS" | grep -q "Sitemap:"; then
    echo "$PASS Sitemap référencé dans robots.txt"
else
    echo "$FAIL Sitemap NON référencé dans robots.txt"
fi

if echo "$ROBOTS" | grep -q "Disallow: /.*\.xml$"; then
    echo "$FAIL PROBLÈME: robots.txt bloque les fichiers XML !"
else
    echo "$PASS Pas de blocage des fichiers XML"
fi

if echo "$ROBOTS" | grep -q "User-agent: Googlebot"; then
    echo "$PASS Instructions pour Googlebot présentes"
else
    echo "$WARN Instructions pour Googlebot manquantes"
fi
echo ""

echo "🗺️  Test 3: Vérification de sitemap.xml"
echo "────────────────────────────────────────────────────"
SITEMAP_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL/sitemap.xml)
if [ "$SITEMAP_CODE" = "200" ]; then
    echo "$PASS sitemap.xml accessible (HTTP $SITEMAP_CODE)"
    
    SITEMAP=$(curl -s $SITE_URL/sitemap.xml)
    URL_COUNT=$(echo "$SITEMAP" | grep -c "<url>")
    echo "📊 Nombre d'URLs dans le sitemap: $URL_COUNT"
    
    # Vérifier les pages importantes
    if echo "$SITEMAP" | grep -q "$SITE_URL/contact"; then
        echo "$PASS Page /contact dans sitemap"
    else
        echo "$WARN Page /contact absente du sitemap"
    fi
    
    if echo "$SITEMAP" | grep -q "$SITE_URL/blog"; then
        echo "$PASS Page /blog dans sitemap"
    else
        echo "$WARN Page /blog absente du sitemap"
    fi
else
    echo "$FAIL sitemap.xml NON accessible (HTTP $SITEMAP_CODE)"
fi
echo ""

echo "📝 Test 4: Vérification des métadonnées"
echo "────────────────────────────────────────────────────"
PAGE=$(curl -s $SITE_URL)

if echo "$PAGE" | grep -q '<meta name="description"'; then
    echo "$PASS Meta description présente"
else
    echo "$FAIL Meta description manquante"
fi

if echo "$PAGE" | grep -q '<meta property="og:image"'; then
    echo "$PASS OpenGraph image présente"
else
    echo "$FAIL OpenGraph image manquante"
fi

if echo "$PAGE" | grep -q '<meta name="twitter:card"'; then
    echo "$PASS Twitter card présente"
else
    echo "$FAIL Twitter card manquante"
fi

if echo "$PAGE" | grep -q 'application/ld+json'; then
    JSON_LD_COUNT=$(echo "$PAGE" | grep -c 'application/ld+json')
    echo "$PASS Données structurées JSON-LD présentes ($JSON_LD_COUNT schéma(s))"
else
    echo "$FAIL Données structurées JSON-LD manquantes"
fi
echo ""

echo "🔐 Test 5: Vérification de la sécurité"
echo "────────────────────────────────────────────────────"
HEADERS=$(curl -s -I $SITE_URL)

if echo "$HEADERS" | grep -qi "x-frame-options"; then
    echo "$PASS Header X-Frame-Options présent"
else
    echo "$WARN Header X-Frame-Options manquant"
fi

if echo "$HEADERS" | grep -qi "x-content-type-options"; then
    echo "$PASS Header X-Content-Type-Options présent"
else
    echo "$WARN Header X-Content-Type-Options manquant"
fi
echo ""

echo "📱 Test 6: Vérification mobile"
echo "────────────────────────────────────────────────────"
if echo "$PAGE" | grep -q 'viewport'; then
    echo "$PASS Meta viewport présent (responsive)"
else
    echo "$FAIL Meta viewport manquant"
fi

if echo "$PAGE" | grep -q 'manifest.json'; then
    echo "$PASS PWA manifest présent"
else
    echo "$WARN PWA manifest manquant"
fi
echo ""

echo "🌐 Test 7: Vérification des fichiers supplémentaires"
echo "────────────────────────────────────────────────────"
HUMANS_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL/humans.txt)
if [ "$HUMANS_CODE" = "200" ]; then
    echo "$PASS humans.txt accessible"
else
    echo "$WARN humans.txt non accessible"
fi

SECURITY_CODE=$(curl -s -o /dev/null -w "%{http_code}" $SITE_URL/.well-known/security.txt)
if [ "$SECURITY_CODE" = "200" ]; then
    echo "$PASS security.txt accessible"
else
    echo "$WARN security.txt non accessible"
fi
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    RÉSUMÉ DU TEST                          ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "🎯 Site testé: $SITE_URL"
echo ""
echo "📋 Prochaines étapes:"
echo "  1. Vérifier le code de vérification Google dans src/app/metadata.ts"
echo "  2. Aller sur Google Search Console"
echo "  3. Ajouter la propriété www.lafia.tech"
echo "  4. Soumettre le sitemap"
echo "  5. Demander l'indexation"
echo ""
echo "📖 Consultez README_SEO.md pour les instructions détaillées"
echo ""
