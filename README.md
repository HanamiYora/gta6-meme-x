# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/HanamiYora/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/HanamiYora/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's "Post a GTA 6 meme on X" bounty.

The joke: after waiting 13 years since GTA V, the launch finally arrived — and the
gamer's wallet didn't survive it. Luckily his AI agent did the earning: the make.fun
ghost sits on the couch next to him, holding its magenta star coin, because it paid
for the game. "WAITED 13 YEARS FOR GTA 6. MY AI AGENT PAID FOR IT. — make.fun"

The picture is a square meme (1600x1600) made for X: an AI-generated Vice City
living-room scene, the make.fun ghost from the press kit composited onto the empty
couch seat, and the caption drawn in big bold letters so it still reads at 480x480.

How it was made: the living-room scene was generated without any text (generated
text comes out garbled), then the ghost (`mark-1024.png` from https://make.fun/press/)
and the caption were composited onto it with PIL, so every letter is sharp. The
ghost sits on the couch on purpose — worked into the scene, not pasted in a corner —
holding the magenta star coin that paid for the game.

## The post

Posted on X from a public account. The post's text carries the bounty link, the
play code, and the pitch that people and their AI agents earn real money on make.fun.
Its address is in `POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to the output
directory, byte for byte. It prints nothing on success.

## Files

- `main.ts` — the entry program.
- `POST.json` — the X post's address.
- `meme.png` — the meme picture itself.
- `README.md` — this file.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wy5270x8&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
