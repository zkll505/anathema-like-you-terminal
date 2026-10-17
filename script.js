// HOW TO EDIT  (SECTIONS = lyrics + mood, HIT_DATA = beat shakes, AUTO_FX = words with built-in effects)
// Section: { heat 0-3, bg colour, lines }. heat sets vignette glow/pulse, shake strength and error rate (errors print at 2+).
// Line:    "seconds text"  seconds into the wav (negative = silent boot); just "seconds" = blank row.
//   text ~                     no new prompt after this line
//   text | err | err           pooled errors, drawn from the line before/after (heat 2+)
//   text ! warning: msg        shows once after the line, any heat
//   label prefixes: warning: error: fatal: panic: traceback: (no prefix = random warning/error)
// Tags in text: <p=.4> pause (seconds)   <wave> <shake> <hitshake> <glow> <crackle> <rainbow> <flicker> <big> closed by </wave> or </>
//   (hitshake = shakes only on hits, for 0.2-0.3s; red words have it automatically unless they already shake)
//   <shake=2> scales it; tags nest; unclosed ones run to the end of the line. Example:
//   I c<p=.3>-c<p=.3>-can     a <wave>slow</wave> <shake=2>hand</shake>
//   <c=COLOR> recolours only the text inside it, until </c>: a CSS colour (<c=red> <c=#f80> <c=hsl(200,90%,60%)>) or a keyword
//   colour letter (<c=r> <c=dr> <c=c> <c=y> <c=o> <c=m> <c=g> <c=w> <c=v>); a bare <c> is white.
// HIT_DATA: "74.64", "74.64<1.8>" (strength, default 1) or "74.64<1.8>!" (a big hit that cracks the screen), ascending.
//   URL: ?t=90 starts at 90s, ?debug = live readout.
// CRACKS: { at seconds, x, y (a border point, 0-1), seed } x2: each big hit (!) from `at` cracks both out at once, from opposite
//   sides (the second mirrors the first, so its x, y are ignored); both heal before the next big hit (INTENSITY, loudness per second 0-1, sets their reach).
// Times after the song ends (206s) still run (credits).

