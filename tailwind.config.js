/** @type {import("tailwindcss").Config} */
import themeColors from "./src/styles/colors";
import fonts from "./src/styles/fonts";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: themeColors.background,
        card: themeColors.card,
        primary: themeColors.primary,
        secondary: themeColors.secondary,
        success: themeColors.success,
        error: themeColors.error,
        text: themeColors.text,
        textSecondary: themeColors.textSecondary,
        alertBackground: themeColors.alertBackground,
        alertText: themeColors.alertText,
        // Aliases para compatibilidade com o código existente
        accent: themeColors.secondary,
        muted: "#E5E7EB", // Cor neutra para elementos de fundo
      },
      fontFamily: {
        // Alternativas web-safe para DMSerifDisplay e Lato-Regular
        "display": ["Georgia", "Times New Roman", "serif"],
        "body": ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        "title": [`${fonts.title.fontSize}px`, `${fonts.title.lineHeight}px`],
        "subtitle": [`${fonts.subtitle.fontSize}px`, `${fonts.subtitle.lineHeight}px`],
        "card-title": [`${fonts.cardTitle.fontSize}px`],
        "description": [`${fonts.description.fontSize}px`, `${fonts.description.lineHeight}px`],
        "section-title": [`${fonts.sectionTitle.fontSize}px`],
        "step-number": [`${fonts.stepNumber.fontSize}px`],
        "step-title": [`${fonts.stepTitle.fontSize}px`],
        "button-text": [`${fonts.buttonText.fontSize}px`],
      },
      fontWeight: {
        "title": fonts.title.fontWeight,
        "subtitle": fonts.subtitle.fontWeight,
        "card-title": fonts.cardTitle.fontWeight,
        "description": fonts.description.fontWeight,
        "section-title": fonts.sectionTitle.fontWeight,
        "step-number": fonts.stepNumber.fontWeight,
        "step-title": fonts.stepTitle.fontWeight,
        "button-text": fonts.buttonText.fontWeight,
      },
    },
  },
  plugins: [],
};
