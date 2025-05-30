// darkTheme.js - Dark theme color variables
const darkTheme = {
  // ===== PRIMARY COLORS =====
  "--color-primary": "#10b981",
  "--color-primary-light": "#60a5fa",
  "--color-primary-lighter": "rgba(59, 130, 246, 0.15)",
  "--color-primary-dark": "#047857",
  "--color-primary-darker": "#065f46",
  "--color-primary-darkest": "#064e3b",
  "--color-secondary": "#3b82f6",
  "--color-secondary-light": "#60a5fa",
  "--color-secondary-dark": "#3730a3",

  // Legacy primary color variations
  "--primary-blue": "#3b82f6",
  "--primary-blue-dark": "#1d4ed8",
  "--primary-blue-darker": "#1e40af",
  "--primary-purple": "#8b5cf6",
  "--primary-purple-dark": "#7c3aed",
  "--primary-purple-darker": "#6d28d9",
  "--primary-green": "#10b981",
  "--primary-green-light": "#16a085",

  // ===== ACCENT COLORS =====
  "--color-accent": "#8b5cf6",
  "--color-accent-dark": "#7c3aed",
  "--color-accent-darker": "#581c87",
  "--color-yellow-400": "#fbbf24",
  "--color-yellow-500": "#f59e0b",
  "--color-yellow-600": "#eab308",
  "--color-green-500": "#10b981",
  "--color-cyan-500": "#06b6d4",
  "--color-purple-500": "#8b5cf6",
  "--color-red-500": "#ef4444",
  "--color-orange-500": "#f97316",
  "--color-lime-500": "#84cc16",
  "--color-pink-500": "#ec4899",
  "--color-teal-500": "#14b8a6",
  "--color-danger": "#ef4444",

  // ===== SLATE COLORS =====
  "--color-slate-50": "#f8fafc",
  "--color-slate-100": "#f1f5f9",
  "--color-slate-200": "#e2e8f0",
  "--color-slate-300": "#cbd5e1",
  "--color-slate-400": "#94a3b8",
  "--color-slate-500": "#64748b",
  "--color-slate-600": "#475569",
  "--color-slate-700": "#334155",
  "--color-slate-800": "#1e293b",
  "--color-slate-900": "#0f172a",

  // ===== GRAY COLORS =====
  "--color-white": "#ffffff",
  "--color-gray-50": "#f8fafc",
  "--color-gray-100": "#f1f5f9",
  "--color-gray-200": "#e2e8f0",
  "--color-gray-300": "#cbd5e1",
  "--color-gray-400": "#94a3b8",
  "--color-gray-500": "#64748b",
  "--color-gray-600": "#475569",
  "--color-gray-700": "#334155",
  "--color-gray-800": "#1e293b",
  "--color-gray-850": "#1f2937",
  "--color-gray-900": "#0f172a",
  "--color-gray-950": "#020617",

  // ===== BACKGROUND COLORS =====
  "--bg-header": "rgba(15, 23, 42, 0.95)",
  "--bg-nav-mobile": "rgba(15, 23, 42, 0.98)",
  "--bg-gradient": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
  "--bg-border-slate": "rgba(51, 65, 85, 0.5)",
  "--bg-slate-900": "#0f172a",
  "--bg-slate-800": "#1e293b",
  "--bg-slate-700": "#334155",
  "--bg-gray-800": "#1f2937",
  "--bg-gray-700": "#374151",
  "--bg-gray-600": "#4b5563",
  "--bg-dark-900": "#15233a",
  "--bg-primary": "rgba(30, 41, 59, 0.6)",
  "--bg-secondary": "rgba(15, 23, 42, 0.8)",
  "--bg-secondary-focus": "rgba(15, 23, 42, 0.9)",
  "--bg-card": "linear-gradient(135deg, #1f2937, #374151)",
  "--bg-glassmorphism": "rgba(255, 255, 255, 0.05)",
  "--bg-glassmorphism-hover": "rgba(59, 130, 246, 0.1)",

  // ===== BORDER COLORS =====
  "--border-primary": "#334155",
  "--border-secondary": "#475569",
  "--border-tertiary": "#4b5563",
  "--border-blue": "rgba(59, 130, 246, 0.2)",
  "--border-blue-focus": "#3b82f6",
  "--border-purple": "#8b5cf6",
  "--border-gray": "1px solid #334155",
  "--border-light": "1px solid #475569",
  "--border-lighter": "1px solid #475569",

  // ===== TEXT COLORS =====
  "--text-primary": "#e2e8f0",
  "--text-secondary": "#d1d5db",
  "--text-tertiary": "#cbd5e1",
  "--text-muted": "#94a3b8",
  "--text-disabled": "#64748b",
  "--text-blue": "#60a5fa",
  "--text-white": "white",

  // ===== GRADIENTS =====
  "--gradient-primary": "linear-gradient(135deg, #10b981, #3b82f6)",
  "--gradient-hero":
    "linear-gradient(45deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))",
  "--gradient-layer": "linear-gradient(135deg, #1e293b, #334155)",
  "--gradient-layer-active": "linear-gradient(135deg, #047857, #3730a3)",
  "--gradient-tech": "linear-gradient(135deg, #1f2937, #374151)",
  "--gradient-table": "linear-gradient(135deg, #374151, #4b5563)",
  "--gradient-shimmer":
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
  "--gradient-slate": "linear-gradient(225deg, #1e293b, #374151)",
  "--gradient-gray": "linear-gradient(135deg, #1f2937, #374151)",
  "--gradient-primary-dark": "linear-gradient(135deg, #065f46, #047857)",
  "--gradient-accent": "linear-gradient(135deg, #581c87, #7c3aed)",
  "--gradient-success": "linear-gradient(135deg, #047857, #059669)",
  "--gradient-primary-hover": "linear-gradient(135deg, #065f46, #064e3b)",
  "--gradient-blue-primary": "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  "--gradient-blue-button": "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  "--gradient-blue-button-hover": "linear-gradient(135deg, #1d4ed8, #1e40af)",
  "--gradient-purple-button": "linear-gradient(135deg, #8b5cf6, #7c3aed)",
  "--gradient-purple-button-hover": "linear-gradient(135deg, #7c3aed, #6d28d9)",
  "--gradient-shimmer-purple":
    "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.05), transparent)",
  "--gradient-shimmer-card":
    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent)",
  "--radial-blue":
    "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
  "--radial-blue-section":
    "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
  "--radial-green-section":
    "radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)",
  "--radial-purple-section":
    "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",

  // ===== SHADOWS =====
  "--shadow-sm": "0 4px 15px rgba(16, 185, 129, 0.3)",
  "--shadow-md": "0 8px 20px rgba(0, 0, 0, 0.3)",
  "--shadow-lg": "0 8px 20px rgba(0, 0, 0, 0.3)",
  "--shadow-blue": "0 10px 25px rgba(59, 130, 246, 0.2)",
  "--shadow-blue-lg": "0 15px 35px rgba(59, 130, 246, 0.4)",
  "--shadow-primary": "0 4px 15px rgba(16, 185, 129, 0.3)",
  "--shadow-accent": "0 4px 15px rgba(139, 92, 246, 0.3)",
  "--shadow-glow-blue": "0 0 30px rgba(59, 130, 246, 0.3)",
  "--shadow-glow-blue-strong": "0 0 20px rgba(59, 130, 246, 0.5)",
  "--shadow-glow-purple": "0 0 15px rgba(139, 92, 246, 0.5)",
  "--shadow-glow-purple-strong": "0 0 20px rgba(139, 92, 246, 0.8)",
  "--shadow-glow-green": "0 0 10px rgba(16, 185, 129, 0.3)",
  "--shadow-glow-white": "0 0 10px rgba(226, 232, 240, 0.3)",
  "--shadow-card": "0 8px 20px rgba(0, 0, 0, 0.3)",
  "--shadow-card-blue":
    "0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)",
  "--shadow-card-purple":
    "0 8px 20px rgba(0, 0, 0, 0.3), 0 0 30px rgba(139, 92, 246, 0.2)",
  "--shadow-button": "0 8px 20px rgba(59, 130, 246, 0.3)",
  "--shadow-button-purple": "0 4px 12px rgba(139, 92, 246, 0.3)",
  "--shadow-focus": "0 0 0 3px rgba(59, 130, 246, 0.1)",
  "--shadow-focus-strong":
    "0 0 0 3px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)",
};

export default darkTheme;