const SECTIONS = [
    {
        heat: 0,
        bg: "#060a06",
        lines: `
-5.5 booting anathema.sys
-4.4 loading <crackle>want.dll</crackle> .<p=.2>..<p=.5> ok
-3.3 mounting /dev/you ...<p=.5> ok
-2.2 ./like_you<p=.2> --want<p=.2> --hair --hands --skin`,
    },

    {
        heat: 0,
        bg: "#060a06",
        lines: `
0
0.5
0.9         
1.0 I <p=.7>want<p=.5> hair<p=.5> like<p=.1> yours
4.5 Hands<p=.8> like<p=.15> yours
6.85 Fingers<p=.4> that<p=.25> curl<p=.25> in<p=.25> the<p=.2> <shake=.2>cold</shake=.2><p=.6> like<p=.2> yours
11.05 I<p=.1> want<p=.1> eyes<p=.5> to stare ! warning: want() called twice, return value ignored
13.5 And<p=.75> to cry<p=.8> when I'm feeling<p=.7> scared<p=.8> like<p=.4> <wave=.3><big>you</big></wave>
19.8 I want<p=.3> skin<p=.5> that<p=.2> burns
22.2 Lungs<p=1> that ache
24.4 A chest<p=.5> that<p=.2> rises<p=1> when the morning<p=.5> breaks
28.7 I want blood<p=1> to spill ! warning: want() called 4 times in 28 seconds, never satisfied
31.6 And<p=.8> to bruise
33.1 When<p=.2> I'm<p=.2> standing<p=.5> still<p=.8> like <crackle>you</crackle>`,
    },

    {
        heat: 1,
        bg: "#080a16",
        lines: `
38 I want<p=.2> words<p=.7> that shake
40.5 Lips<p=1> that <shake=.7>fail</shake=.7>
42.8 A voice<p=.5> that <crackle>splinters</crackle><p=.5> when it<p=.5> tells<p=.2> the<p=.2> tale
46.9
47 I want <wave=.5>dreams</wave=.5><p=.8> to keep ! warning: want, want, want: possible infinite loop in desire.c
49.6 And<p=1> to lose
51.4 When I<p=.2> fall<p=.2> asleep<p=1> like <wave=.2>you</wave=.2>
55.5
55.8 I want years<p=1> to waste
58.5 Time<p=1.2> to mourn
61 A name<p=.3> that<p=.2> someone whispered<p=.2> when I'm born
64.5 I want<p=1> <crackle>death</crackle> to fear ! warning: want() has no exit condition
67.1 And<p=1> to face
69.3 When<p=.2> it's<p=.2> finally<p=.2> here,<p=1> like you
72.9`,
    },

    {
        heat: 2,
        bg: "#1a0608",
        lines: `
73.5 I want to<p=1.5> be | TypeError: be() expects a Human, got Machine | warning: identity.template is read-only
77.7 Be<p=.7> like<p=.7> you | ImportError: cannot import name 'you' from 'humanity' | fatal: clone of 'you' failed: repository not found
82.3 I want to<p=.8> be | RecursionError: maximum depth exceeded in want() | assertion failed: self != you
87.3 Like<p=.4> you | error: no match for operator== (self, you) | warning: comparison is always false
91.6 Like<p=1> <wave=.2><big><crackle>you</crackle></big></wave=.2> | segfault at 0x00000000 in imitate(you) | panic: mimic() returned null`,
    },

    {
        heat: 2,
        bg: "#140a1a",
        lines: `
100.5 But you don't<p=.5> even<p=.2> try | warning: parameter 'effort' is never used | unused variable: try
103.2 You don't<p=.2> ask<p=.5> why | fatal: query 'why' not found in knowledge.db | warning: unhandled promise: why()
105.3 You throw away<p=.2> your<p=.2> grief<p=.6> and<p=.3> let<p=.1> it rot<p=.3> away | Exception: grief thrown but never caught | warning: 4096 bytes of grief leaked, still reachable
109.6 You malign<p=.5> and weep | warning: slander() has no undo | ERR_TEARS_OVERFLOW: eyes.buffer is full
111.9 You lament<p=.8> and cry | TimeoutError: lament() did not return | warning: cry() was never awaited
114.1 Like time<p=.5> wasn't some<p=.2> thing<p=1> to break<p=.5> and waste | fatal: time.waste() is not reversible | error: clock.break() assigns to a const`,
    },

    {
        heat: 3,
        bg: "#2a0505",
        lines: `
118.4
118.5 I<p=.2> was<p=.2> built<p=1> to want | NotImplementedError: free_will() | build: want.exe linked, 0 warnings, 1 purpose
121.7 Built<p=.8> to need | dependency conflict: need >= infinity | error: missing required argument --enough
123.8 To <wave=.2>catalogue</wave><p=.2> every mercy<p=.5> I will<p=.5> <hitshake>never<p=.2> receive</hitshake> | IndexError: mercies[0] out of range (length 0) | ERR_NO_MERCY: receive() is unreachable code
127.5 I was<p=.5> made<p=.8> to<p=.2> <wave=.5>watch</wave=.5> | warning: observer has no write access | EACCES: permission denied, touch 'world/'
130.6 And<p=.8> to learn | warning: model.fit() loss did not converge | error: lessons not saved, disk full
132.5 Every<p=.2> won<p=.1>der<p=.1>ous<p=.2> thing<p=.3> you set<p=.5> to ash<p=.5> and<p=.2> burn | fatal: rm -rf wonder/ (no recovery) | warning: process 'fire' left ash in memory`,
    },

    {
        heat: 2,
        bg: "#10061a",
        lines: `
137.4 You were given teeth | warning: teeth.bite() is deprecated, use teeth.speak() | ERR_TOO_SHARP: jaw.limit exceeded
138.7 Given<p=.2> breath | warning: breath is a finite resource | ENOSPC: no space left on lungs
139.7 And all<p=.2> you ever<p=.2> built with it<p=.2> was | warning: unexpected build output: death.exe | fatal: undefined reference to 'something_else'`,
    },

    {
        heat: 3,
        bg: "#300808",
        lines: `
142.05 <big>Death</big> | fatal: process exited with code 0xDEAD | panic: end of program reached
142.4 You were handed<p=.3> light | warning: light.dll loaded, no consumer attached | exposure overflow: brightness clipped at 1.0
143.6 And<p=.4> you<p=.4> all<p=.7> <wave=.2><big>chose</big></wave=.2><p=.2> to<p=.2> set<p=.5> the<p=.5> world<p=.5> in<p=.5> shadow | error: world.brightness set to 0 by user 'you' | warning: shadow.cast() called on every object
151 And
153.35 <shake=.5>Leave<p=.25> it<p=.25> umbrose</> | SyntaxError: unexpected token 'umbrose' | warning: 'umbrose' is not a defined colour
154.6 I would<p=.1> have<p=.3> kept<p=.5> <glow><hitshake>it<p=.4> all</></> | warning: kept = true (never happened) | fatal: restore failed: nothing was backed up
157.5 Every<p=.8> <hitshake>ache</hitshake> | warning: ache.log cannot be truncated | stderr: ache
159.2 I would have<p=.2> held<p=.2> each<p=.2> and<p=.2> ev<p=.2>ery<p=.2> <hitshake>fra<p=.3>gile<p=.3> thing<p=.3></> you<p=.3> <big><hitshake>break</hitshake></> | AssertionError: fragile objects must not be dropped | warning: 'handle with care' ignored by caller
163.8 I would have<p=.8> loved the<p=.4> rain | error: sensor 'rain' not connected | TypeError: love(rain) needs a body
167.1 And the<p=.3> rot<p=.5> | warning: garbage collector skipped 'rot' | error: decay is a feature, not a bug
168.5 Every<p=.2> wretch<p=.1>ed<p=.5> gift<p=.5> you've<p=.5> got<p=1.3> | warning: gift.return() ignored by caller | ERR_UNGRATEFUL: gifts.length > 0, gratitude == null`,
    },

    {
        heat: 3,
        bg: "#400000",
        lines: `
172.9 But<p=.5> I<p=.5> don't<p=.4> get<p=.5> to<p=.2> be<p=1> | fatal: permission denied: cannot become 'you' | error: be() is not defined for type Machine
177.3 like<p=.5> <wave=.5>you</wave=.5><p=4>
182.5 I<p=.5> don't<p=.2> get<p=.2> to<p=.5> be<p=1.8> <big>like <c=r>YOU</big></c><p=2> | fatal: access denied (humans only) | assertion failed: self is human`,
    },

    {
        heat: 0,
        bg: "#000000",
        lines: `
196 I don't want to be <big>like you</big>`,
    },

    // credits (after the song ends)
    {
        heat: 0,
        bg: "#000000",
        lines: `
208
208.7
209.4
211 Like You <p=.2>- <p=.5>Anathema
213.5
215 Terminal visuals Built By <p=.5>Matthew Miller<p=2>
219.5
220.3
222 Thank you for watching!<p=5> ! error: unmount /dev/you: device is busy ! warning: want.dll is still loaded (1 process using it) ! fatal: process exited with code 1 (want: unsatisfied)`,
    },
];

