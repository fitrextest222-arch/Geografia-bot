# 🏳️ FlagBot – Discord Quiz z Flagami

Bot do quizów z flagami na Discord. Zawiera flagi współczesnych krajów z Europy, Azji, Ameryki Północnej, Ameryki Południowej i Oceanii, a także osobny tryb z historycznymi flagami (III Rzesza, ZSRR i więcej).

---

## 🎮 Komendy

| Komenda | Opis |
|--------|------|
| `!flagi` | Quiz ze współczesnymi flagami (10 pytań, wszystkie regiony) |
| `!flagi 15` | 15 pytań ze wszystkich regionów |
| `!flagi europa` | Tylko Europa |
| `!flagi 20 azja` | 20 pytań z Azji |
| `!flagihistoria` | Quiz z historycznymi flagami |
| `!flagihistoria 10` | 10 pytań historycznych |
| `!stop` | Zatrzymaj aktywną grę |
| `!pomoc` | Pomoc |

**Dostępne regiony:** `europa` `azja` `ameryka` `ameryka_poludniowa` `oceania`

---

## 🚀 Setup (lokalne uruchomienie)

### 1. Utwórz bota na Discord Developer Portal

1. Przejdź na https://discord.com/developers/applications
2. Kliknij **New Application**, nadaj nazwę
3. Przejdź do zakładki **Bot**
4. Kliknij **Reset Token** i skopiuj token
5. Włącz **Message Content Intent** (wymagane!)
6. Przejdź do **OAuth2 → URL Generator**
7. Zaznacz scope: `bot`, uprawnienia: `Send Messages`, `Read Message History`, `Embed Links`, `Attach Files`
8. Skopiuj URL i dodaj bota do swojego serwera

### 2. Skonfiguruj projekt

```bash
git clone https://github.com/TWOJ_USERNAME/flagbot.git
cd flagbot
npm install
cp .env.example .env
# Edytuj .env i wstaw swój token
```

### 3. Uruchom lokalnie

```bash
npm start
```

---

## 🚂 Deployment na Railway przez GitHub

### 1. Wgraj kod na GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJ_USERNAME/flagbot.git
git push -u origin main
```

### 2. Skonfiguruj Railway

1. Przejdź na https://railway.app i zaloguj się (możesz przez GitHub)
2. Kliknij **New Project → Deploy from GitHub repo**
3. Wybierz swoje repozytorium `flagbot`
4. Railway automatycznie wykryje Node.js i zainstaluje zależności

### 3. Dodaj zmienną środowiskową na Railway

1. W panelu projektu kliknij na swój serwis
2. Przejdź do zakładki **Variables**
3. Dodaj zmienną:
   - `DISCORD_TOKEN` = twój token bota
   - `PREFIX` = `!` (opcjonalne)
4. Kliknij **Deploy** lub poczekaj na automatyczny deploy

### 4. Gotowe! 🎉

Bot powinien uruchomić się automatycznie. Każde `git push` do brancha `main` automatycznie wdroży nową wersję.

---

## 📁 Struktura projektu

```
flagbot/
├── bot.js                  # Główny plik bota
├── package.json
├── railway.toml            # Konfiguracja Railway
├── .env.example            # Przykładowy plik .env
├── .gitignore
├── commands/
│   ├── flagi.js            # Komenda !flagi (współczesne)
│   ├── flagihistoria.js    # Komenda !flagihistoria
│   ├── stop.js             # Komenda !stop
│   └── pomoc.js            # Komenda !pomoc
├── data/
│   └── countries.js        # Baza danych krajów i flag
└── utils/
    └── gameManager.js      # Logika gry, embedy
```

---

## 🌍 Zawartość bazy danych

### Współczesne kraje (~130 krajów)
- 🌍 **Europa** – 46 krajów (Polska, Niemcy, Francja i wiele innych)
- 🌏 **Azja** – 45 krajów (Chiny, Japonia, Indie i wiele innych)
- 🌎 **Ameryka Północna** – 17 krajów (USA, Kanada, Meksyk i inne)
- 🌎 **Ameryka Południowa** – 12 krajów (Brazylia, Argentyna i inne)
- 🌊 **Oceania** – 14 krajów (Australia, NZ i wyspy)

### Historyczne flagi (~19 pozycji)
- 🔴 **III Rzesza** (1933–1945)
- 🔴 **Republika Weimarska** (1919–1933)
- ☭ **ZSRR** (1922–1991)
- ⚡ **Faszystowskie Włochy** (1922–1943)
- 🌸 **Cesarska Japonia** + wojenna flaga
- 🦅 **Austro-Węgry** (1869–1918)
- ☪️ **Imperium Osmańskie** (1844–1922)
- 🐻 **Cesarstwo Rosyjskie** (1858–1917)
- 🌟 **Jugosławia** (1945–1992)
- ✝️ **Konfederacja** (USA, 1861–1865)
- 🔑 **PRL** (1952–1990)
- i więcej...

---

## ⚙️ Konfiguracja (opcjonalna)

Możesz zmienić ustawienia w `utils/gameManager.js`:
```js
const QUESTION_TIME = 30;      // Sekundy na odpowiedź
const QUESTIONS_PER_GAME = 10; // Domyślna liczba pytań
```

---

## 📝 Jak dodać własne kraje/flagi?

Edytuj `data/countries.js`:

```js
// Dodaj do odpowiedniej tablicy w MODERN_COUNTRIES:
{ 
  name: 'Nazwa po polsku',
  answers: ['nazwa po polsku', 'english name'],
  flag: '🏳️',  // emoji flagi
  region: 'Europa'
}

// Lub do HISTORICAL_FLAGS:
{
  name: 'Historyczne państwo',
  displayName: 'Wyświetlana nazwa',
  answers: ['nazwa1', 'nazwa2'],
  flagUrl: 'https://upload.wikimedia.org/...',
  period: '1900–1950',
  hint: '🌍 Europa',
  category: 'Historyczne',
}
```

