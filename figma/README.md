# Figma Design Tokens

`tokens.json` contains all design tokens from the portfolio site in **W3C Design Token** format, compatible with **Tokens Studio for Figma**.

## How to import

### Option A: Tokens Studio (recommended)

1. Install the [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma) plugin
2. Open a Figma file → Plugins → Tokens Studio
3. In the left panel click **"+"** → **"Add new file token"**
4. Choose **Local file** and paste the contents of `tokens.json`
5. Click **Load tokens**

Tokens will appear in the Tokens Studio panel grouped by: `color`, `dimension`, `typography`, `border`.

### Option B: Variables (Figma native, colors only)

1. Open Figma → File → **Edit** → **Variables**
2. Create a new collection named "Portfolio"
3. Manually add each color from `tokens.json` under the `color` group

### Token groups

| Group | Contents |
|---|---|
| `color` | Background, surface, text, accent, rule, and status colors |
| `dimension` | Layout widths, nav height, section padding, column gap |
| `typography` | Font styles for hero, nav, labels, body, stats, buttons |
| `border` | Rule, strong rule, hero separator |

## Key values at a glance

| Token | Value |
|---|---|
| `color.accent` | `#0047b3` |
| `color.bg` | `#f6f6f4` |
| `color.text` | `#141414` |
| `dimension.labelWidth` | `180px` |
| `dimension.navHeight` | `56px` |
| `typography.fontFamily` | `Inter` |
