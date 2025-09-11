"use client";

import React, { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

// Define type for translations
type Translations = {
  [locale: string]: {
    [key: string]: string;
  };
};

const TRANSLATIONS: Translations = {
  "en-US": {
    dreamInterpreterTitle: "Dream interpreter",
    dreamInterpreterSubtitle: "Share your dream, discover its meaning ✨",
    dreamInputLabel: "Tell me about your dream...",
    dreamInputPlaceholder:
      "Describe your dream in as much detail as you can remember... ☁️",
    interpretingDream: "Interpreting your dream...",
    interpretDreamButton: "Interpret dream",
    interpretationError: "Unable to interpret your dream. Please try again.",
    mainThemesTitle: "Main themes",
    emotionalAtmosphereTitle: "Emotional atmosphere",
    dreamSymbolsTitle: "Dream symbols",
    personalInsightTitle: "Personal insight",
    guidanceTitle: "Guidance for reflection",
    dreamPrompt:
      'You are a compassionate dream interpreter with expertise in psychology, symbolism, and emotional wellness. Analyze this dream and provide a thoughtful interpretation:\n\nDream: "{dreamText}"\n\nPlease respond in {locale} language with a JSON object containing:\n{\n  "mainThemes": ["theme1", "theme2", "theme3"],\n  "emotionalTone": "description of the emotional undertones",\n  "symbols": [\n    {"symbol": "symbol1", "meaning": "meaning1"},\n    {"symbol": "symbol2", "meaning": "meaning2"}\n  ],\n  "personalInsight": "deep personal insight about what this dream might mean for the dreamer",\n  "guidance": "gentle guidance for reflection or action"\n}\n\nProvide a warm, supportive interpretation that helps the dreamer understand their subconscious messages. Focus on positive insights while acknowledging any challenging emotions.',
  },
  "es-ES": {
    dreamInterpreterTitle: "Intérprete de sueños",
    dreamInterpreterSubtitle: "Comparte tu sueño, descubre su significado ✨",
    dreamInputLabel: "Cuéntame sobre tu sueño...",
    dreamInputPlaceholder:
      "Describe tu sueño con tanto detalle como puedas recordar... ☁️",
    interpretingDream: "Interpretando tu sueño...",
    interpretDreamButton: "Interpretar sueño",
    interpretationError:
      "No se pudo interpretar tu sueño. Por favor, inténtalo de nuevo.",
    mainThemesTitle: "Temas principales",
    emotionalAtmosphereTitle: "Atmósfera emocional",
    dreamSymbolsTitle: "Símbolos del sueño",
    personalInsightTitle: "Perspectiva personal",
    guidanceTitle: "Guía para la reflexión",
    dreamPrompt:
      'Eres un intérprete de sueños compasivo con experiencia en psicología, simbolismo y bienestar emocional. Analiza este sueño y proporciona una interpretación reflexiva:\n\nSueño: "{dreamText}"\n\nPor favor responde en {locale} idioma con un objeto JSON que contenga:\n{\n  "mainThemes": ["tema1", "tema2", "tema3"],\n  "emotionalTone": "descripción de los matices emocionales",\n  "symbols": [\n    {"symbol": "símbolo1", "meaning": "significado1"},\n    {"symbol": "símbolo2", "meaning": "significado2"}\n  ],\n  "personalInsight": "perspectiva personal profunda sobre lo que este sueño podría significar para el soñador",\n  "guidance": "orientación suave para la reflexión o acción"\n}\n\nProporciona una interpretación cálida y de apoyo que ayude al soñador a entender los mensajes de su subconsciente. Enfócate en perspectivas positivas mientras reconoces cualquier emoción desafiante.',
  },
};

const appLocale = "{{APP_LOCALE}}";
const browserLocale = navigator.languages?.[0] || navigator.language || "en-US";
const findMatchingLocale = (locale: string) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split("-")[0];
  const match = Object.keys(TRANSLATIONS).find((key) =>
    key.startsWith(lang + "-")
  );
  return match || "en-US";
};
const locale =
  appLocale !== "{{APP_LOCALE}}"
    ? findMatchingLocale(appLocale)
    : findMatchingLocale(browserLocale);
const t = (key: string) =>
  TRANSLATIONS[locale]?.[key] || TRANSLATIONS["en-US"][key] || key;

interface DreamInterpretation {
  mainThemes: string[];
  emotionalTone: string;
  symbols: Array<{ symbol: string; meaning: string }>;
  personalInsight: string;
  guidance: string;
}

const DreamInterpreter = () => {
  const [dreamText, setDreamText] = useState("");
  const [interpretation, setInterpretation] =
    useState<DreamInterpretation | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (interpretation) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [interpretation]);

  const interpretDream = async () => {
    if (!dreamText.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const prompt = t("dreamPrompt")
        .replace("{dreamText}", dreamText)
        .replace("{locale}", locale);

      // Add type for Claude object
      interface ClaudeWindow extends Window {
        claude?: {
          complete: (prompt: string) => Promise<string>;
        };
      }
      
      const response = await (window as ClaudeWindow).claude?.complete(prompt);
      if (response === undefined) {
        throw new Error("Claude API response is undefined");
      }
      const parsedResponse = JSON.parse(response);
      setInterpretation(parsedResponse);
    } catch (err) {
      setError(t("interpretationError"));
      console.error("Error interpreting dream:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      interpretDream();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-blue-900 text-white p-6 pt-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-light tracking-wider bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
            {t("dreamInterpreterTitle")}
          </h1>
          <p className="text-purple-200 text-lg opacity-80">
            {t("dreamInterpreterSubtitle")}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 shadow-xl border border-white/20">
          <div className="mb-6">
            <label className="block text-purple-200 mb-3 text-lg">
              {t("dreamInputLabel")}
            </label>
            <textarea
              value={dreamText}
              onChange={(e) => setDreamText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t("dreamInputPlaceholder")}
              className="w-full h-40 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 resize-none"
            />
          </div>

          <button
            onClick={interpretDream}
            disabled={isLoading || !dreamText.trim()}
            className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              isLoading || !dreamText.trim()
                ? "bg-purple-800/50 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105"
            } flex items-center justify-center space-x-2`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>{t("interpretingDream")}</span>
              </>
            ) : (
              <span>{t("interpretDreamButton")}</span>
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
              {error}
            </div>
          )}
        </div>

        {interpretation && (
          <div className={`space-y-6 ${isAnimating ? "animate-fade-in" : ""}`}>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-light mb-4">
                {t("mainThemesTitle")}
              </h2>
              <div className="flex flex-wrap gap-3">
                {interpretation.mainThemes?.map((theme, index) => (
                  <span
                    key={index}
                    className="bg-purple-500/30 px-4 py-2 rounded-full text-purple-200 border border-purple-400/30"
                  >
                    {theme}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-light mb-4">
                {t("emotionalAtmosphereTitle")}
              </h2>
              <p className="text-blue-200 leading-relaxed">
                {interpretation.emotionalTone}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-light mb-4">
                {t("dreamSymbolsTitle")}
              </h2>
              <div className="grid gap-4">
                {interpretation.symbols?.map((symbol, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <span className="text-purple-300 font-medium">
                        {symbol.symbol}
                      </span>
                    </div>
                    <p className="text-purple-200 flex-1">{symbol.meaning}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-light mb-4">
                {t("personalInsightTitle")}
              </h2>
              <p className="text-indigo-200 leading-relaxed text-lg">
                {interpretation.personalInsight}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-light mb-4">{t("guidanceTitle")}</h2>
              <p className="text-yellow-100 leading-relaxed">
                {interpretation.guidance}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DreamInterpreter;