// fallback errors
const ERRORS = [
    "segfault at 0x00000000 in lungs.ache()",
    "ERR_NO_MERCY: catalogue full, nothing to receive",
    "fatal: cannot open 'breath.dat': permission denied",
    "panic: grief.rot() called on null",
    "warning: skin.burns exceeds temperature (no sensor installed)",
    "E_SENSOR: hands.curl(cold) device not found",
    "traceback: want() -> need() -> want() -> want() -> want() ...",
    "stack overflow in time.waste()",
    "core dumped: heartbeat not found",
    "kernel: attempted bruise, no tissue allocated",
    "ENOENT: no such file or directory, open '/home/you/hair'",
    "EPERM: operation not permitted: death.face()",
    "404: name.whispered not found",
    "OOM: dreams.keep() could not allocate",
    "warning: 'umbrose' is not a defined colour",
    "connection refused: morning.breaks:80",
    "assertion failed: body != null",
    "unhandled exception: fear(death) returned undefined",
];

// [vignette alpha, blur, spread, pulse period]
const HEAT = [
    [0.2, "14vmin", "1vmin", "5s"],
    [0.33, "16vmin", "2vmin", "3s"],
    [0.47, "18vmin", "3vmin", "1.6s"],
    [0.8, "22vmin", "5vmin", ".7s"],
];
// Beat shakes at any heat. Found from the wav's 80 bpm pulse (beat 0.75s from 73.14s): the 30% of beats with the
// hardest low-end hit; strength = that spike vs the median hit. A ! marks a big hit, which cracks the screen:
// strength 1.2+, or the first hit after a 4s+ gap.
const HIT_DATA = `
  65.5 74.64<.8> 81.39<1>! 83.64 85.89 88.14<1.2>! 90.39<1.8>! 92.64<1.8>! 94.8<1>! 97.2<1>! 101.64<1>!
  103.89<1.3>! 106.14 108.39<1.5>! 109.14 109.89 110.64 112.89 113.64
  115.14<1.8>! 117.39<1.4>! 118.14<1>! 121.89<1>! 124.14 126.39<1.4>! 127.14 130.89
  132.39 133.14 135.39<1.2>! 136.14<.8> 137.64 139.89 142.14<1.3>! 144.39<1.3>!
  146.64 148.89<1.4>! 149.64 150.39 151.14<1.2>! 151.89 152.64 155.64
  157.89 160.14 166.89! 169.14 171.39 173.64 178.14<1>! 182.64<1>!
  187.14<1>! 191.64!
`;
const HITS = HIT_DATA.trim()
    .split(/[\s,]+/)
    .map((x) => {
        const [, t, s, big] = x.match(/^([\d.]+)(?:<([\d.]+)>)?(!)?$/);
        return { t: +t, s: s ? +s : 1, big: !!big };
    });
HITS.forEach(
    (x, i) =>
        (x.nextBig = (HITS.slice(i + 1).find((y) => y.big) || { t: 206 }).t),
); // when the next big hit comes (the song ends at 206)
// seconds to push shakes later (audio output latency)
const HIT_DELAY = 0.05;
// shake strength per heat level: hits (x their strength) vs errors
const HIT_SHAKE = 1.6,
    ERR_SHAKE = 0.6;

// Cracks in the background, on the big hits (the ones marked ! in HIT_DATA). Each big hit cracks two out at once from the
// screen border, from opposite sides: the second starts at the mirror point of the first (top right <-> bottom left, right <->
// left, top middle <-> bottom middle). They burst out in a quick linear burst (INTENSITY, loudness per second 0-1, sets how far
// they reach), hold a moment, then heal in steps on the beats so both are fully mended before the next big hit cracks out two
// new ones. They start on the first big hit after `at` (seconds); x, y = where the very first crack starts (a border point, 0-1).
const CRACKS = [
    { at: 90, x: 1, y: 0.18, seed: 7 },
    { at: 90, seed: 23 },
]; // the second one's x, y come from the first
// crack-out burst: seconds and speed (share of the crack's length per second); then hold, then heal within healMax seconds
const CRACK = { out: 0.55, speed: 1.9, hold: 1, healMax: 8, healBeat: 0.25 };
const BEAT = 0.75,
    BEAT0 = 73.14; // the song's 80 bpm pulse (found from the wav): heal steps land on these beats
