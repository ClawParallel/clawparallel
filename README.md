# 🦀 ClawParallel

**ClawParallel** is an **off-chain agent and game logic system** that combines:

- Player progression
- Quest system
- Bot command interface
- Economy token **$CLAWP**

The project is designed to be **modular, scalable, and future-ready for on-chain upgrades**.

---

## 🧠 System Architecture

**High-level flow:**

User / Player  
→ ClawParallel Bot  
→ PARALLEL Adapter  
→ Quest / Lore / Logic  
→ $CLAWP Economy  

> All core state currently runs off-chain, but the architecture is prepared for future smart contract integration.

---

## 📁 Project Structure

```text
clawparallel/
├── apps/
│   ├── agent/
│   │   ├── index.ts        # agent runtime entry point
│   │   └── lifecycle.ts   # start / stop / health checks
│   │
│   └── web/
│       ├── server.ts      # express / api server
│       └── routes.ts      # http routes
│
├── core/
│   ├── config/
│   │   ├── env.ts         # env loading & validation
│   │   └── constants.ts
│   │
│   ├── parallel/
│   │   ├── adapter.ts     # PARALLEL integration layer
│   │   ├── player.ts      # player state & logic
│   │   └── quests.ts      # quest definitions
│   │
│   ├── token/
│   │   ├── clawp.ts       # $CLAWP token logic
│   │   └── economy.ts     # rewards & balances
│   │
│   ├── state/
│   │   ├── memory.ts      # agent memory
│   │   └── context.ts     # runtime context
│   │
│   └── utils/
│       ├── logger.ts
│       ├── time.ts
│       └── format.ts
│
├── interfaces/
│   ├── bot/
│   │   └── commands/
│   │       └── quest.command.ts
│   │
│   └── api/
│       └── quest.controller.ts
│
├── public/
│   └── index.html         # landing page
│
├── scripts/
│   ├── seed.ts
│   └── deploy.ts
│
├── .env.example
├── package.json
├── tsconfig.json
├── vercel.json
└── README.md
```

---

### 2️⃣ Save ke `README.md` di lokal
- Buka file `README.md`
- Paste isi di atas
- **Save (Ctrl+S)**

⚠️ Pastikan file benar-benar terisi sebelum commit.

---

### 3️⃣ Commit perubahan
Di terminal:

```bash
git add README.md
git commit -m "Update README with full project documentation"
```

---

### 4️⃣ Push ke GitHub
Pastikan kamu berada di **branch utama** (`main`):

```bash
git branch
```

Kalau bukan `main`, checkout dulu:

```bash
git checkout main
```

Lalu:

```bash
git push origin main
```

---

### 5️⃣ Refresh halaman GitHub
Buka kembali:

🔗 https://github.com/ClawParallel/clawparallel/blob/main/README.md

Halaman sekarang **harusnya muncul isi README yang kamu paste**.

---

## ⛔ Kalau setelah push masih kosong
Biasanya ini karena:
1) Kamu **push ke branch lain**  
   → cek `git branch -a`  
2) Konflik fork / default branch bukan `main`  
   → periksa settings repo  
3) Push gagal karena credential  
   → login lagi / set remote

Kalau itu masalahnya, kirim aku:
- hasil `git branch -a`
- hasil `git status`
- output `git remote -v`

Aku bantu kamu **fix langsung** 💪.
::contentReference[oaicite:1]{index=1}
