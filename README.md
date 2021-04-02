# ![hetpalet](https://deidee.com/logo.png?str=hetpalet)

Verzameling van merkkleuren van [deidee](https://deidee.nl/), projecten en opdrachtgevers. Sluit aan op [BrandColors](https://brandcolors.net/).

## Installatie

```Shell
npm i @deidee/hetpalet
```

## Gebruik

```SCSS
@import "@deidee/hetpalet/scss/hetpalet";

.allrgb {
  background-color: $bc-allrgb-red;
}
```

## Merken

- [2600.nl](https://2600.nl/)
- [Alexander Christiaan Jacob](https://alexanderchristiaanjacob.com/)
- [allRGB](https://allrgb.com/)
- [Alternative Art Guide](https://alternativeartguide.com/)
- [ANBI collectief](http://www.anbi-collectief.nl/aanmelden)
- [Anonymous.Social](https://anonymous.social/)
- [Apple Beard Condom](https://applebeardcondom.com/)
- [A World of Spam](https://aworldofspam.com/)
- [Bestemming Onbekend](http://www.bestemming-onbekend.nl/)
- [Bruno Uno Studio](http://www.brunounostudio.com/)
- [deIdee](https://deidee.nl/), _et al_.
- [DOVA](https://www.dova.nu/)
- [Fond of Fonts](https://fondoffonts.com/)
- [Fragile Minds](https://fragile-minds.com/)
- [Galerie Helder](http://galeriehelder.nl/)
- [Gillende Keukenprins](http://gillendekeukenprins.nl/)
- [Grid.sexy](https://grid.sexy/)
- [Hollandsche Waaren](https://hollandschewaaren.nl/)
- [Isoboosterspecialist](https://isoboosterspecialist.nl/)
- [Legend Arb Training](http://www.legendarb.com/)
- [Mimesia](https://mimesia.com/)
- [Mimesia Gallery](https://mimesia.gallery/)
- Morère Coffee
- [Myrthe Deluxe](http://myrthedeluxe.nl/)
- [Netplasticism](https://netplasticism.com/)
- [Nikola Mikael Ruben Benjamin](https://nikolamikaelrubenbenjamin.com/)
- [Nine Mia Jade Yasmine](https://ninemiajadeyasmine.com/)
- [The One-Thousand Drawing Pension Plan](https://onethousanddrawingpensionplan.com/)
- [Orange IT](http://www.orangeit.nl/)
- [Presstige](https://presstige.nl/)
- [Prosecco Friday](https://proseccofriday.com/)
- [PXA Isobooster](https://pxanederland.nl/)
- [Sarah de Man](http://sarahdeman.com/)
- [Site in a Second](http://www.siteinasecond.nl/)
- [Soemo Fine Arts](https://soemo-fine-arts.com/)
- [The Fashionweek](https://thefashionweek.nl/)
- [Toon den Heijer](http://www.toondenheijer.nl/)
- [Uitvaart Vergelijker](http://uitvaart-vergelijker.nl/)
- UNlimiter
- [Werkgroep de Nieuwe Mens](https://werkgroepdenieuwemens.nl/)
- [Zazoo](http://zazoo.nl/)

## TODO:

### Merken toevoegen

- [Letteretters](https://letteretters.com/)
- [Watch Me Work](http://watchmework.nl/)

### Functionaliteit toevoegen

Kleuren kunnen definiëren in YAML?

#### Suggestie invoer

```YAML
allrgb:
  red
  lime
  blue
deidee:
  deJade()
  deJade()
```

#### Suggestie export SCSS

```SCSS
$bc-allrgb-1: red;
$bc-allrgb-2: lime;
$bc-allrgb-3: blue;
$bc-deidee-1: deJade();
$bc-deidee-2: deJade();
```

#### Suggestie export CSS

```CSS
.bg-allrgb-1 { background-color: red; }
.color-allrgb-1 { color: red; }
.bg-allrgb-2 { background-color: lime; }
.color-allrgb-2 { color: lime; }
.bg-allrgb-3 { background-color: blue; }
.color-allrgb-3 { color: blue; }
.bg-deidee-1 { background-color: #0f8c76; }
.color-deidee-1 { color: #0f8c76; }
.bg-deidee-2 { background-color: #5ccfb8; }
.color-deidee-2 { color: #5ccfb8; }
```

#### Andere exportmogelijkheden

* JSON
* PHP array
* LESS
* ASE (_Adobe Swatch Exchange_)

## Uitbreiden

```Shell
git clone https://github.com/deidee/hetpalet.git
```

## Afhankelijkheden updaten

```Shell
ncu -u
```

## Nieuwe versie genereren

```Shell
npm start
```

## Publiceren

Publiceren wordt gedaan door [deidee](https://deidee.nl/) en wel op de volgende manier:

```Shell
npm publish --access public
```