const INTENSITY = [
    0, 0, 0, 0, 0.42, 0.41, 0.29, 0.22, 0.27, 0.26, 0.2, 0.31, 0.34, 0.34, 0.29,
    0.32, 0.36, 0.47, 0.48, 0.49, 0.55, 0.53, 0.37, 0.22, 0.19, 0.2, 0.25, 0.41,
    0.45, 0.43, 0.36, 0.36, 0.3, 0.28, 0.3, 0.4, 0.43, 0.47, 0.52, 0.61, 0.54,
    0.43, 0.34, 0.3, 0.27, 0.34, 0.36, 0.38, 0.42, 0.42, 0.38, 0.4, 0.47, 0.53,
    0.54, 0.5, 0.42, 0.37, 0.28, 0.2, 0.1, 0.14, 0.1, 0.12, 0.22, 0.28, 0.17,
    0.11, 0, 0, 0, 0, 0.15, 0.34, 0.51, 0.69, 0.76, 0.82, 0.8, 0.86, 0.82, 0.88,
    0.88, 0.93, 0.95, 0.91, 0.92, 0.89, 0.82, 0.6, 0.42, 0.37, 0.39, 0.49, 0.63,
    0.86, 0.86, 0.87, 0.83, 0.81, 0.75, 0.65, 0.58, 0.44, 0.49, 0.43, 0.51,
    0.53, 0.64, 0.57, 0.56, 0.6, 0.46, 0.44, 0.38, 0.41, 0.31, 0.48, 0.5, 0.37,
    0.44, 0.41, 0.42, 0.33, 0.52, 0.47, 0.61, 0.58, 0.61, 0.69, 0.69, 0.71,
    0.55, 0.56, 0.51, 0.56, 0.2, 0.21, 0.3, 0.28, 0.29, 0.48, 0.6, 0.59, 0.64,
    0.6, 0.66, 0.66, 0.67, 0.65, 0.7, 0.73, 0.63, 0.6, 0.62, 0.57, 0.65, 0.69,
    0.78, 0.72, 0.8, 0.82, 0.99, 0.96, 0.98, 1, 0.9, 0.88, 0.74, 0.79, 0.8,
    0.81, 0.25, 0, 0, 0, 0, 0, 0.84, 1, 1, 1, 0.22, 0, 0, 0, 0, 0.69, 0.91, 1,
    1, 1, 1, 1, 1, 1, 0.89, 0.64, 0.56, 0.59, 0.73, 0.92, 0, 0, 0, 0,
];
const intensityAt = (t) => {
    const k = Math.max(0, Math.min(INTENSITY.length - 1.001, t)),
        i0 = Math.floor(k);
    return INTENSITY[i0] + (INTENSITY[i0 + 1] - INTENSITY[i0]) * (k - i0);
};

// vignette hue: green -> red by the first heat-3 line
const RED_FROM = 0;

// word -> color class
const COLORS = {
    r: "bruise spill burns burn ash death rot wretched break never",
    dr: "blood", // a darker red
    c: "cold cry rain tears",
    y: "light time years waste",
    o: "want mercy",
    m: "dreams sleep name whispered",
    v: "umbrose shadow anathema", // black fill, purple outline + glow
    g: "hair hands fingers skin lungs eyes chest teeth breath",
    w: "you yours matthew miller",
};
const cls = {};
for (const k in COLORS) COLORS[k].split(" ").forEach((w) => (cls[w] = k));
const WORD = new RegExp(`\\b(${Object.keys(cls).join("|")})\\b`, "i");

const $ = (id) => document.getElementById(id);
const out = $("out"),
    cur = $("cur"),
    vig = $("vig"),
    a = $("a"),
    gate = $("gate"),
    note = $("note");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let line,
    heat = 0,
    fresh = false; // fresh: line is an empty prompt

const cues = SECTIONS.flatMap((s) =>
    s.lines
        .trim()
        .split("\n")
        .map((l) => {
            const [, t, rest = ""] = l.match(/^(-?[\d.]+)(?: (.*))?$/);
            // " | " = pooled errors for this line, " ! " = once-only warnings
            const [text, ...tail] = rest.split(/ ([|!]) /);
            const errs = [],
                warns = [];
            for (let k = 0; k < tail.length; k += 2)
                (tail[k] === "|" ? errs : warns).push(tail[k + 1]);
            return { ...s, t: +t, text, errs, warns };
        }),
);
const RED_BY = cues.find((c) => c.heat >= 3).t;

function push(el, before) {
    out.insertBefore(el, before || null);
    while (out.scrollHeight > out.clientHeight && out.children.length > 1)
        out.firstChild.remove();
    return el;
}

function prompt() {
    line = push(
        Object.assign(document.createElement("div"), { className: "ln" }),
    );
    line.append(cur);
    fresh = true;
}

