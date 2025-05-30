// lightTheme.js - Light theme color variables
const lightTheme = {
  // ===== PRIMARY COLORS =====
  "--color-primary": "#059669",
  "--color-primary-light": "#2563eb",
  "--color-primary-lighter": "rgba(37, 99, 235, 0.15)",
  "--color-primary-dark": "#047857",
  "--color-primary-darker": "#065f46",
  "--color-primary-darkest": "#064e3b",
  "--color-secondary": "#2563eb",
  "--color-secondary-light": "#3b82f6",
  "--color-secondary-dark": "#1d4ed8",

  // Legacy primary color variations
  "--primary-blue": "#2563eb",
  "--primary-blue-dark": "#1d4ed8",
  "--primary-blue-darker": "#1e40af",
  "--primary-purple": "#7c3aed",
  "--primary-purple-dark": "#6d28d9",
  "--primary-purple-darker": "#581c87",
  "--primary-green": "#059669",
  "--primary-green-light": "#10b981",

  // ===== ACCENT COLORS =====
  "--color-accent": "#7c3aed",
  "--color-accent-dark": "#6d28d9",
  "--color-accent-darker": "#581c87",
  "--color-yellow-400": "#d97706",
  "--color-yellow-500": "#d97706",
  "--color-yellow-600": "#b45309",
  "--color-green-500": "#059669",
  "--color-cyan-500": "#0891b2",
  "--color-purple-500": "#7c3aed",
  "--color-red-500": "#dc2626",
  "--color-orange-500": "#ea580c",
  "--color-lime-500": "#65a30d",
  "--color-pink-500": "#db2777",
  "--color-teal-500": "#0d9488",
  "--color-danger": "#dc2626",

  // ===== SLATE COLORS (Inverted for light theme) =====
  "--color-slate-50": "#0f172a",
  "--color-slate-100": "#1e293b",
  "--color-slate-200": "#334155",
  "--color-slate-300": "#475569",
  "--color-slate-400": "#64748b",
  "--color-slate-500": "#94a3b8",
  "--color-slate-600": "#cbd5e1",
  "--color-slate-700": "#e2e8f0",
  "--color-slate-800": "#f1f5f9",
  "--color-slate-900": "#f8fafc",

  // ===== GRAY COLORS (Inverted for light theme) =====
  "--color-white": "#0f172a",
  "--color-gray-50": "#0f172a",
  "--color-gray-100": "#1e293b",
  "--color-gray-200": "#334155",
  "--color-gray-300": "#475569",
  "--color-gray-400": "#64748b",
  "--color-gray-500": "#94a3b8",
  "--color-gray-600": "#cbd5e1",
  "--color-gray-700": "#e2e8f0",
  "--color-gray-800": "#f1f5f9",
  "--color-gray-850": "#f8fafc",
  "--color-gray-900": "#f8fafc",
  "--color-gray-950": "#ffffff",

  // ===== BACKGROUND COLORS =====
  "--bg-header": "rgba(248, 250, 252, 0.95)",
  "--bg-nav-mobile": "rgba(248, 250, 252, 0.98)",
  "--bg-gradient": "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
  "--bg-border-slate": "rgba(226, 232, 240, 0.5)",
  "--bg-slate-900": "#f8fafc",
  "--bg-slate-800": "#f1f5f9",
  "--bg-slate-700": "#e2e8f0",
  "--bg-gray-800": "#f8fafc",
  "--bg-gray-700": "#f1f5f9",
  "--bg-gray-600": "#e2e8f0",
  "--bg-dark-900": "#ffffff",
  "--bg-primary": "rgba(248, 250, 252, 0.6)",
  "--bg-secondary": "rgba(241, 245, 249, 0.8)",
  "--bg-secondary-focus": "rgba(226, 232, 240, 0.9)",
  "--bg-card": "linear-gradient(135deg, #ffffff, #f8fafc)",
  "--bg-glassmorphism": "rgba(15, 23, 42, 0.05)",
  "--bg-glassmorphism-hover": "rgba(37, 99, 235, 0.1)",

  // ===== BORDER COLORS =====
  "--border-primary": "#e2e8f0",
  "--border-secondary": "#cbd5e1",
  "--border-tertiary": "#cbd5e1",
  "--border-blue": "rgba(37, 99, 235, 0.2)",
  "--border-blue-focus": "#2563eb",
  "--border-purple": "#7c3aed",
  "--border-gray": "1px solid #e2e8f0",
  "--border-light": "1px solid #cbd5e1",
  "--border-lighter": "1px solid #cbd5e1",

  // ===== TEXT COLORS =====
  "--text-primary": "#1e293b",
  "--text-secondary": "#475569",
  "--text-tertiary": "#64748b",
  "--text-muted": "#94a3b8",
  "--text-disabled": "#cbd5e1",
  "--text-blue": "#2563eb",
  "--text-white": "#0f172a",

  // ===== GRADIENTS =====
  "--gradient-primary": "linear-gradient(135deg, #059669, #2563eb)",
  "--gradient-hero":
    "linear-gradient(45deg, rgba(5, 150, 105, 0.1), rgba(37, 99, 235, 0.1))",
  "--gradient-layer": "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
  "--gradient-layer-active": "linear-gradient(135deg, #10b981, #3b82f6)",
  "--gradient-tech": "linear-gradient(135deg, #f8fafc, #f1f5f9)",
  "--gradient-table": "linear-gradient(135deg, #f1f5f9, #e2e8f0)",
  "--gradient-shimmer":
    "linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.1), transparent)",
  "--gradient-slate": "linear-gradient(225deg, #f1f5f9, #f1f5f9)",
  "--gradient-gray": "linear-gradient(135deg, #f8fafc, #f1f5f9)",
  "--gradient-primary-dark": "linear-gradient(135deg, #047857, #059669)",
  "--gradient-accent": "linear-gradient(135deg, #581c87, #6d28d9)",
  "--gradient-success": "linear-gradient(135deg, #059669, #10b981)",
  "--gradient-primary-hover": "linear-gradient(135deg, #047857, #065f46)",
  "--gradient-blue-primary": "linear-gradient(135deg, #2563eb, #7c3aed)",
  "--gradient-blue-button": "linear-gradient(135deg, #2563eb, #1d4ed8)",
  "--gradient-blue-button-hover": "linear-gradient(135deg, #1d4ed8, #1e40af)",
  "--gradient-purple-button": "linear-gradient(135deg, #7c3aed, #6d28d9)",
  "--gradient-purple-button-hover": "linear-gradient(135deg, #6d28d9, #581c87)",
  "--gradient-shimmer-purple":
    "linear-gradient(90deg, transparent, rgba(124, 58, 237, 0.05), transparent)",
  "--gradient-shimmer-card":
    "linear-gradient(90deg, transparent, rgba(15, 23, 42, 0.05), transparent)",
  "--radial-blue":
    "radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 70%)",
  "--radial-blue-section":
    "radial-gradient(circle at 30% 70%, rgba(37, 99, 235, 0.05) 0%, transparent 50%)",
  "--radial-green-section":
    "radial-gradient(circle at 70% 30%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)",
  "--radial-purple-section":
    "radial-gradient(circle at 20% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)",

  // ===== SHADOWS =====
  "--shadow-sm": "0 4px 15px rgba(5, 150, 105, 0.2)",
  "--shadow-md": "0 8px 20px rgba(0, 0, 0, 0.1)",
  "--shadow-lg": "0 8px 20px rgba(0, 0, 0, 0.1)",
  "--shadow-blue": "0 10px 25px rgba(37, 99, 235, 0.15)",
  "--shadow-blue-lg": "0 15px 35px rgba(37, 99, 235, 0.25)",
  "--shadow-primary": "0 4px 15px rgba(5, 150, 105, 0.2)",
  "--shadow-accent": "0 4px 15px rgba(124, 58, 237, 0.2)",
  "--shadow-glow-blue": "0 0 30px rgba(37, 99, 235, 0.2)",
  "--shadow-glow-blue-strong": "0 0 20px rgba(37, 99, 235, 0.3)",
  "--shadow-glow-purple": "0 0 15px rgba(124, 58, 237, 0.3)",
  "--shadow-glow-purple-strong": "0 0 20px rgba(124, 58, 237, 0.5)",
  "--shadow-glow-green": "0 0 10px rgba(5, 150, 105, 0.2)",
  "--shadow-glow-white": "0 0 10px rgba(30, 41, 59, 0.2)",
  "--shadow-card": "0 8px 20px rgba(0, 0, 0, 0.08)",
  "--shadow-card-blue":
    "0 8px 20px rgba(0, 0, 0, 0.08), 0 0 30px rgba(37, 99, 235, 0.1)",
  "--shadow-card-purple":
    "0 8px 20px rgba(0, 0, 0, 0.08), 0 0 30px rgba(124, 58, 237, 0.1)",
  "--shadow-button": "0 8px 20px rgba(37, 99, 235, 0.2)",
  "--shadow-button-purple": "0 4px 12px rgba(124, 58, 237, 0.2)",
  "--shadow-focus": "0 0 0 3px rgba(37, 99, 235, 0.1)",
  "--shadow-focus-strong":
    "0 0 0 3px rgba(37, 99, 235, 0.1), 0 0 20px rgba(37, 99, 235, 0.15)",
};

export default lightTheme;
