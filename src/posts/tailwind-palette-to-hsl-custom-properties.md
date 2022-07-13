---
title: Using Tailwind's Colours Without the Tooling
date: 2021-08-18
---

I think of [Tailwind](https://tailwindcss.com/) as a design system wrapped up in some clever tooling. As someone that has a hard time picking colours, my favourite part of the design system is [the colour palette](https://tailwindcss.com/docs/customizing-colors#color-palette-reference).

Much as I like Tailwind, I also enjoy writing plain CSS. I was looking for a way to plop Tailwind's colours into a set of plain CSS custom properties.

And while I'm creating a set of colours I'd like them to be defined as HSL values, not the RGB hex values that Tailwind uses.

## What to do?

If I were feeling pragmatic I'd manually convert the few colours I'm interested in, and get on with my actual task. But I'm not writing this for the sake of pragmatism. This is a time for unnecessary automation!

[I wrote a script](https://github.com/m-allanson/mikeallanson.com/blob/a78386ca2673bc402add9328d97407e6747b783b/src/utils/twColours/index.js) that takes Tailwind's `colours` object and converts it to a string of CSS custom properties. It swaps the RGB hex values over to HSL at the same time.

> Credit to [CSS Tricks for the hex to HSL conversion function](https://css-tricks.com/converting-color-spaces-in-javascript/) (and of course Tailwind for the colours).

The output looks like this:

```css
--transparent: transparent;
--current: currentColor;
--black: hsl(0, 0%, 0%);
--white: hsl(0, 0%, 100%);
--slate-50: hsl(210, 40%, 98%);
--slate-100: hsl(210, 40%, 96.1%);
--slate-200: hsl(214, 31.8%, 91.4%);
--slate-300: hsl(213, 26.8%, 83.9%);
--slate-400: hsl(215, 20.2%, 65.1%);
--slate-500: hsl(215, 16.3%, 46.9%);
--slate-600: hsl(215, 19.3%, 34.5%);
--slate-700: hsl(215, 25%, 26.7%);
--slate-800: hsl(217, 32.6%, 17.5%);
--slate-900: hsl(222, 47.4%, 11.2%);
--gray-50: hsl(210, 20%, 98%);
--gray-100: hsl(220, 14.3%, 95.9%);
--gray-200: hsl(220, 13%, 91%);
--gray-300: hsl(216, 12.2%, 83.9%);
--gray-400: hsl(218, 10.6%, 64.9%);
--gray-500: hsl(220, 8.9%, 46.1%);
--gray-600: hsl(215, 13.8%, 34.1%);
--gray-700: hsl(217, 19.1%, 26.7%);
--gray-800: hsl(215, 27.9%, 16.9%);
--gray-900: hsl(221, 39.3%, 11%);
--zinc-50: hsl(0, 0%, 98%);
--zinc-100: hsl(240, 4.8%, 95.9%);
--zinc-200: hsl(240, 5.9%, 90%);
--zinc-300: hsl(240, 4.9%, 83.9%);
--zinc-400: hsl(240, 5%, 64.9%);
--zinc-500: hsl(240, 3.8%, 46.1%);
--zinc-600: hsl(240, 5.2%, 33.9%);
--zinc-700: hsl(240, 5.3%, 26.1%);
--zinc-800: hsl(240, 3.7%, 15.9%);
--zinc-900: hsl(240, 5.9%, 10%);
--neutral-50: hsl(0, 0%, 98%);
--neutral-100: hsl(0, 0%, 96.1%);
--neutral-200: hsl(0, 0%, 89.8%);
--neutral-300: hsl(0, 0%, 83.1%);
--neutral-400: hsl(0, 0%, 63.9%);
--neutral-500: hsl(0, 0%, 45.1%);
--neutral-600: hsl(0, 0%, 32.2%);
--neutral-700: hsl(0, 0%, 25.1%);
--neutral-800: hsl(0, 0%, 14.9%);
--neutral-900: hsl(0, 0%, 9%);
--stone-50: hsl(60, 9.1%, 97.8%);
--stone-100: hsl(60, 4.8%, 95.9%);
--stone-200: hsl(20, 5.9%, 90%);
--stone-300: hsl(24, 5.7%, 82.9%);
--stone-400: hsl(24, 5.4%, 63.9%);
--stone-500: hsl(25, 5.3%, 44.7%);
--stone-600: hsl(33, 5.5%, 32.4%);
--stone-700: hsl(30, 6.3%, 25.1%);
--stone-800: hsl(12, 6.5%, 15.1%);
--stone-900: hsl(24, 9.8%, 10%);
--red-50: hsl(0, 85.7%, 97.3%);
--red-100: hsl(0, 93.3%, 94.1%);
--red-200: hsl(0, 96.3%, 89.4%);
--red-300: hsl(0, 93.5%, 81.8%);
--red-400: hsl(0, 90.6%, 70.8%);
--red-500: hsl(0, 84.2%, 60.2%);
--red-600: hsl(0, 72.2%, 50.6%);
--red-700: hsl(0, 73.7%, 41.8%);
--red-800: hsl(0, 70%, 35.3%);
--red-900: hsl(0, 62.8%, 30.6%);
--orange-50: hsl(33, 100%, 96.5%);
--orange-100: hsl(34, 100%, 91.8%);
--orange-200: hsl(32, 97.7%, 83.1%);
--orange-300: hsl(31, 97.2%, 72.4%);
--orange-400: hsl(27, 96%, 61%);
--orange-500: hsl(25, 95%, 53.1%);
--orange-600: hsl(21, 90.2%, 48.2%);
--orange-700: hsl(17, 88.3%, 40.4%);
--orange-800: hsl(15, 79.1%, 33.7%);
--orange-900: hsl(15, 74.6%, 27.8%);
--amber-50: hsl(48, 100%, 96.1%);
--amber-100: hsl(48, 96.5%, 88.8%);
--amber-200: hsl(48, 96.6%, 76.7%);
--amber-300: hsl(46, 96.7%, 64.5%);
--amber-400: hsl(43, 96.4%, 56.3%);
--amber-500: hsl(38, 92.1%, 50.2%);
--amber-600: hsl(32, 94.6%, 43.7%);
--amber-700: hsl(26, 90.5%, 37.1%);
--amber-800: hsl(23, 82.5%, 31.4%);
--amber-900: hsl(22, 77.8%, 26.5%);
--yellow-50: hsl(55, 91.7%, 95.3%);
--yellow-100: hsl(55, 96.7%, 88%);
--yellow-200: hsl(53, 98.3%, 76.9%);
--yellow-300: hsl(50, 97.8%, 63.5%);
--yellow-400: hsl(48, 95.8%, 53.1%);
--yellow-500: hsl(45, 93.4%, 47.5%);
--yellow-600: hsl(41, 96.1%, 40.4%);
--yellow-700: hsl(35, 91.7%, 32.9%);
--yellow-800: hsl(32, 81%, 28.8%);
--yellow-900: hsl(28, 72.5%, 25.7%);
--lime-50: hsl(78, 92%, 95.1%);
--lime-100: hsl(80, 89.1%, 89.2%);
--lime-200: hsl(81, 88.5%, 79.6%);
--lime-300: hsl(82, 84.5%, 67.1%);
--lime-400: hsl(83, 78%, 55.5%);
--lime-500: hsl(84, 80.5%, 44.3%);
--lime-600: hsl(85, 85.2%, 34.5%);
--lime-700: hsl(86, 78.4%, 27.3%);
--lime-800: hsl(86, 69%, 22.7%);
--lime-900: hsl(88, 61.2%, 20.2%);
--green-50: hsl(138, 76.5%, 96.7%);
--green-100: hsl(141, 84.2%, 92.5%);
--green-200: hsl(141, 78.9%, 85.1%);
--green-300: hsl(142, 76.6%, 73.1%);
--green-400: hsl(142, 69.2%, 58%);
--green-500: hsl(142, 70.6%, 45.3%);
--green-600: hsl(142, 76.2%, 36.3%);
--green-700: hsl(142, 71.8%, 29.2%);
--green-800: hsl(143, 64.2%, 24.1%);
--green-900: hsl(144, 61.2%, 20.2%);
--emerald-50: hsl(152, 81%, 95.9%);
--emerald-100: hsl(149, 80.4%, 90%);
--emerald-200: hsl(152, 76%, 80.4%);
--emerald-300: hsl(156, 71.6%, 66.9%);
--emerald-400: hsl(158, 64.4%, 51.6%);
--emerald-500: hsl(160, 84.1%, 39.4%);
--emerald-600: hsl(161, 93.5%, 30.4%);
--emerald-700: hsl(163, 93.5%, 24.3%);
--emerald-800: hsl(163, 88.1%, 19.8%);
--emerald-900: hsl(164, 85.7%, 16.5%);
--teal-50: hsl(166, 76.5%, 96.7%);
--teal-100: hsl(167, 85.5%, 89.2%);
--teal-200: hsl(168, 83.8%, 78.2%);
--teal-300: hsl(171, 76.9%, 64.3%);
--teal-400: hsl(172, 66%, 50.4%);
--teal-500: hsl(173, 80.4%, 40%);
--teal-600: hsl(175, 83.9%, 31.6%);
--teal-700: hsl(175, 77.4%, 26.1%);
--teal-800: hsl(176, 69.4%, 21.8%);
--teal-900: hsl(176, 60.8%, 19%);
--cyan-50: hsl(183, 100%, 96.3%);
--cyan-100: hsl(185, 95.9%, 90.4%);
--cyan-200: hsl(186, 93.5%, 81.8%);
--cyan-300: hsl(187, 92.4%, 69%);
--cyan-400: hsl(188, 85.7%, 53.3%);
--cyan-500: hsl(189, 94.5%, 42.7%);
--cyan-600: hsl(192, 91.4%, 36.5%);
--cyan-700: hsl(193, 82.3%, 31%);
--cyan-800: hsl(194, 69.6%, 27.1%);
--cyan-900: hsl(196, 63.6%, 23.7%);
--sky-50: hsl(204, 100%, 97.1%);
--sky-100: hsl(204, 93.8%, 93.7%);
--sky-200: hsl(201, 94.4%, 86.1%);
--sky-300: hsl(199, 95.5%, 73.9%);
--sky-400: hsl(198, 93.2%, 59.6%);
--sky-500: hsl(199, 88.7%, 48.4%);
--sky-600: hsl(200, 98%, 39.4%);
--sky-700: hsl(201, 96.3%, 32.2%);
--sky-800: hsl(201, 90%, 27.5%);
--sky-900: hsl(202, 80.3%, 23.9%);
--blue-50: hsl(214, 100%, 96.9%);
--blue-100: hsl(214, 94.6%, 92.7%);
--blue-200: hsl(213, 96.9%, 87.3%);
--blue-300: hsl(212, 96.4%, 78.4%);
--blue-400: hsl(213, 93.9%, 67.8%);
--blue-500: hsl(217, 91.2%, 59.8%);
--blue-600: hsl(221, 83.2%, 53.3%);
--blue-700: hsl(224, 76.3%, 48%);
--blue-800: hsl(226, 70.7%, 40.2%);
--blue-900: hsl(224, 64.3%, 32.9%);
--indigo-50: hsl(226, 100%, 96.7%);
--indigo-100: hsl(226, 100%, 93.9%);
--indigo-200: hsl(228, 96.5%, 88.8%);
--indigo-300: hsl(230, 93.5%, 81.8%);
--indigo-400: hsl(234, 89.5%, 73.9%);
--indigo-500: hsl(239, 83.5%, 66.7%);
--indigo-600: hsl(243, 75.4%, 58.6%);
--indigo-700: hsl(245, 57.9%, 50.6%);
--indigo-800: hsl(244, 54.5%, 41.4%);
--indigo-900: hsl(242, 47.4%, 34.3%);
--violet-50: hsl(250, 100%, 97.6%);
--violet-100: hsl(251, 91.3%, 95.5%);
--violet-200: hsl(251, 95.2%, 91.8%);
--violet-300: hsl(252, 94.7%, 85.1%);
--violet-400: hsl(255, 91.7%, 76.3%);
--violet-500: hsl(258, 89.5%, 66.3%);
--violet-600: hsl(262, 83.3%, 57.8%);
--violet-700: hsl(263, 70%, 50.4%);
--violet-800: hsl(263, 69.3%, 42.2%);
--violet-900: hsl(264, 67.4%, 34.9%);
--purple-50: hsl(270, 100%, 98%);
--purple-100: hsl(269, 100%, 95.5%);
--purple-200: hsl(269, 100%, 91.8%);
--purple-300: hsl(269, 97.4%, 85.1%);
--purple-400: hsl(270, 95.2%, 75.3%);
--purple-500: hsl(271, 91%, 65.1%);
--purple-600: hsl(271, 81.3%, 55.9%);
--purple-700: hsl(272, 71.7%, 47.1%);
--purple-800: hsl(273, 67.2%, 39.4%);
--purple-900: hsl(274, 65.6%, 32%);
--fuchsia-50: hsl(289, 100%, 97.8%);
--fuchsia-100: hsl(287, 100%, 95.5%);
--fuchsia-200: hsl(288, 95.8%, 90.6%);
--fuchsia-300: hsl(291, 93.1%, 82.9%);
--fuchsia-400: hsl(292, 91.4%, 72.5%);
--fuchsia-500: hsl(292, 84.1%, 60.6%);
--fuchsia-600: hsl(293, 69.5%, 48.8%);
--fuchsia-700: hsl(295, 72.4%, 39.8%);
--fuchsia-800: hsl(295, 70.2%, 32.9%);
--fuchsia-900: hsl(297, 63.6%, 28%);
--pink-50: hsl(327, 73.3%, 97.1%);
--pink-100: hsl(326, 77.8%, 94.7%);
--pink-200: hsl(326, 84.6%, 89.8%);
--pink-300: hsl(327, 87.1%, 81.8%);
--pink-400: hsl(329, 85.5%, 70.2%);
--pink-500: hsl(330, 81.2%, 60.4%);
--pink-600: hsl(333, 71.4%, 50.6%);
--pink-700: hsl(335, 77.6%, 42%);
--pink-800: hsl(336, 74.4%, 35.3%);
--pink-900: hsl(336, 69%, 30.4%);
--rose-50: hsl(356, 100%, 97.3%);
--rose-100: hsl(356, 100%, 94.7%);
--rose-200: hsl(353, 96.1%, 90%);
--rose-300: hsl(353, 95.7%, 81.8%);
--rose-400: hsl(351, 94.5%, 71.4%);
--rose-500: hsl(350, 89.2%, 60.2%);
--rose-600: hsl(347, 77.2%, 49.8%);
--rose-700: hsl(345, 82.7%, 40.8%);
--rose-800: hsl(343, 79.7%, 34.7%);
--rose-900: hsl(342, 75.5%, 30.4%);
```

Which is based on the following input:

```js
/* Tailwind 2 colours from
// https://github.com/tailwindlabs/tailwindcss/blob/c64bc1f6526adb88ae2e3bbb96e2c529f92f6cb3/colors.js
*/
const colours = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
  },
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
};
```