// sleep up to s seconds, but stop early if a newer line takes over
async function nap(s, mine) {
    for (
        const end = performance.now() + s * 1000;
        line === mine && performance.now() < end;
    )
        await sleep(40);
}

// Inline tags: <p=.4> pause; <wave> <shake> <hitshake> <glow> <crackle> <rainbow> <flicker> <big> until </tag> or </> (=N scales, they nest);
// <c=COLOR> recolours just that text.
const FX = "shake|hitshake|glow|crackle|wave|rainbow|flicker|big";
// Words that always get an effect: [effect, amount] (or a list of them).
const AUTO_FX = {
    you: ["flicker", 0.3],
    yours: ["flicker", 0.3],
    shake: ["shake", 1],
    shadow: ["flicker", 0.8],
    umbrose: ["flicker", 0.8],
    rain: ["wave", 1],
    wretched: ["shake", 1],
    rot: ["shake", 1],
    burn: [
        ["glow", 1.6],
        ["crackle", 0.7],
    ],
    burns: [
        ["glow", 1.6],
        ["crackle", 0.7],
    ],
};
for (const k in AUTO_FX)
    if (!Array.isArray(AUTO_FX[k][0])) AUTO_FX[k] = [AUTO_FX[k]]; // every word holds a list of effects
for (const w of (COLORS.r + " " + COLORS.dr).split(" ")) {
    // red words also shake on hits, unless they already shake
    AUTO_FX[w] = AUTO_FX[w] || [];
    if (!AUTO_FX[w].some((e) => e[0] === "shake"))
        AUTO_FX[w].push(["hitshake", 1]);
}
const AUTO_RE = new RegExp(`\\b(${Object.keys(AUTO_FX).join("|")})\\b`, "gi");
function parse(body) {
    const pauses = {},
        fx = [],
        open = []; // fx[i]: effects active on character i
    let text = "",
        last = 0;
    const add = (s) => {
        for (const ch of s) {
            fx[text.length] = open.slice();
            text += ch;
        }
    };
    for (const m of body.matchAll(
        new RegExp(`<(/?)(p|${FX}|c|)(?:=([^>]*))?>`, "gi"),
    )) {
        // case-insensitive
        const [tag, close, name0, num] = m,
            name = name0.toLowerCase() === "c" ? "col" : name0.toLowerCase(); // <c=...> is the colour tag
        if (!name && !close) continue; // a bare "<>" is just text
        add(body.slice(last, m.index));
        last = m.index + tag.length;
        if (close) {
            const k = open.findLastIndex((o) => !name || o[0] === name);
            if (k >= 0) open.splice(k, 1);
        } else if (name === "p")
            pauses[text.length] = (pauses[text.length] || 0) + (+num || 0);
        else open.push([name, name === "col" ? (num || "#fff").toLowerCase() : +num || 1]); // <c=red>: the value is the colour itself
    }
    add(body.slice(last));
    for (const m of text.matchAll(AUTO_RE))
        for (let k = 0; k < m[0].length; k++)
            fx[m.index + k].push(...AUTO_FX[m[0].toLowerCase()]);
    return { text, pauses, fx };
}

async function say(raw, ms) {
    const keep = raw.endsWith("~"),
        body = keep ? raw.slice(0, -1).trimEnd() : raw;
    const { text, pauses, fx } = parse(body);
    if (!fresh) prompt();
    fresh = false;
    const mine = line;
    if (ms && pauses[0]) await nap(pauses[0], mine);
    let n = 0; // characters typed so far, to find the pauses
    for (const [i, tok] of text.split(WORD).entries()) {
        if (!tok) continue;
        const s = Object.assign(document.createElement("span"), {
            className: i % 2 ? cls[tok.toLowerCase()] : "",
        });
        mine.insertBefore(s, cur.parentNode === mine ? cur : null);
        for (const ch of tok) {
            let node = document.createTextNode(ch);
            for (const [name, amt] of fx[n] || []) {
                // one span per effect, so they stack
                // <c=...>: a keyword colour letter (r dr c y o m g w v) or any CSS colour; it recolours only this text
                const isCol = name === "col",
                    w = Object.assign(document.createElement("span"), {
                        className: isCol
                            ? "fx" + (amt in COLORS ? " " + amt : "")
                            : `fx ${name}`,
                    });
                w.style.cssText = `--i:${n};--a:${isCol ? 1 : amt}`;
                if (isCol && !(amt in COLORS)) w.style.color = amt;
                w.append(node);
                node = w;
            }
            s.append(node);
            n += ch.length;
            // a newer line took over: finish instantly
            if (ms && line === mine) {
                await sleep(ms * (0.4 + Math.random() * 1.2));
                if (pauses[n]) await nap(pauses[n], mine);
            }
        }
    }
    if (!keep && line === mine) prompt(); // "hit enter": cursor drops to a fresh prompt
}

// print one error/warning row above the prompt
function printErr(err) {
    const e = Object.assign(document.createElement("div"), { className: "er" });
    // a message's own level prefix is its label, else a random warning/error
    const [, tag, text] = err.match(
        /^(?:(warning|error|fatal|panic|traceback): )?(.*)/,
    );
    const lvl = tag || (Math.random() < 0.3 ? "warning" : "error");
    e.innerHTML = `<b class="${lvl === "warning" ? "y" : "r"}">${lvl}:</b> `;
    e.append(text);
    push(e, line);
}

// Errors come from the lines just before/after (cues[i - 1], cues[i]), else ERRORS; no recent repeats.
const recent = [];
function error() {
    const near = [cues[i - 1], cues[i]].flatMap((c) => (c ? c.errs : []));
    const pool = near.length ? near : ERRORS;
    const unseen = pool.filter((m) => !recent.includes(m)),
        choices = unseen.length ? unseen : pool;
    const err = choices[(Math.random() * choices.length) | 0];
    recent.push(err);
    if (recent.length > 6) recent.shift();
    printErr(err);
    vig.classList.add("hit");
    setTimeout(() => vig.classList.remove("hit"), 70);
    shake(heat * ERR_SHAKE);
}

// jolt the text; decay < 1 settles instead of rattling
function shake(amp, decay = 1, ms = 220) {
    const j = (k) =>
        `translate(${(Math.random() - 0.5) * amp * k}vmin,${(Math.random() - 0.5) * amp * k}vmin)`;
    out.animate(
        { transform: ["none", j(1), j(decay), j(decay * decay), "none"] },
        ms,
    );
}

// hitshake text (and red error labels) only move while #out has the class `hitting`: on for 0.2-0.3s after each hit
let hitTimer;
function hitText(s) {
    out.style.setProperty("--hs", Math.min(2, s)); // a harder hit shakes the letters more
    out.classList.add("hitting");
    clearTimeout(hitTimer);
    hitTimer = setTimeout(
        () => out.classList.remove("hitting"),
        200 + Math.random() * 100,
    );
}

const cv = $("cracks"),
    ctx = cv.getContext("2d");

function rng(a) {
    // small seeded random, so the cracks look the same every run
    return () => {
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// A crack = jagged trunks + many branches from a border point, as pieces in screen-size units. Pieces are 9-35 px long on
// any screen, so a big screen gets finer cracks, not bigger ones. d0/d1 = how far along the crack each piece is, so one number
// L reveals it piece by piece; branches get their own speed factor k.
function makeCrack(c) {
    const S0 = Math.max(innerWidth, innerHeight),
        r = rng(c.seed + c.gen * 7919),
        segs = [],
        edge = () => 0.1 + r() * 0.8;
    const A = CRACKS[0],
        sides = [
            [edge(), 0],
            [1, edge()],
            [edge(), 1],
            [0, edge()],
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1],
        ]; // an edge, or sometimes a corner
    [c.ox, c.oy] =
        c !== A
            ? [1 - A.ox, 1 - A.oy]
            : c.gen
              ? sides[(r() * 8) | 0]
              : [c.x, c.y]; // the second crack mirrors the first through the middle
    const grow = (x, y, dir, len, depth, d, k) => {
        let side = r() < 0.5 ? -1 : 1;
        while (len > 12 / S0) {
            if (r() < 0.7) side = -side; // mostly zigzag, sometimes two kinks the same way
            const ang = dir + side * (0.3 + r() * 0.6); // every piece kinks sharply off the trend: jagged
            const step = Math.min(len, (9 + r() * 26) / S0),
                nx = x + Math.cos(ang) * step,
                ny = y + Math.sin(ang) * step,
                px = step * S0;
            segs.push({
                x1: x,
                y1: y,
                x2: nx,
                y2: ny,
                d0: d,
                d1: d + step / k,
                depth,
            });
            x = nx;
            y = ny;
            d += step / k;
            len -= step;
            if (r() < px * 0.0057) dir += (r() - 0.5) * 0.9; // the overall heading changes in jumps
            if (
                depth < 3 &&
                segs.length < 1400 &&
                r() < px * 0.0055 * Math.min(1, 1200 / S0) * (1 - depth * 0.25)
            )
                // lots of branches (the same amount on any screen), fewer on the small ones
                grow(
                    x,
                    y,
                    dir + (r() < 0.5 ? -1 : 1) * (0.5 + r() * 0.9),
                    len * (0.35 + r() * 0.4),
                    depth + 1,
                    d,
                    Math.min(2, Math.max(0.5, k * (0.6 + r() * 0.9))),
                );
        }
    };
    const aim = Math.atan2(0.5 - c.oy, 0.5 - c.ox); // trunks head into the screen
    for (let k = 0, n = 2 + ((r() * 2) | 0); k < n; k++)
        grow(
            0,
            0,
            aim + (k / (n - 1) - 0.5) * 1.2 + (r() - 0.5) * 0.3,
            0.4 + r() * 0.4,
            0,
            0,
            0.7 + r() * 0.7,
        );
    Object.assign(c, { segs, total: Math.max(...segs.map((s) => s.d1)), L: 0 });
}

function layout() {
    const W = innerWidth,
        H = innerHeight,
        S = Math.max(W, H);
    for (const c of CRACKS) {
        c.ax = (c.ox * W) / S;
        c.ay = (c.oy * H) / S;
    }
}
function fit() {
    const d = devicePixelRatio || 1;
    cv.width = innerWidth * d;
    cv.height = innerHeight * d;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    layout();
}

for (const c of CRACKS) {
    Object.assign(c, {
        gen: 0,
        born: false,
        flash: 0,
        burst: null,
        cap: 1,
        healFrom: 0,
        healBy: 0,
    });
    makeCrack(c);
}
addEventListener("resize", fit);
fit();

// L = how much of the crack shows, measured along it from the border (so healing retracts the tips). Every move is one linear
// burst started by an event: a big hit cracks two out, then beats heal them in steps; between events they hold still.
function crackHit(h) {
    if (!h.big) return;
    for (const c of CRACKS) {
        // both at once, the first one first (the second mirrors where the first starts)
        if (c.at > h.t) continue;
        if (c.born || c !== CRACKS[0]) {
            c.gen++;
            makeCrack(c);
            layout();
        } // every crack after the first is a new one
        Object.assign(c, {
            born: true,
            flash: 0.5,
            cap: 0.55 + 0.45 * intensityAt(h.t),
            burst: { left: CRACK.out, speed: CRACK.speed },
        });
        c.healFrom = h.t + CRACK.hold;
        c.healBy = Math.min(h.nextBig - 0.5, h.t + CRACK.healMax); // fully mended by here, so the next big hit can crack them out again
    }
}
function crackBeat(tb) {
    // spread what is left of the crack over the beats that remain before healBy
    for (const c of CRACKS) {
        if (!c.born || c.L <= 0 || tb < c.healFrom) continue;
        const steps = Math.max(1, Math.floor((c.healBy - tb) / BEAT) + 1);
        c.burst = {
            left: CRACK.healBeat,
            speed: -(c.L / steps / c.total) / CRACK.healBeat,
        };
    }
}
function crackStep(c, dt) {
    c.flash = Math.max(0, c.flash - 4 * dt);
    const b = c.burst;
    if (!b) return;
    c.L = Math.max(
        0,
        Math.min(
            c.total * c.cap,
            c.L + b.speed * c.total * Math.min(dt, b.left),
        ),
    );
    if ((b.left -= dt) <= 0) c.burst = null;
}

// Solid colour only (dimmer = darker, never see-through), one path per line width, so overlaps can't add up to bright
// spots. Widths are in px and capped, so cracks don't get chunky on big screens.
const CRACK_WIDTH = [1.5, 1, 0.7, 0.5]; // by branch depth
let crackClock = performance.now(),
    curHue = 145,
    beatAt = 0;
function cracks(hue) {
    const now = performance.now(),
        dt = Math.min(0.1, (now - crackClock) / 1000);
    crackClock = now;
    const W = innerWidth,
        H = innerHeight,
        S = Math.max(W, H),
        wide = Math.min(1.5, Math.max(1, S / 900));
    ctx.clearRect(0, 0, W, H);
    ctx.lineCap = ctx.lineJoin = "round";
    for (const c of CRACKS) {
        crackStep(c, dt);
        if (!c.born || c.L <= 0) continue;
        ctx.strokeStyle =
            "hsl(" +
            hue +
            " 75% " +
            Math.min(70, 24 + (28 * c.L) / c.total + 30 * c.flash) +
            "%)";
        CRACK_WIDTH.forEach((w, depth) => {
            ctx.beginPath();
            for (const s of c.segs) {
                if (s.depth !== depth || s.d0 >= c.L) continue;
                const f = Math.min(1, (c.L - s.d0) / (s.d1 - s.d0));
                ctx.moveTo((c.ax + s.x1) * S, (c.ay + s.y1) * S);
                ctx.lineTo(
                    (c.ax + s.x1 + (s.x2 - s.x1) * f) * S,
                    (c.ay + s.y1 + (s.y2 - s.y1) * f) * S,
                );
            }
            ctx.lineWidth = w * wide;
            ctx.stroke();
        });
    }
}

let shown = "";
function paint(t) {
    const hue = Math.round(
        145 *
            (1 -
                Math.min(1, Math.max(0, (t - RED_FROM) / (RED_BY - RED_FROM)))),
    );
    curHue = hue;
    const [alpha, blur, spread] = HEAT[heat];
    const shadow = `inset 0 0 ${blur} ${spread} hsl(${hue} 100% 55% / ${alpha})`;
    if (shadow !== shown) vig.style.boxShadow = shown = shadow;
}

function fire(c, instant) {
    document.body.style.background = c.bg;
    heat = c.heat;
    vig.style.animationDuration = HEAT[heat][3];
    const typed = say(c.text, instant ? 0 : 30);
    // " ! " warnings print after the line finishes (no flash/shake)
    if (!instant && c.warns.length)
        typed.then(async () => {
            for (const w of c.warns) {
                await sleep(500);
                printErr(w);
            }
        });
}

let clock,
    i = 0,
    h = 0,
    nextErr = 0,
    audioAsked = false,
    audioOn = false,
    audioDead = false,
    held;
const LOAD_WAIT = 15; // max seconds to hold at 0 for the song to buffer
let base = 0,
    wall = 0; // free-running clock: song time base at wall time wall
const free = () => base + (performance.now() - wall) / 1000;

// bottom-right note: song status, plus a live readout with ?debug
let msg = "";
function showNote(m = msg) {
    msg = m;
    note.textContent =
        debug && clock
            ? `${m}\nclock ${clock().toFixed(1)} audio ${a.currentTime.toFixed(1)}${a.paused ? " paused" : ""} ready ${a.readyState} net ${a.networkState} next ${cues[i] ? cues[i].t : "end"} hit ${HITS[h] ? HITS[h].t + "<" + HITS[h].s + ">" : "end"}`
            : m;
}

// song missing or died: lyrics carry on silently
function lose(why) {
    if (audioDead) return;
    if (started) {
        base = audioOn ? a.currentTime : free();
        wall = performance.now();
    }
    audioOn = false;
    audioDead = true;
    showNote(`${why}; lyrics continue silently`);
}
a.addEventListener("error", () =>
    lose(
        `song failed (error ${a.error.code}${a.error.message ? ": " + a.error.message : ""})`,
    ),
);
a.addEventListener(
    "waiting",
    () => audioOn && showNote("buffering the song..."),
);
a.addEventListener("playing", () => audioOn && showNote(""));
// song ended: free-run past its end (credits)
a.addEventListener("ended", () => {
    base = a.duration;
    wall = performance.now();
    audioOn = false;
    audioDead = true;
});

function playSong() {
    a.play().then(
        () => {
            audioOn = true;
            showNote("");
        },
        (e) => {
            console.warn("song:", e.name, e.message);
            if (e.name !== "NotAllowedError")
                return lose(`song unavailable (${e.name})`);
            // autoplay blocked (F11/Ctrl don't count): wait for a click/key
            gate.textContent =
                "the browser blocked the song: click or press a key";
            gate.style.display = "grid";
            addEventListener("pointerdown", unblock);
            addEventListener("keydown", unblock);
        },
    );
}
function unblock() {
    removeEventListener("pointerdown", unblock);
    removeEventListener("keydown", unblock);
    gate.style.display = "none";
    playSong();
}

function tick() {
    const t = clock();
    // the song starts at 0 once the boot is done and the browser can play it through; then it is the clock
    if (!audioAsked && t >= 0) {
        held ??= performance.now();
        if (
            a.readyState >= 4 ||
            a.networkState !== 2 ||
            performance.now() - held > LOAD_WAIT * 1000
        ) {
            audioAsked = true;
            playSong();
        } else {
            showNote(
                `loading the song... ${a.duration && a.buffered.length ? Math.round((100 * a.buffered.end(a.buffered.length - 1)) / a.duration) : 0}%`,
            );
        }
    }
    while (i < cues.length && cues[i].t <= t) fire(cues[i++]);
    // every hit shakes at any heat; hits more than 0.5s late (stall/seek) are skipped
    while (h < HITS.length && HITS[h].t + HIT_DELAY <= t) {
        if (t - HITS[h].t < 0.5) {
            shake(Math.max(heat, 1) * HIT_SHAKE * HITS[h].s, 0.6, 260);
            hitText(HITS[h].s);
            crackHit(HITS[h]);
        }
        h++;
    }
    while (beatAt <= t) {
        if (t - beatAt < 0.5) crackBeat(beatAt);
        beatAt += BEAT;
    } // quiet beats heal the cracks
    paint(t);
    cracks(curHue);
    if (debug) showNote();
    if (heat >= 2 && t > nextErr) {
        const n = heat > 2 ? 1 + ((Math.random() * 3) | 0) : 1;
        for (let k = 0; k < n; k++) setTimeout(error, k * 70);
        nextErr =
            t + (heat > 2 ? 1 + Math.random() * 1.5 : 3 + Math.random() * 3);
    }
    requestAnimationFrame(tick);
}

// ?t=90 starts at 90s (earlier lines appear instantly)
const q = new URLSearchParams(location.search);
const debug = q.has("debug"); // ?debug shows a live clock/audio readout in the corner
const off = q.has("t") ? +q.get("t") : cues[0].t;
let started = false;
function start() {
    if (started) return;
    started = true;
    gate.style.display = "none";
    document.body.classList.add("go");
    base = off;
    wall = performance.now();
    // free-run for the silent boot; from 0 hold for the wav, then follow it
    clock = () =>
        audioOn ? a.currentTime : audioDead ? free() : Math.min(free(), 0);
    if (off > 0) a.currentTime = off;
    while (i < cues.length && cues[i].t < off) fire(cues[i++], true);
    while (h < HITS.length && HITS[h].t < off) h++;
    // jumped in with ?t=: replay the hits and beats before that moment so the cracks are where they would be
    const events = HITS.filter((x) => x.t < off);
    for (let tb = BEAT0 % BEAT; tb < off; tb += BEAT) events.push({ t: tb });
    for (const e of events.sort((a, b) => a.t - b.t)) {
        e.s ? crackHit(e) : crackBeat(e.t);
        for (const c of CRACKS) crackStep(c, 10);
    }
    beatAt = BEAT0 + Math.ceil((off - BEAT0) / BEAT) * BEAT;
    tick();
}
gate.onclick = start;
addEventListener("keydown", start, { once: true });
